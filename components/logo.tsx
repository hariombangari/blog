'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <div className="flex flex-col">
      <Link href="/about" className="font-bold text-xl">
        Hariom Bangari
      </Link>
      <span className="text-sm text-muted-foreground">
        Software Developer
      </span>
    </div>
  );
}