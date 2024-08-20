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

export default function KanbanBoard() {
  const [tasks, setTasks] = useState({
    todo: ["Task 1", "Task 2"],
    inProgress: ["Task 3"],
    done: ["Task 4"],
  });

  const addTask = (column) => {
    const newTask = prompt("Enter new task:");
    if (newTask) {
      setTasks({ ...tasks, [column]: [...tasks[column], newTask] });
    }
  };

  const moveTask = (task, fromColumn, toColumn) => {
    setTasks({
      ...tasks,
      [fromColumn]: tasks[fromColumn].filter(t => t !== task),
      [toColumn]: [...tasks[toColumn], task],
    });
  };

  const deleteTask = (task, column) => {
    setTasks({
      ...tasks,
      [column]: tasks[column].filter(t => t !== task),
    });
  };

  return (
    <div className="flex space-x-4 p-4 bg-gray-100 dark:bg-black">
      {Object.keys(tasks).map((column, index) => (
        <div key={index} className="w-1/4">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>{column.charAt(0).toUpperCase() + column.slice(1)}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {tasks[column].map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-md">
                    <span>{task}</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" onClick={() => moveTask(task, column, column === 'todo' ? 'inProgress' : 'done')}>
                        <ActivitySquare className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => deleteTask(task, column)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => addTask(column)}>
                <AlarmCheck className="mr-2 h-4 w-4" /> Add Task
              </Button>
            </CardFooter>
          </Card>
          {index < Object.keys(tasks).length - 1 && <Separator orientation="vertical" />}
        </div>
      ))}
    </div>
  );
}