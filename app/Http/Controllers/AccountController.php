<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index()
    {
        $users = User::with('roles')->get();

        return Inertia::render("Account/Index", [
            'users' => $users
        ]);
    }
    public function create()
    {
        $users = User::with('roles')->get();
        $roles = Role::all();
        return Inertia::render("Account/CreateUpdate", [
            'users' => $users,
            'roles' => $roles
        ]);
    }

    public function asignRole(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'roles' => 'required|array'
        ]);

        $user = User::find($request->user_id);
        $user->roles()->sync($request->roles);

        // return redirect()->back()->with('success', 'Role assigned successfully');
        return response()->json(['success' => 'Role assigned successfully']);
    }
}
