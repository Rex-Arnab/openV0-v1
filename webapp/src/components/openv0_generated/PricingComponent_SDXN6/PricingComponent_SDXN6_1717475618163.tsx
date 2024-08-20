import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlarmCheck } from "lucide-react";
("use client");

const PricingComponent_SDXN6 = () => {
  return (
    <div className="flex justify-center space-x-6 p-4 max-w-7xl mx-auto dark:bg-black gap-5">
      <Card className="flex-1 border shadow-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <CardHeader>
          <Badge
            variant="outline"
            className="text-red-400 dark:text-red-500 border-red-400 dark:border-red-500">
            Popular
          </Badge>
          <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Basic Plan
          </CardTitle>
          <CardDescription className="text-lg text-gray-500 dark:text-gray-300">
            For small teams and projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            $29
          </div>
          <div className="text-lg text-gray-500 dark:text-gray-300">
            per month
          </div>
          <Separator className="my-4 bg-gray-300 dark:bg-gray-700" />
          <ul className="space-y-2 text-gray-800 dark:text-gray-100">
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
          <Button
            variant="outline"
            className="w-full bg-red-400 dark:bg-red-500">
            Choose Plan
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex-1 border shadow-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <CardHeader>
          <Badge
            variant="outline"
            className="text-green-600 dark:text-green-500 border-green-400 dark:border-green-500">
            Recommended
          </Badge>
          <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Pro Plan
          </CardTitle>
          <CardDescription className="text-lg text-gray-500 dark:text-gray-300">
            For growing businesses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            $79
          </div>
          <div className="text-lg text-gray-500 dark:text-gray-300">
            per month
          </div>
          <Separator className="my-4 bg-gray-300 dark:bg-gray-700" />
          <ul className="space-y-2 text-gray-800 dark:text-gray-100">
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
          <Button
            variant="outline"
            className="w-full bg-green-400 dark:bg-green-500">
            Choose Plan
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex-1 border shadow-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <CardHeader>
          <Badge
            variant="secondary"
            className="text-purple-400 dark:text-purple-500 border-purple-400 dark:border-purple-500">
            Custom
          </Badge>
          <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Enterprise Plan
          </CardTitle>
          <CardDescription className="text-lg text-gray-500 dark:text-gray-300">
            For large organizations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            $199
          </div>
          <div className="text-lg text-gray-500 dark:text-gray-300">
            per month
          </div>
          <Separator className="my-4 bg-gray-300 dark:bg-gray-700" />
          <ul className="space-y-2 text-gray-800 dark:text-gray-100">
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
          <Button
            variant="outline"
            className="w-full bg-blue-400 dark:bg-blue-500 text-white">
            Choose Plan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingComponent_SDXN6;
