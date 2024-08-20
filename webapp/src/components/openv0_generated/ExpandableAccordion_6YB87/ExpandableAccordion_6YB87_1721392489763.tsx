"use client";

import { Accordion } from '@/components/ui/accordion';
import { AccordionContent } from '@/components/ui/accordion';
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';

export default function ExpandableAccordion_6YB87() {
  return (
    <Accordion type="single" collapsible className="w-full bg-white dark:bg-black">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold p-4 hover:bg-gray-200 dark:hover:bg-gray-800">What is the purpose of this accordion?</AccordionTrigger>
        <AccordionContent className="p-4 text-gray-700 dark:text-gray-300">
          This accordion serves as a convenient way to display expandable content while keeping the interface clean and organized.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold p-4 hover:bg-gray-200 dark:hover:bg-gray-800">How does it work?</AccordionTrigger>
        <AccordionContent className="p-4 text-gray-700 dark:text-gray-300">
          Users can click on the header of each section to expand or collapse the content, allowing them to view information as needed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold p-4 hover:bg-gray-200 dark:hover:bg-gray-800">Is this component accessible?</AccordionTrigger>
        <AccordionContent className="p-4 text-gray-700 dark:text-gray-300">
          Yes, it is designed to be accessible and follows WAI-ARIA guidelines for interactive components.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}