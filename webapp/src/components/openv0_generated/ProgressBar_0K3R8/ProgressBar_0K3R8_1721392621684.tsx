import { Progress } from '@/components/ui/progress';
import * as React from 'react';
"use client"
const ProgressBar_0K3R8: React.FC = () => {
  const completionPercentage = 75 // Static completion percentage

  // Determine color based on completion percentage
  const progressColor = completionPercentage < 50 ? "bg-red-500" : completionPercentage < 100 ? "bg-yellow-500" : "bg-green-500"

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xs bg-gray-200 rounded-full dark:bg-gray-700">
        <Progress value={completionPercentage} className={`h-4 rounded-full ${progressColor} transition-all duration-500`} />
      </div>
      <span className="mt-2 text-lg font-semibold dark:text-white">{completionPercentage}%</span>
    </div>
  )
}

export default ProgressBar_0K3R8