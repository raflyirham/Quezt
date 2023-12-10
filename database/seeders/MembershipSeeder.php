<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MembershipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('memberships')->insert([
            'UserID' => 1,
            'MembershipTypeID' => 1,
        ]);

        DB::table('memberships')->insert([
            'UserID' => 2,
            'MembershipTypeID' => 1,
        ]);

        DB::table('memberships')->insert([
            'UserID' => 3,
            'MembershipTypeID' => 2,
        ]);

        DB::table('memberships')->insert([
            'UserID' => 4,
            'MembershipTypeID' => 1,
        ]);

        DB::table('memberships')->insert([
            'UserID' => 4,
            'MembershipTypeID' => 3,
        ]);
    }
}
