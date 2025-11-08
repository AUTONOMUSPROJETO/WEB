import React, { useRef, useState, useEffect } from "react";
import styles from "./ServicosPopulares.module.css";
import { Code, PenTool, Film, Music, Camera, Globe, Brush, Cpu } from "lucide-react";

const services = [
  { id: 1, name: "Programação", image: "/src/assets/imagens-carrossel/img1.png" },
  { id: 2, name: "Design Gráfico", image: "/src/assets/imagens-carrossel/img2.png" },
  { id: 3, name: "Edição de Vídeo", image: "/src/assets/imagens-carrossel/img3.png"},
  { id: 4, name: "Música", image: "/src/assets/imagens-carrossel/img4.png" },
  { id: 5, name: "Fotografia", image: "/src/assets/imagens-carrossel/img5.png",},
  { id: 6, name: "Marketing Digital", image: "https://source.unsplash.com/400x300/?marketing" },
  { id: 7, name: "Ilustração", image: "https://source.unsplash.com/400x300/?illustration"},
  { id: 8, name: "Inteligência Artificial", image: "https://source.unsplash.com/400x300/?ai,robot" },
];

const ServicosPopulares = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const index = Math.round(scrollLeft / (360 + 32)); // largura + gap
      setActiveIndex(index);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidthWithGap = 360 + 32;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -cardWidthWithGap : cardWidthWithGap,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section className={styles.servicosPopulares}>
      <div className={styles.backgroundShapes}></div>
      <h2 className={styles.title}>🌟 Serviços Populares</h2>
      <p className={styles.subtitle}>Explore os serviços mais procurados pelos usuários</p>

      <div className={styles.carouselWrapper}>
        <button className={`${styles.navButton} ${styles.left}`} onClick={() => scroll("left")}>
          ◀
        </button>

        <div className={styles.carouselContainer} ref={carouselRef} onScroll={handleScroll}>
          {services.map((service) => (
            <div key={service.id} className={`${styles.card} fadeInUp`}>
              <div className={styles.cardImageWrapper}>
                <img src={service.image} alt={service.name} className={styles.cardImage} />
                <div className={styles.iconWrapper}></div>
              </div>
              <div className={styles.cardContent}>
                <h3>{service.name}</h3>
                <button className={styles.exploreBtn}>Explorar →</button>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.navButton} ${styles.right}`} onClick={() => scroll("right")}>
          ▶
        </button>
      </div>

      <div className={styles.indicators}>
        {services.map((_, i) => (
          <span key={i} className={`${styles.dot} ${i === activeIndex ? styles.active : ""}`}></span>
        ))}
      </div>
    </section>
  );
};

export default ServicosPopulares;

