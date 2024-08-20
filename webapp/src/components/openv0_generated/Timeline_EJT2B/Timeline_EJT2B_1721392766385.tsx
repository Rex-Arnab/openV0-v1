"use client";

import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ActivitySquare } from 'lucide-react';

export default function Timeline_EJT2B() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <Card className="bg-white dark:bg-black">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ActivitySquare className="h-5 w-5 mr-2" /> Event Title 1
            </CardTitle>
            <CardDescription>March 1, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a brief description of Event 1.</p>
          </CardContent>
        </Card>
        <Separator className="my-4" />
        <Card className="bg-white dark:bg-black">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ActivitySquare className="h-5 w-5 mr-2" /> Event Title 2
            </CardTitle>
            <CardDescription>March 5, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a brief description of Event 2.</p>
          </CardContent>
        </Card>
        <Separator className="my-4" />
        <Card className="bg-white dark:bg-black">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ActivitySquare className="h-5 w-5 mr-2" /> Event Title 3
            </CardTitle>
            <CardDescription>March 10, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a brief description of Event 3.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}