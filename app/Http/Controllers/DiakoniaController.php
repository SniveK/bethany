<?php

namespace App\Http\Controllers;

use App\Models\Diakonia;
use App\Models\FamilyAltar;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DiakoniaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $diakonias = Diakonia::latest()->paginate(50);
        return Inertia::render('Diakonia/Index', ["diakonias" => $diakonias]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Diakonia/CreateUpdate', ["mode" => "create"]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
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
        dd($validated);
        $diakonia = Diakonia::create([
            'requester_first_name' => $validated['first_name'],
            'requester_last_name' => $validated['last_name'],
            'requester_phone_number' => $validated['phone_number'],
            'requester_birth_date' => $validated['birth_date'],
            'request_date' => now()->format('Y-m-d'),
            'status' => 'Diserahkan',
            'requester_help' => $validated['diakonia'],
            'user_id' => auth()->user()->id,
            'family_altar_id' => $familyAltar->first()->id,
        ]);
        return redirect()->route('diakonia.index')->with('success', 'Form berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $diakonia = Diakonia::find($id);
        return Inertia::render('Diakonia/Show', ["diakonia" => $diakonia]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Diakonia $diakonium)
    {
        $diakonium->requester_help = json_decode($diakonium->requester_help);
        return Inertia::render('Diakonia/CreateUpdate', ["mode" => "update", "diakonia" => $diakonium->load('familyAltar')]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Diakonia $diakonium)
    {
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
            'request_date' => now()->format('Y-m-d'),
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
        $diakonium->delete();

        return redirect()->route('diakonia.index')->with('success', 'Form berhasil dihapus');
    }
}
