"use client";

import { AlertDialog } from '@/components/ui/alert-dialog';
import { AlertDialogCancel } from '@/components/ui/alert-dialog';
import { AlertDialogContent } from '@/components/ui/alert-dialog';
import { AlertDialogDescription } from '@/components/ui/alert-dialog';
import { AlertDialogFooter } from '@/components/ui/alert-dialog';
import { AlertDialogHeader } from '@/components/ui/alert-dialog';
import { AlertDialogTitle } from '@/components/ui/alert-dialog';
import { AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AlarmCheck } from 'lucide-react';

export default function ContactUs_NEUAI() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>We would love to hear from you! Please fill out this form and we will get in touch with you shortly.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" type="text" placeholder="Subject" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="Type your message here" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full" variant="outline"><AlarmCheck className="mr-2 h-5 w-5" />Submit</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Your message has been received!</AlertDialogTitle>
                <AlertDialogDescription>
                  Thank you for reaching out to us. We will get back to you as soon as possible.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
}