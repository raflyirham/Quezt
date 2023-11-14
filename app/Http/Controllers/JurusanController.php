<?php

namespace App\Http\Controllers;

use App\Models\Major;
use Inertia\Inertia;

class JurusanController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Jurusan/Index');
    }

    public function detail($major)
    {
        $jurusan = Major::all()->where('MajorSlug', $major)->first();

        if ($jurusan == null) {
            return redirect('/jurusan');
        }

        return Inertia::render('Jurusan/Detail', [
            'major' => $jurusan,
            'courses' => $jurusan->courses()->get(),
        ]);
    }
}
