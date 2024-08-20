"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ActivitySquare } from 'lucide-react';
import { useState } from 'react';

const TagInputField = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  return (
    <div className="flex flex-col max-w-full">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center px-2 py-1 border rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="ml-1 text-gray-600 dark:text-gray-300"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
      <div className="flex">
        <Input
          type="text"
          placeholder="Add a tag"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border-gray-300 dark:border-gray-600"
        />
        <Button onClick={() => {
          if (inputValue.trim() !== "") {
            setTags([...tags, inputValue]);
            setInputValue("");
          }
        }} className="ml-2">
          <ActivitySquare className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TagInputField;