import { container, divisor, site_map, links } from "./Rodape.module.css"

function Rodape() {

    return (
        <>
            <footer>
                <div className={container}>
                    <img src="/src/assets/LOGO.svg"></img>
                    <hr className={divisor} />
                    <div className={site_map}>
                        <div className={links}>
                            <h6>SOBRE</h6>
                            <a href="#">Sobre nós</a>
                            <a href="#">Contato</a>
                            <a href="#">Cadastrar</a>
                            <a href="#">Entrar</a>
                            <a href="#"><br></br></a>
                        </div>
                        <div className={links}>
                            <h6>SUA CONTA</h6>
                            <a href="#">Informações da conta</a>
                            <a href="#">Avaliações feitas por você</a>
                            <a href="#">Suas publicações</a>
                            <a href="#"><br></br></a>
                            <a href="#"><br></br></a>
                        </div>
                        <div className={links}>
                            <h6>COMO COMEÇAR</h6>
                            <a href="#">Saiba mais</a>
                            <a href="#">Ferramentas</a>
                            <a href="#">Dicas para contratar</a>
                            <a href="#"><br></br></a>
                            <a href="#"><br></br></a>
                        </div>
                        <div className={links}>
                            <h6>FALE CONOSCO</h6>
                            <a href="#">Email: dpo@autonomus.com</a>
                            <a href="#">Telefone: (xx) xxxxx-xxxx</a>
                            <a href="#"><br></br></a>
                            <a href="#">Redes Sociais</a>
                            <a href="#"> 📸 🐦</a>
                        </div>
                    </div>
                    <hr className={divisor} />
                    <p>Autonomus @ 2025. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Rodape