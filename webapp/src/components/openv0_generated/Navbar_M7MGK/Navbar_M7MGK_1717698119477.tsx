import { Button } from '@/components/ui/button';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { HoverCard } from '@/components/ui/hover-card';
import { HoverCardContent } from '@/components/ui/hover-card';
import { HoverCardTrigger } from '@/components/ui/hover-card';
import { Activity } from 'lucide-react';
import { ActivitySquare } from 'lucide-react';
import { Airplay } from 'lucide-react';
import { AlarmCheck } from 'lucide-react';
"use client";

export default function Navbar_M7MGK() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-black dark:via-gray-900 dark:to-gray-800 px-4 py-2 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-white">Logo</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <DropdownMenu>
          <HoverCard>
            <HoverCardTrigger>
              <DropdownMenuTrigger className="text-white hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400 flex items-center">
                Home <ActivitySquare className="ml-1 h-4 w-4"/>
              </DropdownMenuTrigger>
            </HoverCardTrigger>
            <HoverCardContent className="bg-white dark:bg-black p-2 shadow-md">
              <DropdownMenuContent>
                <DropdownMenuLabel>Home Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Overview</DropdownMenuItem>
                <DropdownMenuItem>Updates</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
              </DropdownMenuContent>
            </HoverCardContent>
          </HoverCard>
        </DropdownMenu>

        <DropdownMenu>
          <HoverCard>
            <HoverCardTrigger>
              <DropdownMenuTrigger className="text-white hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400 flex items-center">
                About <Activity className="ml-1 h-4 w-4"/>
              </DropdownMenuTrigger>
            </HoverCardTrigger>
            <HoverCardContent className="bg-white dark:bg-black p-2 shadow-md">
              <DropdownMenuContent>
                <DropdownMenuLabel>About Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Company</DropdownMenuItem>
                <DropdownMenuItem>History</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
              </DropdownMenuContent>
            </HoverCardContent>
          </HoverCard>
        </DropdownMenu>

        <DropdownMenu>
          <HoverCard>
            <HoverCardTrigger>
              <DropdownMenuTrigger className="text-white hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400 flex items-center">
                Services <Airplay className="ml-1 h-4 w-4"/>
              </DropdownMenuTrigger>
            </HoverCardTrigger>
            <HoverCardContent className="bg-white dark:bg-black p-2 shadow-md">
              <DropdownMenuContent>
                <DropdownMenuLabel>Service Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Consulting</DropdownMenuItem>
                <DropdownMenuItem>Development</DropdownMenuItem>
                <DropdownMenuItem>Design</DropdownMenuItem>
              </DropdownMenuContent>
            </HoverCardContent>
          </HoverCard>
        </DropdownMenu>

        <DropdownMenu>
          <HoverCard>
            <HoverCardTrigger>
              <DropdownMenuTrigger className="text-white hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400 flex items-center">
                Contact <AlarmCheck className="ml-1 h-4 w-4"/>
              </DropdownMenuTrigger>
            </HoverCardTrigger>
            <HoverCardContent className="bg-white dark:bg-black p-2 shadow-md">
              <DropdownMenuContent>
                <DropdownMenuLabel>Contact Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Phone</DropdownMenuItem>
                <DropdownMenuItem>Social Media</DropdownMenuItem>
              </DropdownMenuContent>
            </HoverCardContent>
          </HoverCard>
        </DropdownMenu>
      </div>

      {/* Login Button */}
      <Button
        variant="outline"
        className="hidden sm:block text-white border-white hover:bg-white hover:text-black dark:hover:bg-gray-700"
      >
        Login
      </Button>
    </nav>
  );
}