import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Veterinario/Veterinario.module.css'
function MenuGeral() {
    const veterinarios = [
        { id: 1, foto: 'medicoveterinario.png', nome: 'Veterinários', link: '/medicos' },
        { id: 2, foto: 'prato.png', nome: 'Agendar Consulta', link: '/addconsulta' },
        { id: 3, foto: 'briquedo.png', nome: 'Consultas Agendadas', link: '/minhas-consultas' },
        { id: 4, foto: 'dados.png', nome: 'Meus Dados', link: '/meus-dados' },
        // Adicione mais veterinários conforme necessário
    ];

    return (
        <div>
        <div className={styles.veterinariosContainer}>            
            {veterinarios.map(vet => ( 
                <Link to={vet.link} key={vet.id} className={styles.veterinarioCard}>
                    <img src={`/imagens/${vet.foto}`} alt={`Foto de ${vet.nome}`} className={styles.foto} />
                    <h3 className={styles.nome}>{vet.nome}</h3>
                </Link>

            ))}
        </div>

        </div>
    );
    }
    
    export default MenuGeral;