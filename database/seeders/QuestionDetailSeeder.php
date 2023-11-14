<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('questiondetails')->insert([
            'QuestionID' => 1,
            'QuestionDetail' => 'Apa itu Laravel?',
            'QuestionDate' => now(),
        ]);
    }
}
