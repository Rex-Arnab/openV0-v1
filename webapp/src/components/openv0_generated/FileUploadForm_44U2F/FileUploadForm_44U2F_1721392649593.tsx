import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
"use client"
export default function FileUploadForm_44U2F() {
  const { toast } = useToast()
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      toast({
        description: "File selected: " + selectedFile.name,
      })
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    const droppedFile = event.dataTransfer.files?.[0]
    if (droppedFile) {
      setFile(droppedFile)
      toast({
        description: "File dropped: " + droppedFile.name,
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className={`flex flex-col items-center justify-center w-full max-w-md p-6 border-2 border-dashed rounded-lg transition-colors ${
          isDragging ? "border-blue-400 bg-gray-100 dark:bg-gray-800" : "border-gray-300 bg-white dark:bg-black"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">Drag & drop your file here, or</p>
        <Input type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          Selected file: {file.name}
        </p>
      )}
    </div>
  )
}