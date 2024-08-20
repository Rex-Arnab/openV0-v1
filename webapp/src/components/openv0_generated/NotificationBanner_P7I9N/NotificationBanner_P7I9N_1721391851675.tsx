"use client";

import { Alert } from '@/components/ui/alert';
import { AlertDescription } from '@/components/ui/alert';
import { AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ActivitySquare } from 'lucide-react';

export default function NotificationBanner() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md dark:bg-black">
      <Alert>
        <ActivitySquare className="h-4 w-4 inline mr-2" />
        <AlertTitle className="font-semibold">Notification Title</AlertTitle>
        <AlertDescription>
          This is an example of a notification message to inform users.
        </AlertDescription>
        <Button 
          variant="outline" 
          className="ml-auto" 
          onClick={() => console.log("Notification dismissed")}
        >
          Close
        </Button>
      </Alert>
    </div>
  );
}