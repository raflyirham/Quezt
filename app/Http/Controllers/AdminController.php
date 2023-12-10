<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\Course; // Add the Course model
use Illuminate\Http\Request; // Add the Request class
use Inertia\Inertia;

class AdminController extends Controller
{
  public function getMajorsandCourses(){
    $courses = Course::all();
    $majors = Major::all();
    return Inertia::render('Admin/Lists/Index', [
      'courses' => $courses,
      'majors' => $majors,
    ]);
  }
  public function getMajors(){
    $courses = Course::all();
    $majors = Major::all();
    return Inertia::render('Admin/Lists/Majors', [
      'courses' => $courses,
      'majors' => $majors,
    ]);
  }
  public function getCourses(){
    $courses = Course::all();
    $majors = Major::all();
    return Inertia::render('Admin/Lists/Courses', [
      'courses' => $courses,
      'majors' => $majors,
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
