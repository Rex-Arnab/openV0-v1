"use client";

import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';

export default function UserProfileCard_AJG9K() {
  return (
    <Card className="max-w-sm mx-auto bg-white dark:bg-black shadow-lg rounded-lg">
      <CardHeader className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User Profile" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl font-semibold">John Doe</CardTitle>
          <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
            Software Engineer
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">
          Passionate about building useful software and exploring the latest technologies.
        </p>
      </CardContent>
      <div className="p-4">
        <Button className="w-full hover:bg-blue-500 hover:text-white transition-colors">
          Follow
        </Button>
      </div>
    </Card>
  )
}