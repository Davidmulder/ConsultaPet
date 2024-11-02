import styles from './Veterinario.module.css';
import TituloPages from '../TituloPages'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// formato de cards

function Veterinario() {
    const [veterinarios, setVeterinarios] = useState([]);
    const [error, setError] = useState('');
    const apiToken = localStorage.getItem('userToken'); // Supondo que o token está armazenado no localStorage
    useEffect(() => {
        const fetchVeterinarios = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/medicos', {
                    headers: {
                        'api_token': apiToken,
                    },
                });

                setVeterinarios(response.data); // Supondo que a resposta é um array de objetos [{ id, nome, texto, imagem_url }]
            } catch (error) {
                setError('Erro ao carregar veterinários.'); // Define uma mensagem de erro
                console.error(error);
            }
        };

        fetchVeterinarios();
    }, [apiToken]);
 

    return (
        <div><TituloPages titulo="Médicos Veterinários"/>
        {error && <p className={styles.error}>{error}</p>}
         <div className={styles.veterinariosContainer}>
                {veterinarios.map((vet) => (
                    <div key={vet.id} className={styles.veterinarioCard}>
                        <img src={vet.imagem_url} alt={`Foto de ${vet.nome}`} className={styles.foto} />
                        <h3 className={styles.nome}>{vet.nome}</h3>
                        <p className={styles.descricao}>{vet.texto}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
    
    export default Veterinario;