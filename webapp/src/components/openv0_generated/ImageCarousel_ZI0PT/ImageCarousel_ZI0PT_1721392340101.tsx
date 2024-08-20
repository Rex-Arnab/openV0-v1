"use client";

import { Slider } from '@/components/ui/slider';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { ActivitySquare } from 'lucide-react';

export default function ImageCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-black">
      <div className="flex items-center justify-between absolute top-1/2 transform -translate-y-1/2 left-0 right-0 z-10">
        <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
          <ActivitySquare className="h-5 w-5" />
        </button>
        <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
          <ActivitySquare className="h-5 w-5" />
        </button>
      </div>
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img
              src="https://via.placeholder.com/800x400?text=Image+1"
              alt="Image 1"
              className="w-full h-auto"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Caption for Image 1</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <img
              src="https://via.placeholder.com/800x400?text=Image+2"
              alt="Image 2"
              className="w-full h-auto"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Caption for Image 2</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <img
              src="https://via.placeholder.com/800x400?text=Image+3"
              alt="Image 3"
              className="w-full h-auto"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Caption for Image 3</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Slider defaultValue={[0]} max={2} step={1} className="absolute bottom-4 w-[80%] mx-auto" />
    </div>
  );
}