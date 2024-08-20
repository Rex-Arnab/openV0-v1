"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Trash } from 'lucide-react';
import { useState } from 'react';

export default function TodoList_KUN7T() {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task"
            className="flex-1"
          />
          <Button onClick={addTask}>Add</Button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between p-2 border rounded-md dark:bg-black">
              <div className="flex items-center space-x-2">
                <Checkbox checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
                <span className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</span>
              </div>
              <Button variant="ghost" onClick={() => removeTask(task.id)}>
                <Trash className="h-4 w-4 text-red-500" />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center text-gray-500">
          You have {tasks.length} task{tasks.length !== 1 ? "s" : ""}.
        </p>
      </CardFooter>
    </Card>
  );
}