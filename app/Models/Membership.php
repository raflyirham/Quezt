<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;

    protected $primaryKey = 'MembershipID';

    protected $fillable = [
        'UserID',
        'MembershipTypeID',
    ];

    public function membershiptype()
    {
        return $this->belongsTo(MembershipType::class, 'MembershipTypeID', 'MembershipTypeID');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'UserID', 'UserID');
    }
}
