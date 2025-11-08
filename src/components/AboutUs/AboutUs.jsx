import { container, contentWrapper, textSection, imageSection, titleGradient, description, ctaButton, decorativeElement, floatingCard } from "./AboutUs.module.css"
import Button from "../Button"

function AboutUs(){
    return(
        <section className={container}>
            <div className={contentWrapper}>
                                <div className={imageSection}>
                    <div className={floatingCard}>
                        <img src="/src/assets/SobreNosDois.png" alt="Sobre nossa empresa"/>
                    </div>
                </div>
                <div className={textSection}>
                    <div className={decorativeElement}></div>
                    <h1 className={titleGradient}>
                        Sobre <span>nós</span>
                    </h1>
                    <p className={description}>
                        Nossa plataforma foi desenvolvida para <strong>revolucionar</strong> a forma como você contrata profissionais. 
                        Combinamos tecnologia de ponta com design intuitivo para criar uma experiência única e segura.
                    </p>
                    <p className={description}>
                        Em um ecossistema digital integrado, conectamos você aos melhores especialistas, 
                        garantindo qualidade, agilidade e total transparência em cada etapa do processo.
                    </p>
                    <div className={ctaButton}>
                        <Button text="Descubra mais sobre nós" />
                    </div>
                </div>
                

            </div>
        </section>
    )
}

export default AboutUs