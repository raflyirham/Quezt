<?php

use App\Http\Controllers\JurusanController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MataKuliahController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PertanyaanController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;

use Inertia\Inertia;

use function Termwind\render;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
 */

//! Testing Purpose Only, DELETE LATER
Route::get('/Admin', function(){
  return Inertia::render('Admin/Index');
});

Route::get('/', [PageController::class, 'index']);
Route::get('/daftar', [PageController::class, 'register'])->middleware('guest');
Route::get('/masuk', [PageController::class, 'login'])->middleware('guest')->name('masuk');

Route::post('/daftar', [RegisterController::class, 'store']);
Route::post('/masuk', [LoginController::class, 'authenticate']);
Route::post('/keluar', [LoginController::class, 'logout']);

// Jurusan
Route::prefix('jurusan')->group(function () {
    Route::get('/', [JurusanController::class, 'index']);
    Route::get('/{major}', [JurusanController::class, 'detail']);
});

// Mata Kuliah
Route::prefix('mata-kuliah')->group(function () {
    Route::get('/', [MataKuliahController::class, 'index']);

    Route::get('/{course}', [MataKuliahController::class, 'detail']);
    Route::post('/{course}/tanya-materi', [MataKuliahController::class, 'tanya_materi']);
});

// Profile
Route::prefix('profile')->group(function () {
    Route::get('/{user}', [UserController::class, 'profile']);
    Route::get('/{user}/pertanyaan', [UserController::class, 'pertanyaan']);
    Route::get('/{user}/jawaban', [UserController::class, 'jawaban']);
    Route::get('/{user}/materi', [UserController::class, 'materi']);
});

// Dashboard
Route::group(['prefix' => 'dashboard', 'middleware' => ['auth']], function () {
    Route::get('/', [UserController::class, 'index']);
    Route::get('/detail', [UserController::class, 'detail']);

    Route::get('/change-email', [UserController::class, 'change_email']);
    Route::post('/change-email', [UserController::class, 'change_email_post']);

    Route::get('/change-password', [UserController::class, 'change_password']);
    Route::post('/change-password', [UserController::class, 'change_password_post']);

    Route::get('/change-name', [UserController::class, 'change_name']);
    Route::post('/change-name', [UserController::class, 'change_name_post']);

    Route::get('/detail-role', [UserController::class, 'detail_role']);

    Route::get('/change-role', [UserController::class, 'change_role']);
    Route::post('/change-role', [UserController::class, 'change_role_post']);
});

// Pertanyaan
Route::prefix('pertanyaan')->group(function () {
    Route::get('/{id}', [PertanyaanController::class, 'detail']);
    Route::post('/{id}', [PertanyaanController::class, 'jawab_pertanyaan']);
    Route::delete('/{id}/hapus-jawaban', [PertanyaanController::class, 'hapus_jawaban']);
});

// Tautan
Route::get('/tentang-kami', [PageController::class, 'tentang']);
Route::get('/kebijakan-privasi', [PageController::class, 'kebijakan']);
Route::get('/syarat-ketentuan', [PageController::class, 'syarat']);

Route::get('/cari', [PageController::class, 'cari'])->name('cari');
// Route::post('/cari', [PageController::class, 'cari']);

Route::any('{catchall}', [PageController::class, 'notFound'])->where('catchall', '.*');
