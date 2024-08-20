"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlarmCheck } from 'lucide-react';

const PricingComponent_SDXN6 = () => {
  return (
    <div className="mx-auto max-w-7xl p-4 space-y-6 dark:bg-black">
      <Card className="border shadow-lg dark:border-gray-700">
        <CardHeader>
          <Badge variant="outline">Popular</Badge>
          <CardTitle className="text-2xl font-semibold">Basic Plan</CardTitle>
          <CardDescription className="text-lg text-gray-500">
            For small teams and projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">$29</div>
          <div className="text-lg text-gray-500">per month</div>
          <Separator className="my-4" />
          <ul className="space-y-2">
            <li className="flex items-center">
              <AlarmCheck className="h-4 w-4 mr-2" /> 10 Projects
            </li>
            <li className="flex items-center">
              <AlarmCheck className="h-4 w-4 mr-2" /> 5 Team Members
            </li>
            <li className="flex items-center">
              <AlarmCheck className="h-4 w-4 mr-2" /> Basic Support
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Choose Plan
          </Button>
        </CardFooter>
      </Card>
      <Card className="border shadow-lg dark:border-gray-700">
        <CardHeader>
          <Badge variant="outline">Recommended</Badge>
          <CardTitle className="text-2xl font-semibold">Pro Plan</CardTitle>
          <CardDescription className="text-lg text-gray-500">
            For growing businesses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">$79</div>
          <div className="text-lg text-gray-500">per month</div>
          <Separator className="my-4" />
          <ul className="space-y-2">
            <li className="flex items-center">
              <AlarmCheck className="h-4 w-4 mr-2" /> 50 Projects
            </li>
            <li className="flex items-center">
              <AlarmCheck className="h-4 w-4 mr-2" /> 20 Team Members
            </li>
            <li className="flex items-center">
              <AlarmCheck className="h-4 w-4 mr-2" /> Priority Support
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Choose Plan
          </Button>
        </CardFooter>
      </Card>
      <Card className="border shadow-lg dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Enterprise Plan</CardTitle>
          <CardDescription className="text-lg text-gray-500">
            For large organizations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">$199</div>
          <div className="text-lg text-gray-500">per month</div>
          <Separator className="my-4" />
          <ul className="space-y-2">
            <li className="flex items-center">
              <AlarmCheck className="h-4 w-4 mr-2" /> Unlimited Projects
            </li>
            <li className="flex items-center">
              <AlarmCheck className="h-4 w-4 mr-2" /> Unlimited Team Members
            </li>
            <li className="flex items-center">
              <AlarmCheck className="h-4 w-4 mr-2" /> 24/7 Support
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Choose Plan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingComponent_SDXN6;