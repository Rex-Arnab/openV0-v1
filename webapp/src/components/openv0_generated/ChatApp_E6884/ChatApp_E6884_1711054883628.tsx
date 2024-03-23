import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
"use client";

const ChatApp_E6884 = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-black">
      <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
        <Avatar>
          <AvatarImage src="#" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-semibold dark:text-white">ChatApp</h2>
        <Clock className="h-6 w-6 text-gray-500 dark:text-gray-300" />
      </div>
      <ScrollArea className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`flex items-start ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              <Avatar>
                <AvatarImage src="#" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Card
                className={`bg-gray-200 dark:bg-gray-800 rounded-xl p-2 max-w-md ${
                  index % 2 === 0 ? "ml-2" : "mr-2"
                }`}
              >
                <CardContent>
                  <p className="text-sm text-gray-800 dark:text-white">
                    This is a chat message
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    12:35 PM
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-900">
        <Input
          className="w-full bg-gray-200 dark:bg-gray-800 rounded-full p-2 mr-2"
          placeholder="Type a message..."
        />
        <MessageSquare className="h-6 w-6 text-gray-800 dark:text-white cursor-pointer" />
      </div>
    </div>
  )
}

export default ChatApp_E6884