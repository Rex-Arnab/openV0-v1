"use client";

import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';

const ResponsiveGridCard_ESCO8 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card className="bg-white dark:bg-black">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Card Title 1</CardTitle>
          <CardDescription className="text-sm">Description for card 1</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/path/to/image1.jpg" alt="Image 1" className="w-full h-auto"/>
        </CardContent>
        <CardFooter>
          <p className="text-xs">Footer content 1</p>
        </CardFooter>
      </Card>

      <Card className="bg-white dark:bg-black">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Card Title 2</CardTitle>
          <CardDescription className="text-sm">Description for card 2</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/path/to/image2.jpg" alt="Image 2" className="w-full h-auto"/>
        </CardContent>
        <CardFooter>
          <p className="text-xs">Footer content 2</p>
        </CardFooter>
      </Card>

      <Card className="bg-white dark:bg-black">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Card Title 3</CardTitle>
          <CardDescription className="text-sm">Description for card 3</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/path/to/image3.jpg" alt="Image 3" className="w-full h-auto"/>
        </CardContent>
        <CardFooter>
          <p className="text-xs">Footer content 3</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ResponsiveGridCard_ESCO8;