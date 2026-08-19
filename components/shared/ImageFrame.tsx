import Image from 'next/image';
import styles from './ImageFrame.module.css';

interface ImageFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export function ImageFrame({
  src,
  alt,
  caption,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 40vw',
  aspect = 'portrait',
}: ImageFrameProps) {
  return (
    <figure className={`${styles.figure} ${styles[aspect]} ${className}`.trim()}>
      <span className={styles.offset} aria-hidden />
      <div className={styles.photoWrap}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={styles.image}
        />
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
