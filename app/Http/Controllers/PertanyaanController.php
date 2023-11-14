<?php

namespace App\Http\Controllers;

use App\Models\QuestionHeader;
use Inertia\Inertia;

class PertanyaanController extends Controller
{
    //
    public function detail($id)
    {
        $pertanyaan = QuestionHeader::all()->where('QuestionID', $id)->first();

        if ($pertanyaan == null) {
            return redirect('/mata-kuliah');
        }

        return Inertia::render('Pertanyaan/Detail', [
            'pertanyaan' => $pertanyaan->load('course', 'questiondetail', 'questionanswers', 'questionanswers.answerheader', 'user', 'course.major')]);
    }
}
