import React from 'react';
import styles from './HowItWorksOne.module.css';

import searchIcon from '../../assets/pesquisa-img.svg';
import serviceIcon from '../../assets/selecao.svg'; 
import payIcon from '../../assets/contato.svg'; 


function HowItWorksOne() {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.sectionHeader}>
        <h2>Contratar Serviços </h2>
        <p>Como o AutonomUS funciona para quem precisa contratar um serviço:</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <img src={searchIcon} alt="Ícone de busca" />
          <h3>Busque</h3>
          <p>Encontre profissionais por categoria, localização e avaliação. A pesquisa é rápida e eficiente para você achar o que precisa.</p>
        </div>
        <div className={styles.step}>
          <img src={serviceIcon} alt="Ícone de serviço" />
          <h3>Contrate</h3>
          <p>Contrate diretamente pelo app ou site. Negocie os detalhes e agende o serviço de forma segura e transparente.</p>
        </div>
        <div className={styles.step}>
          <img src={payIcon} alt="Ícone de pagamento" />
          <h3>Avalie</h3>
          <p>Pague de forma segura. Após a conclusão do serviço, deixe sua avaliação e ajude a comunidade.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksOne;