import React, { useState, useEffect } from 'react'; // Adicionado useEffect
import styles from './ConfiguracaoPerfilUm.module.css';
import { useNavigate } from "react-router-dom";
import HeaderDoisTrabalhador from '../../components/HeaderDoisTrabalhador/HeaderDoisTrabalhador';

const categorias = [
    'Tecnologia e TI',
    'Saúde e Bem-Estar',
    'Construção e Reformas',
    'Serviços Domésticos e Limpeza',
    'Reparos e Instalações',
];
const especialidadesPorCategoria = {
    'Tecnologia e TI': [
        'Segurança da Informação',
        'Configuração de redes e Internet',
        'Suporte a hardware',
        'Documentação e Organização de Projetos',
        'Suporte a softwares e sistemas personalizados',
        'Desenvolvimento de sistemas e aplicações',
    ],
    'Saúde e Bem-Estar': [
        'Saúde Física',
        'Saúde Mental',
        'Nutrição',
        'Atividade Física',
        'Qualidade de Vida e Autocuidado',
        'Prevenção e Cuidados Médicos',
    ],
    'Construção e Reformas': [
        'Manutenção e Reparos',
        'Instalações (Elétrica, Hidráulica, Gás)',
        'Reformas de casas',
        'Acabamentos e Decoração',
        'Planejamento e Projetos',
        'Prevenção e Cuidados Médicos',
    ],
};

const FORM_DATA_KEY = 'perfilFormData';

function ConfiguracaoPerfilUm() {
    const navigate = useNavigate();
    
    // Estados locais
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    const [especialidadesSelecionadas, setEspecialidadesSelecionadas] = useState([]);

    // Efeito para carregar dados do "backup" (sessionStorage) se existirem
    useEffect(() => {
        try {
            const storedData = sessionStorage.getItem(FORM_DATA_KEY);
            if (storedData) {
                const data = JSON.parse(storedData);
                if (data.categoria) {
                    setCategoriaSelecionada(data.categoria);
                }
                if (data.especialidades && Array.isArray(data.especialidades)) {
                    setEspecialidadesSelecionadas(data.especialidades);
                }
            }
        } catch (error) {
            console.error("Erro ao carregar dados do backup:", error);
            sessionStorage.removeItem(FORM_DATA_KEY); // Limpa dados corrompidos
        }
    }, []); // Executa apenas uma vez ao montar o componente

    const handleCategoriaClick = (categoria) => {
        setCategoriaSelecionada(categoria);
        setEspecialidadesSelecionadas([]);
    };

    const handleEspecialidadeClick = (especialidade) => {
        setEspecialidadesSelecionadas(prev => {
            if (prev.includes(especialidade)) {
                return prev.filter(item => item !== especialidade);
            }
            if (prev.length < 3) {
                return [...prev, especialidade];
            }
            return prev;
        });
    };

    const handleNext = () => {
        if (!categoriaSelecionada || especialidadesSelecionadas.length === 0) {
            alert("Por favor, selecione uma categoria e pelo menos uma especialidade.");
            return;
        }

        try {
            // 1. Pega dados existentes (se houver) de outras etapas
            const storedDataRaw = sessionStorage.getItem(FORM_DATA_KEY);
            const existingData = storedDataRaw ? JSON.parse(storedDataRaw) : {};

            // 2. Cria o novo objeto de dados completo (ACUMULA)
            const allData = {
                ...existingData,
                categoria: categoriaSelecionada,
                especialidades: especialidadesSelecionadas
            };

            // 3. Salva o objeto completo no "backup" (sessionStorage)
            sessionStorage.setItem(FORM_DATA_KEY, JSON.stringify(allData));

            // 4. Navega para a próxima etapa passando os dados completos
            navigate("/configuracao-perfil-pro-dois", {
                state: allData
            });

        } catch (error) {
            console.error("Erro ao salvar progresso:", error);
            alert("Ocorreu um erro ao salvar seu progresso. Tente novamente.");
        }
    };

     const handleBack = () => {
        // Ao voltar para a home, limpa o progresso salvo
        sessionStorage.removeItem(FORM_DATA_KEY);
        navigate("/homeprestador");
     };


    return (
        <div className={styles.container}>
            <HeaderDoisTrabalhador />
            <div className={styles.mainContent}>
                <div className={styles.textColumn}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Para criar seu anúncio, responda algumas questões</h1>
                        <p className={styles.subtitle}>Não se preocupe, todas as informações poderão ser alteradas futuramente</p>
                    </div>

                    <div className={styles.questionSection}>
                        {/* ... (seu JSX de seleção de categoria e especialidade) ... */}
                         <h2 className={styles.mainQuestion}>Que tipo de trabalho você está aqui para fazer?</h2>
                        <div className={styles.selectionArea}>
                            {/* Coluna Categoria */}
                            <div className={styles.categoryColumn}>
                                <span className={styles.selectLabel}>Selecione 1 categoria</span>
                                <ul className={styles.categoryList}>
                                    {categorias.map(categoria => (
                                        <li
                                            key={categoria}
                                            className={`${styles.categoryItem} ${categoriaSelecionada === categoria ? styles.selected : ''}`}
                                            onClick={() => handleCategoriaClick(categoria)}
                                        >
                                            {categoria}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Coluna Especialidade */}
                            <div className={styles.specialtyColumn}>
                                <span className={styles.selectLabel}>Selecione até 3 especialidades</span>
                                <ul className={styles.specialtyList}>
                                    {(especialidadesPorCategoria[categoriaSelecionada] || []).map(especialidade => (
                                        <li
                                            key={especialidade}
                                            className={`${styles.specialtyItem} ${especialidadesSelecionadas.includes(especialidade) ? styles.selected : ''}`}
                                            onClick={() => handleEspecialidadeClick(especialidade)}
                                        >
                                            <div
                                                className={`${styles.checkbox} ${especialidadesSelecionadas.includes(especialidade) ? styles.checked : ''}`}
                                            >
                                                {especialidadesSelecionadas.includes(especialidade) && (
                                                    <span className={styles.checkmark}>&#10003;</span>
                                                )}
                                            </div>
                                            <span>{especialidade}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Coluna Imagem */}
                <div className={styles.imageColumn}>
                    <img src="/src/assets/3d-homem-pulando.png" alt="Happy 3D character" className={styles.characterImage} />
                </div>
            </div>
             {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: '14.2%' }}></div>
                </div>
                <div className={styles.footerButtons}>
                    <button className={styles.backButton} onClick={handleBack}>Voltar</button>
                    <button className={styles.nextButton} onClick={handleNext}>Próximo</button>
                </div>
            </footer>
        </div>
    );
};

export default ConfiguracaoPerfilUm;