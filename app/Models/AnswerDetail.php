<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnswerDetail extends Model
{
    use HasFactory;

    protected $table = 'answerdetails';

    protected $primaryKey = 'AnswerID';

    protected $fillable = [
        'AnswerID',
        'AnswerDetail',
        'AnswerDate',
    ];

    public function answerheader()
    {
        return $this->belongsTo(AnswerHeader::class, 'AnswerID', 'AnswerID');
    }
}
