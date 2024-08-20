import { Calendar } from '@/components/ui/calendar';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { ActivitySquare } from 'lucide-react';
"use client"
export default function EventCalendar() {
  const events = [
    { date: "2023-10-01", title: "Event One", details: "Details about Event One" },
    { date: "2023-10-02", title: "Event Two", details: "Details about Event Two" },
    { date: "2023-10-03", title: "Event Three", details: "Details about Event Three" },
  ]

  return (
    <div className="p-4">
      <Calendar
        mode="single"
        selected={new Date()}
        onSelect={() => {}}
        className="rounded-md border"
      />
      <div className="mt-4">
        {events.map((event, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded">
                  <ActivitySquare className="h-4 w-4 mr-2" />
                  <span>{event.title}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{event.details}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}