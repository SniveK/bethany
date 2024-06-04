<?php

namespace App\Http\Controllers;

use App\Models\FamilyAltar;
use App\Http\Requests\StoreFamilyAltarRequest;
use App\Http\Requests\UpdateFamilyAltarRequest;
use Inertia\Inertia;

class FamilyAltarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $familyAltars = FamilyAltar::paginate(10);

        return Inertia::render('FamilyAltar/Index', [
            'familyAltars' => $familyAltars
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('FamilyAltar/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFamilyAltarRequest $request)
    {
        $familyAltar = new FamilyAltar();

        $familyAltar->name = $request->name;
        $familyAltar->identification_number = $request->identification_number;
        $familyAltar->address = $request->address;
        $familyAltar->birth = $request->birth;
        $familyAltar->phone = $request->phone;
        $familyAltar->fa_member = $request->fa_member;

        $familyAltar->save();

        return redirect()->route('family-altar.index')->with('success', 'Family Altar created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(FamilyAltar $familyAltar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FamilyAltar $family_altar)
    {
        return Inertia::render('FamilyAltar/Edit', [
            'familyAltar' => $family_altar
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFamilyAltarRequest $request, FamilyAltar $family_altar)
    {
        $family_altar->name = $request->name;
        $family_altar->identification_number = $request->identification_number;
        $family_altar->address = $request->address;
        $family_altar->birth = $request->birth;
        $family_altar->phone = $request->phone;
        $family_altar->fa_member = $request->fa_member;

        $family_altar->save();

        return redirect()->route('family-altar.index')->with('success', 'Family Altar updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FamilyAltar $family_altar)
    {
        $family_altar->delete();

        return redirect()->route('family-altar.index')->with('success', 'Family Altar deleted successfully');
    }
}
