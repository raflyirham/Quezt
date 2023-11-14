<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Inertia\Inertia;

class MataKuliahController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('MataKuliah/Index');
    }

    public function detail($course)
    {
        $matkul = Course::all()->where('CourseSlug', $course)->first();

        if ($matkul == null) {
            return redirect('/mata-kuliah');
        }

        $pertanyaan = $matkul->questionheaders()->get();

        return Inertia::render('MataKuliah/Detail', [
            'course' => $matkul->load('major'),
            'pertanyaan' => $pertanyaan->load('questiondetail', 'questionanswers', 'user', 'course'),
        ]);
    }
}
