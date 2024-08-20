import { Button } from '@/components/ui/button';
import { Collapsible } from '@/components/ui/collapsible';
import { CollapsibleContent } from '@/components/ui/collapsible';
import { CollapsibleTrigger } from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { ActivitySquare } from 'lucide-react';
"use client"
export default function SidebarMenu() {
  return (
    <div className="w-64 bg-white dark:bg-black p-4">
      <h2 className="text-lg font-semibold">Sidebar Menu</h2>
      <Separator className="my-4" />

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="justify-start w-full">
            <ActivitySquare className="mr-2 h-4 w-4" />
            Main Item 1
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4">
          <div className="py-1">
            <Button variant="ghost" className="w-full text-left">
              Sub Item 1.1
            </Button>
          </div>
          <div className="py-1">
            <Button variant="ghost" className="w-full text-left">
              Sub Item 1.2
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="justify-start w-full mt-2">
            <ActivitySquare className="mr-2 h-4 w-4" />
            Main Item 2
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4">
          <div className="py-1">
            <Button variant="ghost" className="w-full text-left">
              Sub Item 2.1
            </Button>
          </div>
          <div className="py-1">
            <Button variant="ghost" className="w-full text-left">
              Sub Item 2.2
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <Separator className="my-4" />
      
      <div className="flex items-center justify-between">
        <Button variant="outline">Settings</Button>
        <Button variant="outline">Log Out</Button>
      </div>
    </div>
  )
}