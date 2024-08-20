"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function UserLoginForm_NI15X() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Login</h2>
      <form className="flex flex-col w-full max-w-sm space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Enter your password" />
        </div>
        <Button type="submit" className="mt-4">Login</Button>
      </form>
    </div>
  )
}