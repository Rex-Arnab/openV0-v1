"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';

export default function ProductCard_UDYSU() {
  return (
    <Card className="w-[300px] bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <img
          src="https://via.placeholder.com/300"
          alt="Product Image"
          className="w-full h-48 object-cover"
        />
        <CardTitle className="text-lg font-semibold mt-4">Product Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold text-gray-800 dark:text-gray-200">$29.99</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Buy Now</Button>
      </CardFooter>
    </Card>
  )
}