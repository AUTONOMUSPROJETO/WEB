import React from 'react';
import styles from './HowItWorksTwo.module.css';
import workerIcon from '../../assets/homem.svg';
import waitIcon from '../../assets/esperar.svg'; 
import messageIcon from '../../assets/msgmpro.svg'; 

function HowItWorksTwo() {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.sectionHeader}>
        <h2>Prestar Serviços</h2>
        <p>Como o AutonomUS funciona para um prestador de serviços:</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <img src={workerIcon} alt="Ícone de busca" />
          <h3>Crie seu perfil</h3>
          <p>Descreva suas habilidades, defina suas especialidades e crie um perfil atrativo para ser encontrado por clientes.</p>
        </div>
        <div className={styles.step}>
          <img src={waitIcon} alt="Ícone de serviço" />
          <h3>Busque ou espere</h3>
          <p>Procure e responda a solicitações de clientes através dos anúncios por categorias ou espere interessados.</p>
        </div>
        <div className={styles.step}>
          <img src={messageIcon} alt="Ícone de pagamento" />
          <h3>Combine Horários</h3>
          <p>Entre em contato com o cliente e combine horários através da ferramenta de agenda inteligente.</p>
        </div>
      </div>
    </section>
    
    
  );
};

export default HowItWorksTwo;