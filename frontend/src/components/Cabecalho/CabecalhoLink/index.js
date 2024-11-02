import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

// vai receber url e texto do link como props (variaveis)


function CabecalhoLink({ url, children }) {    
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;