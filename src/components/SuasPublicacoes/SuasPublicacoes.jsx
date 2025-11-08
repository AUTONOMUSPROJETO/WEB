import React, { useState } from 'react';
import styles from './SuasPublicacoes.module.css';
import { Pencil, Trash2 } from 'lucide-react';

const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const UserPlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>;
const BookmarkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>;



function SuasPublicacoes() {
    const [valorHora, setValorHora] = useState('70,00');
    const [tipoAtendimento, setTipoAtendimento] = useState('Presencial');


    const handleValorHoraChange = (e) => {
        const newValue = e.target.value;
        if (/^[0-9,.]*$/.test(newValue)) {
            setValorHora(newValue);
        }
    };



    const profileImage = '/foto-perfil-cliente.png';

    const Button = ({ children, icon, onClick }) => (
        <button className={styles.buttonAnuncio} onClick={onClick}>
            {icon && <span className={styles.buttonIcon}>{icon}</span>}
            {children}
        </button>
    );

    const StatusCard = ({ title, status, imageSrc, onClick }) => {
        const statusClass = status === 'Aprovado' ? styles.statusApproved : styles.statusPending;

        return (
            <button className={styles.statusCard} onClick={onClick}>
                <div className={styles.cardContent}>
                    {imageSrc && <img src={imageSrc} alt="Profile" className={styles.profileImage} />}
                    <div className={styles.textContent}>
                        <h3 className={styles.cardTitleEsquerda}>{title}</h3>
                        <p className={`${styles.cardStatus} ${statusClass}`}>{status}</p>
                    </div>
                </div>
            </button>
        );
    };

    const handleCardClick = (cardTitle) => {
        alert(`Você clicou no card: ${cardTitle}`);
    };



    return (
        <div className={styles.container}>


            <div className={styles.mainContent}>
                <div className={styles.appContainer}>
                    <Button icon={<span>&#x2b;</span>}>Criar um anúncio</Button>

                    <StatusCard
                        title="Suporte técnico"
                        status="Aprovado"
                        imageSrc={profileImage}
                        onClick={() => handleCardClick('Suporte técnico (Aprovado)')}
                    />

                    <StatusCard
                        title="Suporte técnico"
                        status="Em análise"
                        imageSrc={profileImage}
                        onClick={() => handleCardClick('Suporte técnico (Em análise)')}
                    />
                </div>


                <div className={styles.leftColumn}>
                    <div className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h3>Categorias</h3>
                            <span className={styles.editIcon}><Pencil size="18px" /></span>
                        </div>
                        <div className={styles.tagsContainer}>
                            <span className={styles.tag}>Tecnologia</span>
                            <span className={styles.tag}>Suporte a hardware</span>
                            <span className={styles.tag}>Configuração de redes e internet</span>
                        </div>
                    </div>


                    <div className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h3>Descrição do anúncio</h3>
                            <span className={styles.editIcon}><Pencil size="18px" /></span>
                        </div>
                        <div className={styles.descriptionContent}>
                            <h4>Sobre</h4>
                            <p>Sou Letícia e estou em busca de um(a) profissional para me apoiar nas atividades diárias da área de tecnologia. Preciso de alguém com conhecimento técnico, comprometimento e responsabilidade para atuar ao meu lado, garantindo um atendimento de qualidade e mantendo os sistemas sempre operacionais.</p>
                            <h4>Atividades envolvidas</h4>
                            <ul className={styles.list}>
                                <li><span className={styles.checkedItem}>✓</span> Suporte técnico a usuários remoto e presencial</li>
                                <li><span className={styles.checkedItem}>✓</span> Manutenção e configuração de computadores e redes</li>
                                <li><span className={styles.checkedItem}>✓</span> Instalação e atualização de softwares e sistemas operacionais</li>
                                <li><span className={styles.checkedItem}>✓</span> Atendimento a chamados e organização das demandas</li>
                            </ul>

                            <h4>Requisitos</h4>
                            <ul className={styles.list}>
                                <li><span className={styles.checkedItem}>✓</span>Conhecimento em informática, redes, manutenção e suporte</li>
                                <li><span className={styles.checkedItem}>✓</span> Agilidade na resolução de problemas</li>
                                <li><span className={styles.checkedItem}>✓</span> Boa comunicação e postura profissional</li>
                                <li><span className={styles.checkedItem}>✓</span> Experiência prévia na área será um diferencial</li>
                            </ul>

                        </div>
                    </div>


                    <div className={styles.bottomSection}>
                        <div className={styles.inputGroup}>
                            <div className={styles.sectionHeader}>
                                <h3>Valor por hora</h3>
                                <span className={styles.editIcon}><Pencil size="18px" /></span>
                            </div>
                            <div className={styles.inputField}>
                                <span>R$</span>
                                <input
                                    type="text"
                                    value={valorHora}
                                    onChange={handleValorHoraChange}
                                />
                                <span>/hr</span>
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <div className={styles.sectionHeader}>
                                <h3>Tipo de atendimento</h3>
                                <span className={styles.editIcon}><Pencil size="18px" /></span>
                            </div>
                            <select
                                className={styles.selectField}
                                value={tipoAtendimento}
                                onChange={(e) => setTipoAtendimento(e.target.value)}
                            >
                                <option>Presencial</option>
                                <option>Remoto</option>
                                <option>Remoto</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className={styles.rightColumn}>
                    <div className={styles.card}>
                        <h4>Detalhes do anúncio</h4>
                        <button className={styles.actionItem} onClick={() => alert("Visualizar anúncio")}>
                            <span>Visualizar anúncio como cliente</span>
                            <EyeIcon />
                        </button>
                        <button className={styles.actionItem} onClick={() => alert("Excluir perfil")}>
                            <span>Excluir perfil</span>
                            <Trash2 />
                        </button>
                    </div>
                    <div className={styles.card}>
                        <h4>Status do anúncio</h4>
                        <div className={styles.statusBox}>
                            <span className={styles.statusText}>Em análise</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className={styles.btnSave}>
                Salvar alterações
            </button>
        </div>
    );
};

export default SuasPublicacoes;