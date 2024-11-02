

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Banner from "./components/Banner";
import Erro404 from "./pages/Erro404";
import SairdoSistema from "./pages/SairdoSistema";
import ListaVeterinario from "./pages/ListaVeterinario";
import PLogin from "./pages/PLogin";
import PaginaInicial from "./pages/PaginaInicial";
import CadastroConsulta from "./pages/CadastroConsulta";
import MeusDados from "./pages/MeusDados";
import MinhasConsultas from "./pages/MinhasConsultas";
import EditaConsulta from "./pages/EditaConsulta";





function AppRoutes() {
    return (
        <BrowserRouter> 
           
           <Cabecalho/>
           <Banner imagem='banner-favoritos.png'/>   
            <Routes>  {/* pagina inicial */}
                <Route path="/" element={<PLogin/>}></Route>  

                <Route path="/index" element={<PaginaInicial/>}></Route> 

                <Route path="/addconsulta" element={<CadastroConsulta/>}></Route> 

                <Route path="/meus-dados" element={<MeusDados/>}></Route>                     

                <Route path="/medicos" element={<ListaVeterinario/>}></Route> 

                <Route path="/minhas-consultas" element={<MinhasConsultas/>}></Route>  

                <Route path="/Editar-consultas/:id" element={<EditaConsulta/>}></Route>                       
                
                <Route path="/logout" element={<SairdoSistema/>}></Route>  
                {/* pagina inexistente */}
                <Route path="*" element={<Erro404/>}></Route>     
            </Routes>           
          <Rodape/>
        </BrowserRouter>
    )
}

export default AppRoutes;