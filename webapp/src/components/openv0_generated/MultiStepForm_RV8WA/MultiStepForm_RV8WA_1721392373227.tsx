"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Activity } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    title: "Step 1",
    content: "Content for step 1",
  },
  {
    title: "Step 2",
    content: "Content for step 2",
  },
  {
    title: "Step 3",
    content: "Content for step 3",
  },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card className="max-w-md mx-auto my-10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="mr-2 h-5 w-5" /> {steps[currentStep].title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{steps[currentStep].content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button onClick={handleNext} disabled={currentStep === steps.length - 1}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}