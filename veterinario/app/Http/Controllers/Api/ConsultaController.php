<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Consulta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class ConsultaController extends Controller
{
    /**
     * lista todos da as consultas
     */
    public function index()
    {
        $TodasConsulta=Consulta::with('veterinario')->get()->map(function ($Consulta) { // relaciona com tabela veterinario
            return [
                'id' => $Consulta->id,
                'nome' => $Consulta->nome_paciente,
                'tutor' => $Consulta->nome_tutor,
                'status' => $Consulta->status,
                'data_hora' => $Consulta->data_hora,
                'veterinario'=>$Consulta->veterinario->nome ?? 'N?A',
            ];

           });

           return response()->json($TodasConsulta); // Retornar a lista consultas
    }

    /**
     * criar nova consulta
     */
    public function AddConsulta(Request $request)
    {
        // Definindo as regras de validação e mensagens personalizadas
        $validator = Validator::make($request->all(), [
            'veterinario_id' => 'required|exists:veterinarios,id',
            'nome_paciente' => 'required|string|max:255',
            'especie' => 'required|string|max:100',
            'raca' => 'required|string|max:100',
            'nome_tutor' => 'required|string|max:255',
            'motivo_consulta' => 'required|string|max:500',
            'data_hora' => 'required|date',
            'status' => 'required|in:concluida,pendente,cancelado',
        ], [
            'veterinario_id.required' => 'O campo veterinário é obrigatório.',
            'veterinario_id.exists' => 'O veterinário especificado não existe.',
            'nome_paciente.required' => 'O nome do paciente é obrigatório.',
            'especie.required' => 'O campo espécie é obrigatório.',
            'raca.required' => 'O campo raça é obrigatório.',
            'nome_tutor.required' => 'O nome do tutor é obrigatório.',
            'motivo_consulta.required' => 'O motivo da consulta é obrigatório.',
            'data_hora.required' => 'A data e hora são obrigatórias.',
            'data_hora.date' => 'O campo data e hora deve estar em um formato de data válido.',
            'status.required' => 'O status é obrigatório.',
            'status.in' => 'O status deve ser "concluida" ou "Cancelado" ou "pendente".',
        ]);

         // Verificando se a validação falhou
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Erro de validação',
                'errors' => $validator->errors()
            ], 422);
        }

        $consulta = Consulta::create($request->all());
        return response()->json([
            'message' => 'Consulta criada com sucesso!',
            'consulta' => $consulta
        ], 201);



    }

    /**
     * visualizar detalhe de consulta
     */
    public function ConsultaDetalhe($id)
    {
         // Verifica se o ID é fornecido e válido
        if (!$id || !is_numeric($id)) {
            return response()->json([
                'error' => 'ID inválido ou não fornecido.',
            ], 400);
        }

        $consulta = Consulta::with('veterinario')->findOrFail((int) $id);

        // Se a consulta não for encontrada, retorna um erro
        if (!$consulta) {
            return response()->json([
                'error' => 'Consulta não encontrada.',
            ], 404);
        }

         // Mapeia os dados para retornar
            $consultaDetalhada = [
                'id' => $consulta->id,
                'nome' => $consulta->nome_paciente,
                'tutor' => $consulta->nome_tutor,
                'status' => $consulta->status,
                'data_hora' => $consulta->data_hora,
                'medico_nome' => $consulta->veterinario->nome ?? 'N/A', // Nome do veterinário
            ];



         return response()->json($consultaDetalhada);
    }

    /**
     * Atualizar consulta
     */
    public function UpdateConsulta(Request $request, string $id)
    {

        try{
        // Define as regras de validação para os campos obrigatórios
            $validatedData = $request->validate([
            'veterinario_id' => 'required|integer|exists:veterinarios,id',
            'nome_paciente' => 'required|string|max:255',
            'especie' => 'required|string|max:100',
            'raca' => 'required|string|max:100',
            'nome_tutor' => 'required|string|max:255',
            'motivo_consulta' => 'required|string',
            'data_hora' => 'required|date',
            'status' => 'required|in:concluida,pendente,cacelado',
            ]);


            $consulta = Consulta::findOrFail($id);

            $consulta->update($validatedData);

            return response()->json([
                'message' => 'Consulta atualizada com sucesso.',
                'data' => $consulta
            ]);

            }catch (ValidationException $e) {
                // Retorna uma resposta personalizada em caso de erro de validação
                return response()->json([
                    'message' => 'Erro de validação nos dados fornecidos.',
                    'errors' => $e->errors()
                ], 422);
        }

    }

    /**
     * excluir consulta
     */
    public function destroy(string $id)
    {
        // Verifica se o ID é fornecido e válido
        if (!$id || !is_numeric($id)) {
            return response()->json([
                'error' => 'ID inválido ou não fornecido.',
            ], 400);
        }
        Consulta::destroy($id);
        return response()->json(null, 204);
    }

    public function CancelaConsulta($id){

         // Verifica se o ID é fornecido e válido
         if (!$id || !is_numeric($id)) {
            return response()->json([
                'error' => 'ID inválido ou não fornecido.',
            ], 400);
        }

        $consulta= Consulta::findOrFail($id);
        $consulta->status = 'cancelado';
        $consulta->save();


        // Retorna uma resposta JSON confirmando o cancelamento
        return response()->json([
            'message' => 'Consulta cancelada com sucesso.',
            'data' => [
                'id' => $consulta->id,
                'status' => $consulta->status,
                'nome_paciente' => $consulta->nome_paciente,
            ]
        ]);




    }
}
