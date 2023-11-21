<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\QuestionDetail;
use App\Models\QuestionHeader;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MataKuliahController extends Controller
{
    //
    public function index()
    {
        $courses = Course::orderBy('CourseName', 'asc')->paginate(6);
        return Inertia::render('MataKuliah/Index', [
            'courses' => $courses,
        ]);
    }

    public function detail($course)
    {
        $matkul = Course::all()->where('CourseSlug', $course)->first();

        if ($matkul == null) {
            return redirect('/mata-kuliah');
        }

        $pertanyaan = $matkul->questionheaders()->get();
        $questions = $matkul->questionheaders()->with('questiondetail', 'questionanswers', 'user', 'course')->paginate(6);

        return Inertia::render('MataKuliah/Detail', [
            'course' => $matkul->load('major'),
            'user' => User::find(Auth::id())?->load('membership') ?? null,
            'questions' => $questions,
        ]);
    }

    public function tanya_materi($course, Request $request)
    {
        if (!auth()->check()) {
            return redirect('/masuk');
        }

        $user = User::find(Auth::id());

        if ($user->RoleID != 1) {
            return redirect('/mata-kuliah/' . $course)->with('error', 'Anda tidak memiliki akses untuk melakukan tindakan ini');
        }

        if ($user->membership->MembershipTypeID == 1) {
            return redirect('/mata-kuliah/' . $course)->with('error', 'Anda tidak memiliki akses untuk melakukan tindakan ini');
        }

        $matkul = Course::all()->where('CourseSlug', $course)->first();

        if ($matkul == null) {
            return redirect('/mata-kuliah');
        }

        $request->validate([
            'judul_pertanyaan' => ['required', 'string', 'min:10', 'max:200'],
            'detail_pertanyaan' => ['required', 'string', 'min:50', 'max:5000'],
        ], [
            'judul_pertanyaan.required' => 'Judul pertanyaan tidak boleh kosong',
            'judul_pertanyaan.string' => 'Judul pertanyaan harus berupa string',
            'judul_pertanyaan.min' => 'Judul pertanyaan minimal 10 karakter',
            'judul_pertanyaan.max' => 'Judul pertanyaan maksimal 200 karakter',
            'detail_pertanyaan.required' => 'Detail pertanyaan tidak boleh kosong',
            'detail_pertanyaan.string' => 'Detail pertanyaan harus berupa string',
            'detail_pertanyaan.min' => 'Detail pertanyaan minimal 50 karakter',
            'detail_pertanyaan.max' => 'Detail pertanyaan maksimal 5000 karakter',
        ]);

        $q = QuestionHeader::create([
            'UserID' => $user->UserID,
            'CourseID' => $matkul->CourseID,
        ]);

        QuestionDetail::create([
            'QuestionID' => $q->QuestionID,
            'QuestionTitle' => $request->judul_pertanyaan,
            'QuestionDetail' => $request->detail_pertanyaan,
            'QuestionDate' => now(),
        ]);

        return redirect('/mata-kuliah/' . $matkul->CourseSlug)->with('success', 'Pertanyaan berhasil ditambahkan');
    }
}
