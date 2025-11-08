import { useState } from 'react';
import HeaderDois from '../../components/headerdois/headerdois'; // Verifique se o caminho está correto
import styles from './AprovarClientes_verDetalhes.module.css';


function AprovarClientes_verDetalhes() {
    const [motivoRecusa, setMotivoRecusa] = useState('');

    return (
        <>
            <HeaderDois />

            <main className={styles.pageContainer}>
                <div className={styles.detailsCard}>
                    {/* A foto de perfil fica fora do header do card para poder sobrepor */}
                    <img  src="/src/assets/leticia.png" alt="Foto de Letícia Soares" className={styles.profilePicture} />

                    <div className={styles.cardHeader}>
                        <h2>LETÍCIA SOARES</h2>
                        <div className={styles.tagsContainer}>
                            <span className={styles.tag}>R$70/h</span>
                            <span className={styles.tag}>Presencial e online</span>
                            <span className={styles.tag}>Tecnologia</span>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <h3>Sobre</h3>
                        <p>
                            Sou Letícia e estou em busca de um(a) profissional para me apoiar nas atividades diárias da área de tecnologia. Preciso de alguém com conhecimento técnico, comprometimento e responsabilidade para atuar ao meu lado, garantindo um atendimento de qualidade e mantendo os sistemas sempre operacionais.
                        </p>
                        
                        <ul>
                            {/* Lista de Atividades */}
                            <li className={styles.listItem}><strong>Atividades envolvidas:</strong></li>
                            <li className={styles.activityItem}>Suporte técnico a usuários (remoto e presencial)</li>
                            <li className={styles.activityItem}>Manutenção e configuração de computadores e redes</li>
                            <li className={styles.activityItem}>Instalação e atualização de softwares e sistemas operacionais</li>
                            <li className={styles.activityItem}>Atendimento a chamados e organização das demandas</li>

                            {/* Lista de Requisitos */}
                            <li className={`${styles.listItem} ${styles.listHeader}`}><strong>Requisitos:</strong></li>
                            <li className={styles.requirementItem}>Conhecimento em informática, redes, manutenção e suporte</li>
                            <li className={styles.requirementItem}>Agilidade na resolução de problemas</li>
                            <li className={styles.requirementItem}>Boa comunicação e postura profissional</li>
                            <li className={styles.requirementItem}>Experiência prévia na área será um diferencial</li>
                        </ul>
                    </div>
                    
                    <div className={styles.cardFooter}>
                        <select
                            value={motivoRecusa}
                            onChange={(e) => setMotivoRecusa(e.target.value)}
                            className={styles.rejectionReason}
                        >
                            <option value="">Motivo da recusa</option>
                            <option value="incompleto">Perfil incompleto</option>
                            <option value="sem_experiencia">Sem experiência relevante</option>
                            <option value="outro">Outro</option>
                        </select>
                        <button className={styles.rejectButton}>Recusar</button>
                        <button className={styles.approveButton}>Aprovar</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AprovarClientes_verDetalhes;