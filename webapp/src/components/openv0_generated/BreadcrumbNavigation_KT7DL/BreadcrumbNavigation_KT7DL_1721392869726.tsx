"use client";

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Home } from 'lucide-react';

export default function BreadcrumbNavigation_KT7DL() {
  return (
    <nav className="flex items-center space-x-2 p-4 bg-white dark:bg-black">
      <Button variant="link" className="text-blue-500 dark:text-blue-400">
        <Home className="inline h-4 w-4 mr-1" /> Home
      </Button>
      <Separator />
      <Button variant="link" className="text-blue-500 dark:text-blue-400">
        Section
      </Button>
      <Separator />
      <Button variant="link" className="text-blue-500 dark:text-blue-400">
        Subsection
      </Button>
      <Separator />
      <span className="text-gray-500 dark:text-gray-400">Current Page</span>
    </nav>
  )
}