import React from 'react';
import styles from './DownloadApp.module.css';
import phoneMockup from '../../assets/celular-mockup.png'; // Substitua pelo caminho da sua imagem

const DownloadApp = () => {
  return (
    <section className={styles.downloadApp}>
      <div className={styles.content}>
        <h2>Faça o download do nosso aplicativo</h2>
        <p>Baixe agora e tenha os melhores serviços na palma da sua mão.</p>
        <div className={styles.buttons}>
          <button className={styles.googlePlayButton}>Google Play</button>
          <button className={styles.appStoreButton}>App Store</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={phoneMockup} alt="Celulares com o aplicativo" className={styles.phoneMockup} />
      </div>
    </section>
  );
};

export default DownloadApp;