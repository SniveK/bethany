<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DiakoniaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) {
            \App\Models\Diakonia::create([
                'requester_first_name' => fake()->firstName(),
                'requester_last_name' => fake()->lastName(),
                'requester_phone_number' => fake()->e164PhoneNumber(),
                'requester_birth_date' => fake()->date(),
                'status' => 'Diserahkan',
                'requester_help' => [[
                    'type' => 'makanan',
                    'amount' => 100000,
                    'notes' => 'note',
                ], [
                    'type' => 'makanan',
                    'amount' => 100000,
                    'notes' => 'note',
                ]],
                'user_id' => 1,
                'family_altar_id' => 1,
            ]);
        }
    }
}
