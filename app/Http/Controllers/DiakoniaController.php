<?php

namespace App\Http\Controllers;

use App\Models\Diakonia;
use App\Models\FamilyAltar;
use App\Models\User;
use App\Notifications\FormSubmitted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;
use Inertia\Response;

class DiakoniaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $this->authorize('viewAny', Diakonia::class);

        $query = Diakonia::query();

        if ($request->has('filter') && $request->filter !== 'semua') {
            $query->where('status', $request->filter);
        }

        $diakonias = $query->where('user_id', auth()->user()->id)->with('familyAltar')->latest()->paginate(50);

        return Inertia::render('Diakonia/Index', ["diakonias" => $diakonias]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', Diakonia::class);

        return Inertia::render('Diakonia/CreateUpdate', ["mode" => "create"]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->authorize('create', Diakonia::class);

        $user_id = auth()->user()->id;
        $familyAltar = FamilyAltar::where('user_id', $user_id)->get();
        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'phone_number' => 'required',
            'birth_date' => 'required|date',
            'diakonia' => 'required|array',
            'diakonia.*.type' => 'required|string',
            'diakonia.*.amount' => 'required|integer',
            'diakonia.*.notes' => 'required|string',
        ]);

        $diakonia = Diakonia::create([
            'requester_first_name' => $validated['first_name'],
            'requester_last_name' => $validated['last_name'],
            'requester_phone_number' => $validated['phone_number'],
            'requester_birth_date' => $validated['birth_date'],
            'status' => 'Diserahkan',
            'requester_help' => $validated['diakonia'],
            'user_id' => auth()->user()->id,
            'family_altar_id' => $familyAltar->first()->id,
        ]);

        $adminUsers = User::whereHas('roles', function ($query) {
            $query->whereIn('role_id', [3]);
        })->get();

        // Send notification to each admin user
        Notification::send($adminUsers, new FormSubmitted($diakonia));

        return redirect()->route('diakonia.index')->with('success', 'Form berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $diakonia = Diakonia::with(['familyAltar', 'diakoniaAprovals', 'diakoniaAprovals.user', 'diakoniaAprovals.role'])->find($id);
        return Inertia::render('Diakonia/Show', ["diakonia" => $diakonia->load('familyAltar.user')]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Diakonia $diakonium)
    {
        $this->authorize('update', $diakonium);

        // $diakonium->requester_help = json_decode($diakonium->requester_help);
        return Inertia::render('Diakonia/CreateUpdate', ["mode" => "update", "diakonia" => $diakonium->load('familyAltar')]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Diakonia $diakonium)
    {
        $this->authorize('update', $diakonium);

        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'phone_number' => 'required',
            'birth_date' => 'required|date',
            'family_altar_id' => 'required|exists:family_altars,id',
            'diakonia' => 'required|array',
            'diakonia.*.type' => 'required|string',
            'diakonia.*.amount' => 'required|integer',
            'diakonia.*.notes' => 'required|string',
        ]);

        $diakonium->update([
            'requester_first_name' => $validated['first_name'],
            'requester_last_name' => $validated['last_name'],
            'requester_phone_number' => $validated['phone_number'],
            'requester_birth_date' => $validated['birth_date'],
            'status' => 'Diserahkan',
            'requester_help' => $validated['diakonia'],
            'user_id' => auth()->user()->id,
            'family_altar_id' => $validated['family_altar_id'],
        ]);

        return redirect()->route('diakonia.index')->with('success', 'Form berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Diakonia $diakonium)
    {
        $this->authorize('delete', $diakonium);

        $diakonium->delete();

        return redirect()->route('diakonia.index')->with('success', 'Form berhasil dihapus');
    }

    public function searchById(Request $request)
    {
        $diakonia = Diakonia::with('familyAltar')->find($request->id);
        return response()->json($diakonia);
    }
}
