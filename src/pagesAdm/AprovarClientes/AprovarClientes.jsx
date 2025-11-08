import React from 'react';
// Importe o seu Header aqui (ajuste o caminho se necessário)
import HeaderDois from '../../components/headerdois/headerdois.jsx';
// Importe o arquivo de estilos (CSS Module)
import styles from './AprovarClientes.module.css';
// A imagem de perfil agora é da Letícia, então o import (se houver) ou o caminho deve ser atualizado.

function AprovarClientes() {
  return (
    // Usamos um React.Fragment (<>) para agrupar o Header e o conteúdo principal
    <>
      {/* SEU HEADER É RENDERIZADO AQUI */}
      <HeaderDois />

      {/* O conteúdo principal da página agora está dentro de uma tag <main> */}
      <main className={styles.pageContainer}>
        
        {/* O card do profissional */}
        <div className={styles.card}>
          
          {/* --- MUDANÇA 1: Imagem e texto alternativo atualizados --- */}
          <img src="/src/assets/leticia.png"  alt="Foto de Letícia Soares" className={styles.profilePic} />
          
          <div className={styles.cardContent}>
            {/* --- MUDANÇA 2: Nome atualizado --- */}
            <h3>LETÍCIA SOARES</h3>
            
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>R$70/h</span>
              <span className={styles.tag}>Tecnologia</span>
              <span className={styles.tag}>presencial e online</span>
            </div>
            
            {/* --- MUDANÇA 3: Parágrafo de descrição atualizado --- */}
            <p>
              Sou Letícia e estou em busca de um(a) profissional para me apoiar nas atividades diárias da área de tecnologia. Preciso de alguém com conhecimento técnico, comprometimento e responsabilidade para atuar ao meu lado, garantindo um atendimento...
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

export default AprovarClientes;