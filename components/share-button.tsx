'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ShareButton({ title, url }: { title: string; url: string }) {
  const { toast } = useToast();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to copying the URL
      try {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The blog post URL has been copied to your clipboard.",
        });
      } catch (err) {
        console.error('Error copying:', err);
        toast({
          title: "Failed to copy",
          description: "Please try again or copy the URL manually.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      className="gap-2"
    >
      <Share2 className="h-4 w-4" />
      Share
    </Button>
  );
} 