<?php

namespace App\Http\Controllers;

use App\Models\Diakonia;
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
        $data = Diakonia::paginate(1);
        return Inertia::render('Diakonia/Index', ["data" => $data]);
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
        $diakonia = Diakonia::find($id);
        return Inertia::render('Diakonia/CreateUpdate', ["mode" => "update", "data" => $diakonia]);
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
