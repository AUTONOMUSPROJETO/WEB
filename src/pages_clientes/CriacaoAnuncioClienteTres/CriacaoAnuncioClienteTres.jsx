import React, { useState } from 'react';
import styles from './CriacaoAnuncioClienteTres.module.css';
import { useNavigate } from "react-router-dom";
import HeaderDoisCliente from '../../components/HeaderDoisCliente/HeaderDoisCliente';

function CriacaoAnuncioClienteTres() {
    const navigate = useNavigate();
    const [hourlyRate, setHourlyRate] = useState('');
    const [serviceType, setServiceType] = useState('');

    const handlePriceChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^0-9,.]/g, ''); 
        setHourlyRate(sanitizedValue);
    };

    const handleCreateProfile = () => {
        console.log("Valor por hora definido:", hourlyRate);
        console.log("Forma de atendimento definida:", serviceType);
        navigate("/criacaoanuncioclientetres"); 
    };

    return (
        <div className={styles.container}>
            <HeaderDoisCliente />

            <div className={styles.mainContent}>
                
                <div className={styles.imageColumn}>
                    <img src="/src/assets/anuncioClienteImg.png" alt="Happy 3D character" className={styles.characterImage} />
                </div>

                <div className={styles.textColumn}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Quase tudo pronto! Agora defina seu orçamento por hora e a forma de atendimento </h1>
                        <p className={styles.subtitle}>
                            Aqui você deve colocar o valor que está no seu orçamento por hora e definir se quer que o atendimento seja presencial, online ou tanto faz/sem preferência.
                        </p>
                        
                        <div className={styles.serviceTypeSection}>
                            <h2 className={styles.inputTitle}>Forma de atendimento</h2>
                            <div className={styles.inputGroup}>
                                <select
                                    className={styles.selectInput}
                                    value={serviceType}
                                    onChange={(e) => setServiceType(e.target.value)}
                                >
                                    <option value=""> </option>
                                    <option value="Presencial">Presencial</option>
                                    <option value="Online">Online</option>
                                    <option value="Tanto faz">Tanto faz/Sem preferência</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className={styles.priceSection}>
                            <h2 className={styles.inputTitle}>Valor por hora</h2>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    className={styles.priceInput}
                                    placeholder="0,00"
                                    value={hourlyRate}
                                    onChange={handlePriceChange}
                                />
                                <span className={styles.currencyLabel}>R$ /h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar}></div>
                </div>
                <div className={styles.footerButtons}>
                    <button className={styles.backButton} onClick={() => navigate("/criacaoanuncioclientedois")}>Voltar</button>
                    <button className={styles.nextButton} onClick={() => navigate("/homecliente")}>Criar perfil</button>
                </div>
            </footer>
        </div>
    );
};

export default CriacaoAnuncioClienteTres;