<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    //
    public function index()
    {
        return redirect('/dashboard/detail');
    }

    public function detail()
    {
        return Inertia::render('User/Detail', [
            'user' => User::find(Auth::id())->load('membership.membershiptype', 'userroles', 'userroles.role', 'role'),
        ]);
    }

    public function change_email()
    {
        return Inertia::render('User/ChangeEmail', [
            'user' => User::find(Auth::id())->load('membership.membershiptype', 'userroles', 'userroles.role', 'role'),
        ]);
    }

    public function change_email_post(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email:dns', 'unique:users,email', 'confirmed'],
            'email_confirmation' => ['required'],
        ], [
            'email.required' => 'Email harus diisi.',
            'email.email' => 'Email tidak valid.',
            'email.unique' => 'Email sudah terdaftar.',
            'email.confirmed' => 'Email konfirmasi tidak cocok.',
            'email_confirmation.required' => 'Konfirmasi email harus diisi.',
        ]);

        $user = User::find(Auth::id());
        $user->email = $request->email;
        $user->save();

        return redirect('/dashboard/change-email')->with('success', 'Email berhasil diubah.');
    }

    public function change_password()
    {
        return Inertia::render('User/ChangePassword', [
            'user' => User::find(Auth::id())->load('membership.membershiptype', 'userroles', 'userroles.role', 'role'),
        ]);
    }

    public function change_password_post(Request $request)
    {
        $user = User::find(Auth::id());

        $request->validate([
            'new_password' => ['required', 'min:5', 'max:255', 'confirmed'],
            'new_password_confirmation' => ['required', 'min:5', 'max:255'],
            'old_password' => ['required', 'min:5', 'max:255', function ($attribute, $value, $fail) use ($user) {
                if (!\Hash::check($value, $user->password)) {
                    return $fail(__('Password lama salah.'));
                }
            }],
        ], [
            'new_password.required' => 'Password harus diisi.',
            'new_password.min' => 'Password minimal 5 karakter.',
            'new_password.max' => 'Password tidak boleh lebih dari 255 karakter.',
            'new_password.confirmed' => 'Password tidak cocok.',
            'new_password_confirmation.required' => 'Konfirmasi password harus diisi.',
            'new_password_confirmation.min' => 'Konfirmasi password minimal 5 karakter.',
            'new_password_confirmation.max' => 'Konfirmasi password tidak boleh lebih dari 255 karakter.',
            'old_password.required' => 'Password lama harus diisi.',
            'old_password.min' => 'Password lama minimal 5 karakter.',
            'old_password.max' => 'Password lama tidak boleh lebih dari 255 karakter.',
        ]);

        // $user = User::find(Auth::id());
        $user->password = bcrypt($request->new_password);
        $user->save();

        return redirect('/dashboard/change-password')->with('success', 'Password berhasil diubah.');
    }

    public function change_name()
    {
        return Inertia::render('User/ChangeName', [
            'user' => User::find(Auth::id())->load('membership.membershiptype', 'userroles', 'userroles.role', 'role'),
        ]);
    }

    public function change_name_post(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'regex:/^[\pL\s\-]+$/u', 'confirmed'],
            'name_confirmation' => ['required'],
        ], [
            'name.required' => 'Nama harus diisi.',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter.',
            'name.regex' => 'Nama hanya boleh berisi huruf.',
            'name.confirmed' => 'Nama konfirmasi tidak cocok.',
            'name_confirmation.required' => 'Konfirmasi nama harus diisi.',
        ]);

        $user = User::find(Auth::id());
        $user->UserName = $request->name;
        $user->save();

        return redirect('/dashboard/change-name')->with('success', 'Nama berhasil diubah.');
    }

    public function detail_role()
    {
        $user = User::find(Auth::id());

        if ($user->userroles->count() < 2) {
            return redirect('/dashboard/detail');
        }

        return Inertia::render('User/DetailRole', [
            'user' => User::find(Auth::id())->load('membership.membershiptype', 'userroles', 'userroles.role', 'role'),
        ]);
    }

    public function change_role()
    {
        $user = User::find(Auth::id());

        if ($user->userroles->count() < 2) {
            return redirect('/dashboard/detail');
        }

        return Inertia::render('User/ChangeRole', [
            'user' => User::find(Auth::id())->load('membership.membershiptype', 'userroles', 'userroles.role', 'role'),
        ]);
    }

    public function change_role_post(Request $request)
    {
        $user = User::find(Auth::id());

        if ($user->userroles->count() < 2) {
            return redirect('/dashboard/detail');
        }

        $request->validate([
            'role' => ['required', 'exists:roles,RoleName'],
        ], [
            'role.required' => 'Role harus diisi.',
            'role.exists' => 'Role tidak valid.',
        ]);

        if ($user->role->RoleName == $request->role) {
            return redirect('/dashboard/change-role')->with('error', 'Role tidak boleh sama.');
        }

        if ($request->role === 'User') {
            $user->RoleID = 1;
        } else if ($request->role === 'Tutor') {
            $user->RoleID = 2;
        } else if ($request->role === 'Admin') {
            $user->RoleID = 3;
        }

        $user->save();

        return redirect('/dashboard/change-role')->with('success', 'Role berhasil diubah.');
    }
}
