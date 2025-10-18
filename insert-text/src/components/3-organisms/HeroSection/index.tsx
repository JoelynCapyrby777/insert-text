// components/3-organisms/HeroSection/index.tsx

"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import Button from '@/components/1-atoms/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const parallaxImageRef = useRef(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inicializar Parallax de forma dinámica y segura
    if (parallaxImageRef.current) {
      import('simple-parallax-js').then((SimpleParallax) => {
        const Parallax = SimpleParallax.default as any;
        
        new Parallax(parallaxImageRef.current, {
          scale: 1.5,
          orientation: 'down',
          delay: 0.4,
          transition: 'cubic-bezier(0,0,0,1)'
        });
      });
    }

    // Inicializar Animación GSAP (esto no cambia)
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

    if (subtitleRef.current) {
      timeline.from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.6");
    }

    if (buttonsRef.current) {
      timeline.from(buttonsRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4");
    }

  }, []);

  const handlePrimaryClick = () => {
    console.log("Botón principal presionado!");
  };
  
  const handleSecondaryClick = () => {
    window.open('https://github.com/JoelynCapyrby777/insert-text', '_blank');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      
      <Image
        ref={parallaxImageRef}
        src="/animals-4235456.jpg" 
        alt="Fondo de una avispa esmeralda metálica sobre una superficie oscura"
        fill
        quality={90}
        priority
        className={styles.heroBackground}
      />
      
      <div className={styles.heroContent}>
        <h1 ref={titleRef} className={styles.title}>
          Descubre este maravilloso mundo en minuatura.
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          ¡La enciclopedia mas grande que podras encontrar!.
        </p>
        <div ref={buttonsRef}>
          <Button variant="primary" onClick={handlePrimaryClick}>
            Descubrir
          </Button>
          <Button variant="secondary" onClick={handleSecondaryClick}>
            Ver en GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}