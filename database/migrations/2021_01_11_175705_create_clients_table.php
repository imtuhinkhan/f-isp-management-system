<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('client_name');
            $table->string('user_name');
            $table->string('address');
            $table->string('phone');
            $table->unsignedBigInteger('package_id');            
            $table->unsignedBigInteger('created_by');
            $table->boolean('status')->default(0)->comment('1=>active,0=>inactive');
            $table->foreign('created_by')->references('id')->on('users');
            $table->foreign('package_id')->references('id')->on('packages');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
