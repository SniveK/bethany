<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AdminDiakoniaController;
use App\Http\Controllers\DiakoniaController;
use App\Http\Controllers\FamilyAltarController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('/diakonia', DiakoniaController::class);
    Route::resource('/family-altar', FamilyAltarController::class);
    Route::resource('/account', AccountController::class);

    // admin
    Route::get('admin/diakonia', [AdminDiakoniaController::class, 'formDiakonia'])->name('admin.diakonia.form');
    Route::get('admin/diakonia/{diakonia}', [AdminDiakoniaController::class, 'showDiakonia'])->name('admin.diakonia.show');
    Route::post('admin/diakonia/{diakonia}/approve', [AdminDiakoniaController::class, 'approveForm'])->name('admin.diakonia.approve');

    // ketua departemen
    Route::get('ketua-departemen/diakonia', [AdminDiakoniaController::class, 'ketuaDepartemenDiakonia'])->name('ketua-departemen.diakonia.form');
    Route::get('ketua-departemen/diakonia/{diakonia}', [AdminDiakoniaController::class, 'showKetuaDepartemenDiakonia'])->name('ketua-departemen.diakonia.show');
    Route::post('ketua-departemen/diakonia/{diakonia}/approve', [AdminDiakoniaController::class, 'ketuaDepartemenApprove'])->name('ketua-departemen.diakonia.approve');

    // ketua divisi
    Route::get('ketua-divisi/diakonia', [AdminDiakoniaController::class, 'ketuaDivisiDiakonia'])->name('ketua-divisi.diakonia.form');
    Route::get('ketua-divisi/diakonia/{diakonia}', [AdminDiakoniaController::class, 'showKetuaDivisiDiakonia'])->name('ketua-divisi.diakonia.show');
    Route::post('ketua-divisi/diakonia/{diakonia}/approve', [AdminDiakoniaController::class, 'ketuaDivisiApprove'])->name('ketua-divisi.diakonia.approve');

    // anggota

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/asign-role', [AccountController::class, 'asignRole'])->name('asign-role');
});

require __DIR__ . '/auth.php';
