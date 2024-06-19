<?php

namespace App\Http\Controllers;

use App\Models\Diakonia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DiakoniaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $db_data = Diakonia::paginate(50);
        return Inertia::render('Diakonia/Index', ["db_data" => $db_data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Diakonia/Form', ["mode" => "create"]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'requester_first_name' => 'required|string',
            'requester_last_name' => 'required |string',
            'requester_phone_number' => 'required |string',
            'requester_birth_date' => 'required|date',
            // 'request_date' => 'required|date',
            // 'status' => 'required|string',
            'diakonia' => 'required|array',
            'diakonia.*.diakonia_type' => 'required|string',
            'diakonia.*.diakonia_amount' => 'required|integer',
            'diakonia.*.notes' => 'required|string',
        ]);

        $diakonia = new Diakonia();
        $diakonia->requester_first_name = $request->requester_first_name;
        $diakonia->requester_last_name = $request->requester_last_name;
        $diakonia->requester_phone_number = $request->requester_phone_number;
        $diakonia->requester_birth_date = $request->requester_birth_date;
        $diakonia->status = "diserahkan";
        $diakonia->diakonia = $request->diakonia;
        // $diakonia->user_id = Auth::user()->id;
        $diakonia->user_id = 1;
        $diakonia->family_altar_id = 1;
        $diakonia->save();
        return redirect()->route('diakonia.index')->with('toastContent', 'Diakonia created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Diakonia::find($id);
        return Inertia::render('Diakonia/Show', ["data" => $data]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $db_data = Diakonia::find($id);
        return Inertia::render('Diakonia/Form', ["mode" => "edit", "db_data" => $db_data]);
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'requester_first_name' => 'required|string',
            'requester_last_name' => 'required |string',
            'requester_phone_number' => 'required |string',
            'requester_birth_date' => 'required|date',
            // 'request_date' => 'required|date',
            // 'status' => 'required|string',
            'diakonia' => 'required|array',
            'diakonia.*.diakonia_type' => 'required|string',
            'diakonia.*.diakonia_amount' => 'required|integer',
            'diakonia.*.notes' => 'required|string',
        ]);

        $diakonia = Diakonia::find($id);
        $diakonia->requester_first_name = $request->requester_first_name;
        $diakonia->requester_last_name = $request->requester_last_name;
        $diakonia->requester_phone_number = $request->requester_phone_number;
        $diakonia->requester_birth_date = $request->requester_birth_date;
        $diakonia->status = "diserahkan";
        $diakonia->diakonia = $request->diakonia;
        // $diakonia->user_id = Auth::user()->id;
        $diakonia->user_id = 1;
        $diakonia->family_altar_id = 1;
        $diakonia->save();
        return redirect()->route('diakonia.index')->with('toastContent', 'Diakonia created successfully.');
        return redirect('diakonia.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return redirect('diakonia.index');
        //
    }
}
