import React, { useState, useEffect } from 'react';
import styles from './ConfiguracaoPerfilCinco.module.css';
import { useNavigate, useLocation } from "react-router-dom";
import HeaderDoisTrabalhador from '../../components/HeaderDoisTrabalhador/HeaderDoisTrabalhador';

const FORM_DATA_KEY = 'perfilFormData';

function ConfiguracaoPerfilCinco() {
    const navigate = useNavigate();
    const location = useLocation();

    // Estados locais
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItemText, setCurrentItemText] = useState('');
    const [qualidades, setQualidades] = useState([]); // Lista desta etapa
    const [dadosAnteriores, setDadosAnteriores] = useState({});

    // Efeito para carregar dados
    useEffect(() => {
        let data = location.state;
        if (!data) {
            try {
                const storedData = sessionStorage.getItem(FORM_DATA_KEY);
                data = storedData ? JSON.parse(storedData) : null;
            } catch (error) {
                console.error("Erro ao ler dados do backup:", error);
                data = null;
            }
        }

        if (data) {
            setDadosAnteriores(data);
            // Pré-preenche a lista
            if (data.qualidades && Array.isArray(data.qualidades)) {
                setQualidades(data.qualidades);
            }
            console.log("Dados carregados na Etapa 5:", data);
        } else {
            console.warn("Nenhum dado encontrado. Voltando para Etapa 1.");
            alert("Ocorreu um erro ao carregar seus dados. Por favor, comece novamente.");
            navigate('/configuracao-perfil-pro-um');
        }
    }, [location.state, navigate]);

    // Funções do Modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
        setCurrentItemText('');
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleAddItem = () => {
        if (currentItemText.trim()) {
            setQualidades(prev => [...prev, currentItemText.trim()]);
            setCurrentItemText('');
            setIsModalOpen(false);
        }
    };

    // Navegação
    const handleNext = () => {
        const dadosParaProximaEtapa = {
            ...dadosAnteriores,
            qualidades: qualidades // Adiciona a lista desta Etapa 5
        };

        try {
            sessionStorage.setItem(FORM_DATA_KEY, JSON.stringify(dadosParaProximaEtapa));
            navigate("/configuracao-perfil-pro-seis", { state: dadosParaProximaEtapa });
        } catch (error) {
            console.error("Erro ao salvar progresso:", error);
            alert("Ocorreu um erro ao salvar seu progresso. Tente novamente.");
        }
    };

    const handleBack = () => {
        navigate("/configuracao-perfil-pro-quatro", { state: dadosAnteriores });
    };


    return (
        <div className={styles.container}>
            <HeaderDoisTrabalhador />
            <div className={styles.mainContent}>
                <div className={styles.textColumn}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Por que me escolher? Destaque o que faz você se destacar</h1>
                        <p className={styles.subtitle}>Este é o momento de mostrar ao cliente o que torna seu trabalho único...</p>
                        <button className={styles.addButton} onClick={handleOpenModal}>+ Adicionar item</button>
                        <div className={styles.experienceList}>
                            {qualidades.map((item, index) => (
                                <div key={index} className={styles.experienceItem}>
                                    <span className={styles.checkIcon}>✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                 <div className={styles.imageColumn}>
                    <img src="/src/assets/3d-homem-pulando.png" alt="Happy 3D character" className={styles.characterImage} />
                </div>
            </div>
            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: '71%' }}></div>
                </div>
                <div className={styles.footerButtons}>
                    <button className={styles.backButton} onClick={handleBack}>Voltar</button>
                    <button className={styles.nextButton} onClick={handleNext}>Próximo</button>
                </div>
            </footer>
             {/* Modal */}
            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>Adicione um item</h2>
                            <button className={styles.closeButton} onClick={handleCloseModal}>&times;</button>
                        </div>
                        <p className={styles.modalAttention}>ATENÇÃO! Adicione um item por vez</p>
                        <textarea
                            className={styles.modalTextarea}
                            placeholder="Descreva uma qualidade ou diferencial seu" // Placeholder atualizado
                            value={currentItemText}  
                            onChange={(e) => setCurrentItemText(e.target.value)} 
                        ></textarea>
                        <button className={styles.modalAddButton} onClick={handleAddItem}>Adicionar</button> 
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConfiguracaoPerfilCinco;