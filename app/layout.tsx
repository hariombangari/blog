import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/theme-provider';
import { Nav } from '@/components/nav';

export const metadata: Metadata = {
  title: 'Hariom Bangari | Personal Blog',
  description: 'A software engineer who loves to build products using latest technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-2xl mx-auto px-4">
            <Nav />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}