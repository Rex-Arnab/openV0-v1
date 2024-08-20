import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
"use client";

export default function ContactUs_NEUAI() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 dark:bg-black">
      <div className="w-full max-w-lg shadow-lg bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <Card>
          <CardHeader>
            <CardTitle className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-6">
              Contact Us
            </CardTitle>
            <CardDescription className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-6">
              We’d love to hear from you! Fill out the form below and we'll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </Label>
                <Input id="name" type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </Label>
                <Input id="subject" type="text" placeholder="Subject" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </Label>
                <Textarea id="message" placeholder="Type your message here" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white rounded p-2">
                Submit
              </Button>
            </form>
          </CardContent>
          <CardFooter className="p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center">
            <p>We will respond within 24 hours. Thank you for contacting us!</p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full max-w-lg mt-8">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.0842295665093!2d144.96044581536715!3d-37.81621897975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f12fd81%3A0xff0b8586e70d06!2sGoogle%20Melbourne!5e0!3m2!1sen!2sau!4v1634217425819!5m2!1sen!2sau"
            className="rounded-md object-cover"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </AspectRatio>
      </div>
    </div>
  );
}