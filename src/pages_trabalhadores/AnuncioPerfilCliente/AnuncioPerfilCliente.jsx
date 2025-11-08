import { useState } from 'react';
import { Star, MessageCircle, Clock, Bookmark, ChevronDown } from 'lucide-react';
import styles from './AnuncioPerfilCliente.module.css';
import HeaderMainTrabalhador from '../../components/HeaderMainTrabalhador/HeaderMainTrabalhador'
import HeaderMobileTrabalhador from '../../components/HeaderMobileTrabalhador/HeaderMobileTrabalhador'
import { useMediaQuery } from "@uidotdev/usehooks"
import Rodape from "../../components/Rodape/Rodape"
import { useNavigate } from "react-router-dom";

function AnuncioPerfilCliente() {

    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    const professional = { id: 'leticia-soares' };

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
            {isMobile ? <HeaderMobileTrabalhador /> : <HeaderMainTrabalhador />}

            <div className={styles.headerBackground}></div>

            <div className={styles.profileCard}>
                <div className={styles.cardTopArea}>
                    <div className={styles.profileImageContainer}>
                        <img
                            src="/foto-perfil-cliente.png"
                            alt="Letícia Soares"
                            className={styles.profileImage}
                        />
                    </div>

                    <div className={styles.ratingInfo}>
                        <div className={styles.stars}>
                            <Star className={styles.starIcon} fill="#A0CEE1" color="#A0CEE1" />
                            <Star className={styles.starIcon} fill="#A0CEE1" color="#A0CEE1" />
                            <Star className={styles.starIcon} fill="#A0CEE1" color="#A0CEE1" />
                            <Star className={styles.starIcon} fill="#A0CEE1" color="#A0CEE1" />
                            <Star className={styles.starIcon} fill="#A0CEE1" color="#A0CEE1" />
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
                            fill={favorites.includes(professional.id) ? '#A0CEE1' : 'none'}
                            color={favorites.includes(professional.id) ? '#A0CEE1' : '#a0a0a0'}
                        />
                    </button>
                </div>

                <h1 className={styles.profileName}>LETÍCIA SOARES</h1>

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

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Sobre</h2>
                    <p className={styles.aboutText}>
                        Sou Letícia e estou em busca de um(a) profissional para me apoiar nas atividades diárias da área de tecnologia. Preciso de alguém com conhecimento técnico,
                        comprometimento e responsabilidade para atuar ao meu lado, garantindo um atendimento de qualidade e mantendo os sistemas sempre operacionais.
                    </p>

                    <h3 className={styles.sectionSubtitle}>Atividades envolvidas:</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>Manutenção de servidores (remoto e presencial)</li>
                        <li className={styles.skillItem}>Manutenção e configuração de computadores e redes</li>
                        <li className={styles.skillItem}>Suporte ao usuário, garantindo o bom andamento de operações</li>
                        <li className={styles.skillItem}>Atendimento a chamados e organização das demandas</li>
                    </ul>

                    <h3 className={styles.sectionSubtitle}>Requisitos:</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>Conhecimento em informática, redes, manutenção e suporte</li>
                        <li className={styles.skillItem}>Boa comunicação e postura profissional</li>
                        <li className={styles.skillItem}>Experiência prévia na área será um diferencial</li>
                    </ul>
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
                                <Star className={styles.starIconSmall} fill="#A0CEE1" color="#A0CEE1" />
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
                                <Star className={styles.starIconSmall} fill="#A0CEE1" color="#A0CEE1" />
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