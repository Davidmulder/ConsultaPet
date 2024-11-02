import styles from './usuario.module.css';
import React, { useState, useEffect } from 'react';

function Usuario() {
    // Estados para armazenar os valores dos campos do formulário
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const [message, setMessage] = useState(''); // Estado para armazenar a mensagem da API
    const userId = localStorage.getItem('userId');
    const apiUrl = `http://127.0.0.1:8000/usuarios/${userId}`;
    const apiToken = localStorage.getItem('userToken');

    //=========================================================================
        // Função para buscar dados do usuário
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'api_token': apiToken,
                    }
                });
                if (!response.ok) {
                    throw new Error('Erro ao carregar dados do usuário.');
                }
                const data = await response.json();
                setName(data.name);
                setEmail(data.email);
            } catch (error) {
                console.error('Erro na requisição:', error);
                setMessage('Erro na conexão com o servidor');
            }
        };

        fetchUserData();
    }, [apiUrl, apiToken]);

    //==========================================================================

    // Função para lidar com o envio do formulário
    
    const handleSubmit = async (e) => {
        e.preventDefault();

         // Cria um objeto de dados, incluindo `password` apenas se preenchido
         const updatedData = {
            name,
            email,
        };
        
        if (password) {
            updatedData.password = password;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'api_token': apiToken,
                    'Content-Type': 'application/json', // Adiciona Content-Type JSON
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) { // 200
                const data = await response.json();
                setMessage(data.message); // Exibe a mensagem recebida da API
            } else {
                setMessage('Erro ao atualizar os dados');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            setMessage('Erro na conexão com o servidor');
        }
    };

    return (
        <div className={`${styles.usuarioContainer} ${styles.container}`}>
        {message && <p className={styles.message}>{message}</p>} {/* Exibe a mensagem da API */}

            <form onSubmit={handleSubmit} className={styles.usuarioForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Altere a senha atual</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua nova senha"
                    />
                </div>

                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
    }
    
    export default Usuario;