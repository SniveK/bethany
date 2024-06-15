<?php

namespace App\Http\Controllers;

use App\Models\FamilyAltar;
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
        return Inertia::render('Diakonia/Index', ["data" => FamilyAltar::paginate(50)]);
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
        // return Inertia::render('Diakonia/Create', []);
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
    public function edit(string $id)
    {
        $data = FamilyAltar::find($id);
        return Inertia::render('Diakonia/CreateUpdate', ["mode" => "update", "data" => $data]);
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
