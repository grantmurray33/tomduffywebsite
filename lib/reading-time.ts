import type { ArticleContentBlock } from '@/content/articles';

const WORDS_PER_MINUTE = 220;

function blockWordCount(block: ArticleContentBlock): number {
  switch (block.type) {
    case 'paragraph':
    case 'disclaimer':
      return block.text.split(/\s+/).filter(Boolean).length;
    case 'heading':
      return block.text.split(/\s+/).filter(Boolean).length;
    case 'list':
      return block.items.join(' ').split(/\s+/).filter(Boolean).length;
    case 'placeholder':
      return (block.label + ' ' + block.note).split(/\s+/).filter(Boolean).length;
    default:
      return 0;
  }
}

export function estimateReadingTime(blocks: ArticleContentBlock[]): number {
  const words = blocks.reduce((sum, block) => sum + blockWordCount(block), 0);
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
