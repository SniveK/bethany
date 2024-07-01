<?php

namespace App\Http\Controllers;

use App\Models\Diakonia;
use App\Models\DiakoniaAproval;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminDiakoniaController extends Controller
{
    public function formDiakonia(Request $request)
    {
        $this->authorize('admin', Diakonia::class);

        $query = Diakonia::with('familyAltar.user', 'diakoniaAprovals.user');

        if ($request->filter == 'Pending') {
            $query->doesntHave('diakoniaAprovals');
        } else if ($request->filter == 'Diterima') {
            $query->whereHas('diakoniaAprovals', function ($query) {
                $query->where('role_id', 3)->where('status', 'Diterima');
            });
        } else if ($request->filter == 'Ditolak') {
            $query->whereHas('diakoniaAprovals', function ($query) {
                $query->where('role_id', 3)->where('status', 'Ditolak');
            });
        }

        $diakonias = $query->latest()->paginate(50);

        return Inertia::render('Admin/Diakonia/Index', ["diakonias" => $diakonias]);
    }

    public function showDiakonia(Diakonia $diakonia)
    {
        $this->authorize('admin', Diakonia::class);

        $diakonia->load(['familyAltar.user', 'diakoniaAprovals.user', 'survey']);
        $surveyors = User::whereHas('roles', function ($query) {
            $query->where('role_id', 5);
        })->get();

        return Inertia::render('Admin/Diakonia/Show', ["diakonia" => $diakonia, 'surveyors' => $surveyors]);
    }

    public function approveForm(Request $request, Diakonia $diakonia)
    {
        $this->authorize('admin', Diakonia::class);

        $request->validate([
            'comment' => 'required',
            'status' => 'required',
        ]);

        $diakoniaAproval = new DiakoniaAproval();
        $diakoniaAproval->diakonia_id = $diakonia->id;
        $diakoniaAproval->comment = $request->comment;
        $diakoniaAproval->status = $request->status;
        $diakoniaAproval->user_id = Auth::user()->id;
        $diakoniaAproval->role_id = 3;
        $diakoniaAproval->save();

        if ($request->status == 'Ditolak') {
            $diakonia->status = 'Ditolak';
            $diakonia->save();
        } else if ($request->status == 'Diterima') {
            $diakonia->status = 'Menunggu Approval';
            $diakonia->save();
        }

        return redirect()->route('admin.diakonia.show', ['diakonia' => $diakonia->id])->with('success', 'Form Disetujui');
    }

    // ketua departmen
    public function ketuaDepartemenDiakonia(Request $request)
    {
        $this->authorize('ketuaDepartemen', Diakonia::class);

        $query = Diakonia::with('familyAltar.user', 'diakoniaAprovals.user');

        if ($request->filter == 'Pending') {
            $query->whereDoesntHave('diakoniaAprovals', function ($query) {
                $query->where('role_id', 1);
            })
                ->whereHas('diakoniaAprovals', function ($query) {
                    $query->where('role_id', 3)->where('status', 'Diterima');
                });
        } elseif ($request->filter == 'Diterima') {
            $query->whereHas('diakoniaAprovals', function ($query) {
                $query->where('role_id', 1)
                    ->where('status', 'Diterima');
            });
        } elseif ($request->filter == 'Ditolak') {
            $query->whereHas('diakoniaAprovals', function ($query) {
                $query->where('role_id', 1)
                    ->where('status', 'Ditolak');
            });
        } else {
            $query->whereHas('diakoniaAprovals', function ($query) {
                $query->where('role_id', 3)
                    ->where('status', 'Diterima');
            });
        }

        $diakonias = $query->latest()->paginate(50);

        return Inertia::render('KetuaDepartemen/Diakonia/Index', ["diakonias" => $diakonias]);
    }

    public function showKetuaDepartemenDiakonia(Diakonia $diakonia)
    {
        $this->authorize('ketuaDepartemen', Diakonia::class);

        $diakonia->load(['familyAltar.user', 'diakoniaAprovals.user']);
        return Inertia::render('KetuaDepartemen/Diakonia/Show', ["diakonia" => $diakonia]);
    }

    public function ketuaDepartemenApprove(Request $request, Diakonia $diakonia)
    {
        $this->authorize('ketuaDepartemen', Diakonia::class);

        $request->validate([
            'comment' => 'required',
            'status' => 'required',
        ]);

        $diakoniaAproval = new DiakoniaAproval();
        $diakoniaAproval->diakonia_id = $diakonia->id;
        $diakoniaAproval->comment = $request->comment;
        $diakoniaAproval->status = $request->status;
        $diakoniaAproval->user_id = Auth::user()->id;
        $diakoniaAproval->role_id = 1;
        $diakoniaAproval->save();

        if ($diakonia->diakoniaAprovals->where('role_id', 2)->where('status', 'Diterima')->count() == 1 && $request->status == 'Diterima') {
            $diakonia->status = 'Menunggu Survey';
            $diakonia->save();
        }

        if ($request->status == 'Ditolak') {
            $diakonia->status = 'Ditolak';
            $diakonia->save();
        }

        return redirect()->route('ketua-departemen.diakonia.show', ['diakonia' => $diakonia->id])->with('success', 'Form Disetujui');
    }

    // ketua divisi
    public function ketuaDivisiDiakonia(Request $request)
    {
        $this->authorize('ketuaDivisi', Diakonia::class);

        $query = Diakonia::with('familyAltar.user', 'diakoniaAprovals.user');

        if ($request->filter == 'Pending') {
            $query->whereHas('diakoniaAprovals', function ($query) {
                $query->where('role_id', 3)->where('status', 'Diterima');
            })->whereDoesntHave('diakoniaAprovals', function ($query) {
                $query->where('role_id', 2);
            });
        } else if ($request->filter == 'Diterima') {
            $query->whereHas('diakoniaAprovals', function ($query) {
                $query->where('role_id', 2)->where('status', 'Diterima');
            });
        } else if ($request->filter == 'Ditolak') {
            $query->whereHas('diakoniaAprovals', function ($query) {
                $query->where('role_id', 2)->where('status', 'Ditolak');
            });
        } else {
            $query->whereHas('diakoniaAprovals', function ($query) {
                $query->where('role_id', 3)->where('status', 'Diterima');
            });
        }

        $diakonias = $query->latest()->paginate(50);

        return Inertia::render('KetuaDivisi/Diakonia/Index', ["diakonias" => $diakonias]);
    }

    public function showKetuaDivisiDiakonia(Diakonia $diakonia)
    {
        $this->authorize('ketuaDivisi', Diakonia::class);

        $diakonia->load(['familyAltar.user', 'diakoniaAprovals.user']);
        return Inertia::render('KetuaDivisi/Diakonia/Show', ["diakonia" => $diakonia]);
    }

    public function ketuaDivisiApprove(Request $request, Diakonia $diakonia)
    {
        $this->authorize('ketuaDivisi', Diakonia::class);

        $request->validate([
            'comment' => 'required',
            'status' => 'required',
        ]);

        $diakoniaAproval = new DiakoniaAproval();
        $diakoniaAproval->diakonia_id = $diakonia->id;
        $diakoniaAproval->comment = $request->comment;
        $diakoniaAproval->status = $request->status;
        $diakoniaAproval->user_id = Auth::user()->id;
        $diakoniaAproval->role_id = 2;
        $diakoniaAproval->save();

        if ($diakonia->diakoniaAprovals->where('role_id', 1)->where('status', 'Diterima')->count() == 1 && $request->status == 'Diterima') {
            $diakonia->status = 'Menunggu Survey';
            $diakonia->save();
        }

        if ($request->status == 'Ditolak') {
            $diakonia->status = 'Ditolak';
            $diakonia->save();
        }

        return redirect()->route('ketua-divisi.diakonia.show', ['diakonia' => $diakonia->id])->with('success', 'Form Disetujui');
    }
}
