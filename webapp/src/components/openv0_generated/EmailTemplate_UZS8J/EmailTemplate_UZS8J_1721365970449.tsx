"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Airplay } from 'lucide-react';

export default function EmailTemplate_UZS8J() {
  return (
    <Card className="max-w-md mx-auto mt-10 bg-white dark:bg-black">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Welcome to Our Platform!</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          We're excited to have you on board. Explore the features we offer!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <Airplay className="h-16 w-16 text-blue-500 mb-4" />
        <p className="text-gray-800 dark:text-gray-300">
          Our platform offers a variety of tools and services to help you achieve your goals. Start your journey with us today!
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Explore Now
        </Button>
      </CardFooter>
    </Card>
  )
}