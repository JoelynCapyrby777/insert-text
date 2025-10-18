// components/1-atoms/Button/index.tsx
import styles from './Button.module.css';

// 1. Definimos la "forma" de nuestras props con una interface
interface ButtonProps {
    children: React.ReactNode; // 'children' puede ser texto, un ícono, etc.
    primary?: boolean;         // 'primary' es opcional (por el '?') y booleano
    onClick?: () => void;      // 'onClick' es una función opcional que no retorna nada
}

// 2. Usamos la interface para tipar las props del componente
export default function Button({ children, primary = false, onClick }: ButtonProps) {
    const buttonClasses = `
    ${styles.button}
    ${primary ? styles.primary : ''}
  `;

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
}