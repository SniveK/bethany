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
        Schema::create('diakonias', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('status');
            //requester data
            $table->string('requester_first_name');
            $table->string('requester_last_name');
            $table->string('requester_phone_number');
            $table->date('requester_birth_date');
            $table->json('requester_help');
            //request data
            // $table->date('request_date');
            // maker
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            // Family Altar
            $table->unsignedBigInteger('family_altar_id');
            $table->foreign('family_altar_id')->references('id')->on('family_altars');
            $table->softDeletes();
        });
        //
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diakonias');
        //
    }
};
