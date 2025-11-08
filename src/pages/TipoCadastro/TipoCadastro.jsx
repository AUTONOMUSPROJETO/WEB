import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button/Button.jsx';
import HeaderDois from '../../components/headerdois/headerdois.jsx';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';
import CardTipoCadastro from '../../components/CardTipoCadastro/CardTipoCadastro.jsx';
import styles from './TipoCadastro.module.css';
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from 'react';
import FooterDois from "../../components/FooterDois/FooterDois.jsx";

function TipoCadastro() {

  const isMobile = useMediaQuery("only screen and (max-width:1445px)")
  const [tipoSelecionado, setTipoSelecionado] = useState(null);


  const navigate = useNavigate();

  
  const handleSeguinte = () => {
    console.log("Tipo selecionado:", tipoSelecionado); //debug funcionou

    if (!tipoSelecionado) {
      alert("Por favor, selecione um tipo de cadastro");
      return;
    }

    console.log("Navegando para:", tipoSelecionado === 'profissional'
      ? '/cadastroprofissional'
      : '/cadastrocliente');

    navigate(tipoSelecionado === 'profissional'
      ? '/cadastroprofissional'
      : '/cadastrocliente');
  };

  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDois />}

      <div className={styles.corpo}>
        <div className={styles.cards}>
          <CardTipoCadastro
            selected={tipoSelecionado}
            onChange={(tipo) => {
              console.log("Tipo selecionado no card:", tipo); // debug funcionou
              setTipoSelecionado(tipo);
            }}
          />
        </div>

        <div className={styles.caixa2}>
          <div className={styles.dentrocaixa2}>
            <Button
              text="Seguinte"
              onClick={handleSeguinte}
            />
            
            <p>Já possui uma conta? <a href="/login">Clique Aqui</a></p>
          </div>
        </div>
        <FooterDois />
      </div>
    </>
  );
}

export default TipoCadastro;