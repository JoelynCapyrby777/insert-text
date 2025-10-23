// components/2-molecules/PostCard/index.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './PostCard.module.css';

interface PostCardProps {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
}

export default function PostCard({ slug, imageUrl, title, description }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imageUrl}
          alt={`Imagen para el artículo ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.readMore}>Leer más →</span>
      </div>
    </Link>
  );
}