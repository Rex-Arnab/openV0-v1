"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <Input type="text" placeholder="Search..." className="dark:bg-black" />
      <Button>
        <Search className="h-4 w-4" />
      </Button>
    </div>
  )
}