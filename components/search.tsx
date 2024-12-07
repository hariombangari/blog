'use client';

import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function Search({ value, onChange }: SearchProps) {
  return (
    <div className="relative w-full max-w-sm">
      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search posts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-8"
      />
    </div>
  );
}