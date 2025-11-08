import {
    heroSection,
    heroContainer,
    contentGrid,
    heroContent,
    titleSection,
    brandTitle,
    brandHighlight,
    heroDescription,
    ctaSection,
    stepsCard,
    cardHeader,
    stepsList,
    stepItem,
    stepNumber,
    stepText,
} from "./Hero.module.css"
import Button from "../Button"

function Hero(){
    return(
        <section className={heroSection}>
            <div className={heroContainer}>
                <div className={contentGrid}>
                    <div className={heroContent}>
                        <div className={titleSection}>
                            <h1 className={brandTitle}>
                                AUTONOM<span className={brandHighlight}>US</span>
                            </h1>
                            <p className={heroDescription}>
                                Revolucione a forma como você contrata profissionais.
                                Nossa plataforma conecta você aos melhores especialistas
                                com <strong>segurança</strong>, <strong>agilidade</strong> e <strong>qualidade garantida</strong>.
                            </p>
                        </div>
                        <div className={ctaSection}>
                            <Button text="Começe agora" to="/tipocadastro"/>
                        </div>
                    </div>

                    <div className={stepsCard}>
                        <div className={cardHeader}>
                            <h2>
                                <span>Contrate um profissional</span> em apenas 3 Passos Simples!
                            </h2>
                        </div>
                        <ol className={stepsList}>
                            <li className={stepItem}>
                                <span className={stepNumber}>01</span>
                                <span className={stepText}>Escolha um profissional qualificado</span>
                            </li>
                            <li className={stepItem}>
                                <span className={stepNumber}>02</span>
                                <span className={stepText}>Contate-o com total segurança</span>
                            </li>
                            <li className={stepItem}>
                                <span className={stepNumber}>03</span>
                                <span className={stepText}>Receba o serviço com qualidade</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero