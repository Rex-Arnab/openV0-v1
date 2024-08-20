import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { Pause } from 'lucide-react';
import { Play } from 'lucide-react';
import { Volume2 } from 'lucide-react';
"use client";

export default function VideoPlayer() {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black p-4 rounded-lg shadow-lg">
      <video className="w-full rounded-lg" controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mt-4 flex space-x-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={() => console.log("Play")}>
                <Play className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Play</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={() => console.log("Pause")}>
                <Pause className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pause</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={() => console.log("Volume")}>
                <Volume2 className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Volume</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="mt-4 w-full">
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    </div>
  );
}