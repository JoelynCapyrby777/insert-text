// components/3-organisms/Footer/index.tsx
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {currentYear} [Insert-Text] | Hecho por 
        <a 
          href="https://github.com/JoelynCapyrby777" // <-- ¡Cambia esto por tu GitHub!
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
        >
          Yoel 😸
        </a>
      </p>
    </footer>
  );
}