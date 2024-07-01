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

        $user->roles()->sync([1, 2, 3, 4, 5]);

        $user = \App\Models\User::factory()->create([
            'name' => 'Ketua Departemen',
            'email' => 'ketuadepartemen@tes.com',
            'password' => bcrypt('12345678'),
        ]);
        \App\Models\Profile::create([
            'user_id' => $user->id,
            'phone' => '08123456789',
            'gender' => 'Laki-laki',
            'nij' => '1234567890',
            'address' => 'Jl. Pahlawan No. 1',
        ]);
        $user->roles()->sync([1]);

        $user = \App\Models\User::factory()->create([
            'name' => 'Ketua Divisi',
            'email' => 'ketuadivisi@tes.com',
            'password' => bcrypt('12345678'),
        ]);
        \App\Models\Profile::create([
            'user_id' => $user->id,
            'phone' => '08123456789',
            'gender' => 'Laki-laki',
            'nij' => '1234567890',
            'address' => 'Jl. Pahlawan No. 1',
        ]);
        $user->roles()->sync([2]);

        $user = \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@tes.com',
            'password' => bcrypt('12345678'),
        ]);
        \App\Models\Profile::create([
            'user_id' => $user->id,
            'phone' => '08123456789',
            'gender' => 'Laki-laki',
            'nij' => '1234567890',
            'address' => 'Jl. Pahlawan No. 1',
        ]);
        $user->roles()->sync([3]);

        $user = \App\Models\User::factory()->create([
            'name' => 'Anggota',
            'email' => 'anggota@tes.com',
            'password' => bcrypt('12345678'),
        ]);
        \App\Models\Profile::create([
            'user_id' => $user->id,
            'phone' => '08123456789',
            'gender' => 'Laki-laki',
            'nij' => '1234567890',
            'address' => 'Jl. Pahlawan No. 1',
        ]);
        $user->roles()->sync([4]);

        $user = \App\Models\User::factory()->create([
            'name' => 'Surveyor',
            'email' => 'surveyor@tes.com',
            'password' => bcrypt('12345678'),
        ]);
        \App\Models\Profile::create([
            'user_id' => $user->id,
            'phone' => '08123456789',
            'gender' => 'Laki-laki',
            'nij' => '1234567890',
            'address' => 'Jl. Pahlawan No. 1',
        ]);
        $user->roles()->sync([5]);
    }
}
