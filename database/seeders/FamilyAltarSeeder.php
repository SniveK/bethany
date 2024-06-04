<?php

namespace Database\Seeders;

use App\Models\FamilyAltar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FamilyAltarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        FamilyAltar::factory(50)->create();
    }
}
