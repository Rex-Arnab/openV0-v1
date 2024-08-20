"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ActivitySquare } from 'lucide-react';
import { AlarmCheck } from 'lucide-react';
import { Trash2 } from 'lucide-react';

export default function KanbanBoard() {
  return (
    <div className="flex space-x-4 p-4 bg-gray-100 dark:bg-black w-full">
      {['Todo', 'In Progress', 'Done'].map((column, index) => (
        <div key={index} className="flex-1">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>{column}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-md">
                  <span>Sample Task</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <ActivitySquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <AlarmCheck className="mr-2 h-4 w-4" /> Add Task
              </Button>
            </CardFooter>
          </Card>
          {index < 2 && <Separator orientation="vertical" />}
        </div>
      ))}
    </div>
  );
}