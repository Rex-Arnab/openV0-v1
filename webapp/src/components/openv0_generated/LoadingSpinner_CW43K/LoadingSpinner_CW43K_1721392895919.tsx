import { Progress } from '@/components/ui/progress';
import * as React from 'react';
"use client"
const LoadingSpinner_CW43K: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <Progress value={50} className="w-1/3" />
    </div>
  )
}

export default LoadingSpinner_CW43K