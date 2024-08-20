"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ActivitySquare } from 'lucide-react';

export default function ChatbotInterface() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-black rounded-lg shadow-md w-full max-w-md">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Chatbot</CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Type your message below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72 overflow-y-auto p-2 border border-gray-300 dark:border-gray-700 rounded-md">
            <div className="flex items-start mb-2">
              <ActivitySquare className="h-4 w-4 text-blue-500 mr-2" />
              <p className="text-sm">Hello! How can I assist you today?</p>
            </div>
            <div className="flex items-start mb-2">
              <p className="text-sm">I'm looking for some information.</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full space-x-2">
            <Input type="text" placeholder="Type your message..." className="flex-1" />
            <Button type="submit">Send</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}