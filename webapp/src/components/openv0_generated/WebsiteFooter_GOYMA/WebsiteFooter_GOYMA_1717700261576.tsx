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
"use client";

export default function WebsiteFooter_GOYMA() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-12 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <section className="space-y-6 text-center">
          <h3 className="text-3xl font-extrabold">Stay Updated!</h3>
          <form className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-center md:space-x-4">
            <Input
              type="email"
              className="flex-1 rounded bg-white placeholder-gray-500 text-black px-4 py-2"
              placeholder="Your Email"
            />
            <Button variant="outline" className="bg-white text-indigo-600 font-bold py-2 px-4">
              Subscribe
            </Button>
          </form>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">About Us</h3>
            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>Connecting the world one code at a time</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We aim to offer the best in technology and innovation, and are committed to making the
                  world a better place through cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://facebook.com" className="text-white hover:text-gray-700 dark:hover:text-gray-400">
                      <Facebook className="h-8 w-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://linkedin.com" className="text-white hover:text-gray-700 dark:hover:text-gray-400">
                      <Linkedin className="h-8 w-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://instagram.com" className="text-white hover:text-gray-700 dark:hover:text-gray-400">
                      <Instagram className="h-8 w-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://dribbble.com" className="text-white hover:text-gray-700 dark:hover:text-gray-400">
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

        <Separator className="my-12 border-t border-white dark:border-gray-600" />

        <section className="text-center text-white">
          <p className="mb-4">
            Need help? Contact us via email <Mail className="inline h-4 w-4" />{' '}
            <a href="mailto:support@example.com" className="font-semibold hover:text-gray-900 dark:hover:text-gray-500">
              support@example.com
            </a>{' '}
            or call us{' '}
            <a href="tel:+123456789" className="font-semibold hover:text-gray-900 dark:hover:text-gray-500">
              +123 456 789
            </a>
          </p>
          <p>&copy; 2023 All rights reserved.</p>
        </section>
      </div>
    </footer>
  );
}