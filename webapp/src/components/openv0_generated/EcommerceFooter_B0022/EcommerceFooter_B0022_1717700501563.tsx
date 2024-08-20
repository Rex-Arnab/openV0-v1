import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { Activity } from 'lucide-react';
import { Airplay } from 'lucide-react';
import { AlarmCheck } from 'lucide-react';
"use client";

const EcommerceFooter_B0022 = () => {
  return (
    <footer className="bg-gray-200 dark:bg-black text-gray-900 dark:text-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Us Section */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-bold">About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are a leading ecommerce company providing top-notch products and
              excellent customer service.
            </p>
          </CardContent>
        </Card>

        {/* Customer Service Section */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Customer Service</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="mb-2 w-full">
              Contact Us
            </Button>
            <Button variant="outline" className="mb-2 w-full">
              Returns
            </Button>
            <Button variant="outline" className="w-full">
              Shipping Info
            </Button>
          </CardContent>
        </Card>

        {/* Quick Links Section */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="mb-2 w-full">
              Home
            </Button>
            <Button variant="outline" className="mb-2 w-full">
              Shop
            </Button>
            <Button variant="outline" className="w-full">
              Blog
            </Button>
          </CardContent>
        </Card>

        {/* Social Media Section */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Follow Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Activity className="h-6 w-6 cursor-pointer" />
              <Airplay className="h-6 w-6 cursor-pointer" />
              <AlarmCheck className="h-6 w-6 cursor-pointer" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-8">
        <Label htmlFor="newsletter" className="mb-2 inline-block">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>Newsletter</TooltipTrigger>
              <TooltipContent>Subscribe to our newsletter for latest updates</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Label>
        <div className="flex w-full items-center space-x-2">
          <Input id="newsletter" type="email" placeholder="Your email address" className="max-w-md flex-1"/>
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};

export default EcommerceFooter_B0022;