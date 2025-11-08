import React, { useState } from 'react';
import estilos from './CadastroCliente.module.css';
import { useMediaQuery } from "@uidotdev/usehooks"
import FooterDois from "../../components/FooterDois/FooterDois.jsx";
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import HeaderDois from '../../components/headerdois/headerdois.jsx'
import Button from "../../components/Button"

import { useNavigate } from 'react-router-dom';

import api from "../../services/api.js"

function CadastroCliente() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("only screen and (max-width:1445px)")

  const [dadosFormulario, definirDadosFormulario] = useState({
    nomeCliente: '',
    sobrenomeCliente: '',
    emailCliente: '',
    telefoneCliente: '',
    generoCliente: '',
    estadoCliente: '',
    senhaCliente: ''
  });

  const lidarComMudanca = (evento) => {
    const { name, value } = evento.target;
    definirDadosFormulario(prev => ({ ...prev, [name]: value }));
  };

  const formatarTelefone = (valor) => {
    const numeros = valor.replace(/\D/g, '');
    const grupos = numeros.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (grupos) {
      let formatado = '';
      if (grupos[1]) formatado += `(${grupos[1]}`;
      if (grupos[2]) formatado += `) ${grupos[2]}`;
      if (grupos[3]) formatado += `-${grupos[3]}`;
      return formatado;
    }
    return valor;
  };

  const lidarComTelefone = (evento) => {
    definirDadosFormulario(prev => ({ ...prev, telefoneCliente: formatarTelefone(evento.target.value) }));
  };

  const enviarFormulario = async (evento) => {
    evento.preventDefault();
    const response = await api.post("/Cliente", dadosFormulario)

    const usuario = response.data

    navigate(`/perfil-cliente/${usuario}`);

    console.log(response)
    console.log(usuario)
  };

  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDois />}

      <div className={estilos.cabecalho}>
        <h1>Cadastre-se para utilizar todos os recursos</h1>
        <p>Já tem uma conta? <a href="/login" className={estilos.link}>Entrar aqui!</a></p>
      </div>

      <div className={estilos.container}>
        <form onSubmit={enviarFormulario} className={estilos.formulario}>

          <div className={estilos.linha}>
            <div className={estilos.grupo}>
              <label>Nome</label>
              <input
                type="text"
                name="nomeCliente"
                value={dadosFormulario.nomeCliente}
                onChange={lidarComMudanca}
                required
                className={estilos.campo}
              />
            </div>

            <div className={estilos.grupo}>
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenomeCliente"
                value={dadosFormulario.sobrenomeCliente}
                onChange={lidarComMudanca}
                required
                className={estilos.campo}
              />
            </div>
          </div>

          <div className={estilos.grupoCompleto}>
            <label>E-mail</label>
            <input
              type="email"
              name="emailCliente"
              value={dadosFormulario.emailCliente}
              onChange={lidarComMudanca}
              required
              className={estilos.campo}
            />
          </div>


          <div className={estilos.grupoCompleto}>
            <label>Telefone</label>
            <input
              type="text"
              name="telefoneCliente"
              value={dadosFormulario.telefoneCliente}
              onChange={lidarComTelefone}
              placeholder="(xx) xxxxx-xxxx"
              required
              className={estilos.campo}
            />
          </div>

          <div className={estilos.linha}>
            <div className={estilos.grupo}>
              <label>Sexo</label>
              <div className={estilos.selectContainer}>
                <select
                  name="generoCliente"
                  value={dadosFormulario.generoCliente}
                  onChange={lidarComMudanca}
                  required
                  className={estilos.campoSelect}
                >
                  <option value=""></option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div className={estilos.grupo}>
              <label>Estado</label>
              <div className={estilos.selectContainer}>
                <select
                  name="estadoCliente"
                  value={dadosFormulario.estadoCliente}
                  onChange={lidarComMudanca}
                  required
                  className={estilos.campoSelect}
                >
                    <option value=""></option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                </select>
              </div>
            </div>
          </div>


          <div className={estilos.grupoCompleto}>
            <label>Senha</label>
            <input
              type="password"
              name="senhaCliente"
              value={dadosFormulario.senhaCliente}
              onChange={lidarComMudanca}
              minLength="8"
              required
              className={estilos.campo}
            />
            <small className={estilos.dica}>A senha precisa ter no mínimo 8 caracteres</small>
          </div>

          <div className={estilos.grupoAcao}>
            <Button text="Cadastrar como cliente" className={estilos.botao}></Button>
          </div>

          <p className={estilos.rodape}><a href="/tipocadastro" className={estilos.link}>Voltar</a></p>
        </form>
      </div>
      <FooterDois />
    </>
  );
};

export default CadastroCliente;