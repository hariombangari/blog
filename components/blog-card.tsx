import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { BlogPost } from '@/lib/types';

export function BlogCard({ year, post }: { year: string; post: BlogPost }) {
  return (
    <Link href={`/blog/${year}/${post.slug}`}>
      <Card className="hover:bg-muted/50 transition-colors">
        <CardHeader className="py-4">
          <div className="flex items-center justify-between mb-1.5">
            <time className="text-sm text-muted-foreground">{post.date}</time>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-3.5 w-3.5" />
              {post.readingTime}
            </div>
          </div>
          <CardTitle className="text-lg mb-1.5">{post.title}</CardTitle>
          <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
          <div className="flex gap-1.5 mt-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-2 py-0 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}