<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consulta extends Model
{
    use HasFactory;

    protected $fillable = [
        'veterinario_id', 'nome_paciente', 'especie', 'raca',
        'nome_tutor', 'motivo_consulta', 'data_hora', 'status'
    ];


    public function veterinario()
    {
        return $this->belongsTo(Veterinario::class);
    }

}
