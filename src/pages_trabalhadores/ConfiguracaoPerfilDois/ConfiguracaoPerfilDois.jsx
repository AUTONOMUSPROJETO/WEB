import React, { useState, useEffect } from 'react';
import styles from './ConfiguracaoPerfilDois.module.css';
import { useNavigate, useLocation } from "react-router-dom";
import HeaderDoisTrabalhador from '../../components/HeaderDoisTrabalhador/HeaderDoisTrabalhador';

const FORM_DATA_KEY = 'perfilFormData';

function ConfiguracaoPerfilDois() {
    const navigate = useNavigate();
    const location = useLocation();

    const [descricao, setDescricao] = useState('');
    const [dadosAnteriores, setDadosAnteriores] = useState({});

    useEffect(() => {
        // 1. Tenta pegar dados do 'location.state' (navegação normal)
        let data = location.state;

        if (!data) {
            // 2. Se não houver (ex: F5), tenta pegar do 'sessionStorage' (backup)
            try {
                const storedData = sessionStorage.getItem(FORM_DATA_KEY);
                data = storedData ? JSON.parse(storedData) : null;
            } catch (error) {
                console.error("Erro ao ler dados do backup:", error);
                data = null;
            }
        }

        // 3. Verifica se temos dados de alguma fonte
        if (data) {
            setDadosAnteriores(data);
            // Pré-preenche o campo desta página, se já houver dados
            if (data.descricao) {
                setDescricao(data.descricao);
            }
            console.log("Dados carregados na Etapa 2:", data);
        } else {
            // 4. Se não há dados em lugar nenhum, força o reinício
            console.warn("Nenhum dado encontrado. Voltando para Etapa 1.");
            alert("Ocorreu um erro ao carregar seus dados. Por favor, comece novamente.");
            navigate('/configuracao-perfil-pro-um');
        }
    }, [location.state, navigate]); // Dependências corretas

    const handleNext = () => {
        if (!descricao.trim()) {
            alert("Por favor, escreva uma descrição.");
            return;
        }
        
        // Acumula os dados
        const dadosParaProximaEtapa = {
            ...dadosAnteriores,
            descricao: descricao
        };

        try {
            // 1. Salva o "backup" completo
            sessionStorage.setItem(FORM_DATA_KEY, JSON.stringify(dadosParaProximaEtapa));
            
            // 2. Navega para a próxima etapa
            navigate("/configuracao-perfil-pro-tres", { state: dadosParaProximaEtapa });

        } catch (error) {
            console.error("Erro ao salvar progresso:", error);
            alert("Ocorreu um erro ao salvar seu progresso. Tente novamente.");
        }
    };

    const handleBack = () => {
        // Ao voltar, não precisa salvar, apenas passa o state
        navigate("/configuracao-perfil-pro-um", { state: dadosAnteriores });
    };

    return (
        <div className={styles.container}>
            <HeaderDoisTrabalhador />
            <div className={styles.mainContent}>
                <div className={styles.textColumn}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Ótimo! Agora, escreva uma breve descrição sobre você e com o que você trabalha</h1>
                        <p className={styles.subtitle}>Conte quem você é e o que você faz de melhor. Descreva brevemente sua profissão, suas habilidades e no que você se destaca. Pense no que as pessoas devem saber logo de cara sobre seu trabalho. Você sempre pode editar depois; apenas certifique-se de revisar agora.</p>
                        <textarea
                            className={styles.descriptionTextarea}
                            placeholder="Inclua suas áreas de atuação, especialidades e como você costuma resolver os problemas ou atender seus clientes"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            rows="8"
                        ></textarea>
                    </div>
                </div>
                <div className={styles.imageColumn}>
                    <img src="/src/assets/3d-homem-pulando.png" alt="Happy 3D character" className={styles.characterImage} />
                </div>
            </div>
            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: '28.4%' }}></div>
                </div>
                <div className={styles.footerButtons}>
                    <button className={styles.backButton} onClick={handleBack}>Voltar</button>
                    <button className={styles.nextButton} onClick={handleNext}>Próximo</button>
                </div>
            </footer>
        </div>
    );
};

export default ConfiguracaoPerfilDois;