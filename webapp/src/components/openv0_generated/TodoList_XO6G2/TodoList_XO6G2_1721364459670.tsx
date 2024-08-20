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
import { Edit2 } from 'lucide-react';
import { useState } from 'react';
"use client";

export default function TodoList() {
  const { toast } = useToast();
  const [todos, setTodos] = useState<{ text: string; isComplete: boolean }[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const todosPerPage = 5;

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { text: inputValue.trim(), isComplete: false };
      setTodos(updatedTodos);
      setEditIndex(null);
      toast({ description: "Todo updated!" });
    } else {
      setTodos([...todos, { text: inputValue.trim(), isComplete: false }]);
      toast({ description: "Todo added!" });
    }
    setInputValue("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    toast({ description: "Todo deleted!" });
  };

  const markComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
    toast({
      description: newTodos[index].isComplete
        ? "Todo marked as complete!"
        : "Todo marked as incomplete!",
    });
  };

  const startEdit = (index: number) => {
    setInputValue(todos[index].text);
    setEditIndex(index);
  };

  const totalPages = Math.ceil(todos.length / todosPerPage);
  const paginatedTodos = todos.slice(currentPage * todosPerPage, (currentPage + 1) * todosPerPage);

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
            placeholder="Add or edit a todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mb-4"
          />
          <Button onClick={addTodo} className="w-full mb-4">
            {editIndex !== null ? "Update Todo" : "Add Todo"}
          </Button>
          <div className="flex flex-col">
            {paginatedTodos.map((todo, index) => (
              <div key={index} className="flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700">
                <div className="flex items-center">
                  <Checkbox checked={todo.isComplete} onChange={() => markComplete(currentPage * todosPerPage + index)} />
                  <span className={`ml-2 ${todo.isComplete ? 'line-through' : ''}`}>{todo.text}</span>
                </div>
                <div className="flex space-x-2">
                  <Button onClick={() => startEdit(currentPage * todosPerPage + index)} variant="outline">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" onClick={() => deleteTodo(currentPage * todosPerPage + index)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </Button>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Page {currentPage + 1} of {totalPages}
          </span>
          <Button disabled={currentPage >= totalPages - 1} onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}