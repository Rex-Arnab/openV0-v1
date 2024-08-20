import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
"use client";

const LoginPage_1GCA1 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500 dark:from-gray-800 dark:to-black">
      <Card className="p-8 rounded-lg shadow-lg max-w-md w-full bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input type="text" placeholder="Username" className="input-field" />
          </div>
          <div className="mb-6">
            <Input type="password" placeholder="Password" className="input-field" />
          </div>
          <Button variant="primary" className="w-full py-2 rounded bg-blue-500 text-white hover:bg-blue-700">
            Log In
          </Button>
          <a href="#" className="text-sm text-blue-500 hover:underline mt-4 block text-center">Forgot Password?</a>
        </CardContent>
      </Card>
    </div>
  );
}

const LoginPage_1GCA1_Variant2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 dark:from-gray-800 dark:to-black">
      <Card className="p-8 rounded-lg shadow-lg max-w-md w-full bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input type="text" placeholder="Username" className="input-field" />
          </div>
          <div className="mb-6">
            <Input type="password" placeholder="Password" className="input-field" />
          </div>
          <Button variant="primary" className="w-full py-2 rounded bg-green-500 text-white hover:bg-green-700">
            Log In
          </Button>
          <a href="#" className="text-sm text-green-500 hover:underline mt-4 block text-center">Forgot Password?</a>
        </CardContent>
      </Card>
    </div>
  );
}

const LoginPage_1GCA1_Variant3 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 to-orange-500 dark:from-gray-800 dark:to-black">
      <Card className="p-8 rounded-lg shadow-lg max-w-md w-full bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input type="text" placeholder="Username" className="input-field" />
          </div>
          <div className="mb-6">
            <Input type="password" placeholder="Password" className="input-field" />
          </div>
          <Button variant="primary" className="w-full py-2 rounded bg-pink-500 text-white hover:bg-pink-700">
            Log In
          </Button>
          <a href="#" className="text-sm text-pink-500 hover:underline mt-4 block text-center">Forgot Password?</a>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage_1GCA1;

export { LoginPage_1GCA1_Variant2, LoginPage_1GCA1_Variant3 };