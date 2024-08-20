import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
"use client";

const HeroSection_3AHMA = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 relative bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-image.jpg')" }}>
        {/* Background image is applied directly via inline styles */}
      </div>
      <div className="md:flex-[1.5] flex flex-col justify-center items-start p-8 dark:bg-black">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">Hero Title</CardTitle>
            <CardDescription className="mt-2 text-lg">
              This is a short description or paragraph of the hero section that explains more about the content.
            </CardDescription>
          </CardHeader>
          <CardContent />
          <CardFooter className="flex space-x-4 mt-4">
            <Button variant="outline" className="bg-gray-800 text-white dark:bg-gray-600">
              Deep Grey Button
            </Button>
            <Button variant="outline" className="bg-amber-500 text-white dark:bg-amber-700">
              Ember Button
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default HeroSection_3AHMA;