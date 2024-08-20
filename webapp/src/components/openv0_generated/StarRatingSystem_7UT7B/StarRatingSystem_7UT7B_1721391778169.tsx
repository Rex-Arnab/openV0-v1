"use client";

import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { ActivitySquare } from 'lucide-react';
import { useState } from 'react';

export default function StarRatingSystem_7UT7B() {
  const [rating, setRating] = useState(0);
  const averageRating = 4; // Placeholder for average rating

  const handleMouseEnter = (index: number) => {
    setRating(index);
  };

  const handleMouseLeave = () => {
    setRating(0);
  };

  const handleClick = (index: number) => {
    setRating(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <TooltipProvider key={star}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  onMouseEnter={() => handleMouseEnter(star)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(star)}
                  className={`cursor-pointer ${
                    star <= rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  <ActivitySquare className="h-6 w-6" />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{star} Star{star > 1 ? 's' : ''}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <p className="mt-2 text-lg dark:text-white">{`Average Rating: ${averageRating}`}</p>
    </div>
  );
}