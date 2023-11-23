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
            'AnswerDetail' => 'Laravel adalah sebuah framework aplikasi web berbasis PHP yang open-source. Dibuat oleh Taylor Otwell, Laravel dirancang untuk membuat pengembangan aplikasi web lebih cepat dan lebih efisien dengan menyediakan seperangkat alat dan konvensi yang dapat digunakan pengembang. Framework ini memanfaatkan konsep-konsep modern dalam pengembangan web dan menyediakan berbagai fitur yang dapat membantu dalam membangun aplikasi yang maintainable dan scalable.',
            'AnswerDate' => now(),
        ]);
    }
}
