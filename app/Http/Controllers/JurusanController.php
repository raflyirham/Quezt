<?php

namespace App\Http\Controllers;

use App\Models\Major;
use Inertia\Inertia;

class JurusanController extends Controller
{
    //
    public function index()
    {
        $majors = Major::orderBy('MajorName', 'asc')->paginate(6);
        return Inertia::render('Jurusan/Index', [
            'majors' => $majors,
        ]);
    }

    public function detail($major)
    {
        $jurusan = Major::all()->where('MajorSlug', $major)->first();

        if ($jurusan == null) {
            return redirect('/jurusan');
        }

        $courses = $jurusan->courses()->paginate(6);
        return Inertia::render('Jurusan/Detail', [
            'major' => $jurusan,
            'courses' => $courses,
        ]);
    }
}
