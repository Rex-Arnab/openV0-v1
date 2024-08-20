"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export default function HeroSection_0AHOS() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      <AspectRatio ratio={16 / 9} className="absolute inset-0 z-0">
        <img
          src="https://via.placeholder.com/1920x1080"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover Our Latest Collection
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Elevate your style with our exclusive range of fashion products
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="w-full md:w-auto" variant="primary">
            Shop Now
          </Button>
          <Button className="w-full md:w-auto" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
