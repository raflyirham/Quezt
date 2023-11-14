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
        ]);
    }
}
