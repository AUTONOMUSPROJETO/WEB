import React from 'react';
import styles from './CardTipoCadastro.module.css';
import { FaUserTie, FaUser } from 'react-icons/fa';

const CardTipoCadastro = ({ selected, onChange }) => {
  const handleChange = (tipo) => {
    onChange(tipo); // Garante que o tipo está sendo passado corretamente
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Cadastre-se como cliente ou profissional</h2>
      
      <div className={styles.opcoes}>
        <div 
          className={`${styles.card} ${selected === 'profissional' ? styles.selecionado : ''}`}
          onClick={() => handleChange('profissional')}
        >
          <input
            type="radio"
            name="tipoCadastro"
            value="profissional"
            checked={selected === 'profissional'}
            onChange={() => {}}
            className={styles.radioInput}
          />
          <div className={styles.cardContent}>
            <div className={styles.iconeContainer}>
              <FaUserTie className={styles.icone} />
            </div>
            <span className={styles.texto}>Estou a procura de um cliente</span>
          </div>
        </div>

        <div 
          className={`${styles.card} ${selected === 'cliente' ? styles.selecionado : ''}`}
          onClick={() => handleChange('cliente')}
        >
          <input
            type="radio"
            name="tipoCadastro"
            value="cliente"
            checked={selected === 'cliente'}
            onChange={() => {}}
            className={styles.radioInput}
          />
          <div className={styles.cardContent}>
            <div className={styles.iconeContainer}>
              <FaUser className={styles.icone} />
            </div>
            <span className={styles.texto}>Estou a procura de um profissional</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTipoCadastro;