"use client";

import { NavigationMenu } from '@/components/ui/navigation-menu';
import { NavigationMenuContent } from '@/components/ui/navigation-menu';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { NavigationMenuList } from '@/components/ui/navigation-menu';
import { NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';

const StickyHeader_XYWP6: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isSticky ? "bg-white shadow-lg dark:bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Logo</div>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Our Team</NavigationMenuLink>
                  <NavigationMenuLink>Our Story</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Consulting</NavigationMenuLink>
                  <NavigationMenuLink>Support</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader_XYWP6;