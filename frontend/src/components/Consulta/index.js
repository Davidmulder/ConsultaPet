import React, { useState,useEffect } from 'react';
import styles from './Consulta.module.css';

function Consulta() {
    const [formData, setFormData] = useState({
        nomePaciente: '',
        especie: '',
        raca: '',
        nomeTutor: '',
        motivoConsulta: '',
        dataConsulta: '',
        horaConsulta: '',
        status: 'pendente'
    });
    //==================lista de medicos veterinario========================
        const [medicos, setMedicos] = useState([]);
        const [error, setError] = useState('');
        const [successMessage, setSuccessMessage] = useState(''); // Estado para mensagem de sucesso
        const apiUrl = 'http://127.0.0.1:8000/medicos';
        const apiToken = localStorage.getItem('userToken');

        useEffect(() => {
            const fetchMedicos = async () => {
                try {
                    const response = await fetch(apiUrl, {
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


    //==========================================

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Concatena data e hora
        const dataHora = `${formData.dataConsulta} ${formData.horaConsulta}`;

        // Monta o objeto para enviar
        const consultaData = {
            veterinario_id: formData.medicoId, // Usando o ID do médico selecionado
            nome_paciente: formData.nomePaciente,
            especie: formData.especie,
            raca: formData.raca,
            nome_tutor: formData.nomeTutor,
            motivo_consulta: formData.motivoConsulta,
            data_hora: dataHora,
            status: formData.status,
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/consultas/add', {
                method: 'POST',
                headers: {
                    'api_token': apiToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(consultaData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao adicionar consulta');
            }

            const result = await response.json();
            console.log('Consulta adicionada:', result);
            setSuccessMessage('Cadastro realizado com sucesso!'); // Define a mensagem de sucesso
            setFormData({ // Limpa o formulário
                nomePaciente: '',
                especie: '',
                raca: '',
                nomeTutor: '',
                motivoConsulta: '',
                dataConsulta: '',
                horaConsulta: '',
                status: 'pendente',
                medicoId: '',
            });

        } catch (error) {
            setError(error.message);
            console.error('Erro ao enviar consulta:', error);
        }
    };

    return (
        <div className={styles.consultaContainer}>
             {error && <p className={styles.error}>{error}</p>}
             {successMessage && <p className={styles.success}>{successMessage}</p>} {/* Exibe a mensagem de sucesso */}

            <form className={styles.form} onSubmit={handleSubmit}>
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
                        value={formData.medicoId}
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

                <button type="submit" className={styles.submitButton}>Salvar Consulta</button>
            </form>
        </div>
    );
}

export default Consulta;
