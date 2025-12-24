import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center -mt-18">
          <div className="space-y-8 ">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Established 2024</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Electrical Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Industrial, Residential & Commercial
              </span>{' '}
              Needs
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Safe. Reliable. Professional Electrical Solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Safety First</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ISI & IEC Standards</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Quality</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Certified Materials</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Electrical Installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl -z-10 opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl -z-10 opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
