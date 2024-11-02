
import styles from './TituloPages.modulo.css';


function TituloPages({ titulo }) {
    return (
        <h1 className={styles.titulo}>
            {titulo}
        </h1>
    );
}

export default TituloPages;
