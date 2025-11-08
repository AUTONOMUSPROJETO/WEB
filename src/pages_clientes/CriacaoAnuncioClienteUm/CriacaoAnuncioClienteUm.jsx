import React, { useState } from 'react';
import styles from './CriacaoAnuncioClienteUm.module.css';
import { useNavigate } from "react-router-dom";
import HeaderDoisCliente from '../../components/HeaderDoisCliente/HeaderDoisCliente';

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

function  CriacaoAnuncioClienteUm() {


    const navigate = useNavigate(); 

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Tecnologia e TI');
    const [especialidadesSelecionadas, setEspecialidadesSelecionadas] = useState([]);

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

    return (

        <div className={styles.container}>
            {/* Header */}
            <HeaderDoisCliente />

            <div className={styles.mainContent}>
                <div className={styles.textColumn}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Para criar seu anúncio, responda algumas questões</h1>
                        <p className={styles.subtitle}>Não se preocupe, todas as informações poderão ser alteradas futuramente</p>
                    </div>

                    <div className={styles.questionSection}>
                        <h2 className={styles.mainQuestion}>Que tipo de trabalho você procura?</h2>

                        <div className={styles.selectionArea}>
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

                            <div className={styles.specialtyColumn}>
                                <span className={styles.selectLabel}>Selecione até 3 especialidades</span>
                                <ul className={styles.specialtyList}>
                                    {especialidadesPorCategoria[categoriaSelecionada]?.map(especialidade => (
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

                <div className={styles.imageColumn}>
                    <img src="/src/assets/anuncioClienteImg.png" alt="Happy 3D character" className={styles.characterImage} />
                </div>
            </div>

            <footer className={styles.footer}>
                {/* container da barra de progresso */}
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar}></div>
                </div>

                {/* continer dos botões */}
                <div className={styles.footerButtons}>
                    <button className={styles.backButton} onClick={() => navigate("/homecliente")}>Voltar</button>
                    <button className={styles.nextButton} onClick={() => navigate("/criacaoanuncioclientedois")}>Próximo</button>
                </div>
            </footer>
        </div>
    );
};

export default CriacaoAnuncioClienteUm;