'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';
import { Github, Linkedin, Twitter, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/hariombangari',
    icon: Github,
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hariombangari',
    icon: Linkedin,
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/hsbangari',
    icon: Twitter,
  },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavItems = () => (
    <>
      <Link
        href="/"
        className={cn(
          'text-sm transition-colors hover:text-foreground/80',
          pathname === '/' ? 'text-foreground' : 'text-foreground/60'
        )}
        onClick={() => setOpen(false)}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          'text-sm transition-colors hover:text-foreground/80',
          pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
        )}
        onClick={() => setOpen(false)}
      >
        About
      </Link>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Icon className="h-4 w-4" />
              <span className="sr-only">{link.platform}</span>
            </Button>
          </a>
        );
      })}
      <ThemeToggle />
    </>
  );

  return (
    <nav className="flex items-center justify-between py-4 mb-8">
      <Logo />
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <NavItems />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col gap-6 mt-6">
              <NavItems />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}