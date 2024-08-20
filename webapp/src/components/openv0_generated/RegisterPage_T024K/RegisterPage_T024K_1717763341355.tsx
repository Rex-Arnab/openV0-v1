"use client";

import { Alert } from '@/components/ui/alert';
import { AlertDescription } from '@/components/ui/alert';
import { AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlarmCheck } from 'lucide-react';

const RegisterPage_T024K = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black">
      <Card className="w-full max-w-md shadow-lg">
        <Alert className="mb-4">
          <AlarmCheck className="h-4 w-4" />
          <AlertTitle>Welcome!</AlertTitle>
          <AlertDescription>Register to create your account.</AlertDescription>
        </Alert>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800 dark:text-white">Register</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-300">Create your new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-1.5">
              <Label htmlFor="username" className="text-gray-700 dark:text-gray-200">Username</Label>
              <Input id="username" type="text" placeholder="Enter your username" className="dark:bg-black dark:border-gray-700 dark:placeholder-gray-500" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-200">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="dark:bg-black dark:border-gray-700 dark:placeholder-gray-500" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-200">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="dark:bg-black dark:border-gray-700 dark:placeholder-gray-500" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="confirm-password" className="text-gray-700 dark:text-gray-200">Confirm Password</Label>
              <Input id="confirm-password" type="password" placeholder="Confirm your password" className="dark:bg-black dark:border-gray-700 dark:placeholder-gray-500" />
            </div>
            <Button type="submit" className="w-full bg-blue-600 text-white dark:bg-blue-700">Register</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-600 dark:text-gray-400">Already have an account? <a href="/login" className="text-blue-600 dark:text-blue-400">Log in</a></p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RegisterPage_T024K