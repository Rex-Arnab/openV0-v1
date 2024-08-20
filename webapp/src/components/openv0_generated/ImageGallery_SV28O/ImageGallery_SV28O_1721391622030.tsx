"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import { DialogDescription } from '@/components/ui/dialog';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const images = [
  {
    src: "https://via.placeholder.com/600x400",
    alt: "Image 1",
  },
  {
    src: "https://via.placeholder.com/601x401",
    alt: "Image 2",
  },
  {
    src: "https://via.placeholder.com/602x402",
    alt: "Image 3",
  },
]

export default function ImageGallery_SV28O() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <Card key={index} className="cursor-pointer">
          <Dialog>
            <DialogTrigger asChild>
              <CardContent>
                <img src={image.src} alt={image.alt} className="w-full h-auto" />
              </CardContent>
            </DialogTrigger>
            <DialogContent className="bg-white dark:bg-black">
              <DialogHeader>
                <DialogTitle>{image.alt}</DialogTitle>
                <DialogDescription>
                  Click the arrows to navigate.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center items-center">
                <Button variant="outline" className="mr-2">
                  <ChevronLeft />
                </Button>
                <img src={image.src} alt={image.alt} className="max-w-md" />
                <Button variant="outline" className="ml-2">
                  <ChevronRight />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </Card>
      ))}
    </div>
  )
}