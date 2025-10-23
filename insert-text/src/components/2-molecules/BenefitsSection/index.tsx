// components/3-organisms/BenefitsSection/index.tsx
import BenefitCard from '@/components/2-molecules/BenefitCard';
import styles from './BenefitsSection.module.css';

// --- ÍCONOS NUEVOS Y TEMÁTICOS ---

// Ícono de Lupa para "Exploración Detallada"
const MagnifyingGlassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

// Ícono de Cámara para "Fotografía Impresionante"
const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
  </svg>
);

// Ícono de Libro/Mundo para "Conocimiento Profundo"
const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);


export default function BenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.grid}>
        <BenefitCard
          icon={<MagnifyingGlassIcon />}
          title="Exploración Detallada"
          description="Sumérgete en el microuniverso y descubre los secretos, comportamientos y adaptaciones de las criaturas más fascinantes."
        />
        <BenefitCard
          icon={<CameraIcon />}
          title="Fotografía Impresionante"
          description="Disfruta de una galería visual de alta definición con fotografía macro que revela la increíble belleza y complejidad de los insectos."
        />
        <BenefitCard
          icon={<BookOpenIcon />}
          title="Conocimiento Accesible"
          description="Artículos curados y datos verificados para entusiastas, estudiantes y curiosos. Aprende de forma fácil y entretenida."
        />
      </div>
    </section>
  );
}