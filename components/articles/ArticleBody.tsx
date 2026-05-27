import type { ArticleContentBlock } from '@/content/articles';
import styles from './ArticleBody.module.css';

interface ArticleBodyProps {
  blocks: ArticleContentBlock[];
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className={`prose ${styles.body}`}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={index}>{block.text}</p>;
          case 'heading':
            if (block.level === 2) {
              return <h2 key={index}>{block.text}</h2>;
            }
            return <h3 key={index}>{block.text}</h3>;
          case 'list':
            return (
              <ul key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case 'disclaimer':
            return (
              <aside key={index} className={styles.disclaimer} role="note">
                {block.text}
              </aside>
            );
          case 'placeholder':
            return (
              <aside key={index} className={styles.placeholder} role="note">
                <p className={styles.placeholderLabel}>{block.label}</p>
                <p>{block.note}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
