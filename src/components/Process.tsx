import React from 'react';
import { ClipboardList, FileText, CheckCircle, PackageSearch, Hammer, TestTube, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Requirement Gathering',
    description: 'Understand client needs through discussion and site visit.',
  },
  {
    icon: FileText,
    title: 'Quotation',
    description: 'Provide a transparent proposal with supply & labor costs.',
  },
  {
    icon: CheckCircle,
    title: 'Finalization',
    description: 'Confirm payment terms, supply rates, and labor rates.',
  },
  {
    icon: PackageSearch,
    title: 'Planning & Procurement',
    description: 'Prepare layouts and source quality materials.',
  },
  {
    icon: Hammer,
    title: 'Installation',
    description: 'Execute the project with precision and professionalism.',
  },
  {
    icon: TestTube,
    title: 'Testing & Handover',
    description: 'Check quality, ensure performance, and hand over to client.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support',
    description: 'Offer post-installation maintenance and service.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A systematic approach to delivering exceptional electrical solutions
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
