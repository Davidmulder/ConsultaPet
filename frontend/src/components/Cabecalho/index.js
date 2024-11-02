
import styles from './Cabecalho.module.css';
import CabecalhoLink from './CabecalhoLink';
import { useState } from 'react';

function Cabecalho() {
        const [menuAberto, setMenuAberto] = useState(false);
    
        return (
            <header className={styles.cabecalho}>  
                {/* Botão de Menu Hamburguer para Mobile */}
                <button 
                    className={styles.menuBotao}
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    ☰
                </button>
    
                {/* Links de Navegação */}
                <nav className={`${styles.nav} ${menuAberto ? styles.menuAtivo : ''}`}>
                    <CabecalhoLink url="/">Login</CabecalhoLink>
                    <CabecalhoLink url="/medicos">Veterinarios</CabecalhoLink>
                    <CabecalhoLink url="/index">Inicio</CabecalhoLink>                    
                    <CabecalhoLink url="/addconsulta">Cadastro Consulta</CabecalhoLink>
                    <CabecalhoLink url="/minhas-consultas">Consultas Agendas</CabecalhoLink>
                    <CabecalhoLink url="/logout">Sair do Sistema</CabecalhoLink>
                </nav>
            </header>
        );
    }
    
    export default Cabecalho;