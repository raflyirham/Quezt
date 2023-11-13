<?php

use App\Http\Controllers\JurusanController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\RegisterController;

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
Route::get('/masuk', [PageController::class, 'login'])->middleware('guest');

Route::post('/daftar', [RegisterController::class, 'store']);
Route::post('/masuk', [LoginController::class, 'authenticate']);
Route::post('/keluar', [LoginController::class, 'logout']);

Route::get('/jurusan', [JurusanController::class, 'index']);

// Tautan
Route::get('/tentang-kami', [PageController::class, 'tentang']);
Route::get('/kebijakan-privasi', [PageController::class, 'kebijakan']);

Route::any('{catchall}', [PageController::class, 'notFound'])->where('catchall', '.*');
