<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $primaryKey = 'UserID';

    protected $fillable = [
        'UserName',
        'email',
        'UserUsername',
        'password',
        'UserRegisteredDate',
        'UserAvatar',
        'RoleID',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function questionheaders()
    {
        return $this->hasMany(QuestionHeader::class, 'UserID', 'UserID');
    }

    public function answerheaders()
    {
        return $this->hasMany(AnswerHeader::class, 'UserID', 'UserID');
    }

    public function membership()
    {
        return $this->hasOne(Membership::class, 'UserID', 'UserID');
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'RoleID', 'RoleID');
    }

    public function userroles()
    {
        return $this->hasMany(UserRole::class, 'UserID', 'UserID');
    }
}
