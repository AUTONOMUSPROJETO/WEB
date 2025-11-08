import React from 'react';
import CardHome from '../../components/CardHome/CardHome';
import styles from './HomeCliente.module.css';
import { FaCalendarAlt, FaComments, FaStar, FaSearch } from 'react-icons/fa';
import { FaRankingStar } from "react-icons/fa6";
import Rodape from '../../components/Rodape';
import HeaderMobileCliente from '../../components/HeaderMobileCliente/HeaderMobileCliente'
import { useMediaQuery } from "@uidotdev/usehooks"
import HeaderMainCliente from '../../components/HeaderMainCliente/HeaderMainCliente';
import { useNavigate } from "react-router-dom";

function HomeCliente() {
    const cardsData = [
        {
            id: 'agenda',
            title: 'Agenda inteligente',
            description: 'Preencha sua agenda com seus horários disponíveis e combine horários com os profissionais',
            icon: <FaCalendarAlt />,
            iconColor: '#853a29ff',
        },
        {
            id: 'chat',
            title: 'Chat de mensagens',
            description: 'Entre em contato com os profissionais de seu interesse para tirar dúvidas e marcar horários',
            icon: <FaComments />,
            iconColor: '#853a29ff',
        },
        {
            id: 'ranque',
            title: 'Ranque de profissionais',
            description: 'Compare os melhores profissionais com base em avaliações, garantindo serviços de qualidade e confiança.',
            icon: <FaRankingStar />,
            iconColor: '#853a29ff',
        },
        {
            id: 'trabalhos',
            title: 'Publique anúncios',
            description: 'Anuncie os serviços que você procura de acordo com as categorias ',
            icon: <FaSearch />,
            iconColor: '#853a29ff',
        },
        {
            id: 'avaliacao',
            title: 'Avalição de profissionais',
            description: 'Avalie sua experiência com o profissional após a conclusão de cada trabalho para promover um ambiente mais seguro',
            icon: <FaSearch />,
            iconColor: '#853a29ff',
        },
    ];

      const isMobile = useMediaQuery("only screen and (max-width:1445px)");

        const navigate = useNavigate();

    return (
        <div className={styles.container}>
                  {isMobile ? <HeaderMobileCliente  /> : <HeaderMainCliente />}
            <main className={styles.mainContent}>
                <div className={styles.welcomeSection}>
                    <h2>Seja Bem vindo(a),</h2>
                    <p>Crie um anuncio para que profissionais possam enontrar você</p>
                    <button className={styles.configButton}  onClick={() => navigate("/criacaoanuncioclienteum")}>Criar anúncio</button>
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
                            />
                        ))}
                    </div>
                </div>
            </main>
                  <Rodape></Rodape>
        </div>
    );
};

export default HomeCliente;