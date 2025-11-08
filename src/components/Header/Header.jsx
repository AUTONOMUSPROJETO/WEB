import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { User, ChevronDown, Search } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import Button from "../Button";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownTimeoutRef = useRef(null);
    const dropdownRef = useRef(null);
    const [isTablet, setIsTablet] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
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
                {/* Caixa 1 - Logo + Links */}
                <div className={styles.caixa1}>
                    <a href="/"><img src="/src/assets/Logo.svg" alt="logo" className={styles.logo} /></a>
                    <a onClick={() => handleLinkClick("/contato")} className={styles.link}>Contato</a>
                    <a onClick={() => handleLinkClick("#sessao2")} className={styles.link}>Saiba mais</a>

                    {/* Dropdown */}
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
                                    <a className={styles.link} onClick={() => handleLinkClick("/login")}>Tecnologia</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/login")}>Design & Criatividade</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/login")}>Marketing & Publicidade</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/login")}>Construção & Reparos</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/login")}>Eventos & Entretenimento</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/login")}>Administração & Finanças</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/login")}>Trabalhos Manuais & Artesanais</a>
                                    <a className={styles.link} onClick={() => handleLinkClick("/login")}>Serviços Domésticos</a>
                                </div>
                            </div>
                        )}
                    </div>

                    <a className={styles.link} onClick={() => handleLinkClick("/login")}>Encontre trabalhos</a>
                </div>

                {/* Caixa 2 - Busca + Login + Botão */}
                <div className={styles.caixa2}>
                    <div className={styles.input_container}>
                        <Search />
                        <input className={styles.input_text} type="text" placeholder="pesquise uma categoria" />
                    </div>
                    <a onClick={() => handleLinkClick("/login")} className={styles.link}>
                        <span className={styles.icon_style}><FaRegUser /></span>Entrar
                    </a>
                    <Button text="Cadastrar" to="/tipocadastro" variante="outroBtn">
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
