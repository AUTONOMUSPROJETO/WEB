import { Routes as AppRoutes, Route, BrowserRouter } from "react-router-dom";

// Páginas Gerais
import Home from "../pages/Home";
import CadastroCliente from '../pages/CadastroCliente/CadastroCliente.jsx';
import TipoCadastro from '../pages/TipoCadastro/TipoCadastro.jsx';
import Login from '../pages/Login/Login.jsx';
import EsqueciMinhaSenha from '../pages/EsqueciMinhaSenha/EsqueciMinhaSenha.jsx';
import CadastroProfissional from '../pages/CadastroTrabalhador/CadastroTrabalhador.jsx';
import Contato from '../pages/Contato/Contato.jsx';
import Chat from '../pages_pos_login_comum/Chat/Chat';
import Agenda from '../pages_pos_login_comum/Agenda/Agenda';
import VerificacaoCodigo from '../pages/VerificacaoCodigo/VerificacaoCodigo.jsx';
import MudarSenha from '../pages/MudarSenha/MudarSenha.jsx';
import SaibaMais from "../pages/SaibaMais/SaibaMais.jsx";

// Páginas dos Trabalhadores
import HomeTrabalhador from "../pages_trabalhadores/HomeTrabalhador/HomeTrabalhador.jsx";
import PerfilTrabalhador from "../pages_trabalhadores/PerfilTrabalhador/PerfilTrabalhador.jsx";
import AnunciosDeClientes from "../pages_trabalhadores/AnunciosDeClientes/AnunciosDeClientes.jsx";
import AnuncioPerfilCliente from "../pages_trabalhadores/AnuncioPerfilCliente/AnuncioPerfilCliente.jsx";
import ConfiguracaoPerfilUm from "../pages_trabalhadores/ConfiguracaoPerfilUm/ConfiguracaoPerfilUm.jsx";
import ConfiguracaoPerfilDois from "../pages_trabalhadores/ConfiguracaoPerfilDois/ConfiguracaoPerfilDois.jsx";
import ConfiguracaoPerfilTres from "../pages_trabalhadores/ConfiguracaoPerfilTres/ConfiguracaoPerfilTres.jsx";
import ConfiguracaoPerfilQuatro from "../pages_trabalhadores/ConfiguracaoPerfilQuatro/ConfiguracaoPerfilQuatro.jsx";
import ConfiguracaoPerfilCinco from "../pages_trabalhadores/ConfiguracaoPerfilCinco/ConfiguracaoPerfilCinco.jsx";
import ConfiguracaoPerfilSeis from "../pages_trabalhadores/ConfiguracaoPerfilSeis/ConfiguracaoPerfilSeis.jsx";
import ConfiguracaoPerfilSete from "../pages_trabalhadores/ConfiguracaoPerfilSete/ConfiguracaoPerfilSete.jsx";

// Páginas dos Clientes
import HomeCliente from '../pages_clientes/HomeCliente/HomeCliente.jsx';
import PerfilCliente from "../pages_clientes/PerfilCliente/PerfilCliente.jsx";
import CriacaoAnuncioClienteUm from "../pages_clientes/CriacaoAnuncioClienteUm/CriacaoAnuncioClienteUm.jsx";
import CriacaoAnuncioClienteDois from "../pages_clientes/CriacaoAnuncioClienteDois/CriacaoAnuncioClienteDois.jsx";
import CriacaoAnuncioClienteTres from "../pages_clientes/CriacaoAnuncioClienteTres/CriacaoAnuncioClienteTres.jsx";
import AnunciosDeProfissionais from "../pages_clientes/AnunciosDeProfissionais/AnunciosDeProfissionais.jsx";
import AnuncioPerfilProfissional from "../pages_clientes/AnuncioPerfilProfissional/AnuncioPerfilProfissional.jsx";


// Páginas de Administração
import AprovarClientes from '../pagesAdm/AprovarClientes/AprovarClientes.jsx';
import AprovarClientes_verDetalhes from '../pagesAdm/AprovarClientes_verDetalhes/AprovarClientes_verDetalhes.jsx';
import AprovarOuRecusarDenuncias from '../pagesAdm/AprovarOuRecusarDenuncias/AprovarOuRecusarDenuncias.jsx';
import AprovarProfissionais from '../pagesAdm/AprovarProfissionais/AprovarProfissionais.jsx';
import AprovarProfissionais_verDetalhes from '../pagesAdm/AprovarProfissionais_verDetalhes/AprovarProfissionais_verDetalhes.jsx';
import Contatos_PerfisDenunciados from '../pagesAdm/Contato_PerfisDenunciados/Contato_PerfisDenunciados.jsx';


function AppRouter() {
    return (
        <BrowserRouter>
            <AppRoutes>
                {/* Rotas Gerais */}
                <Route index path="/" element={<Home />} />
                <Route path="/cadastrocliente" element={<CadastroCliente />} />
                <Route path="/tipocadastro" element={<TipoCadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/esqueciminhasenha" element={<EsqueciMinhaSenha />} />
                <Route path="/cadastroprofissional" element={<CadastroProfissional />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/verificacaocodigo" element={<VerificacaoCodigo />} />
                <Route path="/mudarsenha" element={<MudarSenha />} />
                <Route path="/saibamais" element={<SaibaMais />} />

                {/* Rotas dos Clientes */}
                <Route path="/homecliente" element={<HomeCliente />} />
                <Route path="/perfil-cliente/:id" element={<PerfilCliente />} />
                <Route path="/anuncios-profissionais" element={<AnunciosDeProfissionais />} />
                <Route path="/anuncio-perfil-profissional" element={<AnuncioPerfilProfissional />} />
                <Route path="/criacaoanuncioclienteum" element={<CriacaoAnuncioClienteUm />} />
                <Route path="/criacaoanuncioclientedois" element={<CriacaoAnuncioClienteDois />} />
                <Route path="/criacaoanuncioclientetres" element={<CriacaoAnuncioClienteTres />} />

                {/* Rotas dos Trabalhadores */}
                <Route path="/homeprestador" element={<HomeTrabalhador />} />
                <Route path="/perfil-trabalhador/:id" element={<PerfilTrabalhador />} />
                <Route path="/anuncios-clientes" element={<AnunciosDeClientes />} />
                <Route path="/anuncio-perfil-cliente" element={<AnuncioPerfilCliente />} />
                <Route path="/configuracao-perfil-pro-um" element={<ConfiguracaoPerfilUm />} />
                <Route path="/configuracao-perfil-pro-dois" element={<ConfiguracaoPerfilDois />} />
                <Route path="/configuracao-perfil-pro-tres" element={<ConfiguracaoPerfilTres />} />
                <Route path="/configuracao-perfil-pro-quatro" element={<ConfiguracaoPerfilQuatro />} />
                <Route path="/configuracao-perfil-pro-cinco" element={<ConfiguracaoPerfilCinco />} />
                <Route path="/configuracao-perfil-pro-seis" element={<ConfiguracaoPerfilSeis />} />
                <Route path="/configuracao-perfil-pro-sete" element={<ConfiguracaoPerfilSete />} />

                {/* Rotas de Administração */}
                <Route path="/aprovarclientes" element={<AprovarClientes />} />
                <Route path="/aprovarclientes-verdetalhes" element={<AprovarClientes_verDetalhes />} />
                <Route path="/aprovarourecusardenuncias" element={<AprovarOuRecusarDenuncias />} />
                <Route path="/aprovarprofissionais" element={<AprovarProfissionais />} />
                <Route path="/aprovarprofissionais-verdetalhes" element={<AprovarProfissionais_verDetalhes />} />
                <Route path="/contatos-perfisdenunciados" element={<Contatos_PerfisDenunciados />} />
            </AppRoutes>
        </BrowserRouter>
    );
}

export default AppRouter;