import { useState } from 'react';
import { Star, MessageCircle, Clock, Bookmark, ChevronDown } from 'lucide-react';
import styles from './AnuncioPerfilProfissional.module.css';
import HeaderMobileCliente from '../../components/HeaderMobileCliente/HeaderMobileCliente'
import { useMediaQuery } from "@uidotdev/usehooks"
import Rodape from "../../components/Rodape/Rodape"
import { useNavigate } from "react-router-dom";
import HeaderMainCliente from '../../components/HeaderMainCliente/HeaderMainCliente';

function AnuncioPerfilCliente() {

    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    const professional = { id: 'Roberto-de-souza' };

    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id)
                ? prev.filter(fav => fav !== id)
                : [...prev, id]
        );
    };

  const isMobile = useMediaQuery("only screen and (max-width:1445px)")

    return (
        <div className={styles.container}>
            {isMobile ? <HeaderMobileCliente /> : <HeaderMainCliente />}

            <div className={styles.headerBackground}></div>

            <div className={styles.profileCard}>
                <div className={styles.cardTopArea}>
                    <div className={styles.profileImageContainer}>
                        <img
                            src="/foto-perfil-profissional.png"
                            alt="Roberto de souza"
                            className={styles.profileImage}
                        />
                    </div>

                    <div className={styles.ratingInfo}>
                        <div className={styles.stars}>
                            <Star className={styles.starIcon} fill="#E66F51" color="#E66F51" />
                            <Star className={styles.starIcon} fill="#E66F51" color="#E66F51" />
                            <Star className={styles.starIcon} fill="#E66F51" color="#E66F51" />
                            <Star className={styles.starIcon} fill="#E66F51" color="#E66F51" />
                            <Star className={styles.starIcon} fill="#E66F51" color="#E66F51" />
                            <span className={styles.ratingText}>5.0 de 5</span>
                        </div>
                        <span className={styles.reviewCount}>(2 avaliações)</span>
                    </div>

                    <button
                        className={styles.favoriteButton}
                        onClick={() => toggleFavorite(professional.id)}
                    >
                        <Bookmark
                            size={20}
                            fill={favorites.includes(professional.id) ? '#E66F51' : 'none'}
                            color={favorites.includes(professional.id) ? '#E66F51' : '#a0a0a0'}
                        />
                    </button>
                </div>

                <h1 className={styles.profileName}>ROBERTO DE SOUZA</h1>

                <div className={styles.profileTags}>
                    <span className={styles.tag}>R$70/h</span>
                    <span className={styles.tag}>Presencial e online</span>
                    <span className={styles.tag}>Tecnologia</span>
                </div>

                <div className={styles.buttonGroup}>
                    <button className={styles.contactButton} onClick={() => navigate("/chat")}>
                        <MessageCircle size={16} color="#000000ff" fill="currentColor" />
                        Contatar
                    </button>
                    <button className={styles.scheduleButton}>
                        <Clock size={16} />
                        Horários compatíveis
                    </button>
                    <button className={styles.evaluateButton}>
                        Avaliar
                    </button>
                </div>

                <div className={styles.twoColumns}>
                    <div className={styles.column}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Sobre</h2>
                            <p className={styles.aboutText}>
                                Sou Técnico de TI com sólida experiência em suporte técnico, redes e infraestrutura de TI, atuando com eficiência na resolução de problemas e na manutenção da estabilidade dos sistemas corporativos. Ao longo da minha trajetória, desenvolvi um perfil analítico, ágil e orientado a resultados, sempre priorizando a qualidade do atendimento e a satisfação dos usuários.
                                Tenho uma paixão genuína por tecnologia e um forte compromisso com a excelência. Estou constantemente em busca de inovações e atualizações no setor.
                            </p>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Experiências de trabalho</h2>
                            <ul className={styles.skillsList}>
                                <li className={styles.skillItem}>Responsável pelo suporte técnico a mais de 200 usuários em ambiente corporation</li>
                                <li className={styles.skillItem}>Administração de rede interna, controle de acesso e manutenção de servidores</li>
                                <li className={styles.skillItem}>Configuração de Active Directory, DNS, DHCP e GPO</li>
                                <li className={styles.skillItem}>Apoio na migração de e-mails para Office 365 e Google Workspace</li>
                            </ul>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Abordagem</h2>
                            <p className={styles.aboutText}>
                                Sou prático, focado e organizado. Gosto de planejar antes de executar, entender o problema a fundo e aplicar soluções que realmente funcionam, sem improvisos que só resolvem por um tempo.
                                Trabalho com responsabilidade, sempre pensando no impacto que cada decisão técnica pode ter no usuário final e no ambiente como um todo. Prefiro fazer bem feito na primeira vez, com atenção aos detalhes, clareza e profissionalismo em cada etapa.
                            </p>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>O que faço?</h2>
                            <ul className={styles.skillsList}>
                                <li className={styles.skillItem}>Suporte técnico presencial e remoto (Windows, Linux, Office 365)</li>
                                <li className={styles.skillItem}>Manutenção de computadores, notebooks e periféricos</li>
                                <li className={styles.skillItem}>Configuração de redes (roteadores, switches, firewalls, VPN)</li>
                                <li className={styles.skillItem}>Organização de cabeamento e estrutura de rede física</li>
                                <li className={styles.skillItem}>Configuração de impressoras, dispositivos móveis e sistemas corporativos</li>
                            </ul>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Por que me escolher?</h2>
                            <ul className={styles.skillsList}>
                                <li className={styles.skillItem}>Tenho experiência sólida em suporte técnico, redes e infraestrutura, sempre focando em soluções rápidas e eficazes</li>
                                <li className={styles.skillItem}>Me comunico de forma clara e objetiva, mesmo com usuários que não têm familiaridade com tecnologia</li>
                                <li className={styles.skillItem}>Sou proativo, comprometido e estou sempre em busca de atualizações para oferecer o melhor atendimento possível</li>
                                <li className={styles.skillItem}>Atendo com agilidade, responsabilidade e foco total na estabilidade dos sistemas e na satisfação do usuário</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Avaliações que o cliente possui</h2>
                    <p className={styles.reviewCountHeader}>(02 avaliações)</p>

                    <div className={styles.reviewCard}>
                        <div className={styles.reviewHeader}>
                            <div className={styles.reviewerImage} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face")' }}></div>
                            <div className={styles.reviewerInfo}>
                                <div className={styles.reviewerName}>MARCIO CARVALHO</div>
                            </div>
                            <div className={styles.reviewRating}>
                                <Star className={styles.starIconSmall} fill="#E66F51" color="#E66F51" />
                                <span className={styles.ratingValue}>5</span>
                            </div>
                        </div>
                        <p className={styles.reviewText}>
                            Cliente extremamente organizado, com ótima comunicação e clareza ao definir as demandas. Sempre demonstra respeito pelo trabalho realizado, mantém um ambiente colaborativo e oferece todas as informações necessárias para a execução das tarefas. Trabalhar com ele(a) é uma experiência positiva e produtiva.
                        </p>
                    </div>

                    <div className={styles.reviewCard}>
                        <div className={styles.reviewHeader}>
                            <div className={styles.reviewerImage} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face")' }}></div>
                            <div className={styles.reviewerInfo}>
                                <div className={styles.reviewerName}>MARCIO CARVALHO</div>
                            </div>
                            <div className={styles.reviewRating}>
                                <Star className={styles.starIconSmall} fill="#E66F51" color="#E66F51" />
                                <span className={styles.ratingValue}>5</span>
                            </div>
                        </div>
                        <p className={styles.reviewText}>
                            Cliente extremamente organizado, com ótima comunicação e clareza ao definir as demandas. Sempre demonstra respeito pelo trabalho realizado, mantém um ambiente colaborativo e oferece todas as informações necessárias para a execução das tarefas. Trabalhar com ele(a) é uma experiência positiva e produtiva.
                        </p>
                    </div>

                    <button className={styles.seeMoreButton}>
                        Ver mais
                        <ChevronDown size={16} className={styles.seeMoreIcon} />
                    </button>
                </div>
            </div>
            <Rodape></Rodape>
        </div>
    );
}

export default AnuncioPerfilCliente;