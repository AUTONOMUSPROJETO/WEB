import React, { useState, useEffect } from 'react';
import styles from './ConfiguracaoPerfilTres.module.css';
import { useNavigate, useLocation } from "react-router-dom";
import HeaderDoisTrabalhador from '../../components/HeaderDoisTrabalhador/HeaderDoisTrabalhador';

const FORM_DATA_KEY = 'perfilFormData';

function ConfiguracaoPerfilTres() {
    const navigate = useNavigate();
    const location = useLocation();

    // Estados locais
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentExperienceText, setCurrentExperienceText] = useState('');
    const [experiences, setExperiences] = useState([]); // Lista desta etapa
    const [dadosAnteriores, setDadosAnteriores] = useState({});

    // Efeito para carregar dados (location.state ou sessionStorage)
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
            // Pré-preenche a lista desta página
            if (data.experiencias && Array.isArray(data.experiencias)) {
                setExperiences(data.experiencias);
            }
            console.log("Dados carregados na Etapa 3:", data);
        } else {
            console.warn("Nenhum dado encontrado. Voltando para Etapa 1.");
            alert("Ocorreu um erro ao carregar seus dados. Por favor, comece novamente.");
            navigate('/configuracao-perfil-pro-um');
        }
    }, [location.state, navigate]);

    // Funções do Modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
        setCurrentExperienceText('');
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleAddExperience = () => {
        if (currentExperienceText.trim()) {
            setExperiences(prev => [...prev, currentExperienceText.trim()]);
            setCurrentExperienceText('');
            setIsModalOpen(false);
        }
    };

    // Função para navegar
    const handleNext = () => {
        // Acumula os dados
        const dadosParaProximaEtapa = {
            ...dadosAnteriores,
            experiencias: experiences // Adiciona a lista desta Etapa 3
        };

        try {
            // 1. Salva o "backup" completo
            sessionStorage.setItem(FORM_DATA_KEY, JSON.stringify(dadosParaProximaEtapa));
            
            // 2. Navega para a próxima etapa
            navigate("/configuracao-perfil-pro-quatro", { state: dadosParaProximaEtapa });

        } catch (error) {
            console.error("Erro ao salvar progresso:", error);
            alert("Ocorreu um erro ao salvar seu progresso. Tente novamente.");
        }
    };

    // Função para voltar
    const handleBack = () => {
        navigate("/configuracao-perfil-pro-dois", { state: dadosAnteriores });
    };

    return (
        <div className={styles.container}>
            <HeaderDoisTrabalhador />
            <div className={styles.mainContent}>
                <div className={styles.textColumn}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Escreva sobre suas experiências de trabalho em tópicos</h1>
                        <p className={styles.subtitle}>Compartilhe os lugares por onde você já passou, os tipos de projetos ou funções que realizou e o que aprendeu em cada experiência. Não é preciso listar tudo, destaque o que mais marcou sua trajetória. Use uma linguagem simples e direta.</p>
                        
                        <button className={styles.addButton} onClick={handleOpenModal}>+ Adicionar experiência</button>

                        <div className={styles.experienceList}>
                            {experiences.map((exp, index) => (
                                <div key={index} className={styles.experienceItem}>
                                    <span className={styles.checkIcon}>✓</span> {exp}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.imageColumn}>
                    <img src="/src/assets/3d-homem-pulando.png" alt="Happy 3D character" className={styles.characterImage} />
                </div>
            </div>
            
            <footer className={styles.footer}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: '42.6%' }}></div>
                </div>
                <div className={styles.footerButtons}>
                    <button className={styles.backButton} onClick={handleBack}>Voltar</button>
                    <button className={styles.nextButton} onClick={handleNext}>Próximo</button>
                </div>
            </footer>
   
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>Adicione uma experiência de trabalho</h2>
                            <button className={styles.closeButton} onClick={handleCloseModal}>&times;</button>
                        </div>
                        <p className={styles.modalAttention}>ATENÇÃO: Adicione uma experiência por vez</p>
                        <textarea
                            className={styles.modalTextarea}
                            placeholder="Compartilhe os lugares por onde você já passou, os tipos de projetos ou funções que realizou."
                            value={currentExperienceText} 
                            onChange={(e) => setCurrentExperienceText(e.target.value)} 
                        ></textarea>

                        <button className={styles.modalAddButton} onClick={handleAddExperience}>Adicionar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConfiguracaoPerfilTres;