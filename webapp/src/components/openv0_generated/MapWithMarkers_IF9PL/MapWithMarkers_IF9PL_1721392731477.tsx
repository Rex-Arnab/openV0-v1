"use client";

import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';

const MapWithMarkers_IF9PL = () => {
  return (
    <div className="relative h-96 w-full">
      <div className="absolute inset-0 bg-gray-200 dark:bg-black">
        {/* Placeholder for the map */}
        <p className="text-center text-gray-700 dark:text-gray-300 pt-40">Map goes here</p>
      </div>

      <TooltipProvider>
        <div className="absolute top-20 left-10">
          <Tooltip>
            <TooltipTrigger>
              <span className="block w-3 h-3 bg-blue-500 rounded-full cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Location 1: Beautiful Park</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="absolute top-40 left-40">
          <Tooltip>
            <TooltipTrigger>
              <span className="block w-3 h-3 bg-green-500 rounded-full cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Location 2: Historic Museum</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="absolute top-60 left-20">
          <Tooltip>
            <TooltipTrigger>
              <span className="block w-3 h-3 bg-red-500 rounded-full cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Location 3: Vibrant Market</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default MapWithMarkers_IF9PL;