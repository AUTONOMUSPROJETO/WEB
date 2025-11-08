import { sessao4, caixa1, titulo, cards, conteudoDireita, card1, card2, feedback_card, feedback_name, feedback_text, imagem_feed, titulo_card, imagem_estrelas } from "./Feedbacks.module.css"



function Feedbacks() {
    return (
        <div className={sessao4}>
            <div className={caixa1}>
                <img src="src/assets/trabalhadora-olhando-pra-cima.png" />
            </div>

            <div className={conteudoDireita}>
                <div className={titulo}>
                    <h1>FEEDBACKS</h1>
                    <h2>O que os usuários falam sobre nós</h2>
                </div>

                <div className={cards}>
                    <div className={card1}>
                        <img src="src/assets/pexels-feed1.png" className={imagem_feed}></img>
                        <div className={feedback_card}>
                            <div className={titulo_card}>
                                <h3 className={feedback_name}>RENATA</h3>
                                <img src="src/assets/estrelas1.png" className={imagem_estrelas}></img>
                            </div>

                            <p className={feedback_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nodeserunt mollit anim</p>
                        </div>
                    </div>
                    <div className={card2}>
                        <img src="src/assets/pexels-feed1.png" className={imagem_feed}></img>
                        <div className={feedback_card}>
                            <div className={titulo_card}>
                                <h3 className={feedback_name}>MARIANA</h3>
                                <img src="src/assets/estrelas1.png" className={imagem_estrelas}></img>
                            </div>
                            <p className={feedback_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nodeserunt mollit anim</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedbacks