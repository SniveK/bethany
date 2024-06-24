<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = \App\Models\User::factory()->create([
            'name' => 'Administrator',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin123'),
        ]);
        \App\Models\Profile::create([
            'user_id' => 1,
            'phone' => '08123456789',
            'gender' => 'Laki-laki',
            'nij' => '1234567890',
            'address' => 'Jl. Pahlawan No. 1',
        ]);

        \App\Models\FamilyAltar::create([
            'name' => 'Family Altar 1',
            'address' => 'Address 1',
            'leader_start_date' => '2024-06-15',
            'user_id' => 1,
        ]);

        $this->call([
            DiakoniaSeeder::class,
            RoleSeeder::class,
        ]);

        $user->roles()->sync([1, 2, 3, 4]);
    }
}
