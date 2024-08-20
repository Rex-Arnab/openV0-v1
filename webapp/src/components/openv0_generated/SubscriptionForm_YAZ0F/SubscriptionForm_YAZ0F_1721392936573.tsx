"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';
import { SelectItem } from '@/components/ui/select';
import { SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@/components/ui/select';

export default function SubscriptionForm_YAZ0F() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <form className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="grid w-full gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="preferences">Preferences</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select preferences" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newsletter">Newsletter</SelectItem>
                <SelectItem value="promotions">Promotions</SelectItem>
                <SelectItem value="updates">Updates</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <Button type="submit">Subscribe</Button>
        </div>
      </form>
    </div>
  )
}