<?php

namespace App\Http\Controllers;

use App\Models\Membership;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    //
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'max:255', 'regex:/^[\pL\s\-]+$/u'],
            'email' => ['required', 'email:dns', 'unique:users,email'],
            'password' => ['required', 'min:5', 'max:255', 'confirmed'],
            'password_confirmation' => ['required', 'min:5', 'max:255'],
            'username' => ['required', 'min:5', 'max:15', 'unique:users,UserUsername', 'alpha', 'lowercase'],
            'g-recaptcha-response' => 'required|recaptcha',
        ], [
            'name.required' => 'Nama harus diisi.',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter.',
            'name.regex' => 'Nama hanya boleh berisi huruf.',
            'email.required' => 'Email harus diisi.',
            'email.email' => 'Email tidak valid.',
            'email.unique' => 'Email sudah terdaftar.',
            'password.required' => 'Password harus diisi.',
            'password.min' => 'Password minimal 5 karakter.',
            'password.max' => 'Password tidak boleh lebih dari 255 karakter.',
            'password.confirmed' => 'Password tidak cocok.',
            'password_confirmation.required' => 'Konfirmasi password harus diisi.',
            'password_confirmation.min' => 'Konfirmasi password minimal 5 karakter.',
            'password_confirmation.max' => 'Konfirmasi password tidak boleh lebih dari 255 karakter.',
            'username.required' => 'Username harus diisi.',
            'username.min' => 'Username minimal 5 karakter.',
            'username.max' => 'Username tidak boleh lebih dari 15 karakter.',
            'username.unique' => 'Username sudah terdaftar.',
            'username.alpha' => 'Username hanya boleh berisi huruf.',
            'username.lowercase' => 'Username hanya boleh berisi huruf kecil.',
            'g-recaptcha-response.required' => 'Captcha harus diisi.',
            'g-recaptcha-response.recaptcha' => 'Captcha tidak valid.',
        ]);

        $user = User::create([
            'UserName' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'UserUsername' => $request->username,
            'UserRegisteredDate' => now(),
            'RoleID' => 1,
            'UserAvatar' => 'https://quezt.s3.ap-southeast-1.amazonaws.com/public/Avatar.png',
        ]);

        Membership::create([
            'UserID' => $user->UserID,
            'MembershipTypeID' => 1,
        ]);

        UserRole::create([
            'UserID' => $user->UserID,
            'RoleID' => 1,
        ]);

        return redirect('/masuk')->with('success', 'Pendaftaran berhasil! Silakan masuk.');
    }
}
