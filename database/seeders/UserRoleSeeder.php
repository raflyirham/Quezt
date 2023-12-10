<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('userroles')->insert([
            'UserID' => 1,
            'RoleID' => 1,
        ]);

        DB::table('userroles')->insert([
            'UserID' => 2,
            'RoleID' => 1,
        ]);

        DB::table('userroles')->insert([
            'UserID' => 2,
            'RoleID' => 2,
        ]);

        DB::table('userroles')->insert([
            'UserID' => 3,
            'RoleID' => 1,
        ]);

        DB::table('userroles')->insert([
            'UserID' => 4,
            'RoleID' => 1,
        ]);

        DB::table('userroles')->insert([
            'UserID' => 4,
            'RoleID' => 2,
        ]);

        DB::table('userroles')->insert([
            'UserID' => 4,
            'RoleID' => 3,
        ]);
    }
}
