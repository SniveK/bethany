<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('family_altars', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('identification_number');
            $table->string('address');
            $table->date('birth');
            $table->string('phone');
            $table->string('fa_member');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('family_altars');
    }
};
