import React, { useState, useEffect } from 'react'; // Adicionado useEffect
import styles from './ConfiguracaoPerfilSeis.module.css';
import { useNavigate, useLocation } from "react-router-dom"; // Adicionado useLocation
import HeaderDoisTrabalhador from '../../components/HeaderDoisTrabalhador/HeaderDoisTrabalhador';

const FORM_DATA_KEY = 'perfilFormData';

function ConfiguracaoPerfilSeis() {
    const navigate = useNavigate();
    const location = useLocation(); // Adicionado

    // Estados locais
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAbordagemText, setCurrentAbordagemText] = useState(''); // Renomeado
    const [abordagens, setAbordagens] = useState([]); // Renomeado de 'experiences'
    const [selectedServiceMethod, setSelectedServiceMethod] = useState('');
    const [dadosAnteriores, setDadosAnteriores] = useState({}); // Adicionado

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
            // Pré-preenche os campos desta página
            if (data.formaDeAtendimento) {
                setSelectedServiceMethod(data.formaDeAtendimento);
            }
            if (data.abordagens && Array.isArray(data.abordagens)) {
                // Se você salvou como objetos, precisa recriá-los, se salvou como strings, precisa mapear
                // Assumindo que você salvou como array de strings (como nas etapas 3, 4, 5)
                setAbordagens(data.abordagens.map(text => ({ id: crypto.randomUUID(), text: text })));
            }
            console.log("Dados carregados na Etapa 6:", data);
        } else {
            console.warn("Nenhum dado encontrado. Voltando para Etapa 1.");
            alert("Ocorreu um erro ao carregar seus dados. Por favor, comece novamente.");
            navigate('/configuracao-perfil-pro-um');
        }
    }, [location.state, navigate]);


    // Funções do Modal (adaptadas)
    const handleOpenModal = () => {
        setIsModalOpen(true);
        setCurrentAbordagemText('');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddAbordagem = () => { // Renomeado
        if (currentAbordagemText.trim()) {
            const newAbordagem = {
                id: crypto.randomUUID(),
                text: currentAbordagemText.trim()
            };
            setAbordagens([...abordagens, newAbordagem]);
            setCurrentAbordagemText('');
            // Não fecha o modal para adição rápida
        }
    };

    const handleRemoveAbordagem = (idToRemove) => { // Renomeado
        setAbordagens(abordagens.filter(item => item.id !== idToRemove));
    };

    // Navegação
    const handleNext = () => {
        if (!selectedServiceMethod) {
            alert("Por favor, selecione uma forma de atendimento.");
            return;
        }

        const dadosParaProximaEtapa = {
            ...dadosAnteriores,
            formaDeAtendimento: selectedServiceMethod,
            // Salva apenas o texto, para ser consistente com as outras etapas
            abordagens: abordagens.map(item => item.text) 
        };

        try {
            sessionStorage.setItem(FORM_DATA_KEY, JSON.stringify(dadosParaProximaEtapa));
            navigate("/configuracao-perfil-pro-sete", { state: dadosParaProximaEtapa });
        } catch (error) {
            console.error("Erro ao salvar progresso:", error);
            alert("Ocorreu um erro ao salvar seu progresso. Tente novamente.");
        }
    };

    const handleBack = () => {
        navigate("/configuracao-perfil-pro-cinco", { state: dadosAnteriores });
    };

    return (
        <div className={styles.container}>
            <HeaderDoisTrabalhador />

            <div className={styles.mainContent}>
                <div className={styles.textColumn}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Fale sobre sua abordagem de trabalho, métodos para alcançar o objetivo do cliente e formas de atendimento</h1>
                        <p className={styles.subtitle}>
                            Aqui você deve escolher uma forma de atendimento (presencial, online, tanto faz/combinar) e pode explicar como você trabalha...
                        </p>
                        
                        <div className={styles.inputSection}>
                            <h2 className={styles.inputTitle}>Forma de atendimento</h2>
                            <select
                                className={styles.serviceMethodSelect}
                                value={selectedServiceMethod}
                                onChange={(e) => setSelectedServiceMethod(e.target.value)}
                            >
                                <option value="" disabled>Selecione uma forma...</option>
                                <option value="presencial">Presencial</option>
                                <option value="online">Online</option>
                                <option value="hibrido">Tanto faz/Combinar</option>
                            </select>
                        </div>
                        
                        <button className={styles.addButton} onClick={handleOpenModal}>+ Adicionar Item</button>

                        <div className={styles.experienceList}>
                            {abordagens.map((item) => (
                                <div key={item.id} className={styles.experienceItem}>
                                    <span aria-hidden="true" className={styles.checkIcon}>✓</span> 
                                    {item.text}
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.imageColumn}>
                    <img src="/src/assets/3d-homem-pulando.png" alt="Happy 3D character" className={styles.characterImage} />
                </div>
            </div>

            {/* Footer ATUALIZADO */}
            <footer className={styles.footer}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: '85.2%' }}></div> {/* Largura do CSS original */}
                </div>
                <div className={styles.footerButtons}>
                    <button className={styles.backButton} onClick={handleBack}>Voltar</button>
                    <button className={styles.nextButton} onClick={handleNext}>Próximo</button>
                </div>
            </footer>

            {/* Modal ATUALIZADO */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>Adicione um item</h2>
                            <button aria-label="Fechar modal" className={styles.closeButton} onClick={handleCloseModal}>&times;</button>
                        </div>
                        <p className={styles.modalAttention}>ATENÇÃO! Adicione um item por vez</p>
                        <textarea
                            className={styles.modalTextarea}
                            placeholder="Ex: Minha abordagem foca em comunicação clara..."
                            value={currentAbordagemText}
                            onChange={(e) => setCurrentAbordagemText(e.target.value)}
                        ></textarea>
                        {/* Botão do modal atualizado */}
                        <button className={styles.modalAddButton} onClick={handleAddAbordagem}>Adicionar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConfiguracaoPerfilSeis;