<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Diakonia extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'requester_first_name',
        'requester_last_name',
        'requester_phone_number',
        'requester_birth_date',
        'request_date',
        'status',
        'requester_help',
        'user_id',
        'family_altar_id',
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'requester_help' => 'array',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function familyAltar()
    {
        return $this->belongsTo(FamilyAltar::class);
    }
}
