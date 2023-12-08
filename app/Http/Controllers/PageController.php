<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\QuestionDetail;
use App\Models\QuestionHeader;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    //
    public function index()
    {
        $majors = Major::with('courses')->get();
        return Inertia::render('Home', [
            'majors' => $majors,
        ]);
    }

    public function tanya(Request $request)
    {
        $user = auth()->user();

        if ($user == null) {
            return redirect('/masuk')->with('error', 'Anda harus masuk terlebih dahulu.');
        }

        if ($user->membership->MembershipTypeID == 1) {
            return redirect('/')->with('error', 'Anda harus upgrade ke Quezt Premium terlebih dahulu.');
        }

        $request->validate([
            'judul_pertanyaan' => 'required|min:1|max:100',
            'tanya' => 'required|min:1|max:5000',
            'jurusan' => 'required|exists:majors,MajorID',
            'mata_kuliah' => 'required|exists:courses,CourseID',
            'g-recaptcha-response' => 'required|recaptcha',
        ], [
            'judul_pertanyaan.required' => 'Judul pertanyaan harus diisi.',
            'judul_pertanyaan.min' => 'Judul pertanyaan harus diisi.',
            'judul_pertanyaan.max' => 'Judul pertanyaan maksimal 100 karakter.',
            'tanya.required' => 'Pertanyaan harus diisi.',
            'tanya.min' => 'Pertanyaan harus diisi.',
            'tanya.max' => 'Pertanyaan maksimal 5000 karakter.',
            'jurusan.required' => 'Jurusan harus diisi.',
            'jurusan.exists' => 'Jurusan tidak valid.',
            'mata_kuliah.required' => 'Mata kuliah harus diisi.',
            'mata_kuliah.exists' => 'Mata kuliah tidak valid.',
            'g-recaptcha-response.required' => 'Captcha harus diisi.',
            'g-recaptcha-response.recaptcha' => 'Captcha tidak valid.',
        ]);

        $q = QuestionHeader::create([
            'UserID' => $user->UserID,
            'CourseID' => $request->mata_kuliah,
        ]);

        QuestionDetail::create([
            'QuestionID' => $q->QuestionID,
            'QuestionTitle' => $request->judul_pertanyaan,
            'QuestionDetail' => $request->tanya,
            'QuestionDate' => now(),
        ]);

        return redirect('/pertanyaan/' . $q->QuestionID)->with('success', 'Pertanyaan berhasil ditambahkan');
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

    public function notfound(Request $request)
    {
        return Inertia::render('Error', [
            'status' => 404,
        ])->toResponse($request)->setStatusCode(404);
    }

    public function tentang()
    {
        return Inertia::render('Tautan/Tentang');
    }

    public function kebijakan()
    {
        return Inertia::render('Tautan/Kebijakan');
    }

    public function syarat()
    {
        return Inertia::render('Tautan/Syarat');
    }

    public function cari(Request $request)
    {
        $materi = $request->materi;

        if ($materi == null) {
            return redirect('/');
        }

        $questions = QuestionDetail::where('QuestionTitle', 'like', '%' . $materi . '%')->with('questionheader', 'questionheader.course', 'questionheader.user')->paginate(6);

        return Inertia::render('Cari/Index', [
            'questions' => $questions,
            'materi' => $materi,
        ]);
    }

    public function produk()
    {
        return Inertia::render('Produk/Index');
    }

    public function quezt_premium()
    {
        return Inertia::render('Produk/Premium');
    }

    public function quezt_pro()
    {
        return Inertia::render('Produk/Pro');
    }

    public function tutorin()
    {
        return Inertia::render('Produk/Tutorin');
    }
}
