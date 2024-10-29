<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Veterinario;
use Illuminate\Http\Request;

class MedicoController extends Controller
{
    /**
     * lista todos os medicos
     */
    public function index()
    {
       $veterinario = Veterinario::all()->map(function ($veterinario){
        return [
            'id' => $veterinario->id,
            'nome' => $veterinario->nome,
            'texto' => $veterinario->texto, // Certifique-se de que esse campo existe na tabela
            'imagem' => $veterinario->imagem, // Armazena apenas o nome da imagem
            'imagem_url' => asset('storage/images/' . $veterinario->imagem), // URL da imagem
        ];

       });
       return response()->json($veterinario);
    }

    /**
     * adiciona novos medicos veterianarios
     */
    public function store(Request $request)
    {
        $veterinario = Veterinario::create($request->all());
        return response()->json($veterinario, 201);
    }

    /**
     * detalhe do medico
     */
    public function show(string $id)
    {
        $veterinario = Veterinario::findOrFail($id);
        return response()->json($veterinario);
    }

    /**
     * Update veterinario
     */
    public function update(Request $request, string $id)
    {
        $veterinario = Veterinario::findOrFail($id);
        $veterinario->update($request->all());
        return response()->json($veterinario);
    }

    /**
     * Remove veteriarios
     */
    public function destroy(string $id)
    {
        Veterinario::destroy($id);
        return response()->json(null, 204);
    }
}
