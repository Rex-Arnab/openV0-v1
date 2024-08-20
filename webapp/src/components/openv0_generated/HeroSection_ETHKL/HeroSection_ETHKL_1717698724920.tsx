"use client";

import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ActivitySquare, PlayCircle, PlayIcon } from "lucide-react";
import React from "react";

const HeroSection_ETHKL: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-black text-gray-900 dark:text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        filter: "grayscale(100%)"
      }}>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-8 text-white">
        Welcome to Our Restaurant
      </h1>
      <div className="flex flex-col justify-center items-center mb-8 gap-5">
        <div>
          <Button className="bg-[#FFA500] p-4 rounded-full cursor-pointer">
            Just take 3 min
          </Button>
          <Button className="bg-white text-black p-4 rounded-full cursor-pointer">
            HR Advice
          </Button>
        </div>

        <PlayCircle className="h-14 w-14 text-white" />
      </div>
      <div className="w-full mt-8 bg-gray-200 dark:bg-gray-800 py-4 overflow-hidden">
        <div className="flex animate-marquee justify-around space-x-5">
          <img src="https://via.placeholder.com/150" alt="Brand 1" />
          <img src="https://via.placeholder.com/150" alt="Brand 2" />
          <img src="https://via.placeholder.com/150" alt="Brand 3" />
          <img src="https://via.placeholder.com/150" alt="Brand 4" />
          <img src="https://via.placeholder.com/150" alt="Brand 5" />
          <img src="https://via.placeholder.com/150" alt="Brand 1" />
          <img src="https://via.placeholder.com/150" alt="Brand 2" />
          <img src="https://via.placeholder.com/150" alt="Brand 3" />
          <img src="https://via.placeholder.com/150" alt="Brand 4" />
          <img src="https://via.placeholder.com/150" alt="Brand 5" />
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
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection_ETHKL;
