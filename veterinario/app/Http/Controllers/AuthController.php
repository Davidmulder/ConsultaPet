<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first(); // verifica se email esta na base

        // Verificar se o usuário existe e se a senha está correta
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Credenciais inválidas'], 401);
        }

        // Gerar um novo api_token
        $user->api_token = Str::random(60); // Gera um token aleatório
        $user->save();


         // Retornar o token para o cliente
         return response()->json([
            'message' => 'Login bem-sucedido',
            'id'=>$user->id,
            'api_token' => $user->api_token
        ]);
    }
}
