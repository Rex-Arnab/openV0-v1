import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";
("use client");

export default function Navbar_M7MGK() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 px-4 py-2 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-white">Logo</div>

      {/* Navigation Links */}
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-pink-500 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400">
              Home
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-pink-500 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400">
              About
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-pink-500 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400">
              Services
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-pink-500 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-400">
              Contact
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Login Button */}
      <Button className="border-white hover:text-black dark:hover:bg-gray-200">
        Login
      </Button>
    </nav>
  );
}
