import React from 'react';
// Certifique-se de que o caminho para o Header está correto
import Header from '../../components/Header/Header'; 
import { FaUserPlus, FaCog, FaFilter, FaComments, FaStar } from 'react-icons/fa';
import { MdOutlineHealthAndSafety, MdConstruction, MdComputer, MdDesignServices, MdHomeRepairService } from 'react-icons/md';
// Importa o arquivo de módulo CSS
import styles from './SaibaMais.module.css';


function SaibaMais() {
    // Definição das áreas (com classes CSS para as cores)
    const areas = [
        { name: "Saúde e Bem-estar", icon: MdOutlineHealthAndSafety, colorClass: styles.red },
        { name: "Construção e Reforma", icon: MdConstruction, colorClass: styles.amber },
        { name: "Tecnologia e Suporte Técnico", icon: MdComputer, colorClass: styles.blue },
        { name: "Design e Mídia", icon: MdDesignServices, colorClass: styles.purple },
        { name: "Serviços domésticos e Manutenção", icon: MdHomeRepairService, colorClass: styles.green },
    ];

    // Definição dos passos do "Como Funciona?"
    const steps = [
        { step: 1, text: "Cadastre-se grátis", icon: FaUserPlus },
        { step: 2, text: "Configure seu perfil conforme sua necessidade", icon: FaCog },
        { step: 3, text: "Use os filtros para encontrar o que deseja", icon: FaFilter },
        { step: 4, text: "Converse pelo chat e negocie direto com nossa agenda", icon: FaComments },
        { step: 5, text: "Avalie e seja avaliado", icon: FaStar },
    ];

    // Definição dos benefícios
    const benefits = [
        "Agendamento de horários mais fácil e prático",
        "Economia de tempo com filtragens inteligentes",
        "Chat direto, sem intermediários",
        "Avaliações que ajudam a escolher melhor"
    ];

    return (
        <>
            <Header />

            {/* Seção 1: Banner e Título Principal (Amarelo, com Bolha Oval) */}
            <section className={styles.sectionYellow}>
                <div className={styles.maxWidthContainer} style={{ textAlign: 'left' }}>
                    
                    {/* Container que cria a forma oval amarela clara */}
                    <div className={styles.titleMainContainer}>
                        <h1 className={styles.titleMain}>
                            O trabalho que fazemos e as pessoas que ajudamos
                        </h1>
                    </div>
                </div>
            </section>

            {/* Seção 2: Conectamos Talentos */}
            <section className={styles.sectionContent}>
                <div className={`${styles.maxWidthContainer} ${styles.contentGrid}`}>
                    {/* Coluna Esquerda: Texto de Introdução */}
                    <div>
                        <h2 className={styles.contentTitle}>
                            Conectamos talentos a oportunidades
                        </h2>
                        <p className={styles.textParagraph}>
                            Se você é um trabalhador autônomo ou alguém em busca de um profissional, esse é o lugar certo.
                        </p>
                        <p className={styles.textParagraph}>
                            Nossa plataforma foi criada para facilitar conexões de qualidade entre talentos e clientes. Ao reunir diversas áreas, desenvolvida para facilitar conexões de qualidade. Com ferramentas inteligentes, você economiza tempo e encontra o que realmente precisa.
                        </p>
                        <p className={styles.textParagraph}>
                            Se você é cliente, poderá navegar por uma ampla variedade de serviços, conferir avaliações, preços e horários compatíveis com o profissional antes de tomar qualquer decisão. Se você é autônomo, terá visibilidade para divulgar seu trabalho. Profissionais, use o perfil como vitrine, conquiste novos clientes com base na sua reputação e títulos que você possui, ajudando as pessoas que realmente precisam. Com ferramentas pensadas para otimizar seu tempo e oferecer uma experiência completa - como filtros avançados, sistema de agenda e chat – tornando a experiência do serviço muito mais fácil e ágil o encontro entre quem precisa de um serviço e quem o executa.
                        </p>
                    </div>

                    {/* Coluna Direita: Para Clientes / Para Profissionais */}
                    <div className="space-y-10">
                        {/* Para Clientes */}
                        <div>
                            <h3 className={styles.contentSubtitle}>
                                Para clientes:
                            </h3>
                            <p className={styles.textParagraph}>
                                Encontre o profissional ideal de forma simples, rápida e segura. Nossa plataforma conecta você a trabalhadores autônomos qualificados que podem ajudá-lo com tudo que você precisa.
                            </p>
                            <ul className={styles.listUl}>
                                <li>Navegar por profissionais com base em localização, preço e avaliações.</li>
                                <li>Verificar avaliações reais de outros clientes.</li>
                                <li>Agendar serviços em horários compatíveis com sua rotina.</li>
                            </ul>
                        </div>

                        {/* Para Profissionais */}
                        <div>
                            <h3 className={styles.contentSubtitle}>
                                Para profissionais:
                            </h3>
                            <p className={styles.textParagraph}>
                                Mostre seu talento e conquiste mais clientes todos os dias. Se você é autônomo, essa é a vitrine ideal para divulgar seus serviços e alcançar novos clientes em todo o lugar onde você poderá:
                            </p>
                            <ul className={styles.listUl}>
                                <li>Ser encontrado por clientes que realmente precisam do seu serviço.</li>
                                <li>Usar a agenda inteligente para evitar conflitos de horários.</li>
                                <li>Negociar direto com o cliente, sem intermediários.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 3: Como Funciona? (Layout Horizontal de Bolhas) */}
            <section className={styles.sectionHowItWorks}>
                <div className={styles.maxWidthContainer}>
                    <h2 className={styles.sectionTitle} style={{textAlign: 'center'}}>
                        Como Funciona?
                    </h2>
                    <div className={styles.howItWorksGrid}>
                        {steps.map((step) => (
                            <div key={step.step} className={styles.stepItem}>
                                <div className={styles.stepIconContainer}>
                                    {/* Círculo de fundo grande (opaco) */}
                                    <div className={styles.stepCircleBg}></div>
                                    {/* Círculo da frente com o número */}
                                    <div className={styles.stepCircleFront}> 
                                        <p className={styles.stepNumber}>{step.step}</p>
                                    </div>
                                </div>
                                {/* O texto da descrição do passo */}
                                <p className={styles.stepText}>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seção 4: Encontre Profissionais em Diversas Áreas (Amarelo) */}
            <section className={styles.sectionYellow}>
                <div className={styles.maxWidthContainer}>
                    <h2 className={styles.sectionTitle} style={{textAlign: 'center'}}>
                        Encontre profissionais em diversas áreas
                    </h2>

                    <div className={styles.areasGrid}>
                        {areas.map((area) => (
                            <div key={area.name} className={styles.areaItem}>
                                <area.icon className={`${styles.areaIcon} ${area.colorClass}`} />
                                <p className={styles.areaName}>{area.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seção 5: Por que escolher / App (COM IMAGENS) */}
            <section className={styles.sectionContent}>
                <div className={`${styles.maxWidthContainer} ${styles.contentGrid}`}>
                    
                    {/* Coluna Esquerda: Por que escolher a plataforma? (Com imagem da pessoa no laptop) */}
                    <div>
                        <h2 className={styles.contentTitle}>
                            Por que escolher a nossa plataforma?
                        </h2>
                        <ul className={styles.listCheck}>
                            {benefits.map((benefit, index) => (
                                <li key={index}>
                                    <span className={styles.checkIcon}>✓</span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        
                        {/* Imagem do Usuário (Com fundo oval amarelo) */}
                        <div className={styles.imageWrapperUser}>
                            {/* **IMPORTANTE:** Ajuste o caminho 'src' para o local real da sua imagem */}
                            <img 
                                src="src/assets/usuario.svg" 
                                alt="Pessoa utilizando a plataforma em um laptop" 
                            />
                        </div>
                    </div>

                    {/* Coluna Direita: Uso no celular ou no computador (Imagens de App) */}
                    <div>
                        <h2 className={styles.contentTitle}>
                            Use no celular ou no computador
                        </h2>
                        <p className={styles.textParagraph}>
                            Nossa plataforma foi pensada para se adaptar à sua rotina. Seja no celular, tablet ou computador, você pode acessar todas as funcionalidades de forma rápida, leve e intuitiva.
                        </p>
                        <p className={styles.textParagraph}>
                            Você também pode baixar nossos aplicativos para uma experiência ainda mais prática!
                        </p>

                        <div style={{marginTop: '1.5rem'}}>
                            <h3 className={styles.contentSubtitle} style={{fontSize: '1.15rem'}}>App para Profissionais:</h3>
                            <p className={styles.textParagraph}>
                                Ideal para quem quer gerenciar seus serviços, agenda e mensagens de forma ágil.
                            </p>
                            <h3 className={styles.contentSubtitle} style={{fontSize: '1.15rem'}}>App para Clientes:</h3>
                            <p className={styles.textParagraph}>
                                Perfeito para encontrar profissionais, agendar serviços e acompanhar tudo em um só lugar.
                            </p>
                        </div>

                        {/* Imagens de Dispositivos (Mockups) */}
                        <div className={styles.imageWrapperApp}>
                             {/* **IMPORTANTE:** Ajuste o caminho 'src' para o local real da sua imagem */}
                            <img 
                                src="src/assets/Plataforma.svg" 
                                alt="Mockups da plataforma em celular e computador" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 6: Footer simples */}
            <footer style={{backgroundColor: '#333', color: '#fff', padding: '1rem 0'}}>
                <div className={styles.maxWidthContainer} style={{textAlign: 'center', fontSize: '0.875rem'}}>
                    © {new Date().getFullYear()} Plataforma. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
}

export default SaibaMais;