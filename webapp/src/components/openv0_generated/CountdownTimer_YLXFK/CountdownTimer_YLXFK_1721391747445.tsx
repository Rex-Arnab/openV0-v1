import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlarmClock } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
"use client"
const CountdownTimer_YLXFK = () => {
  const targetDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5) // Countdown of 5 days
  const [remainingTime, setRemainingTime] = useState(targetDate.getTime() - Date.now())
  const [isActive, setIsActive] = useState(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  const calculateTimeLeft = () => {
    const now = Date.now()
    const difference = targetDate.getTime() - now

    if (difference <= 0) {
      clearInterval(intervalId!)
      setRemainingTime(0)
      return
    }

    setRemainingTime(difference)
  }

  useEffect(() => {
    if (isActive) {
      calculateTimeLeft()
      const id = setInterval(calculateTimeLeft, 1000)
      setIntervalId(id)
    } else if (!isActive && intervalId) {
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId!)
  }, [isActive])

  const startTimer = () => setIsActive(true)
  const pauseTimer = () => setIsActive(false)
  const resetTimer = () => {
    setIsActive(false)
    setRemainingTime(targetDate.getTime() - Date.now())
  }

  const seconds = Math.floor((remainingTime / 1000) % 60)
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60)
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))

  const progressValue = Math.max(0, 100 - (remainingTime / (targetDate.getTime() - Date.now())) * 100)

  return (
    <div className="flex flex-col items-center p-5 bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <AlarmClock className="h-6 w-6 mr-2" />
        <h2 className="text-xl font-bold">Countdown Timer</h2>
      </div>
      <div className="text-2xl font-semibold">
        {`${days}d ${hours}h ${minutes}m ${seconds}s`}
      </div>
      <Progress value={progressValue} className="w-full my-4" />
      <div className="flex space-x-2">
        <Button onClick={startTimer} variant="outline">Start</Button>
        <Button onClick={pauseTimer} variant="outline">Pause</Button>
        <Button onClick={resetTimer} variant="outline">Reset</Button>
      </div>
    </div>
  )
}

export default CountdownTimer_YLXFK