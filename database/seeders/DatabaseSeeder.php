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
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Administrator',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin123'),
        ]);
        // make a family altar
        \App\Models\FamilyAltar::factory()->create([
            'name' => 'Family Altar 1',
            'address' => 'Address 1',
            'leader_start_date' => '2024-06-15',
            'user_id' => 1,
        ]);
    }
}
