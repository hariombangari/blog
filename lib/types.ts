export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}