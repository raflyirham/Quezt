<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('users')->insert([
            'email' => 'user@quezt.com',
            'password' => bcrypt('12345'),
            'UserName' => 'Quezt User',
            'UserUsername' => 'queztuser',
            'UserRegisteredDate' => now(),
            'RoleID' => 1,
        ]);

        DB::table('users')->insert([
            'email' => 'tutor@quezt.com',
            'password' => bcrypt('12345'),
            'UserName' => 'Quezt Tutor',
            'UserUsername' => 'queztutor',
            'UserRegisteredDate' => now(),
            'RoleID' => 1,
        ]);

        DB::table('users')->insert([
            'email' => 'premium@quezt.com',
            'password' => bcrypt('12345'),
            'UserName' => 'Quezt Premium',
            'UserUsername' => 'quezpremium',
            'UserRegisteredDate' => now(),
            'RoleID' => 1,
        ]);
    }
}
