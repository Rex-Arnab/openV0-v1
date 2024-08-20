"use client";

import { Button } from '@/components/ui/button';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover } from '@/components/ui/popover';
import { PopoverContent } from '@/components/ui/popover';
import { PopoverTrigger } from '@/components/ui/popover';
import { Circle } from 'lucide-react';
import { Eraser } from 'lucide-react';
import { Palette } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Square } from 'lucide-react';

export default function DrawingApplication() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-black rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Drawing Application</h2>
      <div className="flex space-x-4 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Pencil className="mr-2 h-4 w-4" /> Pen
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Pen Size</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Small</DropdownMenuItem>
            <DropdownMenuItem>Medium</DropdownMenuItem>
            <DropdownMenuItem>Large</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Eraser className="mr-2 h-4 w-4" /> Eraser
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Eraser Size</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Small</DropdownMenuItem>
            <DropdownMenuItem>Medium</DropdownMenuItem>
            <DropdownMenuItem>Large</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Palette className="mr-2 h-4 w-4" /> Colors
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-4 grid grid-cols-3 gap-2">
            <div className="w-8 h-8 bg-red-500 cursor-pointer"></div>
            <div className="w-8 h-8 bg-blue-500 cursor-pointer"></div>
            <div className="w-8 h-8 bg-green-500 cursor-pointer"></div>
            <div className="w-8 h-8 bg-yellow-500 cursor-pointer"></div>
            <div className="w-8 h-8 bg-black cursor-pointer"></div>
            <div className="w-8 h-8 bg-white cursor-pointer"></div>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Square className="mr-2 h-4 w-4" /> Shapes
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Shape</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Square className="mr-2 h-4 w-4" /> Square
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Circle className="mr-2 h-4 w-4" /> Circle
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-64 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Drawing Area</span>
      </div>
    </div>
  );
}