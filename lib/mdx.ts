import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypePrism from 'rehype-prism-plus';
import { Post } from './types';

const POSTS_PATH = path.join(process.cwd(), 'content/blog');

export async function getPostBySlug(year: string, slug: string): Promise<Post> {
  const postFilePath = path.join(POSTS_PATH, year, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf8');

  const { content, data } = matter(source);
  const { code } = await bundleMDX({
    source: content,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        [rehypePrettyCode, {
          theme: 'github-dark',
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{type: 'text', value: ' '}];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('highlighted');
          },
        }],
        rehypePrism,
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      slug,
      readingTime: readingTime(content).text,
    },
  };
}

export function getAllPosts() {
  const years = fs.readdirSync(POSTS_PATH).filter(path => 
    fs.statSync(`${POSTS_PATH}/${path}`).isDirectory()
  );

  const posts = years.flatMap(year => {
    const postsPath = path.join(POSTS_PATH, year);
    return fs.readdirSync(postsPath)
      .filter(path => /\.mdx?$/.test(path))
      .map(fileName => {
        const source = fs.readFileSync(path.join(postsPath, fileName), 'utf8');
        const slug = fileName.replace(/\.mdx?$/, '');
        const { data, content } = matter(source);

        return {
          title: data.title,
          excerpt: data.excerpt || '',
          date: data.date,
          tags: data.tags || [],
          content,
          slug,
          year,
          readingTime: readingTime(source).text,
        };
      });
  });

  return posts.sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));
}