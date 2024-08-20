import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { AlarmClock } from 'lucide-react';
import { useState } from 'react';
"use client"
export default function TodoList() {
  const { toast } = useToast();
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue.trim()]);
    setInputValue("");
    toast({ description: "Todo added!" });
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    toast({ description: "Todo deleted!" });
  };

  const markComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index] = `✔️ ${newTodos[index]}`;
    setTodos(newTodos);
    toast({ description: "Todo marked as complete!" });
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-black">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlarmClock className="mr-2 h-6 w-6" /> Todo List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mb-4"
          />
          <Button onClick={addTodo} className="w-full mb-4">
            Add Todo
          </Button>
          <div className="flex flex-col">
            {todos.map((todo, index) => (
              <div key={index} className="flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700">
                <div className="flex items-center">
                  <Checkbox onClick={() => markComplete(index)} />
                  <span className="ml-2">{todo}</span>
                </div>
                <Button variant="destructive" onClick={() => deleteTodo(index)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Total Todos: {todos.length}
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}