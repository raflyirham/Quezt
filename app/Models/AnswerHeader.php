<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnswerHeader extends Model
{
    use HasFactory;

    protected $table = 'answerheaders';

    protected $primaryKey = 'AnswerID';

    protected $fillable = [
        'UserID',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'UserID', 'UserID');
    }

    public function answerdetail()
    {
        return $this->hasOne(AnswerDetail::class, 'AnswerID', 'AnswerID');
    }

    public function questionanswers()
    {
        return $this->hasMany(QuestionAnswer::class, 'AnswerID', 'AnswerID');
    }
}
