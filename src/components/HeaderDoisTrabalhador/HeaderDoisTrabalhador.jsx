import { header, caixa1, caixa2, logo } from "./HeaderDoisTrabalhador.module.css"


function HeaderDoisTrabalhador() {
    return (
        <header className={header}>

            <div className={caixa1}>
                  <a href="/"><img src="/src/assets/LogoTrabalhador.svg" alt="logo" className={logo} /></a>
            </div>

            <div className={caixa2}></div>


        </header>




    )



}

export default HeaderDoisTrabalhador