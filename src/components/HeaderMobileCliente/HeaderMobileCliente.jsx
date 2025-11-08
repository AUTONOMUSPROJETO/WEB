import MenuIcon from "../../assets/icons/menu_hamburguer.svg?react"
import CloseIcon from "../../assets/icons/tabler-icon-x.svg?react"
import { container, logo, icon_hamburguer, menu_container, menu_header, menu_content, links, no_style, sub_menu, sub_menu_closed } from "./HeaderMobileCLiente.module.css"
import { useState } from "react"
import Link from "../Link"
import Button from "../Button"
import { useLockBodyScroll } from "@uidotdev/usehooks";
import FlechaIcon from "../../assets/icons/arrow_down.svg?react"


function Menu({ setMenuOpen }) {
    const [submenuOpen, setSubmenuOpen] = useState(false)
    useLockBodyScroll();
    return (
        <div className={menu_container}>
            <div className={menu_header}>
                <button onClick={() => setMenuOpen(false)} className={no_style}>
                    <CloseIcon />
                </button>
            </div>
            <div className={menu_content}>
                <div className={links}>
                    <Link linkHoverColor="rgb(240, 138, 114)" to="/contato">Contato</Link>
                    <Link linkHoverColor="rgb(240, 138, 114)" to="/">Saiba mais</Link>
                    <Link linkHoverColor="rgb(240, 138, 114)" click={() => setSubmenuOpen(!submenuOpen)}>Encontre profissionais<FlechaIcon /></Link>
                    {submenuOpen && (
                        <div className={sub_menu}>
                            <Link linkHoverColor="rgb(240, 138, 114)" to="/anuncios-profissionais">Tecnologia</Link>
                            <Link linkHoverColor="rgb(240, 138, 114)" to="/anuncios-profissionais">Design & Criatividade</Link>
                            <Link linkHoverColor="rgb(240, 138, 114)" to="/anuncios-profissionais">Marketing & Publicidade</Link>
                            <Link linkHoverColor="rgb(240, 138, 114)" to="/anuncios-profissionais"> Construção & Reparos</Link>
                            <Link linkHoverColor="rgb(240, 138, 114)" to="/anuncios-profissionais">Eventos & Entretenimento</Link>
                            <Link linkHoverColor="rgb(240, 138, 114)" to="/anuncios-profissionais">Administração & Finanças</Link>
                            <Link linkHoverColor="rgb(240, 138, 114)" to="/anuncios-profissionais">Trabalhos Manuais & Artesanais</Link>
                            <Link linkHoverColor="rgb(240, 138, 114)" to="/anuncios-profissionais">Serviços Domésticos</Link>
                        </div>
                    )}
                    <Link to="/chat" linkHoverColor="rgb(240, 138, 114)">Mensagens</Link>
                    <Link to="/agenda" linkHoverColor="rgb(240, 138, 114)">Agenda</Link>
                </div>
                <div>
                    <Button text="Meu Perfil" to="/tipocadastro" btnColor="#f08a72" btnHoverColor="#000" />
                </div>

            </div>
        </div>
    )
}


function HeaderMobileCliente() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div>
            <div className={container} >
                <button onClick={() => setMenuOpen(true)} className={no_style}>
                    <MenuIcon className={icon_hamburguer} />
                </button>
                <img src="/src/assets/LogoCliente.svg" alt="logo" className={logo} />

            </div>
            {menuOpen &&
                <Menu setMenuOpen={setMenuOpen} />
            }

        </div>

    )
}

export default HeaderMobileCliente