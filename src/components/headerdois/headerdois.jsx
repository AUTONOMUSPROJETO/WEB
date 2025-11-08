import { header, caixa1, caixa2, logo } from "./HeaderDois.module.css"


function HeaderDois() {
    return (
        <header className={header}>

            <div className={caixa1}>
                  <a href="/"><img src="/src/assets/Logo.svg" alt="logo" className={logo} /></a>
            </div>

            <div className={caixa2}></div>


        </header>




    )



}

export default HeaderDois