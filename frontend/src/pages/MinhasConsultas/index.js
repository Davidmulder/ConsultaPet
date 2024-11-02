import CardConsultas from "../../components/CardConsultas";
import TituloPages from "../../components/TituloPages";
import ProtecaoPagina from '../../components/ProtecaoPagina';

function MinhasConsultas() {
    return (
        <>
        <ProtecaoPagina/>
        <TituloPages titulo="Consultas Agendas"/>
        <CardConsultas/>
    </>
    )
    }
    
    export default MinhasConsultas;