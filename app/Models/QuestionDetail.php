<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionDetail extends Model
{
    use HasFactory;

    protected $primaryKey = 'QuestionID';

    protected $fillable = [
        'QuestionID',
        'QuestionDetail',
        'QuestionDate',
    ];
}
