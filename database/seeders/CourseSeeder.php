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

        DB::table('courses')->insert([
            'CourseName' => 'Pemrograman Berorientasi Objek',
            'CourseSlug' => 'pemrograman-berorientasi-objek',
            'CourseDescription' => 'Pemrograman Berorientasi Objek merupakan mata kuliah yang mempelajari tentang pemrograman berorientasi objek.',
            'MajorID' => 1,
        ]);

        DB::table('courses')->insert([
            'CourseName' => 'Ekonomi Mikro',
            'CourseSlug' => 'ekonomi-mikro',
            'CourseDescription' => 'Ekonomi Mikro merupakan mata kuliah yang mempelajari tentang ekonomi mikro.',
            'MajorID' => 2,
        ]);

        DB::table('courses')->insert([
            'CourseName' => 'Ekonomi Makro',
            'CourseSlug' => 'ekonomi-makro',
            'CourseDescription' => 'Ekonomi Makro merupakan mata kuliah yang mempelajari tentang ekonomi makro.',
            'MajorID' => 2,
        ]);

        DB::table('courses')->insert([
            'CourseName' => 'Ilmu Sosial Dasar',
            'CourseSlug' => 'ilmu-sosial-dasar',
            'CourseDescription' => 'Ilmu Sosial Dasar merupakan mata kuliah yang mempelajari tentang ilmu sosial dasar.',
            'MajorID' => 10,
        ]);

        DB::table('courses')->insert([
            'CourseName' => 'Kalkulus 2',
            'CourseSlug' => 'kalkulus-2',
            'CourseDescription' => 'Kalkulus 2 merupakan mata kuliah yang mempelajari tentang kalkulus 2.',
            'MajorID' => 11,
        ]);
    }
}
