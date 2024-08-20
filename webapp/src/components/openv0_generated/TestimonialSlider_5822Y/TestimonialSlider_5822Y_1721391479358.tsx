"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "This is the best service I have ever used!",
    name: "John Doe",
    image: "/path/to/image1.jpg",
  },
  {
    quote: "Fantastic experience, highly recommend to everyone!",
    name: "Jane Smith",
    image: "/path/to/image2.jpg",
  },
  {
    quote: "A game-changer in my workflow!",
    name: "Alice Johnson",
    image: "/path/to/image3.jpg",
  },
]

export default function TestimonialSlider_5822Y() {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" className="mr-2">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-hidden rounded-lg shadow-lg">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white dark:bg-black">
            <CardHeader>
              <CardTitle className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full mr-2 shadow"
                />
                <span className="text-lg font-semibold">{testimonial.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-md italic text-gray-700 dark:text-gray-300">
                "{testimonial.quote}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}