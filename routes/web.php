<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AdminDiakoniaController;
use App\Http\Controllers\DiakoniaController;
use App\Http\Controllers\FamilyAltarController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SurveyController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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
    Route::resource('/family-altar', FamilyAltarController::class);
    Route::resource('/account', AccountController::class);

    // admin
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/diakonia', [AdminDiakoniaController::class, 'formDiakonia'])->name('diakonia.form');
        Route::get('/diakonia/{diakonia}', [AdminDiakoniaController::class, 'showDiakonia'])->name('diakonia.show');
        Route::post('/diakonia/{diakonia}/approve', [AdminDiakoniaController::class, 'approveForm'])->name('diakonia.approve');
        Route::resource('/survey', SurveyController::class);
    });


    // ketua departemen
    Route::get('ketua-departemen/diakonia', [AdminDiakoniaController::class, 'ketuaDepartemenDiakonia'])->name('ketua-departemen.diakonia.form');
    Route::get('ketua-departemen/diakonia/{diakonia}', [AdminDiakoniaController::class, 'showKetuaDepartemenDiakonia'])->name('ketua-departemen.diakonia.show');
    Route::post('ketua-departemen/diakonia/{diakonia}/approve', [AdminDiakoniaController::class, 'ketuaDepartemenApprove'])->name('ketua-departemen.diakonia.approve');
    Route::get('/ketua-departemen/survey', [SurveyController::class, 'ketuaDepartemenIndex'])->name('ketua-departemen.survey.index');
    Route::get('/ketua-departemen/survey/{survey}', [SurveyController::class, 'ketuaDepartemenShow'])->name('ketua-departemen.survey.show');
    Route::post('/ketua-departemen/survey/{survey}/hasil', [SurveyController::class, 'ketuaDepartemenHasil'])->name('ketua-departemen.survey.hasil');

    // ketua divisi
    Route::get('ketua-divisi/diakonia', [AdminDiakoniaController::class, 'ketuaDivisiDiakonia'])->name('ketua-divisi.diakonia.form');
    Route::get('ketua-divisi/diakonia/{diakonia}', [AdminDiakoniaController::class, 'showKetuaDivisiDiakonia'])->name('ketua-divisi.diakonia.show');
    Route::post('ketua-divisi/diakonia/{diakonia}/approve', [AdminDiakoniaController::class, 'ketuaDivisiApprove'])->name('ketua-divisi.diakonia.approve');
    Route::get('/ketua-divisi/survey', [SurveyController::class, 'ketuaDivisiIndex'])->name('ketua-divisi.survey.index');
    Route::get('/ketua-divisi/survey/{survey}', [SurveyController::class, 'ketuaDivisiShow'])->name('ketua-divisi.survey.show');
    Route::post('/ketua-divisi/survey/{survey}/hasil', [SurveyController::class, 'ketuaDivisiHasil'])->name('ketua-divisi.survey.hasil');

    // anggota
    Route::resource('/diakonia', DiakoniaController::class);

    // surveyor
    Route::get('surveyor/survey', [SurveyController::class, 'surveyorIndex'])->name('surveyor.survey.index');
    Route::get('surveyor/survey/{survey}', [SurveyController::class, 'surveyorShow'])->name('surveyor.survey.show');
    Route::post('surveyor/survey/{survey}', [SurveyController::class, 'surveyorHasil'])->name('surveyor.survey.hasil');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/asign-role', [AccountController::class, 'asignRole'])->name('asign-role');

    // api
    Route::get('/api/notifications', function () {
        return Auth::user()->unreadNotifications;
    })->name('api.notifications');
    Route::get('api/notification/read', function () {
        Auth::user()->unreadNotifications->markAsRead();
    })->name('api.notification.read');

    Route::get('api/diakonia', [DiakoniaController::class, 'searchById'])->name('api.diakonia');
});

require __DIR__ . '/auth.php';
