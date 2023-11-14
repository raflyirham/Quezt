<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('courses')->insert([
            'CourseName' => 'Pemrograman Web',
            'CourseSlug' => 'pemrograman-web',
            'CourseDescription' => 'Pemrograman Web merupakan mata kuliah yang mempelajari tentang pemrograman berbasis web.',
            'MajorID' => 1,
        ]);

        DB::table('courses')->insert([
            'CourseName' => 'Algoritma dan Pemrograman',
            'CourseSlug' => 'algoritma-dan-pemrograman',
            'CourseDescription' => 'Algoritma dan Pemrograman merupakan mata kuliah yang mempelajari tentang algoritma dan pemrograman.',
            'MajorID' => 1,
        ]);

        DB::table('courses')->insert([
            'CourseName' => 'Kecerdasan Buatan',
            'CourseSlug' => 'kecerdasan-buatan',
            'CourseDescription' => 'Kecerdasan Buatan merupakan mata kuliah yang mempelajari tentang kecerdasan buatan.',
            'MajorID' => 1,
        ]);
    }
}
