<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $primaryKey = 'CourseID';

    protected $fillable = [
        'CourseName',
        'CourseSlug',
        'CourseDescription',
        'MajorID',
    ];

    public function major()
    {
        return $this->belongsTo(Major::class, 'MajorID', 'MajorID');
    }

    public function questionheaders()
    {
        return $this->hasMany(QuestionHeader::class, 'CourseID', 'CourseID');
    }
}
