"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { BookOpen } from "lucide-react";
import { Mail } from "lucide-react";
import { Newspaper } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Users } from "lucide-react";

const EducationLandingPage_115BI = () => {
  const { toast } = useToast();

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white dark:bg-black p-4 shadow-lg">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-between items-center w-full gap-5">
            <div className="text-xl font-bold text-blue-600">Learnzo</div>
            <div className="flex space-x-6 items-center">
              <NavigationMenuItem as="div">
                <NavigationMenuLink
                  href="#"
                  className="text-gray-700 hover:text-blue-600">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem as="div">
                <NavigationMenuLink
                  href="#"
                  className="text-gray-700 hover:text-blue-600">
                  Courses
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem as="div">
                <NavigationMenuLink
                  href="#"
                  className="text-gray-700 hover:text-blue-600">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem as="div">
                <NavigationMenuLink
                  href="#"
                  className="text-gray-700 hover:text-blue-600">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-500 text-white text-center p-16">
        <h1 className="text-5xl font-bold mb-4">
          Learn MERN Stack with Arnab Biswas
        </h1>
        <p className="text-xl mb-8">
          Master MERN stack development with hands-on projects and real-world
          applications.
        </p>
        <Button className="bg-white text-blue-500 hover:bg-gray-200">
          Enroll Now
        </Button>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-100 dark:bg-black">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Why Choose Learnzo?
        </h2>
        <div className="flex justify-around">
          <div>
            <Newspaper className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="text-xl font-semibold text-center">
              Updated Content
            </h3>
          </div>
          <div>
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="text-xl font-semibold text-center">
              Comprehensive Curriculum
            </h3>
          </div>
          <div>
            <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="text-xl font-semibold text-center">
              Community Support
            </h3>
          </div>
        </div>
      </div>

      {/* Course Content Section */}
      <Tabs defaultValue="module1" className="bg-gray-100 dark:bg-black p-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="module1">Module 1</TabsTrigger>
          <TabsTrigger value="module2">Module 2</TabsTrigger>
          <TabsTrigger value="module3">Module 3</TabsTrigger>
        </TabsList>
        <TabsContent value="module1">Introduction to MERN stack.</TabsContent>
        <TabsContent value="module2">
          Building your first application.
        </TabsContent>
        <TabsContent value="module3">
          Advanced techniques and deployment.
        </TabsContent>
      </Tabs>

      {/* Testimonials */}
      <div className="bg-white dark:bg-black py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                This course has been a game-changer for my web development
                career. Highly recommended!
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                The hands-on projects made learning so much more engaging.
                Absolutely loved it!
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Alex Johnson</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Thanks to Learnzo, I now feel confident to build full-stack
                applications on my own!
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Emily Davis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A fantastic learning platform! The instructors are top-notch.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Michael Brown</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                I gained valuable skills and made great connections here!
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-500 text-white text-center p-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start your journey?
        </h2>
        <p className="text-xl mb-8">
          Enroll now and take the first step towards becoming a MERN stack
          developer.
        </p>
        <Button
          className="bg-white text-blue-500 hover:bg-gray-200"
          onClick={() =>
            toast({
              title: "Enrollment Successful!",
              description: "Welcome to Learnzo."
            })
          }>
          Enroll Now
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto space-y-6">
          <div className="flex justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="font-bold text-lg">Learnzo</h3>
              <p>Teaching MERN Stack to the world.</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Mail className="inline-block h-6 w-6 mr-2" />
                <span>contact@learnzo.com</span>
              </div>
              <div className="flex items-center">
                <PhoneCall className="inline-block h-6 w-6 mr-2" />
                <span>+123 456 7890</span>
              </div>
            </div>
          </div>
          <Separator />
          <div className="text-center text-gray-400">
            © 2023 Learnzo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EducationLandingPage_115BI;
