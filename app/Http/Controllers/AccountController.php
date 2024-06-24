<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AccountController extends Controller
{
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
