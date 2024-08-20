"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingTable_YDD0N() {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4">
      <Card className="w-[300px] bg-white dark:bg-black">
        <CardHeader>
          <CardTitle className="text-xl">Basic Plan</CardTitle>
          <CardDescription>Perfect for starters</CardDescription>
          <Badge variant="outline">Recommended</Badge>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Select Plan
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-[300px] bg-white dark:bg-black">
        <CardHeader>
          <CardTitle className="text-xl">Standard Plan</CardTitle>
          <CardDescription>For growing businesses</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Select Plan
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-[300px] bg-white dark:bg-black">
        <CardHeader>
          <CardTitle className="text-xl">Premium Plan</CardTitle>
          <CardDescription>All features included</CardDescription>
          <Badge variant="outline">Best Value</Badge>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Select Plan
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}