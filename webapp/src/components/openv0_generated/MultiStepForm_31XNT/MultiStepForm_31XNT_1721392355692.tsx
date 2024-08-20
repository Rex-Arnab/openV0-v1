"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';

export default function MultiStepForm_31XNT() {
  return (
    <div className="p-4">
      <Tabs defaultValue="step1" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="step1">Step 1</TabsTrigger>
          <TabsTrigger value="step2">Step 2</TabsTrigger>
          <TabsTrigger value="step3">Step 3</TabsTrigger>
        </TabsList>
        <TabsContent value="step1">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Personal Information</CardTitle>
              <CardDescription>Enter your personal details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded dark:bg-black dark:text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded dark:bg-black dark:text-white"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="step2">
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Address Information</CardTitle>
              <CardDescription>Provide your address details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <input
                type="text"
                placeholder="Street Address"
                className="w-full p-2 border rounded dark:bg-black dark:text-white"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 border rounded dark:bg-black dark:text-white"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Previous</Button>
              <Button>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="step3">
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Confirmation</CardTitle>
              <CardDescription>Review your details before submission.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Please confirm if all information is correct.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Previous</Button>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}