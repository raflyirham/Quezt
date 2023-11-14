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
        Schema::create('questionheaders', function (Blueprint $table) {
            $table->id('QuestionID');
            $table->foreignId('UserID')->constrained('users', 'UserID');
            $table->foreignId('CourseID')->constrained('courses', 'CourseID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questionheaders');
    }
};
