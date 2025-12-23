import React from 'react';
import { Clock, Award, Shield, Boxes, Users, Wrench } from 'lucide-react';

const commitments = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Every project is completed within agreed timelines.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Use of certified materials and best practices.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Strict adherence to electrical safety standards.',
  },
  {
    icon: Boxes,
    title: 'End-to-End Solutions',
    description: 'From planning to execution, everything under one roof.',
  },
  {
    icon: Users,
    title: 'Customer-Centric Service',
    description: 'Transparent communication and customized solutions.',
  },
  {
    icon: Wrench,
    title: 'Post-Installation Support',
    description: 'Reliable maintenance and prompt service even after project completion.',
  },
];

export default function Commitments() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We stand out in the electrical contracting industry with our commitment to quality, safety, and timely delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
