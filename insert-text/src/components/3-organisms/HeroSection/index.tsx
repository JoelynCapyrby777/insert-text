// components/3-organisms/HeroSection/index.tsx

"use client";

import Button from '@/components/1-atoms/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const handleButtonClick = () => {
    console.log("Botón presionado!");
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Pega Texto Limpio, Siempre.</h1>
      <p className={styles.subtitle}>
        La herramienta más sencilla para eliminar el formato de cualquier texto
        antes de pegarlo.
      </p>
      <Button primary={true} onClick={handleButtonClick}>
        Ir a la Herramienta
      </Button>
    </section>
  );
}