import React, { useState } from 'react';
import { Search, ChevronDown, Star, Heart, Bookmark, Filter } from 'lucide-react';
import styles from './AnunciosDeProfissionais.module.css';
import HeaderMobileCliente from '../../components/HeaderMobileCliente/HeaderMobileCliente'
import { useMediaQuery } from "@uidotdev/usehooks"
import Rodape from "../../components/Rodape/Rodape"
import { useNavigate } from "react-router-dom";
import HeaderMainCliente from '../../components/HeaderMainCliente/HeaderMainCliente';

function AnunciosDeClientes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);

  const isMobile = useMediaQuery("only screen and (max-width:1445px)")
    const navigate = useNavigate();

    const professionals = [
        {
            id: 1,
            name: 'ROBERTO DE SOUZA',
            rating: 5.0,
            image: '/foto-perfil-profissional.png',
            tags: ['R$70/h', 'Tecnologia', 'presencial e online'],
            description: 'Sou Roberto, técnico de TI com ampla experiência no suporte e na resolução de problemas tecnológicos. Especializado em oferecer soluções rápidas, eficazes e personalizadas, atuo com foco em garantir a continuidade e o bom desempenho dos...'
        },
        {
            id: 2,
            name: 'ROBERTO DE SOUZA',
            rating: 5.0,
            image: '/foto-perfil-profissional.png',
            tags: ['R$70/h', 'Tecnologia', 'presencial e online'],
            description: 'Sou Roberto, técnico de TI com ampla experiência no suporte e na resolução de problemas tecnológicos. Especializado em oferecer soluções rápidas, eficazes e personalizadas, atuo com foco em garantir a continuidade e o bom desempenho dos...'
        },
        {
            id: 3,
            name: 'ROBERTO DE SOUZA',
            rating: 5.0,
            image: '/foto-perfil-profissional.png',
            tags: ['R$70/h', 'Tecnologia', 'presencial e online'],
            description: 'Sou Roberto, técnico de TI com ampla experiência no suporte e na resolução de problemas tecnológicos. Especializado em oferecer soluções rápidas, eficazes e personalizadas, atuo com foco em garantir a continuidade e o bom desempenho dos...'
        },
        {
            id: 4,
            name: 'ROBERTO DE SOUZA',
            rating: 5.0,
            image: '/foto-perfil-profissional.png',
            tags: ['R$70/h', 'Tecnologia', 'presencial e online'],
            description: 'Sou Roberto, técnico de TI com ampla experiência no suporte e na resolução de problemas tecnológicos. Especializado em oferecer soluções rápidas, eficazes e personalizadas, atuo com foco em garantir a continuidade e o bom desempenho dos...',
        },
        {
            id: 5,
            name: 'ROBERTO DE SOUZA',
            rating: 5.0,
            image: '/foto-perfil-profissional.png',
            tags: ['R$70/h', 'Tecnologia', 'presencial e online'],
            description: 'Sou Roberto, técnico de TI com ampla experiência no suporte e na resolução de problemas tecnológicos. Especializado em oferecer soluções rápidas, eficazes e personalizadas, atuo com foco em garantir a continuidade e o bom desempenho dos...'
        }
    ];

    const categories = [
        'Tecnologia',
        'Design & Criatividade',
        'Marketing e Publicidade',
        'Tradução & Escrita',
        'Construção & Reparos',
        'Eventos & Entretenimento',
        'Negócios & Finanças',
        'Trabalho Jurídico & Consultoria',
        'Serviços Domésticos'
    ];

    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id)
                ? prev.filter(fav => fav !== id)
                : [...prev, id]
        );
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={14}
                className={styles.star}
                fill={i < rating ? '#ffa500' : 'none'}
                stroke={i < rating ? '#ffa500' : '#ddd'}
            />
        ));
    };

    return (
        <div className={styles.container}>
            {isMobile ? <HeaderMobileCliente /> : <HeaderMainCliente />}


            <div className={styles.mainContent}>
                <div className={styles.searchSection}>
                    <div style={{ position: 'relative' }}>
                        <Search
                            size={16}
                            style={{
                                position: 'absolute',
                                left: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#999'
                            }}
                        />
                        <input
                            type="text"
                            placeholder="pesquise o tipo de trabalho que deseja"
                            className={styles.searchField}
                            style={{ paddingLeft: '35px' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.contentAndSidebar}>
                    {isMobile && (
                        <div className={styles.mobileFilterToggle}>
                            <button
                                className={styles.filterButton}
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <Filter size={20} />
                                <span>Filtrar</span>
                            </button>
                        </div>
                    )}

                    {(!isMobile || showFilters) && (
                        <aside className={styles.sidebar}>
                            <div className={styles.filterSection}>
                                <h3 className={styles.filterTitle}>Filtrar</h3>
                                <label className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.checkbox} />
                                    melhores avaliações
                                </label>
                                <label className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.checkbox} />
                                    menor preço por hora
                                </label>
                            </div>
                            <div className={styles.filterSection}>
                                <h3 className={styles.filterTitle}>Preferências</h3>
                                <div className={styles.dropdownContainer}>
                                    <select className={styles.dropdown}>
                                        <option>Selecione</option>
                                        <option>Presencial</option>
                                        <option>Online</option>
                                        <option>Presencial e Online</option>
                                    </select>
                                    <ChevronDown size={16} className={styles.dropdownIcon} />
                                </div>
                            </div>
                            <div className={styles.filterSection}>
                                <h3 className={styles.filterTitle}>Estado</h3>
                                <div className={styles.dropdownContainer}>
                                    <select className={styles.dropdown}>
                                        <option>Selecione</option>
                                        <option>São Paulo</option>
                                        <option>Rio de Janeiro</option>
                                    </select>
                                    <ChevronDown size={16} className={styles.dropdownIcon} /> 
                                </div>
                            </div>
                            <div className={styles.filterSection}>
                                <h3 className={styles.filterTitle} id={styles.categoryFilter}>Categorias</h3>
                                <div className={styles.categoryList}>
                                    {categories.map((category, index) => (
                                        <div key={index} className={styles.categoryItem}>
                                            {category}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    )}

                    <main className={styles.results}>
                        {professionals.map((professional) => (
                            <div
                                key={professional.id}
                                className={styles.resultCard}
                            >
                                <div className={styles.cardHeader}>
                                    <img
                                        src={professional.image}
                                        alt={professional.name}
                                        className={styles.profileImage}
                                    />
                                    <div className={styles.profileInfo}>
                                        <h3 className={styles.profileName}>{professional.name}</h3>
                                        <div className={styles.rating}>
                                            <div className={styles.stars}>
                                                {renderStars(professional.rating)}
                                            </div>
                                            <span className={styles.ratingText}>{professional.rating.toFixed(1)}</span>
                                        </div>
                                    </div>
                                    <button
                                        className={styles.favoriteButton}
                                        onClick={() => toggleFavorite(professional.id)}
                                    >
                                        <Bookmark
                                            size={20}
                                            fill={favorites.includes(professional.id) ? '#E66F51' : 'none'}
                                            stroke={favorites.includes(professional.id) ? '#E66F51' : '#c2c2c2ff'}
                                        />
                                    </button>
                                </div>
                                <div className={styles.tags}>
                                    {professional.tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <p className={styles.description}>
                                    {professional.description}
                                </p>
                                <div className={styles.cardActions}>
                                    <button 
                                        className={styles.contactButton}
                                        onClick={() => navigate("/anuncio-perfil-profissional")}
                                    >
                                        Ver detalhes
                                    </button>
                                </div>
                            </div>
                        ))}


                        
                        {/* paginação (nn sei se tem como fzr aq ou precisa ser na api) */}
                        <div className={styles.pagination}>
                            <button className={styles.pageButton}>‹</button>
                            {[1, 2, 3, 4].map((page) => (
                                <button
                                    key={page}
                                    className={`${styles.pageButton} ${page === currentPage ? styles.pageButtonActive : ''}`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}
                            <span style={{ color: '#999' }}>...</span>
                            <button className={styles.pageButton}>›</button>
                        </div>
                    </main>
                </div>
            </div>
            <Rodape></Rodape>
        </div>
    );
};

export default AnunciosDeClientes;