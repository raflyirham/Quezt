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
            'UserAvatar' => 'https://quezt.s3.ap-southeast-1.amazonaws.com/public/Avatar.png',
        ]);

        DB::table('users')->insert([
            'email' => 'tutor@quezt.com',
            'password' => bcrypt('12345'),
            'UserName' => 'Quezt Tutor',
            'UserUsername' => 'quezttutor',
            'UserRegisteredDate' => now(),
            'RoleID' => 1,
            'UserAvatar' => 'https://quezt.s3.ap-southeast-1.amazonaws.com/public/Avatar.png',
        ]);

        DB::table('users')->insert([
            'email' => 'premium@quezt.com',
            'password' => bcrypt('12345'),
            'UserName' => 'Quezt Premium',
            'UserUsername' => 'queztpremium',
            'UserRegisteredDate' => now(),
            'RoleID' => 1,
            'UserAvatar' => 'https://quezt.s3.ap-southeast-1.amazonaws.com/public/Avatar.png',
        ]);

        DB::table('users')->insert([
            'email' => 'admin@quezt.com',
            'password' => bcrypt('12345'),
            'UserName' => 'Quezt Admin',
            'UserUsername' => 'queztadmin',
            'UserRegisteredDate' => now(),
            'RoleID' => 3,
            'UserAvatar' => 'https://quezt.s3.ap-southeast-1.amazonaws.com/public/Avatar.png',
        ]);
    }
}
