"use client";

import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

export default function CardDeck_ZIYCF() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={`relative w-full h-60 cursor-pointer transition-transform duration-500 ${flipped ? 'rotate-y-180' : 'rotate-y-0'}`}
              onClick={() => setFlipped(!flipped)}
            >
              <Card className={`absolute w-full h-full bg-white shadow-lg rounded-lg p-4 transition-transform duration-500 ${flipped ? 'hidden' : 'block'}`}>
                <CardHeader>
                  <CardTitle>Front</CardTitle>
                  <CardDescription>This is the front side of the card.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Some engaging content can go here!</p>
                </CardContent>
              </Card>
              <Card className={`absolute w-full h-full bg-black text-white shadow-lg rounded-lg p-4 transition-transform duration-500 ${flipped ? 'block' : 'hidden'}`}>
                <CardHeader>
                  <CardTitle>Back</CardTitle>
                  <CardDescription>This is the back side of the card.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Additional information can go on this side!</p>
                </CardContent>
              </Card>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to flip the card!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}