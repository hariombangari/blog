import { BlogCard } from '@/components/blog-card';
import { getAllPosts } from '@/lib/mdx';

export default function Blog() {
  const posts = getAllPosts();
  
  const postsByYear = posts.reduce((acc, post) => {
    const year = post.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  return (
    <div className="space-y-12">      
      {Object.entries(postsByYear)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => (
          <section key={year} className="space-y-3">
            <h2 className="text-xl font-semibold mb-2">{year}</h2>
            <div className="space-y-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} year={year} post={post} />
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}