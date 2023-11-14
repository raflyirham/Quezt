<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionHeader extends Model
{
    use HasFactory;

    protected $table = 'questionheaders';

    protected $primaryKey = 'QuestionID';

    protected $fillable = [
        'UserID',
        'CourseID',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'UserID', 'UserID');
    }

    public function questiondetail()
    {
        return $this->hasOne(QuestionDetail::class, 'QuestionID', 'QuestionID');
    }

    public function questionanswers()
    {
        return $this->hasMany(QuestionAnswer::class, 'QuestionID', 'QuestionID');
    }

    public function course()
    {
        return $this->belongsTo(Course::class, 'CourseID', 'CourseID');
    }
}
