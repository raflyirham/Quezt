<?php

namespace App\Http\Controllers;

use App\Models\AnswerDetail;
use App\Models\AnswerHeader;
use App\Models\QuestionAnswer;
use App\Models\QuestionHeader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'pertanyaan' => $pertanyaan->load('course', 'questiondetail', 'questionanswers', 'questionanswers.answerheader', 'user', 'course.major', 'questionanswers.answerheader.answerdetail', 'questionanswers.answerheader.user')]);
    }

    public function jawab_pertanyaan($id, Request $request)
    {
        $request->validate([
            'jawab' => ['required', 'min:50', 'max:5000'],
        ], [
            'jawab.required' => 'Jawaban harus diisi.',
            'jawab.min' => 'Jawaban minimal 50 karakter.',
            'jawab.max' => 'Jawaban maksimal 5000 karakter.',
        ]);

        $pertanyaan = QuestionHeader::all()->where('QuestionID', $id)->first();

        if ($pertanyaan == null) {
            return redirect("/pertanyaan/" . $id)->with('error', 'Pertanyaan tidak ditemukan.');
        }

        $jawaban = AnswerHeader::create([
            'UserID' => Auth::user()->UserID,
        ]);

        AnswerDetail::create([
            'AnswerID' => $jawaban->AnswerID,
            'AnswerDetail' => $request->jawab,
            'AnswerDate' => now(),
        ]);

        QuestionAnswer::create([
            'QuestionID' => $pertanyaan->QuestionID,
            'AnswerID' => $jawaban->AnswerID,
        ]);

        return redirect("/pertanyaan/" . $id)->with('success', 'Jawaban berhasil ditambahkan.');
    }

    public function hapus_jawaban($id, Request $request)
    {
        $pertanyaan = QuestionHeader::all()->where('QuestionID', $id)->first();

        if ($pertanyaan == null) {
            return redirect("/pertanyaan/" . $id)->with('error', 'Pertanyaan tidak ditemukan.');
        }

        $jawaban = AnswerHeader::all()->where('AnswerID', $request->jawaban_id)->first();

        if ($jawaban == null) {
            return redirect("/pertanyaan/" . $id)->with('error', 'Jawaban tidak ditemukan.');
        }

        if ($jawaban->UserID != Auth::user()->UserID) {
            return redirect("/pertanyaan/" . $id)->with('error', 'Anda tidak memiliki akses untuk menghapus jawaban ini.');
        }

        AnswerDetail::where('AnswerID', $jawaban->AnswerID)->delete();
        QuestionAnswer::where('AnswerID', $jawaban->AnswerID)->delete();
        AnswerHeader::where('AnswerID', $jawaban->AnswerID)->delete();

        return redirect("/pertanyaan/" . $id)->with('success', 'Jawaban berhasil dihapus.');
    }
}
