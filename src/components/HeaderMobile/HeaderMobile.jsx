import MenuIcon from "../../assets/icons/menu_hamburguer.svg?react"
import CloseIcon from "../../assets/icons/tabler-icon-x.svg?react"
import { container, logo, icon_hamburguer, menu_container, menu_header, menu_content, links, no_style, sub_menu, sub_menu_closed } from "./HeaderMobile.module.css"
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
                    <Link>Contato</Link>
                    <Link>Saiba mais</Link>
                    <Link click={() => setSubmenuOpen(!submenuOpen)}>Encontre profissionais<FlechaIcon /></Link>
                    {submenuOpen && (
                        <div className={sub_menu}>
                            <Link>Tecnologia</Link>
                            <Link>Design & Criatividade</Link>
                            <Link>Marketing & Publicidade</Link>
                            <Link>Construção & Reparos</Link>
                            <Link>Eventos & Entretenimento</Link>
                            <Link>Administração & Finanças</Link>
                            <Link>Trabalhos Manuais & Artesanais</Link>
                            <Link>Serviços Domésticos</Link>
                        </div>
                    )}
                    <Link>Encontre trabalhos</Link>
                </div>
                <div>
                    <Button text="Cadastrar" to="/tipocadastro"/>
                </div>

            </div>
        </div>
    )
}


function HeaderMobile() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div>
            <div className={container} >
                <button onClick={() => setMenuOpen(true)} className={no_style}>
                    <MenuIcon className={icon_hamburguer} />
                </button>
                <img src="/src/assets/LOGO.svg" alt="logo" className={logo} />

            </div>
            {menuOpen &&
                <Menu setMenuOpen={setMenuOpen} />
            }

        </div>

    )
}

export default HeaderMobile