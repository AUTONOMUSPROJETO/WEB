import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderMainCliente.module.css";
import { User, ChevronDown, Search } from "lucide-react";
import Button from "../Button";
import { CircleUser } from 'lucide-react';
import { IoMdNotificationsOutline } from "react-icons/io";


function HeaderMainCliente() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownTimeoutRef = useRef(null);
    const dropdownRef = useRef(null);
    const [isTablet, setIsTablet] = useState(false);
    const navigate = useNavigate();

    const [idUsuario, setIdUsuario] =  useState(null);

    useEffect(() => {

        const id = localStorage.getItem("idUsuario");
        setIdUsuario(id);

        const handleResize = () => {
            setIsTablet(window.innerWidth <= 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isTablet && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isTablet]);

    const handleLinkClick = (to) => {
        if (to) {
            navigate(to);
        }
    };

    const handleButtonClick = (e, to) => {
        e.stopPropagation();
        if (to) {
            navigate(to);
        }
    };

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeoutRef.current);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
    };

    const handleToggle = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.caixa1}>
                    <a href="/homecliente"><img src="/src/assets/LogoCliente.svg" alt="logo" className={styles.logo} /></a>
                    <a onClick={() => handleLinkClick("/contato")} className={styles.link}>Contato</a>
                    <a onClick={() => handleLinkClick("#sessao2")} className={styles.link}>Saiba mais</a>


                    <div
                        style={{ position: "relative" }}
                        ref={dropdownRef}
                        onMouseEnter={!isTablet ? handleMouseEnter : undefined}
                        onMouseLeave={!isTablet ? handleMouseLeave : undefined}
                    >
                        <button
                            className={`${styles.link} ${isDropdownOpen ? styles.link_active : ""}`}
                            onClick={isTablet ? handleToggle : undefined}
                        >
                            Encontre profissionais
                            <ChevronDown size={16} className={isDropdownOpen ? styles.arrow_rotate : ""} />
                        </button>

                        {isDropdownOpen && (
                            <div className={styles.dropdown}>
                                <div className={styles.dropdown_menu}>
                                    <a className={styles.link} onClick={() => handleLinkClick("/anuncios-profissionais")}>Tecnologia</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/anuncios-profissionais")}>Design & Criatividade</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/anuncios-profissionais")}>Marketing & Publicidade</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/anuncios-profissionais")}>Construção & Reparos</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/anuncios-profissionais")}>Eventos & Entretenimento</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/anuncios-profissionais")}>Administração & Finanças</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/anuncios-profissionais")}>Trabalhos Manuais & Artesanais</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/anuncios-profissionais")}>Serviços Domésticos</a>
                                </div>
                            </div>
                        )}
                    </div>

                    <a className={styles.link} onClick={() => handleLinkClick("/chat")}>Mensagens</a>
                    <a className={styles.link} onClick={() => handleLinkClick("/agenda")}>Agenda</a>
                </div>

                <div className={styles.caixa2}>
                    <div className={styles.input_container}>
                        <Search />
                        <input className={styles.input_text} type="text" placeholder="pesquise uma categoria" />
                    </div>
                    <a onClick={() => handleLinkClick("/homecliente")} className={styles.link}>
                        <span className={styles.icon_style}><IoMdNotificationsOutline /></span>
                    </a>
                    <a onClick={() => handleLinkClick(`/perfil-cliente/${idUsuario}`)} className={styles.linkDois}>
                        <span className={styles.icon_style_dois}><CircleUser /></span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default HeaderMainCliente;
