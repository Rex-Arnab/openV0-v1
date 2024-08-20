"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { Sun } from 'lucide-react';

export default function WeatherWidget() {
  return (
    <TooltipProvider>
      <Card className="w-80 bg-white dark:bg-black shadow-lg rounded-lg p-4">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Weather</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Tooltip>
            <TooltipTrigger>
              <Sun className="h-12 w-12 text-yellow-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Sunny</p>
            </TooltipContent>
          </Tooltip>
          <p className="text-2xl font-semibold mt-2">25°C</p>
          <p className="text-gray-500 dark:text-gray-400">Clear Sky</p>
        </CardContent>
        <div className="mt-4">
          <Button className="w-full">Refresh</Button>
        </div>
      </Card>
    </TooltipProvider>
  )
}