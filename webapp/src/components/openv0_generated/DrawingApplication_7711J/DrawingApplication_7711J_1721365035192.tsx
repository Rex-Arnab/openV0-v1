import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover } from "@/components/ui/popover";
import { PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { Circle } from "lucide-react";
import { Eraser } from "lucide-react";
import { Palette } from "lucide-react";
import { Pencil } from "lucide-react";
import { Square } from "lucide-react";
import { useRef, useState } from "react";
("use client");

export default function DrawingApplication() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState("#000");
  const [penSize, setPenSize] = useState(5);

  const startDrawing = (e: React.MouseEvent) => {
    setIsDrawing(true);
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = penColor;
      ctx.lineWidth = penSize;
      ctx.beginPath();
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctxRef.current = ctx;
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !ctxRef.current) return;
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    ctxRef.current?.closePath();
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-black rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Drawing Application</h2>
      <div className="flex space-x-4 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Pencil className="mr-2 h-4 w-4" /> Pen
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Pen Size</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setPenSize(5)}>
              Small
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPenSize(10)}>
              Medium
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPenSize(15)}>
              Large
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Eraser className="mr-2 h-4 w-4" /> Eraser
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Eraser Size</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setPenSize(5)}>
              Small
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPenSize(10)}>
              Medium
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPenSize(15)}>
              Large
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Palette className="mr-2 h-4 w-4" /> Colors
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-4 grid grid-cols-3 gap-2">
            <div
              className="w-8 h-8 bg-red-500 cursor-pointer"
              onClick={() => setPenColor("#FF0000")}></div>
            <div
              className="w-8 h-8 bg-blue-500 cursor-pointer"
              onClick={() => setPenColor("#0000FF")}></div>
            <div
              className="w-8 h-8 bg-green-500 cursor-pointer"
              onClick={() => setPenColor("#00FF00")}></div>
            <div
              className="w-8 h-8 bg-yellow-500 cursor-pointer"
              onClick={() => setPenColor("#FFFF00")}></div>
            <div
              className="w-8 h-8 bg-black cursor-pointer"
              onClick={() => setPenColor("#000000")}></div>
            <div
              className="w-8 h-8 bg-white cursor-pointer"
              onClick={() => setPenColor("#FFFFFF")}></div>
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
      </div>
      <div className="h-64 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
