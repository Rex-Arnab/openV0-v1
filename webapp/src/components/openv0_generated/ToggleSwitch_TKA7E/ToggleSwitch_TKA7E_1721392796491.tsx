"use client";

import { Toggle } from '@/components/ui/toggle';
import { Activity } from 'lucide-react';

export default function ToggleSwitch_TKA7E() {
  return (
    <div className="flex items-center space-x-2">
      <Toggle aria-label="Toggle switch for on/off states">
        <Activity className="h-4 w-4" />
      </Toggle>
      <span className="text-gray-700 dark:text-gray-300">Toggle Switch</span>
    </div>
  )
}