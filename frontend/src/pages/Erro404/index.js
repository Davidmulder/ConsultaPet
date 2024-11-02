import styles from './Erro404.module.css'
import foto from './404erro.jpg';
import { Link } from 'react-router-dom';
function Erro404() {
    return (

        <section className={styles.container}>
            <div className={styles.content}>
                <h3>Erro 404 - Página não encontrada</h3>
                <img src={foto} alt="erro de página" className={styles.imagemErro} />
                <p>Desculpe, a página que você está procurando não existe ou Você não tem autorização.</p>
                <Link to="/" className={styles.botaoHome}>
                    Voltar para a página inicial
                </Link>
            </div>
        </section>
    )
}

export default Erro404;