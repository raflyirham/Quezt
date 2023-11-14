<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    use HasFactory;

    protected $primaryKey = 'TutorID';

    protected $fillable = [
        'TutorName',
        'TutorPassword',
        'TutorName',
        'TutorRegisteredDate',
    ];

    public function answerheaders()
    {
        return $this->hasMany(AnswerHeader::class, 'TutorID', 'TutorID');
    }
}
