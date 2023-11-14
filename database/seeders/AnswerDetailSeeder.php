<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnswerDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('answerdetails')->insert([
            'AnswerID' => 1,
            'AnswerDetail' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem consectetur in ex, necessitatibus, facere deserunt at dolores fugit nostrum earum quis nihil ipsa. At placeat quibusdam quisquam est ad!',
            'AnswerDate' => now(),
        ]);
    }
}
