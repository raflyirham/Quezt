<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\Course; // Add the Course model
use Illuminate\Http\Request; // Add the Request class
use Inertia\Inertia;

class AdminController extends Controller
{
  public function index()
  {
    $majors = Major::all();
    return Inertia::render('Admin/Course', [
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

  public function addCourse(Request $request)
  {
    $validate_data = $request->validate([
      'name' => 'required',
      'description' => 'required',
    ]);
    $course = new Course();
    $course->name = $request->input('name');
    $course->description = $request->input('description');
    $course->save();

    return redirect()->back()->with('success', 'Course added successfully.'); // Redirect back with success message
  }
}
