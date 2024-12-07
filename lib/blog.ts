import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'An introduction to the React framework for production',
    date: '2024-03-20',
    readingTime: '5 min',
    tags: ['nextjs', 'react', 'webdev'],
    content: 'Full blog post content here...'
  },
  {
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript in 2024',
    date: '2024-02-15',
    excerpt: 'Essential TypeScript features for modern development',
    readingTime: '8 min',
    tags: ['typescript', 'javascript', 'programming'],
    content: 'Full blog post content here...'
  }
];

export function getAllSlugs() {
  return blogPosts.map(post => post.slug);
}