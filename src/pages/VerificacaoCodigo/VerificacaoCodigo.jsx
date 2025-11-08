import React from 'react';
import styles from './VerificacaoCodigo.module.css';
import illustration from '../../assets/esqueci-minha-senha-img.png';
import HeaderDois from '../../components/headerdois/headerdois';
import { useNavigate } from 'react-router-dom';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import { useMediaQuery } from "@uidotdev/usehooks"

function VerificacaoCodigo() {

  const navigate = useNavigate();

  const isMobile = useMediaQuery("only screen and (max-width:1445px)")

  const handleClick = () => {
    navigate('/mudarsenha');
  };

  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDois />}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.formContainer}>
            <div className={styles.header}>
              <a href="/esqueciminhasenha" className={styles.backLink}>
                &lt; Voltar
              </a>
              <h1 className={styles.title}>Verifique o código</h1>
              <p className={styles.subtitle}>
                Um código de autenticação foi enviado para seu e-mail.
              </p>
              <p className={styles.email}>
                nomedoemail@gmail.com
              </p>
            </div>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <div className={styles.codeInputs}>
                  <input type="text" maxLength="1" className={styles.codeInput} />
                  <input type="text" maxLength="1" className={styles.codeInput} />
                  <input type="text" maxLength="1" className={styles.codeInput} />
                  <input type="text" maxLength="1" className={styles.codeInput} />
                  <input type="text" maxLength="1" className={styles.codeInput} />
                  <input type="text" maxLength="1" className={styles.codeInput} />
                </div>
              </div>
              <a href="#" className={styles.resendLink}>
                Não recebeu o código? <span>Reenviar código</span>
              </a>
              <button className={styles.buttonVerify} onClick={handleClick}>
                Verificar
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

export default VerificacaoCodigo