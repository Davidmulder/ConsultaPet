<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * lista todos os usuarios
     */
    public function index()
    {
        $todosusuarios= User::all()->map(function ($todosusuarios){
            return [
                'id' => $todosusuarios->id,
                'nome' => $todosusuarios->name,
                'email' => $todosusuarios->email,

            ];

           });



        return response()->json($todosusuarios); // Retornar a lista de usuários
    }

    /**
     * criar novo usuario
     */
    public function store(Request $request)
    {
        $usuario = User::create($request->all());
        return response()->json($usuario, 201);
    }

    /**
     * visualizar detalhe de usuario
     */
    public function show(string $id)
    {
        $usuarios = User::findOrFail($id);
        return response()->json($usuarios);
    }

    /**
     * atualizar usuario
     */
    public function update(Request $request, string $id)
    {
        $usuarios = User::findOrFail($id);
        $usuarios->update($request->all());
        return response()->json(['message' => 'Usuario atualizados']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       User::destroy($id);
        return response()->json(null, 204);
    }
}
