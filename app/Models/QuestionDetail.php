<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionDetail extends Model
{
    use HasFactory;

    protected $table = 'questiondetails';

    protected $primaryKey = 'QuestionID';

    protected $fillable = [
        'QuestionID',
        'QuestionTitle',
        'QuestionDetail',
        'QuestionDate',
    ];

    public function questionheader()
    {
        return $this->belongsTo(QuestionHeader::class, 'QuestionID', 'QuestionID');
    }
}
