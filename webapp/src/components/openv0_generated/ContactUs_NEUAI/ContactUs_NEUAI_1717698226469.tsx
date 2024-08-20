import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { AlarmPlus } from 'lucide-react';
"use client";

export default function ContactUs_NEUAI() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 dark:bg-black">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="bg-blue-500 text-white p-4 dark:bg-blue-600">
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            We would love to hear from you! Please fill out this form and we
            will get in touch with you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium dark:text-gray-300"
                    >
                      Name
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Please enter your full name.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Input id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium dark:text-gray-300"
                    >
                      Email
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Your email address, please.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium dark:text-gray-300"
                    >
                      Subject
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>What's the subject of your message?</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Input id="subject" type="text" placeholder="Subject" />
            </div>
            <div className="space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium dark:text-gray-300"
                    >
                      Message
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Please enter your message here.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Textarea id="message" placeholder="Type your message here" />
            </div>
            <Button className="w-full" variant="primary">
              <AlarmPlus className="mr-2 h-5 w-5" />
              Submit
            </Button>
          </form>
        </CardContent>
        <CardFooter className="bg-blue-500 text-white text-center p-4 dark:bg-blue-600">
          <p>We will respond within 24 hours. Thank you for contacting us!</p>
        </CardFooter>
      </Card>
    </div>
  );
}