import React from 'react';
import { Shield, Award, Clock, Leaf } from 'lucide-react';

const commitments = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Adhering to all ISI & IEC safety standards',
  },
  {
    icon: Award,
    title: 'Quality Execution',
    description: 'Using certified materials and advanced tools',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Completing projects within stipulated timelines',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Implementing energy-saving techniques for long-term efficiency',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img
              // src="./workers.jpe" image is in public folder im in src folder
              src="/worker_group.jpeg"
              alt="Professional team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Established in <span className="font-bold text-blue-600">2024</span>, <span className="font-bold">Shivam Enterprises</span> specializes in delivering <span className="font-semibold">comprehensive electrical installation solutions</span> across multiple sectors.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team includes <span className="font-semibold">qualified engineers, licensed electricians, and skilled technicians</span> who bring both technical precision and innovative problem-solving to every project.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">We are committed to</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {commitments.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
