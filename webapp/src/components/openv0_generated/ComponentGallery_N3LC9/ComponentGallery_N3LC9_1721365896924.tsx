"use client";

import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { ActivitySquare } from 'lucide-react';

export default function ComponentGallery_N3LC9() {
  return (
    <div className="p-6 bg-white dark:bg-black">
      <h1 className="text-2xl font-bold mb-4">UI Component Gallery</h1>
      <div className="mb-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input placeholder="Search components..." />
            </TooltipTrigger>
            <TooltipContent>
              <p>Filter components by name</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Tabs defaultValue="components" className="mb-4">
        <TabsList>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="code">Code Snippets</TabsTrigger>
        </TabsList>
        <TabsContent value="components">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Button</CardTitle>
                <CardDescription>A clickable element that triggers an action.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <ActivitySquare className="h-4 w-4" />
                  <p className="text-sm">Primary Button</p>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm">Code: &lt;Button&gt;Click me&lt;/Button&gt;</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Input Field</CardTitle>
                <CardDescription>A field for user input.</CardDescription>
              </CardHeader>
              <CardContent>
                <Input placeholder="Enter text..." />
              </CardContent>
              <CardFooter>
                <p className="text-sm">Code: &lt;Input placeholder="Enter text..." /&gt;</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>A container for displaying content.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm">Code: &lt;Card&gt;...&lt;/Card&gt;</p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="space-y-4">
            <p className="font-bold">Code Snippets</p>
            <pre className="bg-gray-100 p-4 rounded-md">Button: &lt;Button&gt;Click me&lt;/Button&gt;</pre>
            <pre className="bg-gray-100 p-4 rounded-md">Input: &lt;Input placeholder="Enter text..." /&gt;</pre>
            <pre className="bg-gray-100 p-4 rounded-md">Card: &lt;Card&gt;...&lt;/Card&gt;</pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}