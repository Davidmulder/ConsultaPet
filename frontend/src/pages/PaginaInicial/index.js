
import MenuGeral from "../../components/MenuGeral";
import TituloPages from "../../components/TituloPages";
import ProtecaoPagina from '../../components/ProtecaoPagina';

function PaginaInicial() {
    return (
    <>
    <ProtecaoPagina/>
    <TituloPages titulo="Pagina Inicial"/>
    <MenuGeral/>
    
    </>
    )
    }
    
    export default PaginaInicial;