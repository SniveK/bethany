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
            'roles' => 'required|array',
            'roles.*' => 'exists:roles,id',
        ]);

        $user = User::find($request->user_id);
        $user->roles()->sync($request->roles);

        return redirect()->back()->with('success', 'Role assigned successfully');
    }

    public function removeRole(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'roles' => 'required|array',
            'roles.*' => 'exists:roles,id',
        ]);

        $user = User::find($request->user_id);
        $user->roles()->detach($request->roles);

        return redirect()->back()->with('success', 'Role revoked successfully');
    }
}
