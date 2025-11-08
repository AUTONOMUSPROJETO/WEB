import React, { useState } from 'react';
import styles from './CriacaoAnuncioClienteDois.module.css';
import { useNavigate } from "react-router-dom";
import HeaderDoisCliente from '../../components/HeaderDoisCliente/HeaderDoisCliente';

function CriacaoAnuncioClienteDois() {
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState(''); 
    
    return (
        <div className={styles.container}>
            <HeaderDoisCliente />

            <div className={styles.mainContent}>
                {/* Coluna da Imagem */}
                <div className={styles.imageColumn}>
                    <img src="/src/assets/anuncioClienteImg.png" alt="Happy 3D character" className={styles.characterImage} />
                </div>

                {/* Coluna de Texto */}
                <div className={styles.textColumn}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Digite uma descrição mais detalhada sobre o trabalho que você precisa</h1>
                        <p className={styles.subtitle}>Explique com clareza o que você está buscando. Quanto mais detalhes você fornecer, mais fácil será para o profissional entender sua necessidade e oferecer um bom serviço.</p>
                        
                        {/* Nova seção adicionada, conforme a imagem */}
                        <div className={styles.infoList}>
                            <p className={styles.infoTitle}>Tente incluir informações como:</p>
                            <ul>
                                <li>Tipo de serviço</li>
                                <li>Prazo desejado</li>
                                <li>Materiais fornecidos ou não</li>
                            </ul>
                        </div>

                        <textarea
                            className={styles.descriptionTextarea}
                            placeholder="Digite aqui"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            rows="8" 
                        ></textarea>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar}></div>
                </div>

                <div className={styles.footerButtons}>
                    <button className={styles.backButton} onClick={() => navigate("/criacaoanuncioclienteum")}>Voltar</button>
                    <button className={styles.nextButton} onClick={() => navigate("/criacaoanuncioclientetres")}>Próximo</button>
                </div>
            </footer>
        </div>
    );
};

export default CriacaoAnuncioClienteDois;