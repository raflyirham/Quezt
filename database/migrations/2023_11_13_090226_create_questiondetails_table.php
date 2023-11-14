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
        Schema::create('questiondetails', function (Blueprint $table) {
            $table->foreignId('QuestionID')->constrained('questionheaders', 'QuestionID');
            $table->string('QuestionTitle');
            $table->text('QuestionDetail');
            $table->timestamp('QuestionDate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questiondetails');
    }
};
