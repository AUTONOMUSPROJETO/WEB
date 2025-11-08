import React, { useState } from 'react';
import styles from './Contato.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from "../../components/Header/Header"
import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';
import Button from '../../components/Button';

const Contato = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Mensagem enviada com sucesso!');
  };


  const isMobile = useMediaQuery("only screen and (max-width:1445px)")

  return (
    <div className={styles.page}>
      
      {isMobile ? <HeaderMobile /> : <Header />}
      
      <main className={styles.mainContent}>
        <div className={styles.leftSection}>
          <img 
            src="src/assets/Contato-cli.png" 
            alt="Pessoa em um sofá" 
            className={styles.image} 
          />
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <FaPhone className={styles.icon} />
              <span>(xx) xx xxxx-xxxx</span>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <span>********@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>Rua das Palmeiras, 1234</span>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <h2 className={styles.title}>
            Algum problema? <span className={styles.titleHighlight}>Entre em contato com nossa equipe</span>
          </h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Nome completo:</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={styles.textarea} rows="10"></textarea>
            </div>
            <Button text="Enviar" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contato;