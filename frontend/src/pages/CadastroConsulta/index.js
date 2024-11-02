import Consulta from "../../components/Consulta";
import TituloPages from "../../components/TituloPages";
import ProtecaoPagina from '../../components/ProtecaoPagina';


function CadastroConsulta(){
    return(
        <>
        <ProtecaoPagina/>
        <TituloPages titulo="Agendar Consulta"/>
        <Consulta/>
        </>
    )
    }

 export default CadastroConsulta;