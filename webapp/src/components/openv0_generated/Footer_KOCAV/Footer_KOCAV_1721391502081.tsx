"use client";

import { Button } from '@/components/ui/button';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

export default function Footer_KOCAV() {
  return (
    <footer className="bg-gray-100 dark:bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Button variant="link" className="text-gray-600 dark:text-gray-400">
            Privacy Policy
          </Button>
          <Button variant="link" className="text-gray-600 dark:text-gray-400">
            Terms of Service
          </Button>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 dark:text-gray-400">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}