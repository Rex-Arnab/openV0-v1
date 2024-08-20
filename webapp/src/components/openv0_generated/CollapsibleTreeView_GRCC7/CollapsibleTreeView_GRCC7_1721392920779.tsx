import { Badge } from '@/components/ui/badge';
import { Collapsible } from '@/components/ui/collapsible';
import { CollapsibleContent } from '@/components/ui/collapsible';
import { CollapsibleTrigger } from '@/components/ui/collapsible';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { ActivitySquare } from 'lucide-react';
"use client"
const treeData = [
  {
    id: 1,
    title: "Node 1",
    children: [
      { id: 3, title: "Child Node 1.1" },
      { id: 4, title: "Child Node 1.2" },
    ],
  },
  {
    id: 2,
    title: "Node 2",
    children: [
      { id: 5, title: "Child Node 2.1" },
      { id: 6, title: "Child Node 2.2" },
    ],
  },
]

export default function CollapsibleTreeView_GRCC7() {
  return (
    <div className="p-4">
      {treeData.map((node) => (
        <Collapsible key={node.id} className="mb-2">
          <div className="flex items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CollapsibleTrigger className="flex items-center">
                    <ActivitySquare className="h-4 w-4 mr-2" />
                    <Badge variant="outline">{node.title}</Badge>
                  </CollapsibleTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{`This is ${node.title}`}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <CollapsibleContent className="pl-6">
            {node.children.map((child) => (
              <div key={child.id} className="py-1">
                <Badge variant="outline">{child.title}</Badge>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}