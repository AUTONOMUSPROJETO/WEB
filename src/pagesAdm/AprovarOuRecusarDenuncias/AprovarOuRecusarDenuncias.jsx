import React from 'react';
// Assumindo o uso de um header, ajuste o nome e o caminho se necessário
import HeaderDois from '../../components/headerdois/headerdois.jsx';
import styles from './AprovarOuRecusarDenuncias.module.css';


function AprovarOuRecusarDenuncias() {
  return (
    <>
      <HeaderDois />

      <main className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          
          <h1 className={styles.pageTitle}>Perfis denunciados</h1>

          {/* Card da denúncia. Este bloco pode ser repetido para cada denúncia da lista */}
          <div className={styles.reportCard}>
            
            {/* Seção com a foto e as informações do usuário */}
            <div className={styles.userInfo}>
              <img src="/src/assets/leticia.png" alt="Foto de Letícia Soares" className={styles.profilePic} />
              <div className={styles.reportText}>
                <h4>LETÍCIA SOARES</h4>
                <p>Comportamento inadequado e violação das diretrizes da plataforma: O cliente utilizou linguagem ofensiva durante a comunicação</p>
              </div>
            </div>
            
            {/* Seção com os links de ação */}
            <div className={styles.actionLinks}>
              <a href="#" className={styles.approveLink}>Aprovar denúncia</a>
              <a href="#" className={styles.rejectLink}>Recusar denúncia</a>
            </div>

          </div>

          {/* Você pode adicionar mais cards de denúncia aqui */}

        </div>
      </main>
    </>
  );
}

export default AprovarOuRecusarDenuncias;