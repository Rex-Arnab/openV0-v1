"use client";

import { Popover } from '@/components/ui/popover';
import { PopoverContent } from '@/components/ui/popover';
import { PopoverTrigger } from '@/components/ui/popover';

export default function ResponsiveChart_XHIB8() {
  return (
    <div className="p-4 bg-white dark:bg-black rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Responsive Chart</h2>
      <div className="relative">
        <div className="h-64 w-full bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-400">Chart Placeholder</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Popover>
            <PopoverTrigger asChild>
              <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                Hover for Info
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-60">
              <div className="p-4">
                <h4 className="font-medium leading-none">Data Information</h4>
                <p className="text-sm text-muted-foreground">
                  This is additional information about the data points in the chart.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}