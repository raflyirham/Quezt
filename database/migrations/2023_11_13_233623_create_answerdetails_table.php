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
        Schema::create('answerdetails', function (Blueprint $table) {
            $table->foreignId('AnswerID')->constrained('answerheaders', 'AnswerID')->onDelete('cascade');
            $table->text('AnswerDetail');
            $table->timestamp('AnswerDate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('annswerdetails');
    }
};
