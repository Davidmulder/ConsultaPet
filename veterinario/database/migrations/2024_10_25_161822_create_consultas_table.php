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
        Schema::create('consultas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('veterinario_id')->constrained('veterinarios')->onDelete('cascade');
            $table->string('nome_paciente'); // Nome do animal
            $table->string('especie');
            $table->string('raca');
            $table->string('nome_tutor'); // Nome do dono
            $table->text('motivo_consulta');
            $table->dateTime('data_hora');
            $table->enum('status', ['pendente', 'concluída']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consultas');
    }
};
