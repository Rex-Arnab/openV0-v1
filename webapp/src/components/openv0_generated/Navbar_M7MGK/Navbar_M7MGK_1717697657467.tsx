"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export default function Navbar_M7MGK() {
  return (
    <nav className="bg-white dark:bg-black px-4 py-2 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        Logo
      </div>

      {/* Navigation Links */}
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 dark:text-white">
              Home
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 dark:text-white">
              About
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 dark:text-white">
              Services
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 dark:text-white">
              Contact
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Login Button */}
      <Button variant="primary" className="bg-black text-white">
        Login
      </Button>
    </nav>
  );
}
