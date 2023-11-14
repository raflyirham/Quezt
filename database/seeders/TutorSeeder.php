<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TutorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('tutors')->insert([
            'TutorName' => 'Quezt Tutor',
            'TutorEmail' => 'tutor@quezt.com',
            'TutorPassword' => bcrypt('12345'),
            'TutorRegisteredDate' => now(),
        ]);
    }
}
