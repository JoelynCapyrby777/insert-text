// components/3-organisms/HeroSection/index.tsx

"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';

import Button from '@/components/1-atoms/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const parallaxImageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Efecto Parallax Manual
    const handleScroll = () => {
      if (parallaxImageRef.current) {
        const scrollY = window.scrollY;
        // Mueve la imagen a una fracción de la velocidad del scroll para el efecto
        parallaxImageRef.current.style.transform = `translateY(${scrollY * 0.3}px) scale(1.5)`;
      }
    };

    // Agrega el listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // 2. Animación GSAP
    // Ponemos los elementos en su estado inicial (invisibles) antes de la animación
    gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
    gsap.set(buttonsRef.current, { opacity: 0, y: 20 });

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (titleRef.current) {
      const words = titleRef.current.innerText.split(' ');
      titleRef.current.innerHTML = words.map(word => `<span><span>${word}</span></span>`).join(' ');
      const spans = titleRef.current.querySelectorAll('span > span');

      timeline.from(spans, {
        y: "100%",
        duration: 0.8,
        stagger: 0.05,
        delay: 0.2
      });
    }

    // Animamos los elementos a su estado final
    timeline.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.6");
    timeline.to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");

    // 3. FUNCIÓN DE LIMPIEZA (LA PARTE MÁS IMPORTANTE)
    // Esto se ejecuta cuando sales de la página.
    return () => {
      // Quita el listener de scroll para que no se acumulen
      window.removeEventListener('scroll', handleScroll);
      // Detiene y limpia todas las animaciones de GSAP para evitar conflictos
      timeline.kill();
    };

  }, []); // El array vacío asegura que este código solo se ejecute una vez

  const handleSecondaryClick = () => {
    window.open('https://github.com/tu-usuario/insert-text', '_blank');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />

      <div className={styles.backgroundImageContainer}>
        <Image
          ref={parallaxImageRef}
          src="/heroBackground.jpg"
          alt="Fondo de una mariquita sobre una hoja verde"
          fill
          quality={90}
          priority
          className={styles.heroBackground}
        />
      </div>

      <div className={styles.heroContent}>
        <h1 ref={titleRef} className={styles.title}>
          Explora un Microuniverso Asombroso
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          Un viaje visual a través de la vida, belleza y misterio de las criaturas más pequeñas y extraordinarias del planeta.
        </p>
        <div ref={buttonsRef}>
          <Link href="/blog" className="button-link">
            <Button variant="primary">
              Explorar Artículos
            </Button>
          </Link>
          <Button variant="secondary" onClick={handleSecondaryClick}>
            Ver en GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}