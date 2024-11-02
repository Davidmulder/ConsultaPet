import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Componente de Proteção de Páginas
function ProtecaoPagina({ children }) {

    const redireciona = useNavigate();
    useEffect(() => {
        // Verifica se o usuário está logado
        const userId = localStorage.getItem('userId');
        
        if (!userId) {
            // Se não houver usuário logado, redirecionar para a página de login
            redireciona('/');
        }
    }, [redireciona]);

    return (
    
                <>
                {children}
            </>
    )
    }
    
    export default ProtecaoPagina;