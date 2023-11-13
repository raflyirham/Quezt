<?php

namespace App\Http\Controllers;

use App\Models\User;
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
        ]);

        $user = User::create([
            'UserName' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'UserUsername' => $request->username,
            'UserRegisteredDate' => now(),
        ]);

        return redirect('/masuk')->with('success', 'Pendaftaran berhasil! Silakan masuk.');
    }
}
