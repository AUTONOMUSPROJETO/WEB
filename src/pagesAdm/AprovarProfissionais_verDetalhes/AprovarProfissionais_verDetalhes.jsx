import { useState } from 'react';
import HeaderDois from '../../components/headerdois/headerdois.jsx';
// 1. A IMPORTAÇÃO MUDOU
import styles from './AprovarProfissionais_verDetalhes.module.css';


function AprovarProfissionais_verDetalhes() {
    const [motivoRecusa, setMotivoRecusa] = useState('');

    return (
        <>
            <HeaderDois />

            {/* 2. AS CLASSES AGORA USAM O OBJETO 'styles' */}
            <main className={styles.profileContainer}>
                <div className={styles.profileCard}>
                    <div className={styles.profileHeader}>
                        <img src="/src/assets/roberto.png" alt="Foto de Roberto de Souza" className={styles.profilePicture} />
                        <h1>ROBERTO DE SOUZA</h1>
                        <div className={styles.profileTags}>
                            <span>REDE</span>
                            <span>Presencial e online</span>
                            <span>Tecnologia</span>
                        </div>
                    </div>

                    <div className={styles.profileBody}>
                        <div className={styles.profileSection}>
                            <div className={styles.sectionContent}>
                                <h2>Sobre</h2>
                                <p>
                                    Sou Técnico de TI com sólida experiência em suporte técnico, redes e infraestrutura. Sou proativo e comprometido em oferecer as melhores soluções
                                    e na manutenção da estabilidade dos sistemas corporativos. Ao longo da minha trajetória, desenvolvi um foco centrado no atendimento a
                                    usuários, sempre priorizando a qualidade do atendimento e a satisfação dos usuários.
                                    Tenho uma grande paixão por tecnologia e um forte compromisso com a excelência. Estou constantemente em busca de inovações e
                                    atualizações no setor.
                                </p>
                            </div>

                            <div className={styles.sectionContent}>
                                <h2>Experiências de trabalho</h2>
                                <ul>
                                    <li>Responsável pelo suporte técnico a mais de 200 usuários em ambientes Windows.</li>
                                    <li>Administração de rede interna, controle de acesso e manutenção de servidores.</li>
                                    <li>Configuração de Active Directory, DNS, DHCP e GPO</li>
                                    <li>Apoio na migração de e-mails para Office 365 e Google Workspace</li>
                                </ul>
                            </div>

                             <div className={styles.sectionContent}>
                                <h2>Abordagem</h2>
                                <p>
                                    Sou prático, focado e organizado. Gosto de planejar antes de executar, entender o problema a fundo e aplicar soluções que realmente
                                    funcionem. Não me contento com "soluções de contorno".
                                    Trabalho com responsabilidade, sempre pensando no impacto que cada ação pode ter no fluxo de trabalho, e sei a importância de agir com cuidado. Prefiro fazer bem feito da primeira vez, com atenção aos detalhes, clareza e profissionalismo em cada etapa.
                                </p>
                             </div>
                             <a href="#" className={styles.editInfo}>Editar informações</a>
                        </div>

                        <div className={styles.profileSection}>
                            <div className={styles.sectionContent}>
                                <h2>O que faço?</h2>
                                <ul>
                                    <li>Suporte técnico presencial e remoto (Windows, Linux, Office 365)</li>
                                    <li>Manutenção de computadores, notebooks e periféricos</li>
                                    <li>Configuração de redes (roteadores, switches, firewalls, VPN)</li>
                                    <li>Organização de cabeamento e estrutura da rede física</li>
                                    <li>Configuração de impressoras, dispositivos móveis e sistemas corporativos</li>
                                </ul>
                            </div>

                             <div className={styles.sectionContent}>
                                <h2>Por que me escolher?</h2>
                                <ul>
                                    <li>Tenho experiência sólida em suporte técnico, redes e infraestrutura, se traduzindo em soluções rápidas e eficientes.</li>
                                    <li>Me comunico de forma clara e objetiva, mesmo com usuários que não têm familiaridade com tecnologia.</li>
                                    <li>Sou proativo, comprometido e estou sempre em busca de atualizações para oferecer o melhor atendimento possível.</li>
                                    <li>Atendo com agilidade, responsabilidade e foco total na estabilidade dos sistemas e na satisfação do usuário.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.profileFooter}>
                         <select
                            value={motivoRecusa}
                            onChange={(e) => setMotivoRecusa(e.target.value)}
                            className={styles.rejectionReason}
                        >
                            <option value="">Motivo da recusa</option>
                            <option value="documentacao">Documentação incompleta</option>
                            <option value="experiencia">Experiência não compatível</option>
                            <option value="perfil">Perfil não alinhado à vaga</option>
                            <option value="outro">Outro</option>
                        </select>
                        <button className={styles.btnRecusar}>Recusar</button>
                        <button className={styles.btnAprovar}>Aprovar</button>
                    </div>

                </div>
            </main>
        </>
    );
}

export default AprovarProfissionais_verDetalhes;