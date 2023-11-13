<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Home');
    }

    public function register()
    {
        return Inertia::render('Register', [
            'csrf_token' => csrf_token(),
        ]);
    }

    public function login()
    {
        return Inertia::render('Login', [
            'csrf_token' => csrf_token(),
        ]);
    }

    public function notfound()
    {
        return Inertia::render('Error', [
            'status' => 404,
        ]);
    }

    public function tentang()
    {
        return Inertia::render('Tautan/Tentang');
    }

    public function kebijakan()
    {
        return Inertia::render('Tautan/Kebijakan');
    }
}
