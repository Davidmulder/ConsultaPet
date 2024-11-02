import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Limpa os dados do localStorage ou sessionStorage
        localStorage.removeItem('userId');         
        sessionStorage.clear(); 

        
        navigate('/'); // Redireciona para a rota de login
    }, [navigate]);

    return (
        <div>
            <p>Saindo...</p>
        </div>
    );
}

export default Logout;
