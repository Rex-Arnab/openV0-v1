"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { Dribbble } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function WebsiteFooter_GOYMA() {
  return (
    <footer className="bg-gray-900 text-white py-12 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <section className="space-y-4 text-center">
          <h3 className="text-2xl font-bold">Stay Updated!</h3>
          <form className="space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
            <Input
              type="email"
              className="flex-1 rounded bg-gray-800 placeholder-gray-400 text-white px-4 py-2"
              placeholder="Your Email"
            />
            <Button variant="outline" className="flex items-center">
              Subscribe
            </Button>
          </form>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Us</h3>
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>Connecting the world one code at a time</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We aim to offer the best in technology and innovation, and are committed to making the world a better place through cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                      <Facebook className="h-8 w-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                      <Linkedin className="h-8 w-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                      <Instagram className="h-8 w-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://dribbble.com" className="text-gray-400 hover:text-white">
                      <Dribbble className="h-8 w-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Dribbble</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </section>

        <Separator className="my-4" />

        <section className="text-center text-gray-400">
          <p>
            Need help? Contact us via email <Mail className="inline h-4 w-4" />{' '}
            <a href="mailto:support@example.com" className="hover:text-blue-500">
              support@example.com
            </a>{' '}
            or call us{' '}
            <a href="tel:+123456789" className="hover:text-blue-500">
              +123 456 789
            </a>
          </p>
          <p className="mt-2">© 2023 All rights reserved.</p>
        </section>
      </div>
    </footer>
  );
}