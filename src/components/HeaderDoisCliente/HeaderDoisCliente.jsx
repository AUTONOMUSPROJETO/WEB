import { header, caixa1, caixa2, logo } from "./HeaderDoisCLiente.module.css"


function HeaderDoisCliente() {
    return (
        <header className={header}>

            <div className={caixa1}>
                  <a href="/"><img src="/src/assets/LogoCliente.svg" alt="logo" className={logo} /></a>
            </div>

            <div className={caixa2}></div>


        </header>




    )



}

export default HeaderDoisCliente