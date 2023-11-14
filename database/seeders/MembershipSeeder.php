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
            'MembershipID' => 1,
            'UserID' => 1,
            'MembershipTypeID' => 1,
        ]);
    }
}
