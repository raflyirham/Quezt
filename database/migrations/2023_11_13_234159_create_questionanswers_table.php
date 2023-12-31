<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('questionanswers', function (Blueprint $table) {
            $table->id('QuestionAnswerID');
            $table->foreignId('QuestionID')->constrained('questionheaders', 'QuestionID')->onDelete('cascade');
            $table->foreignId('AnswerID')->constrained('answerheaders', 'AnswerID')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questionanswers');
    }
};
