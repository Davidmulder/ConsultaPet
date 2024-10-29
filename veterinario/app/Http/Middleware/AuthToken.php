<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;


class AuthToken
{

    public function handle(Request $request, Closure $next)
    {
        $token = $request->header('api_token');

        if (!$token) {
            return response()->json(['message' => 'Token não fornecido'], 401);
        }

        $user = User::where('api_token', $token)->first();

        if (!$user) {
            return response()->json(['message' => 'Token inválido ou expirado'], 401);
        }

        // Autentica o usuário para essa requisição
        // Atribuir o usuário autenticado ao request
        $request->attributes->set('auth_user', $user);

        return $next($request);




       
    }
}
