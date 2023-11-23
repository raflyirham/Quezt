<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MajorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('majors')->insert([
            'MajorName' => 'Teknik Informatika',
            'MajorSlug' => 'teknik-informatika',
            'MajorDescription' => 'Teknik Informatika merupakan jurusan yang mempelajari tentang teknologi informasi dan komputer.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Ilmu Ekonomi',
            'MajorSlug' => 'ilmu-ekonomi',
            'MajorDescription' => 'Ilmu Ekonomi merupakan jurusan yang mempelajari tentang ilmu ekonomi.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Geografi',
            'MajorSlug' => 'geografi',
            'MajorDescription' => 'Geografi merupakan jurusan yang mempelajari tentang geografi.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Astronomi',
            'MajorSlug' => 'astronomi',
            'MajorDescription' => 'Astronomi merupakan jurusan yang mempelajari tentang astronomi.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Kedokteran',
            'MajorSlug' => 'kedokteran',
            'MajorDescription' => 'Kedokteran merupakan jurusan yang mempelajari tentang kedokteran.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Psikologi',
            'MajorSlug' => 'psikologi',
            'MajorDescription' => 'Psikologi merupakan jurusan yang mempelajari tentang psikologi.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Farmasi',
            'MajorSlug' => 'farmasi',
            'MajorDescription' => 'Farmasi merupakan jurusan yang mempelajari tentang farmasi.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Aktuaria',
            'MajorSlug' => 'aktuaria',
            'MajorDescription' => 'Aktuaria merupakan jurusan yang mempelajari tentang aktuaria.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Teknik Geologi',
            'MajorSlug' => 'teknik-geologi',
            'MajorDescription' => 'Teknik Geologi merupakan jurusan yang mempelajari tentang teknik geologi.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Sosiologi',
            'MajorSlug' => 'sosiologi',
            'MajorDescription' => 'Sosiologi merupakan jurusan yang mempelajari tentang sosiologi.',
        ]);

        DB::table('majors')->insert([
            'MajorName' => 'Matematika',
            'MajorSlug' => 'matematika',
            'MajorDescription' => 'Matematika merupakan jurusan yang mempelajari tentang matematika.',
        ]);

    }
}
