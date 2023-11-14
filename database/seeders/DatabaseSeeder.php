<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Seeders\AnswerDetailSeeder;
use Database\Seeders\AnswerHeaderSeeder;
use Database\Seeders\CourseSeeder;
use Database\Seeders\MajorSeeder;
use Database\Seeders\MembershipSeeder;
use Database\Seeders\MembershipTypeSeeder;
use Database\Seeders\QuestionAnswerSeeder;
use Database\Seeders\QuestionDetailSeeder;
use Database\Seeders\QuestionHeaderSeeder;
use Database\Seeders\TutorSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            UserSeeder::class,
            TutorSeeder::class,
            MembershipTypeSeeder::class,
            MembershipSeeder::class,
            MajorSeeder::class,
            CourseSeeder::class,
            AnswerHeaderSeeder::class,
            AnswerDetailSeeder::class,
            QuestionHeaderSeeder::class,
            QuestionDetailSeeder::class,
            QuestionAnswerSeeder::class,
        ]);
    }
}
