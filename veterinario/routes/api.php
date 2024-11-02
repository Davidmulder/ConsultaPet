<?php

use App\Http\Controllers\Api\ConsultaController;
use App\Http\Controllers\Api\MedicoController;
use App\Http\Controllers\Api\UsuarioController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


// Rota de login sem proteção de token
Route::post('login', [AuthController::class, 'login']);

// Agrupar todas as rotas protegidas dentro do middleware 'auth.token'
Route::middleware('auth.token')->group(function () {

    Route::prefix('consultas')->group(function () {
        Route::get('/', [ConsultaController::class, 'index']);
        Route::post('/add', [ConsultaController::class, 'AddConsulta']);
        Route::get('/{id}', [ConsultaController::class, 'ConsultaDetalhe']);
        Route::put('/update/{id}', [ConsultaController::class, 'UpdateConsulta']);
        Route::delete('/{id}', [ConsultaController::class, 'destroy']);
        Route::put('/cancelar/{id}', [ConsultaController::class, 'CancelaConsulta']);
    });

    Route::apiResource('medicos', MedicoController::class);
    Route::apiResource('usuarios', UsuarioController::class);

    // Rota de perfil do usuário
    Route::get('user-profile', [UsuarioController::class, 'profile']);
});




