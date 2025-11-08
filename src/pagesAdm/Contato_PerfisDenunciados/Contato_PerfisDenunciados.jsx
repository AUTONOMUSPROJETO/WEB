import React from 'react';
import HeaderDois from '../../components/headerdois/headerdois.jsx'; // Ajuste o caminho se necessário
import styles from './Contato_PerfisDenunciados.module.css';


function Contatos_PerfisDenunciados() {
  return (
    <>
      <HeaderDois />

      <main className={styles.pageContainer}>
        {/* Usamos um wrapper para controlar a largura do conteúdo */}
        <div className={styles.contentWrapper}>
          
          <h1 className={styles.pageTitle}>Perfis denunciados</h1>

          {/* O card da denúncia. Este bloco pode ser repetido para cada denúncia */}
          <div className={styles.reportCard}>
            
            <img src="/src/assets/leticia.png"  alt="Foto de Letícia Soares" className={styles.profilePic} />
            
            <div className={styles.reportContent}>
              <h4>LETÍCIA SOARES</h4>
              <p>
                Olá, gostaria de saber como faço para contratar um profissional autônomo. Preciso saber se existe algum tipo de garantia ou avaliação dos prestadores, e como é feito o pagamento pelo serviço. Poderiam me explicar o passo a passo?
              </p>
            </div>
            
            <a href="#" className={styles.replyLink}>RESPONDER</a>
            
          </div>

          {/* Você pode adicionar mais cards de denúncia aqui */}

        </div>
      </main>
    </>
  );
}

export default Contatos_PerfisDenunciados;