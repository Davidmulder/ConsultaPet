import React, { useState, useEffect } from 'react';
import styles from './EdiConsulta.module.css';
import { useParams } from 'react-router-dom';

function EdiConsulta() {
    const { id } = useParams(); // Obtém o ID da consulta da URL
    const [formData, setFormData] = useState({
        nomePaciente: '',
        especie: '',
        raca: '',
        nomeTutor: '',
        motivoConsulta: '',
        dataConsulta: '',
        horaConsulta: '',
        status: 'pendente',
        medicoId: null // Adicionando o campo medicoId com valor inicial null
    });
    const [medicos, setMedicos] = useState([]);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); 

    const apiToken = localStorage.getItem('userToken');

    // Função para buscar dados da consulta específica
    useEffect(() => {
        const fetchConsulta = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/consultas/${id}`, {
                    method: 'GET',
                    headers: {
                        'api_token': apiToken,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erro ao carregar consulta');
                }
                const data = await response.json();
                 // Divide data e hora
                const [dataPart, timePart] = data.data_hora.split(" ");
                
                setFormData({
                    nomePaciente: data.nome,
                    especie: data.especie,
                    raca: data.raca,
                    nomeTutor: data.tutor,
                    motivoConsulta: data.texto,
                    dataConsulta: dataPart,
                    horaConsulta: timePart.slice(0, 5),
                    status: data.status,
                    medicoId: data.medico_nome,
                });
            } catch (error) {
                setError('Erro ao carregar dados da consulta.');
                console.error('Erro ao buscar consulta:', error);
            }
        };

        fetchConsulta();
    }, [id, apiToken]);

    // Função para buscar lista de médicos
    useEffect(() => {
        const fetchMedicos = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/medicos', {
                    method: 'GET',
                    headers: {
                        'api_token': apiToken,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }

                const data = await response.json();
                setMedicos(data);
            } catch (error) {
                setError('Erro ao carregar médicos.');
                console.error('Erro ao buscar médicos:', error);
            }
        };

        fetchMedicos();
    }, [apiToken]);

    // Manipulador de mudanças no formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Manipulador de envio do formulário
    const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Combina data e hora
    const dataHora = `${formData.dataConsulta} ${formData.horaConsulta}:00`;

        try {
            const response = await fetch(`http://127.0.0.1:8000/consultas/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'api_token': apiToken,
                },
                body: JSON.stringify({
                veterinario_id: formData.medicoId,       // Campo "medicoId" renomeado para "veterinario_id"
                nome_paciente: formData.nomePaciente,    // Campo "nomePaciente" renomeado para "nome_paciente"
                especie: formData.especie,
                raca: formData.raca,
                nome_tutor: formData.nomeTutor,          // Campo "nomeTutor" renomeado para "nome_tutor"
                motivo_consulta: formData.motivoConsulta, // Campo "motivoConsulta" renomeado para "motivo_consulta"
                data_hora: dataHora,                     // Campo "data_hora" combinado de data e hora
                status: formData.status
                }),
            });
            
            const result = await response.json();

            if (!response.ok) {
                throw new Error('Erro ao salvar consulta');
            }

            setSuccessMessage(result.message || 'Consulta atualizada com sucesso!'); // Define a mensagem de sucesso
            setError(''); // Limpa a mensagem de erro se a atualização foi bem-sucedida
        } catch (error) {
            setError('Erro ao salvar consulta.');
            console.error('Erro ao enviar dados da consulta:', error);
        }
    };

    return (
        <div className={styles.consultaContainer}>
            {error && <p className={styles.error}>{error}</p>}
            {successMessage && <p className={styles.success}>{successMessage}</p>}
            <form className={styles.form} onSubmit={handleSubmit}>
                {/* Campos de entrada do formulário */}
                <div className={styles.formGroup}>
                    <label>Nome do Paciente:</label>
                    <input
                        type="text"
                        name="nomePaciente"
                        value={formData.nomePaciente}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Espécie:</label>
                    <input
                        type="text"
                        name="especie"
                        value={formData.especie}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Raça:</label>
                    <input
                        type="text"
                        name="raca"
                        value={formData.raca}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Nome do Tutor:</label>
                    <input
                        type="text"
                        name="nomeTutor"
                        value={formData.nomeTutor}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Motivo da Consulta:</label>
                    <textarea
                        name="motivoConsulta"
                        value={formData.motivoConsulta}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Data da Consulta:</label>
                    <input
                        type="date"
                        name="dataConsulta"
                        value={formData.dataConsulta}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Hora da Consulta:</label>
                    <input
                        type="time"
                        name="horaConsulta"
                        value={formData.horaConsulta}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Médico Veterinário:</label>
                    <select
                        name="medicoId"
                        value={formData.medicoId || ''} // Corrigido para garantir valor inicial
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione o médico</option>
                        {medicos.map(medico => (
                            <option key={medico.id} value={medico.id}>
                                {medico.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="pendente">Pendente</option>
                        <option value="concluido">Concluído</option>
                        <option value="cancelado">Cancelado</option>
                    </select>
                </div>

                <button type="submit" className={styles.submitButton}>Alterar Consulta</button>
            </form>
        </div>
    );
}

export default EdiConsulta;
