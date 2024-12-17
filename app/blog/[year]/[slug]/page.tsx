import { getMDXComponent } from 'mdx-bundler/client';
import { getPostBySlug } from '@/lib/mdx';
import components from '@/lib/mdx-components';
import { ShareButton } from '@/components/share-button';
import { getAllPosts } from '@/lib/mdx';
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  
  return allPosts.map((post) => ({
    year: post.year,
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params: { year, slug },
}: {
  params: { year: string; slug: string };
}) {
  const post = await getPostBySlug(year, slug);
  const Component = getMDXComponent(post.code);

  return (
    <article className="container max-w-3xl mx-auto py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.frontmatter.title}</h1>
        <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.frontmatter.readingTime}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.frontmatter.tags.map((tag: string) => (
            <Badge 
              key={tag}
              variant="secondary"
              className="text-xs px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </header>
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <Component components={components} />
      </div>
      <footer className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <ShareButton 
          title={post.frontmatter.title}
          url={`https://hariom.dev/blog/${year}/${slug}`}
        />
      </footer>
    </article>
  );
}