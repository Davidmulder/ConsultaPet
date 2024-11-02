import styles from './Banner.module.css';

function Banner({imagem}){

    return(
        <div className={styles.capa}>
            <img src={`/imagens/${imagem}`} alt="Banner" className={styles.bannerImg} />
        </div>
    )
}

export default Banner;