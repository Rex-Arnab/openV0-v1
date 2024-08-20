"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function ContactForm_4ZO8Z() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = { name: "", email: "", message: "" }

    if (!name) newErrors.name = "Name is required."
    if (!email) newErrors.email = "Email is required."
    if (!message) newErrors.message = "Message is required."

    setErrors(newErrors)

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      // Handle form submission (e.g. send data to an API)
      console.log("Form submitted", { name, email, message })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 w-full max-w-lg p-4 bg-white dark:bg-black rounded-lg shadow-md">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Type your message here."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`mt-1 ${errors.message ? 'border-red-500' : ''}`}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      <Button type="submit" className="mt-4">Send Message</Button>
    </form>
  )
}