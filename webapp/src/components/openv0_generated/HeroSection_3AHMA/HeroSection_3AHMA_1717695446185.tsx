import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
("use client");

const HeroSection_3AHMA = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <AspectRatio ratio={16 / 9} className="absolute inset-0 z-0">
        <img
          src="https://via.placeholder.com/1280x720"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="flex-1 flex flex-col justify-center items-start px-[2rem] dark:bg-black">
        <Card className="w-full border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Hero Title</CardTitle>
            <CardDescription className="mt-2 text-base">
              This is a short description or paragraph of the hero section that
              explains more about the content.
            </CardDescription>
          </CardHeader>
          <CardContent />
          <CardFooter className="flex space-x-4 mt-4">
            <Button
              variant="outline"
              className="bg-gray-800 text-white dark:bg-gray-600">
              Deep Grey Button
            </Button>
            <Button
              variant="outline"
              className="bg-lime-400 text-white dark:bg-lime-700">
              Ember Button
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection_3AHMA;
