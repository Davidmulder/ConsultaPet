import styles from './CardConsultas.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CardConsultas() {

    const [consultas, setConsultas] = useState([]);
    const [error, setError] = useState('');
    const apiUrl = 'http://127.0.0.1:8000/consultas';
    const apiToken = localStorage.getItem('userToken');
    const redireciona = useNavigate(); // Hook de navegação

    useEffect(() => {
        const fetchConsultas = async () => {
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
                setConsultas(data);
            } catch (error) {
                setError('Erro ao carregar .'); // Define uma mensagem de erro
                console.error('Erro ao buscar consultas:', error);
            }
        };

        fetchConsultas();
    }, [apiToken]);

        // Função para formatar a data e hora
        const formatarDataHora = (dataHora) => {
            const date = new Date(dataHora);
            const dataFormatada = date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
            const horaFormatada = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            return `${dataFormatada} às ${horaFormatada}`;
        };

        // Função para navegar para a página de edição
    const handleEdit = (id) => {
        redireciona(`/Editar-consultas/${id}`);
    };

    return (
        <div className={styles.consultasContainer}>
            {error && <p className={styles.error}>{error}</p>}
            {consultas.map(consulta => (
                <div key={consulta.id} className={styles.consultaCard}
                onClick={() => handleEdit(consulta.id)} // Torna o card clicável
                >
                    <p><strong>Data e Hora:</strong> {formatarDataHora(consulta.data_hora)}</p>
                    <p><strong>Paciente:</strong> {consulta.nome}</p>
                    <p><strong>Médico:</strong> {consulta.veterinario}</p>
                    <p><strong>Status:</strong> {consulta.status}</p>
                </div>
            ))}
        </div>
    );
}

    
    export default CardConsultas;