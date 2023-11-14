<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MembershipTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('membershiptypes')->insert([
            'MembershipTypeName' => 'Basic',
        ]);

        DB::table('membershiptypes')->insert([
            'MembershipTypeName' => 'Premium',
        ]);

        DB::table('membershiptypes')->insert([
            'MembershipTypeName' => 'Pro',
        ]);
    }
}
