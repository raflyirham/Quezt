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
            'QuestionTitle' => 'Apa itu Laravel?',
            'QuestionDetail' => 'Jelaskan apa itu Laravel secara komprehensif!',
            'QuestionDate' => now(),
        ]);
    }
}
