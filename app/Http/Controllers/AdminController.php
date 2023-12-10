<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Major;
use App\Models\QuestionHeader;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $users = User::count();
        $courses = Course::count();
        $majors = Major::count();
        $questions = QuestionHeader::count();

        return Inertia::render('Admin/Index', [
            'users' => $users,
            'courses' => $courses,
            'majors' => $majors,
            'questions' => $questions,
        ]);
    }

    public function jurusan()
    {
        $majors = Major::with('courses')->paginate(10);
        return Inertia::render('Admin/Major', [
            'majors' => $majors,
        ]);
    }

    public function jurusan_add(Request $request)
    {
        $request->validate([
            'major_name' => 'required|regex:/^[\pL\s\-]+$/u|unique:majors,MajorName',
            'major_description' => 'required',
        ], [
            'major_name.required' => 'Nama jurusan harus diisi.',
            'major_name.regex' => 'Nama jurusan hanya boleh berisi huruf.',
            'major_name.unique' => 'Nama jurusan sudah terdaftar.',
            'major_description.required' => 'Deskripsi jurusan harus diisi.',
        ]);

        $major_name = Str::title($request->major_name);
        $major_slug = Str::slug(Str::lower($request->major_name), '-');

        Major::create([
            'MajorName' => $major_name,
            'MajorSlug' => $major_slug,
            'MajorDescription' => $request->major_description,
        ]);

        return redirect()->back()->with('success', 'Jurusan berhasil ditambahkan.');
    }

    public function jurusan_delete($MajorID)
    {
        $major = Major::find($MajorID);

        if ($major == null) {
            return redirect()->back()->with('error', 'Jurusan tidak ditemukan.');
        }

        $courses = $major->courses()->get();

        foreach ($courses as $course) {
            $questionheaders = $course->questionheaders()->get();

            foreach ($questionheaders as $questionheader) {
                $questionanswers = $questionheader->questionanswers()->get();

                foreach ($questionanswers as $questionanswer) {
                    $answerheader = $questionanswer->answerheader()->first();
                    $answerdetail = $answerheader->answerdetail()->first();
                    $answerdetail->delete();
                    $answerheader->delete();
                    $questionanswer->delete();
                }
                $questionheader->questiondetail()->delete();
                $questionheader->delete();
            }

            $course->delete();
        }

        $major->delete();

        return redirect()->back()->with('success', 'Jurusan berhasil dihapus.');
    }

    public function mata_kuliah()
    {
        $courses = Course::withCount('questionheaders')->paginate(10);
        $majors = Major::all();
        return Inertia::render('Admin/Course', [
            'courses' => $courses,
            'majors' => $majors,
        ]);
    }

    public function mata_kuliah_add(Request $request)
    {
        $request->validate([
            'course_name' => 'required|regex:/(^[A-Za-z0-9 ]+$)+/|unique:courses,CourseName',
            'course_description' => 'required',
            'course_major' => 'required|exists:majors,MajorID',
        ], [
            'course_name.required' => 'Nama mata kuliah harus diisi.',
            'course_name.regex' => 'Nama mata kuliah hanya boleh berisi huruf, angka dan spasi.',
            'course_name.unique' => 'Nama mata kuliah sudah terdaftar.',
            'course_description.required' => 'Deskripsi mata kuliah harus diisi.',
            'course_major.required' => 'Jurusan mata kuliah harus dipilih.',
            'course_major.exists' => 'Jurusan mata kuliah tidak ditemukan.',
        ]);

        $course_name = Str::title($request->course_name);
        $course_slug = Str::slug(Str::lower($request->course_name), '-');

        Course::create([
            'CourseName' => $course_name,
            'CourseSlug' => $course_slug,
            'CourseDescription' => $request->course_description,
            'MajorID' => $request->course_major,
        ]);

        return redirect()->back()->with('success', 'Mata kuliah berhasil ditambahkan.');
    }

    public function mata_kuliah_delete($CourseID)
    {
        $course = Course::find($CourseID);

        if ($course == null) {
            return redirect()->back()->with('error', 'Mata kuliah tidak ditemukan.');
        }

        $questionheaders = $course->questionheaders()->get();

        foreach ($questionheaders as $questionheader) {
            $questionanswers = $questionheader->questionanswers()->get();

            foreach ($questionanswers as $questionanswer) {
                $answerheader = $questionanswer->answerheader()->first();
                $answerdetail = $answerheader->answerdetail()->first();
                $answerdetail->delete();
                $answerheader->delete();
                $questionanswer->delete();
            }
            $questionheader->questiondetail()->delete();
            $questionheader->delete();
        }

        $course->delete();

        return redirect()->back()->with('success', 'Mata kuliah berhasil dihapus.');
    }

    public function tutor()
    {
        $tutors = User::whereHas('userroles', function ($query) {
            $query->where('RoleID', 2);
        })->withCount('answerheaders')->paginate(10);

        return Inertia::render('Admin/Tutor', [
            'tutors' => $tutors,
        ]);
    }

    public function tutor_delete($UserID)
    {
        $user = User::find($UserID);

        if ($user == null) {
            return redirect()->back()->with('error', 'Tutor tidak ditemukan.');
        }

        $answerheaders = $user->answerheaders()->get();

        foreach ($answerheaders as $answerheader) {
            $answerdetail = $answerheader->answerdetail()->first();
            $answerdetail->delete();
            $answerheader->delete();
        }

        $userrole = $user->userroles()->where('RoleID', 2)->first();
        $userrole->delete();

        return redirect()->back()->with('success', 'Hak Tutor berhasil dihapus.');
    }

    public function question()
    {
        $questions = QuestionHeader::with('course', 'questiondetail')->withCount('questionanswers')->paginate(10);
        return Inertia::render('Admin/Question', [
            'questions' => $questions,
        ]);
    }

    public function question_delete($QuestionID)
    {
        $question = QuestionHeader::find($QuestionID);

        if ($question == null) {
            return redirect()->back()->with('error', 'Pertanyaan tidak ditemukan.');
        }

        $questionanswers = $question->questionanswers()->get();

        foreach ($questionanswers as $questionanswer) {
            $answerheader = $questionanswer->answerheader()->first();
            $answerdetail = $answerheader->answerdetail()->first();
            $answerdetail->delete();
            $answerheader->delete();
            $questionanswer->delete();
        }

        $question->questiondetail()->delete();
        $question->delete();

        return redirect()->back()->with('success', 'Pertanyaan berhasil dihapus.');
    }

    // public function detail($major)
    // {
    //     $jurusan = Major::all()->where('MajorSlug', $major)->first();

    //     if ($jurusan == null) {
    //         return redirect('/jurusan');
    //     }

    //     $courses = $jurusan->courses()->paginate(6);
    //     return Inertia::render('Jurusan/Detail', [
    //         'major' => $jurusan,
    //         'courses' => $courses,
    //     ]);
    // }

    // public function addCourse(Request $request)
    // {
    //     $validate_data = $request->validate([
    //         'name' => 'required',
    //         'description' => 'required',
    //     ]);
    //     $course = new Course();
    //     $course->name = $request->input('name');
    //     $course->description = $request->input('description');
    //     $course->save();

    //     return redirect()->back()->with('success', 'Course added successfully.');
    // }
}
