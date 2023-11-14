<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    use HasFactory;

    protected $primaryKey = 'MajorID';

    protected $fillable = [
        'MajorName',
        'MajorSlug',
        'MajorDescription',
    ];

    public function courses()
    {
        return $this->hasMany(Course::class, 'MajorID', 'MajorID');
    }
}
