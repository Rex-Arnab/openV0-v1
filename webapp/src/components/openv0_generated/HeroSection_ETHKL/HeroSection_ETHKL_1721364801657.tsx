import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React from "react";
("use client");

const HeroSection_ETHKL: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-500 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center text-white mb-8 drop-shadow-lg">
        Welcome to Our Restaurant
      </h1>
      <div className="flex space-x-4 mb-8">
        <Avatar className="bg-white p-4 rounded-full cursor-pointer shadow-lg">
          <AvatarFallback className="text-orange-500 font-bold">
            Go
          </AvatarFallback>
        </Avatar>
        <Avatar className="bg-orange-500 p-4 rounded-full cursor-pointer border-2 border-white shadow-lg">
          <AvatarFallback className="text-white font-bold">Menu</AvatarFallback>
        </Avatar>
        <Button
          variant="outline"
          className="flex items-center text-orange-500 border-white hover:bg-white hover:text-orange-500 transition">
          <Play className="h-5 w-5 mr-2" />
          Play
        </Button>
      </div>
      <div className="w-full mt-8 bg-white dark:bg-gray-800 py-4 overflow-hidden">
        <div className="flex animate-marquee space-x-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Brand 1"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Brand 2"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Brand 3"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Brand 4"
            className="h-12"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Brand 5"
            className="h-12"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection_ETHKL;
