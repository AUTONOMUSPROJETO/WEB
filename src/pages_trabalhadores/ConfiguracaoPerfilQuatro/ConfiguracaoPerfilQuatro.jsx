import React, { useState, useEffect } from 'react';
import styles from './ConfiguracaoPerfilQuatro.module.css';
import { useNavigate, useLocation } from "react-router-dom";
import HeaderDoisTrabalhador from '../../components/HeaderDoisTrabalhador/HeaderDoisTrabalhador';

const FORM_DATA_KEY = 'perfilFormData';

function ConfiguracaoPerfilQuatro() {
    const navigate = useNavigate();
    const location = useLocation();

    // Estados locais
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [habilidades, setHabilidades] = useState([]); // Lista desta etapa
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
            if (data.habilidades && Array.isArray(data.habilidades)) {
                setHabilidades(data.habilidades);
            }
            console.log("Dados carregados na Etapa 4:", data);
        } else {
            console.warn("Nenhum dado encontrado. Voltando para Etapa 1.");
            alert("Ocorreu um erro ao carregar seus dados. Por favor, comece novamente.");
            navigate('/configuracao-perfil-pro-um');
        }
    }, [location.state, navigate]);

    // Funções do Modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
        setCurrentText('');
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleAddItem = () => {
        if (currentText.trim()) {
            setHabilidades(prev => [...prev, currentText.trim()]);
            setCurrentText('');
            setIsModalOpen(false);
        }
    };

    // Navegação
    const handleNext = () => {
        const dadosParaProximaEtapa = {
            ...dadosAnteriores,
            habilidades: habilidades // Adiciona a lista desta Etapa 4
        };

        try {
            sessionStorage.setItem(FORM_DATA_KEY, JSON.stringify(dadosParaProximaEtapa));
            navigate("/configuracao-perfil-pro-cinco", { state: dadosParaProximaEtapa });
        } catch (error) {
            console.error("Erro ao salvar progresso:", error);
            alert("Ocorreu um erro ao salvar seu progresso. Tente novamente.");
        }
    };

    const handleBack = () => {
        navigate("/configuracao-perfil-pro-tres", { state: dadosAnteriores });
    };


    return (
        <div className={styles.container}>
            <HeaderDoisTrabalhador />
            <div className={styles.mainContent}>
                <div className={styles.textColumn}>
                     <div className={styles.textContainer}>
                        <h1 className={styles.title}>Escreva sobre o que você faz em tópicos para facilitar a compreensão do cliente</h1>
                        <p className={styles.subtitle}>Liste suas principais habilidades de forma direta e organizada...</p>
                        <button className={styles.addButton} onClick={handleOpenModal}>+ Adicionar item</button>
                         <div className={styles.experienceList}>
                            {habilidades.map((item, index) => (
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
                    <div className={styles.progressBar} style={{ width: '56.8%' }}></div>
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
                            placeholder="liste suas principais habilidades e o que você faz"
                            value={currentText}  
                            onChange={(e) => setCurrentText(e.target.value)}
                        ></textarea>
                        <button className={styles.modalAddButton} onClick={handleAddItem}>Adicionar</button> 
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConfiguracaoPerfilQuatro;