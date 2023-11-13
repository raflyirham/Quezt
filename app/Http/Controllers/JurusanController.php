<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class JurusanController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Jurusan/Index');
    }
}
