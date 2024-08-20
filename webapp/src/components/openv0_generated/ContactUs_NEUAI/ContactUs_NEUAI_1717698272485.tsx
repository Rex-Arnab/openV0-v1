
"use client";

export default function ContactUs_NEUAI() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 dark:bg-black">
      <div className="w-full max-w-lg shadow-lg bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <p className="mt-2">
            We’d love to hear from you! Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                Name
              </label>
              <input id="name" type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                Email
              </label>
              <input id="email" type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                Subject
              </label>
              <input id="subject" type="text" placeholder="Subject" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea id="message" placeholder="Type your message here" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
              Submit
            </button>
          </form>
        </div>
        <div className="p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center">
          <p>We will respond within 24 hours. Thank you for contacting us!</p>
        </div>
      </div>
    </div>
  );
}