<?php

use App\Http\Controllers\JurusanController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;

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

Route::get('/', [PageController::class, 'index']);
Route::get('/daftar', [PageController::class, 'register'])->middleware('guest');
Route::get('/masuk', [PageController::class, 'login'])->middleware('guest')->name('masuk');

Route::post('/daftar', [RegisterController::class, 'store']);
Route::post('/masuk', [LoginController::class, 'authenticate']);
Route::post('/keluar', [LoginController::class, 'logout']);

Route::get('/jurusan', [JurusanController::class, 'index']);

Route::group(['prefix' => 'dashboard', 'middleware' => ['auth']], function () {
    Route::get('/', [UserController::class, 'index']);
    Route::get('/detail', [UserController::class, 'detail']);

    Route::get('/change-email', [UserController::class, 'change_email']);
    Route::post('/change-email', [UserController::class, 'change_email_post']);

    Route::get('/change-password', [UserController::class, 'change_password']);
    Route::post('/change-password', [UserController::class, 'change_password_post']);

    Route::get('/change-name', [UserController::class, 'change_name']);
    Route::post('/change-name', [UserController::class, 'change_name_post']);
});

// Tautan
Route::get('/tentang-kami', [PageController::class, 'tentang']);
Route::get('/kebijakan-privasi', [PageController::class, 'kebijakan']);
Route::get('/syarat-ketentuan', [PageController::class, 'syarat']);

Route::any('{catchall}', [PageController::class, 'notFound'])->where('catchall', '.*');
