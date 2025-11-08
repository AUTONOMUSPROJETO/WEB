import React from 'react';
import styles from './MudarSenha.module.css';
import illustration from '../../assets/esqueci-minha-senha-img.png';
import HeaderDois from '../../components/headerdois/headerdois';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import { useMediaQuery } from "@uidotdev/usehooks"

function MudarSenha() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("only screen and (max-width:1445px)")

  const handleClick = () => {
    // Navigate to a success page or handle password change logic
    navigate('/login');
  };

  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDois />}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.formContainer}>
            <div className={styles.header}>
              <a href="/verificacaocodigo" className={styles.backLink}>
                &lt; Voltar
              </a>
              <h1 className={styles.title}>Mudar senha</h1>
              <p className={styles.subtitle}>
                Defina uma nova senha para sua conta.
              </p>
            </div>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="nova-senha" className={styles.inputLabel}>
                  <Lock color="#BFBFBF" size={20} />
                  <input
                    type="password"
                    id="nova-senha"
                    className={styles.input}
                    placeholder="Nova senha"
                  />
                </label>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="confirmar-senha" className={styles.inputLabel}>
                  <Lock color="#BFBFBF" size={20} />
                  <input
                    type="password"
                    id="confirmar-senha"
                    className={styles.input}
                    placeholder="Confirmar senha"
                  />
                </label>
              </div>
              <button className={styles.buttonChangePassword} onClick={handleClick}>
                Alterar senha
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

export default MudarSenha;