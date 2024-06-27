<?php

namespace App\Http\Controllers;

use App\Models\FamilyAltar;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FamilyAltarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $familyAltars = FamilyAltar::with('user')->paginate(50);
        return Inertia::render('FamilyAltar/Index', ["familyAltars" => $familyAltars]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::doesntHave('family_altar')->get();
        return Inertia::render('FamilyAltar/CreateUpdate', ["users" => $users]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'user_id' => 'required|exists:users,id',
        ]);

        $familyAltar = FamilyAltar::create([
            'name' => $request->name,
            'address' => $request->address,
            'user_id' => $request->user_id,
            'leader_start_date' => now()->format('Y-m-d'),
        ]);

        return redirect()->route('family-altar.index')->with('success', 'FA berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FamilyAltar $family_altar)
    {
        $family_altar->load('user');
        $users = User::doesntHave('family_altar')->get();
        return Inertia::render('FamilyAltar/CreateUpdate', ["users" => $users, "familyAltar" => $family_altar]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FamilyAltar $family_altar)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'user_id' => 'required|exists:users,id',
        ]);

        $family_altar->update([
            'name' => $request->name,
            'address' => $request->address,
            'user_id' => $request->user_id,
            'leader_start_date' => now()->format('Y-m-d'),
        ]);

        return redirect()->route('family-altar.index')->with('success', 'FA berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FamilyAltar $family_altar)
    {
        $family_altar->delete();
        return redirect()->route('family-altar.index')->with('success', 'FA berhasil dihapus');
    }
}
