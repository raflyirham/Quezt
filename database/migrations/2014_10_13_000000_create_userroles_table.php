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
        Schema::create('userroles', function (Blueprint $table) {
            $table->id('UserRoleID');
            $table->foreignId('UserID')->constrained('users', 'UserID');
            $table->foreignId('RoleID')->constrained('roles', 'RoleID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('userroles');
    }
};
