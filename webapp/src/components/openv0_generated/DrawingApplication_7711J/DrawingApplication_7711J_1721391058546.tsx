import { Button } from '@/components/ui/button';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover } from '@/components/ui/popover';
import { PopoverContent } from '@/components/ui/popover';
import { PopoverTrigger } from '@/components/ui/popover';
import { Circle } from 'lucide-react';
import { Eraser } from 'lucide-react';
import { Palette } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Square } from 'lucide-react';
import { useRef } from 'react';
import { useState } from 'react';
"use client";

export default function DrawingApplication() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#000');
  const [penSize, setPenSize] = useState(5);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [currentTool, setCurrentTool] = useState<'pen' | 'eraser'>('pen');

  const startDrawing = (e: React.MouseEvent) => {
    setIsDrawing(true);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = currentTool === 'eraser' ? '#FFFFFF' : penColor;
      ctx.lineWidth = penSize;
      ctx.beginPath();
      const rect = canvasRef.current.getBoundingClientRect();
      ctx.moveTo((e.clientX - rect.left) / zoomLevel, (e.clientY - rect.top) / zoomLevel);
      ctxRef.current = ctx;
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !ctxRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    ctxRef.current.lineTo((e.clientX - rect.left) / zoomLevel, (e.clientY - rect.top) / zoomLevel);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    ctxRef.current?.closePath();
  };

  const adjustZoom = (level: number) => {
    if (level <= 50) setZoomLevel(level);
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-black rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Drawing Application</h2>
      <div className="flex space-x-4 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" onClick={() => setCurrentTool('pen')}>
              <Pencil className="mr-2 h-4 w-4" /> Pen
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Pen Size</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setPenSize(5)}>Small</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPenSize(10)}>Medium</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPenSize(15)}>Large</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" onClick={() => setCurrentTool('eraser')}>
              <Eraser className="mr-2 h-4 w-4" /> Eraser
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Eraser Size</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setPenSize(5)}>Small</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPenSize(10)}>Medium</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPenSize(15)}>Large</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Palette className="mr-2 h-4 w-4" /> Colors
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-4 grid grid-cols-3 gap-2">
            <div className="w-8 h-8 bg-red-500 cursor-pointer" onClick={() => setPenColor('#FF0000')}></div>
            <div className="w-8 h-8 bg-blue-500 cursor-pointer" onClick={() => setPenColor('#0000FF')}></div>
            <div className="w-8 h-8 bg-green-500 cursor-pointer" onClick={() => setPenColor('#00FF00')}></div>
            <div className="w-8 h-8 bg-yellow-500 cursor-pointer" onClick={() => setPenColor('#FFFF00')}></div>
            <div className="w-8 h-8 bg-black cursor-pointer" onClick={() => setPenColor('#000000')}></div>
            <div className="w-8 h-8 bg-white cursor-pointer" onClick={() => setPenColor('#FFFFFF')}></div>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Square className="mr-2 h-4 w-4" /> Shapes
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Shape</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Square className="mr-2 h-4 w-4" /> Square
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Circle className="mr-2 h-4 w-4" /> Circle
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Zoom</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => adjustZoom(1)}>100%</DropdownMenuItem>
            <DropdownMenuItem onClick={() => adjustZoom(1.5)}>150%</DropdownMenuItem>
            <DropdownMenuItem onClick={() => adjustZoom(2)}>200%</DropdownMenuItem>
            <DropdownMenuItem onClick={() => adjustZoom(5)}>500%</DropdownMenuItem>
            <DropdownMenuItem onClick={() => adjustZoom(10)}>1000%</DropdownMenuItem>
            <DropdownMenuItem onClick={() => adjustZoom(50)}>5000%</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-96 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="w-full h-full"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)' }}
        />
      </div>
    </div>
  );
}