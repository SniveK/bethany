<?php

namespace App\Policies;

use App\Models\Diakonia;
use App\Models\User;

class DiakoniaPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
    }

    public function viewAny(User $user)
    {
        return $user->roles->pluck('id')->intersect([1, 2, 3, 4])->isNotEmpty();
    }

    public function create(User $user)
    {
        return $user->roles->pluck('id')->intersect([4])->isNotEmpty();
    }

    public function update(User $user, Diakonia $diakonia)
    {
        return $user->roles->pluck('id')->intersect([4])->isNotEmpty();
    }

    public function delete(User $user, Diakonia $diakonia)
    {
        return $user->roles->pluck('id')->intersect([4])->isNotEmpty();
    }

    public function admin(User $user)
    {
        return $user->roles->pluck('id')->intersect([3])->isNotEmpty();
    }

    public function ketuaDepartemen(User $user)
    {
        return $user->roles->pluck('id')->intersect([1])->isNotEmpty();
    }

    public function ketuaDivisi(User $user)
    {
        return $user->roles->pluck('id')->intersect([2])->isNotEmpty();
    }
}
