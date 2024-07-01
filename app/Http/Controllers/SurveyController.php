<?php

namespace App\Http\Controllers;

use App\Models\Diakonia;
use App\Models\Survey;
use App\Models\SurveyAproval;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SurveyController extends Controller
{
    public function index()
    {
        $surveys = Survey::with([
            'user',
            'diakonia' => function ($query) {
                $query->withTrashed();
            },
            'diakonia.familyAltar',
            'survey_aprovals'
        ])
            ->latest()
            ->paginate(50);

        return Inertia::render('Survey/Admin/Index', ["surveys" => $surveys]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'surveyor_id' => 'required|exists:users,id',
            'diakonia_id' => 'required|exists:diakonias,id',
            'date' => 'required',
        ]);

        $survey = new Survey();
        $survey->user_id = $request->surveyor_id;
        $survey->diakonia_id = $request->diakonia_id;
        $survey->date = $request->date;
        $survey->status = 'Pending';
        $survey->save();

        return redirect()->route('admin.survey.index')->with('success', 'Form berhasil ditambahkan');
    }

    public function show(Survey $survey)
    {
        return Inertia::render('Survey/Admin/Show', ["survey" => $survey]);
    }

    public function update(Request $request, Survey $survey)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'diakonia_id' => 'required|exists:diakonia,id',
            'date' => 'required|date',
        ]);

        $survey->user_id = $request->user_id;
        $survey->diakonia_id = $request->diakonia_id;
        $survey->date = $request->date;
        $survey->save();

        return redirect()->route('admin.survey.index')->with('success', 'Form berhasil diperbarui');
    }

    public function destroy(Survey $survey)
    {
        $survey->delete();
        return redirect()->route('admin.survey.index')->with('success', 'Form berhasil dihapus');
    }

    public function surveyorIndex(Request $request)
    {
        $survey = Survey::query();

        if ($request->has('filter') && $request->filter != 'semua') {
            $survey->where('status', $request->filter);
        }

        $surveys = $survey->with([
            'user',
            'diakonia' => function ($query) {
                $query->withTrashed();
            },
            'diakonia.familyAltar',
            'survey_aprovals'
        ])
            ->where('user_id', auth()->user()->id)
            ->latest()
            ->paginate(50);

        return Inertia::render('Survey/Surveyor/Index', ["surveys" => $surveys]);
    }

    public function surveyorShow(Survey $survey)
    {
        $survey->load([
            'user',
            'diakonia' => function ($query) {
                $query->withTrashed();
            },
            'diakonia.familyAltar',
            'survey_aprovals'
        ]);
        return Inertia::render('Survey/Surveyor/Show', ["survey" => $survey]);
    }

    public function surveyorHasil(Survey $survey, Request $request)
    {
        $survey->survey = $request->comment;
        $survey->status = 'Sudah Survey';
        $survey->save();

        $diakonia = $survey->diakonia;
        $diakonia->status = 'Menunggu Hasil Survey';
        $diakonia->save();

        return redirect()->route('surveyor.survey.show', $survey);
    }

    public function ketuaDepartemenIndex(Request $request)
    {
        $survey = Survey::query();

        if ($request->filter == 'Pending') {
            $survey->doesntHave('survey_aprovals');
        }
        if ($request->filter == 'Diterima') {
            $survey->whereHas('survey_aprovals', function ($query) {
                $query->where('role_id', 1)->where('status', 'Diterima');
            });
        }
        if ($request->filter == 'Ditolak') {
            $survey->whereHas('survey_aprovals', function ($query) {
                $query->where('role_id', 1)->where('status', 'Ditolak');
            });
        }

        $surveys = $survey->with([
            'user',
            'diakonia' => function ($query) {
                $query->withTrashed();
            },
            'diakonia.familyAltar',
            'survey_aprovals'
        ])
            ->where('status', '!=', 'Pending')
            ->latest()
            ->paginate(50);

        return Inertia::render('Survey/KetuaDepartement/Index', ["surveys" => $surveys]);
    }

    public function ketuaDepartemenShow(Survey $survey)
    {
        $survey->load([
            'user',
            'diakonia' => function ($query) {
                $query->withTrashed();
            },
            'diakonia.familyAltar',
            'survey_aprovals'
        ]);
        return Inertia::render('Survey/KetuaDepartement/Show', ["survey" => $survey]);
    }

    public function ketuaDepartemenHasil(Survey $survey, Request $request)
    {
        $request->validate([
            'comment' => 'required',
            'status' => 'required',
        ]);

        $surveyAproval = new SurveyAproval();
        $surveyAproval->survey_id = $survey->id;
        $surveyAproval->status = $request->status;
        $surveyAproval->comment = $request->comment;
        $surveyAproval->user_id = auth()->user()->id;
        $surveyAproval->role_id = 1;
        $surveyAproval->save();

        if ($survey->survey_aprovals->where('role_id', 2)->where('status', 'Diterima')->count() == 1 && $request->status == 'Diterima') {
            $survey->status = 'Diterima';
            $survey->save();

            $diakonia = $survey->diakonia;
            $diakonia->status = 'Diterima';
            $diakonia->save();
        }

        if ($request->status == 'Ditolak') {
            $survey->status = 'Ditolak';
            $survey->save();

            $diakonia = $survey->diakonia;
            $diakonia->status = 'Ditolak';
            $diakonia->save();
        }

        return redirect()->route('ketua-departemen.survey.show', $survey);
    }

    public function ketuaDivisiIndex(Request $request)
    {
        $survey = Survey::query();

        if ($request->filter == 'Pending') {
            $survey->doesntHave('survey_aprovals');
        }
        if ($request->filter == 'Diterima') {
            $survey->whereHas('survey_aprovals', function ($query) {
                $query->where('role_id', 2)->where('status', 'Diterima');
            });
        }
        if ($request->filter == 'Ditolak') {
            $survey->whereHas('survey_aprovals', function ($query) {
                $query->where('role_id', 2)->where('status', 'Ditolak');
            });
        }

        $surveys = $survey->with([
            'user',
            'diakonia' => function ($query) {
                $query->withTrashed();
            },
            'diakonia.familyAltar',
            'survey_aprovals'
        ])
            ->where('status', '!=', 'Pending')
            ->latest()
            ->paginate(50);

        return Inertia::render('Survey/KetuaDivisi/Index', ["surveys" => $surveys]);
    }

    public function ketuaDivisiShow(Survey $survey)
    {
        $survey->load([
            'user',
            'diakonia' => function ($query) {
                $query->withTrashed();
            },
            'diakonia.familyAltar',
            'survey_aprovals'
        ]);
        return Inertia::render('Survey/KetuaDivisi/Show', ["survey" => $survey]);
    }

    public function ketuaDivisiHasil(Survey $survey, Request $request)
    {
        $request->validate([
            'comment' => 'required',
            'status' => 'required',
        ]);

        $surveyAproval = new SurveyAproval();
        $surveyAproval->survey_id = $survey->id;
        $surveyAproval->status = $request->status;
        $surveyAproval->comment = $request->comment;
        $surveyAproval->user_id = auth()->user()->id;
        $surveyAproval->role_id = 2;
        $surveyAproval->save();

        if ($survey->survey_aprovals->where('role_id', 1)->where('status', 'Diterima')->count() == 1 && $request->status == 'Diterima') {
            $survey->status = 'Diterima';
            $survey->save();

            $diakonia = $survey->diakonia;
            $diakonia->status = 'Diterima';
            $diakonia->save();
        }

        if ($request->status == 'Ditolak') {
            $survey->status = 'Ditolak';
            $survey->save();

            $diakonia = $survey->diakonia;
            $diakonia->status = 'Ditolak';
            $diakonia->save();
        }

        return redirect()->route('ketua-divisi.survey.show', $survey);
    }
}
