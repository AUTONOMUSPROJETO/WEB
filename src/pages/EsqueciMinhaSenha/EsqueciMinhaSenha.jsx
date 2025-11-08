import React from 'react';
import styles from './EsqueciMinhaSenha.module.css';
import illustration from '../../assets/esqueci-minha-senha-img.png'; // Substitua pelo caminho real da sua imagem
import HeaderDois from '../../components/headerdois/headerdois';
import { useNavigate } from 'react-router-dom';


import { Mail } from 'lucide-react';

function EsqueciMinhaSenha() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/verificacaocodigo'); 
  };


  return (
    <>
    <HeaderDois></HeaderDois>
    <div className={styles.container}>

      <div className={styles.content}>
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <a href="/login" className={styles.backLink}>
              &lt; Voltar para o login
            </a>
            <h1 className={styles.title}>Esqueceu sua senha?</h1>
            <p className={styles.subtitle}>
              Não se preocupe, isso acontece com todos nós. Insira seu e-mail abaixo para recuperar sua senha.
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                    <Mail color="#BFBFBF" size={20} />{/* Ícone de email */}
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="Email"
                />
              </label>
            </div>
            <button className={styles.buttonNext}   onClick={handleClick}>
                Próximo
            </button>
          </form>
        </div>
        <div className={styles.illustrationContainer}>
          <img src={illustration} alt="Ilustração de uma pessoa usando um notebook" className={styles.illustration} />
        </div>
      </div>
    </div>
    </>
  );
}

export default EsqueciMinhaSenha;