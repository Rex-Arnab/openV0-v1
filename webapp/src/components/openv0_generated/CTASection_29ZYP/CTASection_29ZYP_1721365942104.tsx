import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Mail } from 'lucide-react';
"use client";

const CTASection_29ZYP = () => {
  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
          <h2 className="text-4xl font-bold mb-2">Unlock the Future</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get exclusive access to the latest trends and insights in technology.
          </p>
        </div>
        <div className="bg-blue-500 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
          <div className="py-10 px-6 md:px-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Join Our Newsletter</h3>
            <p className="text-lg text-blue-200 mb-8">
              Stay ahead of the curve with weekly updates straight to your inbox.
            </p>
            <Button variant="solid" className="inline-flex items-center bg-white hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-lg shadow">
              <Mail className="mr-2" aria-hidden="true" /> Subscribe Now
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovate Daily</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Dive into innovation with our daily curated content.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Exclusive Insights</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Expert analyses to keep you informed on the latest in tech.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Community & Events</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Join a community of tech enthusiasts with exclusive access to events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection_29ZYP;