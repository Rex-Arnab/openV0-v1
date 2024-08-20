import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Contact } from 'lucide-react';
import { Home } from 'lucide-react';
import { Info } from 'lucide-react';
import { Login } from 'lucide-react';
import { Services } from 'lucide-react';
"use client";

export default function Navbar_M7MGK() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-black dark:via-gray-900 dark:to-gray-800 px-4 py-3 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-white">Logo</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400 flex items-center">
            Home <Home className="ml-1 h-4 w-4"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-black">
            <DropdownMenuLabel>Home Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Overview</DropdownMenuItem>
            <DropdownMenuItem>Updates</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-white hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400 flex items-center">
            About <Info className="ml-1 h-4 w-4"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-black">
            <DropdownMenuLabel>About Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Company</DropdownMenuItem>
            <DropdownMenuItem>History</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-white hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400 flex items-center">
            Services <Services className="ml-1 h-4 w-4"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-black">
            <DropdownMenuLabel>Service Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Consulting</DropdownMenuItem>
            <DropdownMenuItem>Development</DropdownMenuItem>
            <DropdownMenuItem>Design</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-white hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400 flex items-center">
            Contact <Contact className="ml-1 h-4 w-4"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-black">
            <DropdownMenuLabel>Contact Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Phone</DropdownMenuItem>
            <DropdownMenuItem>Social Media</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* User Avatar */}
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/* Login Button */}
        <Button
          variant="outline"
          className="ml-4 hidden sm:block text-white border-white hover:bg-white hover:text-black dark:hover:bg-gray-700"
        >
          <Login className="mr-2 h-4 w-4"/> Login
        </Button>
      </div>
    </nav>
  );
}