<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index()
    {
        $users = User::with(['roles', 'profile'])->paginate(50);

        return Inertia::render("Account/Index", [
            'users' => $users
        ]);
    }
    public function create()
    {
        $roles = Role::all();
        return Inertia::render("Account/CreateUpdate", [
            'roles' => $roles
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'new_email' => 'required|email|unique:users,email',
            'new_password' => 'required|min:8',
            'name' => 'required',
            'gender' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'nij' => 'required',
            'roles' => 'required|array'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->new_email,
            'password' => bcrypt($request->new_password),
        ]);

        $profile = Profile::create([
            'user_id' => $user->id,
            'gender' => $request->gender,
            'address' => $request->address,
            'phone' => $request->phone,
            'nij' => $request->nij
        ]);

        $user->roles()->sync($request->roles);
        return redirect()->route('account.index')->with('success', 'User created successfully');
    }

    public function edit(User $account)
    {
        $user = User::with(['roles', 'profile'])->find($account->id);
        $roles = Role::all();
        return Inertia::render("Account/CreateUpdate", [
            'user' => $user,
            'roles' => $roles
        ]);
    }

    public function update(Request $request, User $account)
    {
        // dd($request->gender);
        $request->validate([
            'name' => 'required',
            'gender' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'nij' => 'required',
            'roles' => 'required|array'
        ]);

        $account->update([
            'name' => $request->name,
        ]);

        $profile = $account->profile;
        $profile->gender = $request->gender;
        $profile->address = $request->address;
        $profile->phone = $request->phone;
        $profile->nij = $request->nij;
        $profile->save();

        $account->roles()->sync($request->roles);
        return redirect()->route('account.index')->with('success', 'User updated successfully');
    }

    public function destroy(User $account)
    {
        $account->roles()->detach();
        $account->delete();
        return redirect()->route('account.index')->with('success', 'User deleted successfully');
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
