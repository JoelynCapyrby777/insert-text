// components/3-organisms/BenefitsSection/index.tsx
import BenefitCard from '@/components/2-molecules/BenefitCard';
import styles from './BenefitsSection.module.css';

// Iconos SVG como componentes simples para mantener el código limpio
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);

export default function BenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.grid}>
        <BenefitCard
          icon={<ClockIcon />}
          title="Ahorra Tiempo Valioso"
          description="No más clics extra en 'Pegado Especial'. Limpia tu texto con una sola acción y agiliza tu flujo de trabajo."
        />
        <BenefitCard
          icon={<DocumentIcon />}
          title="Mantén la Consistencia"
          description="Asegúrate de que tus documentos, correos y notas mantengan un formato uniforme y profesional sin estilos indeseados."
        />
        <BenefitCard
          icon={<ZapIcon />}
          title="Uso Instantáneo y Fácil"
          description="Sin instalaciones, sin registros, sin complicaciones. Solo copia, pega en nuestra web y obtén tu texto limpio al instante."
        />
      </div>
    </section>
  );
}