import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import { ChartBar } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { PieChart } from 'lucide-react';
"use client"
export default function ResponsiveChart_XTVYY() {
  const { toast } = useToast()

  const handleFormatChange = (format: string) => {
    toast({
      description: `Chart format changed to ${format}.`,
    })
  }

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Responsive Chart</CardTitle>
        <CardDescription>Select chart format:</CardDescription>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="mt-2">Format</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Chart Formats</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleFormatChange('Bar')}>
              <ChartBar className="mr-2 h-4 w-4" /> Bar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFormatChange('Line')}>
              <ChartLine className="mr-2 h-4 w-4" /> Line
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFormatChange('Pie')}>
              <PieChart className="mr-2 h-4 w-4" /> Pie
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="h-72 bg-gray-100 dark:bg-black rounded-lg flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Chart Placeholder</p>
      </CardContent>
    </Card>
  )
}