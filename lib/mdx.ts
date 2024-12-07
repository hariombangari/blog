import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const POSTS_PATH = path.join(process.cwd(), 'content/blog');

export async function getPostBySlug(year: string, slug: string) {
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
        [rehypePrettyCode, { theme: 'github-dark' }],
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      ...data,
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
        const { data } = matter(source);

        return {
          ...data,
          slug,
          year,
          readingTime: readingTime(source).text,
        };
      });
  });

  return posts.sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));
}