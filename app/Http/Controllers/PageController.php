<?php

namespace App\Http\Controllers;

use App\Models\QuestionDetail;
use Illuminate\Http\Request;
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

}
