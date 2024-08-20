"use client";

import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function ModalPopup_JMFD2() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Modal</Button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-black sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Modal Title
            <button onClick={closeModal}>
              <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p>This is the content area for displaying information.</p>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={closeModal}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}