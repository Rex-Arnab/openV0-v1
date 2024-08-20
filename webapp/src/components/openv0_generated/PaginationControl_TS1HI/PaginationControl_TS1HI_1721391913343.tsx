import { Button } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
"use client";

export default function PaginationControl() {
  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-gray-100 dark:bg-black rounded-lg">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="dark:bg-black">
              <ChevronLeft className="h-5 w-5" />
              <span className="hidden lg:inline"> Previous </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Previous</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex items-center space-x-2">
          <Button variant="outline" className="dark:bg-black">1</Button>
          <Button variant="outline" className="dark:bg-black">2</Button>
          <Button variant="outline" className="dark:bg-black">3</Button>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="dark:bg-black">
              <span className="hidden lg:inline"> Next </span>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Next</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}