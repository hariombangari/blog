import React from 'react';
import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 {...props} className="text-3xl lg:text-4xl font-bold tracking-tight mb-8">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 {...props} className="text-2xl lg:text-3xl font-bold tracking-tight mt-16 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className="text-xl lg:text-2xl font-semibold tracking-tight mt-8 mb-4">
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 {...props} className="text-lg lg:text-xl font-semibold tracking-tight mt-8 mb-4">
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p {...props} className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul {...props} className="my-6 list-disc [&>li]:mt-2">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol {...props} className="my-6 list-decimal [&>li]:mt-2">
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className="mt-3">{children}</li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote {...props} className="mt-6 border-l-4 border-zinc-300 pl-6 italic text-zinc-800 dark:border-zinc-700 dark:text-zinc-200">
      {children}
    </blockquote>
  ),
  a: ({ href, children, ...props }) => (
    <a
      {...props}
      href={href}
      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  img: ({ src, alt, ...props }) => (
    <div className="my-8">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={500}
        className="rounded-lg"
      />
    </div>
  ),
  code: (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <code {...props} className="rounded bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 text-sm font-mono" />
  ),
  pre: (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <pre {...props} className="my-6 overflow-x-auto rounded-lg bg-zinc-100 dark:bg-zinc-800 p-4" />
  ),
};

export default components; 