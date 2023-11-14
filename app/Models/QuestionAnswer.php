<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionAnswer extends Model
{
    use HasFactory;

    protected $table = 'questionanswers';

    protected $primaryKey = 'QuestionAnswerID';

    protected $fillable = [
        'QuestionID',
        'AnswerID',
    ];

    public function questionheader()
    {
        return $this->belongsTo(QuestionHeader::class, 'QuestionID', 'QuestionID');
    }

    public function answerheader()
    {
        return $this->belongsTo(AnswerHeader::class, 'AnswerID', 'AnswerID');
    }
}
