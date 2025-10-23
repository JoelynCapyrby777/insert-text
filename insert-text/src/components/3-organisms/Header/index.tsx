// components/3-organisms/Header/index.tsx
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Insert-Bug
        </Link>
        <Link href="/aviso-de-privacidad" className={styles.navLink}>
          Aviso de Privacidad
        </Link>
      </nav>
    </header>
  );
}