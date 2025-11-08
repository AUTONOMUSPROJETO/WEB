import React from 'react';
// Importe o seu Header aqui (ajuste o caminho se necessário)
import HeaderDois from '../../components/headerdois/headerdois.jsx';
// Importe o arquivo de estilos (CSS Module)
import styles from './AprovarProfissionais.module.css';
// Importe a imagem de perfil (lembre-se de ajustar o caminho)


function AprovarProfissionais() {
  return (
    // Usamos um React.Fragment (<>) para agrupar o Header e o conteúdo principal
    <>
      {/* SEU HEADER É RENDERIZADO AQUI */}
      <HeaderDois />

      {/* O conteúdo principal da página agora está dentro de uma tag <main> */}
      <main className={styles.pageContainer}>
        
        {/* O card do profissional */}
        <div className={styles.card}>
          
          <img src="/src/assets/roberto.png"  alt="Foto de Roberto de Souza" className={styles.profilePic} />
          
          <div className={styles.cardContent}>
            <h3>ROBERTO DE SOUZA</h3>
            
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>R$70/h</span>
              <span className={styles.tag}>Tecnologia</span>
              <span className={styles.tag}>presencial e online</span>
            </div>
            
            <p>
              Sou Roberto, técnico de TI com ampla experiência no suporte e na resolução de problemas tecnológicos. Especializado em oferecer soluções rápidas, eficazes e personalizadas, atuo com foco em garantir a continuidade e o bom desempenho dos...
            </p>
            
            <button className={styles.detailsButton}>
              VER DETALHES
            </button>
          </div>
          
        </div>

      </main>
    </>
  );
}

export default AprovarProfissionais;