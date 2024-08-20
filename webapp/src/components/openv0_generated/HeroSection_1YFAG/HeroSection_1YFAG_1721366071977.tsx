import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Code2 } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { PlayCircle } from 'lucide-react';
import React from 'react';
"use client";

const HeroSection_1YFAG = () => {
  return (
    <div className="relative py-12 px-4 bg-gradient-to-r from-blue-500 to-pink-500 dark:bg-black">
      <div className="max-w-screen-xl mx-auto">
        <Card className="grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-black p-10 rounded-lg shadow-lg">
          <div>
            <CardHeader className="mb-4">
              <CardTitle className="text-3xl font-bold text-black dark:text-white">
                <GraduationCap className="inline-block mr-2 h-8 w-8" /> MERN Stack Bootcamp
              </CardTitle>
              <CardDescription className="text-black dark:text-white">
                Jumpstart your web development career
              </CardDescription>
            </CardHeader>
            <CardContent className="mb-6">
              <ul className="list-disc pl-5 text-black dark:text-white">
                <li>Master MongoDB, Express, React, and Node.js</li>
                <li>Build real-world projects</li>
                <li>From zero to deployment</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between space-x-2">
              <Button variant="outline" className="w-full">
                <PlayCircle className="inline-block mr-2 h-6 w-6" /> Enroll Now
              </Button>
              <Button variant="ghost" className="w-full">
                <Code2 className="inline-block mr-2 h-6 w-6" /> Learn More
              </Button>
            </CardFooter>
          </div>
          <div className="w-full">
            <img
              src="https://via.placeholder.com/450"
              alt="Web Development"
              className="rounded-md object-cover"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HeroSection_1YFAG;