<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FamilyAltar>
 */
class FamilyAltarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'identification_number' => fake()->ean8(),
            'address' => fake()->address(),
            'birth' => fake()->date(),
            'phone' => fake()->phoneNumber(),
            'fa_member' => fake()->company(),
        ];
    }
}
