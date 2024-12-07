import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { getMDXComponent } from 'mdx-bundler/client';
import { Badge } from '@/components/ui/badge';
import { Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    year: post.year,
    slug: post.slug,
  }));
}

export default async function BlogPost({ 
  params 
}: { 
  params: { year: string; slug: string } 
}) {
  const post = await getPostBySlug(params.year, params.slug);

  if (!post) {
    notFound();
  }

  const Component = getMDXComponent(post.code);

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
        
        <div className="flex items-center justify-between">
          <time className="text-muted-foreground">{post.frontmatter.date}</time>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-muted-foreground">{post.frontmatter.readingTime}</span>
          </div>
        </div>

        <div className="flex gap-2">
          {post.frontmatter.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <Component />
      </div>

      <footer className="border-t pt-8">
        <Button variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share this post
        </Button>
      </footer>
    </article>
  );
}