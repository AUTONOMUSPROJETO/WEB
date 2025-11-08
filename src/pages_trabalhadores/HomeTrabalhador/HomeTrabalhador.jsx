import React from 'react';
import HeaderMainTrabalhador from '../../components/HeaderMainTrabalhador/HeaderMainTrabalhador';
import CardHome from '../../components/CardHome/CardHome';
import styles from './homeTrabalhador.module.css';
import { FaCalendarAlt, FaComments, FaStar, FaSearch } from 'react-icons/fa';
import Rodape from '../../components/Rodape';

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from '@uidotdev/usehooks';
import HeaderMobileTrabalhador from '../../components/HeaderMobileTrabalhador/HeaderMobileTrabalhador';

const HomeTrabalhador = () => {
  const cardsData = [
    {
      id: 'agenda',
      title: 'Agenda inteligente',
      description: 'Preencha sua agenda com seus horários disponíveis e combine horários com os profissionais.',
      icon: <FaCalendarAlt />,
      iconColor: '#58889c',
    },
    {
      id: 'chat',
      title: 'Chat de mensagens',
      description: 'Entre em contato com os profissionais de seu interesse para tirar dúvidas e marcar horários.',
      icon: <FaComments />,
      iconColor: '#58889c',
    },
    {
      id: 'avaliacao',
      title: 'Avaliação de clientes',
      description: 'Avalie sua experiência com os clientes após a conclusão de cada trabalho para promover um ambiente mais seguro.',
      icon: <FaStar />,
      iconColor: '#58889c',
    },
    {
      id: 'trabalhos',
      title: 'Encontre trabalhos',
      description: 'Encontre trabalhos através de anúncios feitos por clientes, ofereça seus serviços diretamente para quem está precisando.',
      icon: <FaSearch />,
      iconColor: '#58889c',
    },
  ];


  const navigate = useNavigate();

    const isMobile = useMediaQuery("only screen and (max-width:1445px)")

  return (
    <div className={styles.container}>
      {isMobile ? <HeaderMobileTrabalhador /> : <HeaderMainTrabalhador />}
      <main className={styles.mainContent}>
        <div className={styles.welcomeSection}>
          <h2>Seja Bem vindo(a), FULANO</h2>
          <p>Para iniciar sua jornada de trabalho, configure o seu perfil que servirá de anúncio</p>
          <button className={styles.configButton} onClick={() => navigate("/configuracao-perfil-pro-um")}>Clique aqui para configurar seu perfil</button>
        </div>

        <div className={styles.cardsSection}>
          <h3>Conheça nossas ferramentas</h3>
          <div className={styles.cardList}>
            {cardsData.map((card) => (
              <CardHome
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                iconColor={card.iconColor}
                hoverBgColor="#CCEDFA" 
              />
            ))}
          </div>
        </div>
      </main>
      <Rodape></Rodape>
    </div>
  );
};

export default HomeTrabalhador;