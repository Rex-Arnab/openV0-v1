"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { Activity } from 'lucide-react';
import { Airplay } from 'lucide-react';
import { AlarmCheck } from 'lucide-react';

const EcommerceFooter_B0022 = () => {
  return (
    <footer className="bg-gray-200 dark:bg-black text-gray-900 dark:text-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p>
            We are a leading ecommerce company providing top-notch products and
            excellent customer service.
          </p>
        </div>

        {/* Customer Service Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Customer Service</h2>
          <Card>
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
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <Card>
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
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Activity className="h-6 w-6 cursor-pointer" />
            <Airplay className="h-6 w-6 cursor-pointer" />
            <AlarmCheck className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
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
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input id="newsletter" type="email" placeholder="Your email address" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};

export default EcommerceFooter_B0022;