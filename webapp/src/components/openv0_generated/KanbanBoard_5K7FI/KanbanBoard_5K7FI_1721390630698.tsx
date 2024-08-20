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
import { useState } from 'react';
"use client";

const initialTasks = {
  Todo: ['Sample Task 1', 'Sample Task 2'],
  'In Progress': ['Sample Task 3'],
  Done: ['Sample Task 4'],
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragStart = (event: React.DragEvent, task: string, sourceColumn: string) => {
    event.dataTransfer.setData('task', task);
    event.dataTransfer.setData('sourceColumn', sourceColumn);
  };

  const handleDrop = (event: React.DragEvent, targetColumn: string) => {
    const task = event.dataTransfer.getData('task');
    const sourceColumn = event.dataTransfer.getData('sourceColumn');

    if (task) {
      setTasks(prevTasks => {
        const sourceTasks = prevTasks[sourceColumn].filter(t => t !== task);
        const targetTasks = [...prevTasks[targetColumn], task];

        return {
          ...prevTasks,
          [sourceColumn]: sourceTasks,
          [targetColumn]: targetTasks,
        };
      });
    }
  };

  return (
    <div className="flex space-x-4 p-4 bg-gray-100 dark:bg-black w-full">
      {['Todo', 'In Progress', 'Done'].map((column, index) => (
        <div
          key={index}
          className={`flex-1 min-h-[500px] bg-${column === 'Todo' ? 'blue' : column === 'In Progress' ? 'yellow' : 'green'}-300 rounded-lg p-4`}
          onDrop={e => handleDrop(e, column)}
          onDragOver={e => e.preventDefault()}
        >
          <Card className="mb-2 h-full">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>{column}</span>
                <span className="font-bold">{tasks[column].length}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {tasks[column].map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    draggable
                    onDragStart={e => handleDragStart(e, task, column)}
                    className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-md"
                  >
                    <span>{task}</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <ActivitySquare className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
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