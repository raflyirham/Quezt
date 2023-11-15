<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $table = 'roles';

    protected $primaryKey = 'RoleID';

    protected $fillable = [
        'RoleName',
    ];

    public function users()
    {
        return $this->hasMany(User::class, 'RoleID', 'RoleID');
    }

    public function userroles()
    {
        return $this->hasMany(UserRole::class, 'RoleID', 'RoleID');
    }
}
