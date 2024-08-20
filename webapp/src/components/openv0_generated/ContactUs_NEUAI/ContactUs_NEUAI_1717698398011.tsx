"use client";

export default function ContactUs_NEUAI() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black p-4">
      <div className="absolute inset-0 z-0 overflow-hidden h-screen">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.0842295665093!2d144.96044581536715!3d-37.81621897975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f12fd81%3A0xff0b8586e70d06!2sGoogle%20Melbourne!5e0!3m2!1sen!2sau!4v1634217425819!5m2!1sen!2sau"
            className="rounded-md object-cover w-full h-screen filter grayscale"
            allowFullScreen
            loading="lazy"></iframe>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-lg shadow-lg bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-lg overflow-hidden">
        <div className="p-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>
            We’d love to hear from you! Fill out the form below and we'll get
            back to you shortly.
          </p>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded p-2">
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
