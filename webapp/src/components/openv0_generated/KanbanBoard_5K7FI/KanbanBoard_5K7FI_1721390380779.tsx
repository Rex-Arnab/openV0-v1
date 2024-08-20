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

export default function KanbanBoard() {
  return (
    <div className="flex space-x-4 p-4 bg-gray-100 dark:bg-black">
      <div className="w-1/4">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>To Do</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-md">
                <span>Task 1</span>
                <Button variant="outline" size="icon">
                  <ActivitySquare className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-md">
                <span>Task 2</span>
                <Button variant="outline" size="icon">
                  <ActivitySquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <AlarmCheck className="mr-2 h-4 w-4" /> Add Task
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Separator orientation="vertical" />
      <div className="w-1/4">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-md">
                <span>Task 3</span>
                <Button variant="outline" size="icon">
                  <ActivitySquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <AlarmCheck className="mr-2 h-4 w-4" /> Add Task
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Separator orientation="vertical" />
      <div className="w-1/4">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Done</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-md">
                <span>Task 4</span>
                <Button variant="outline" size="icon">
                  <ActivitySquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <AlarmCheck className="mr-2 h-4 w-4" /> Add Task
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}