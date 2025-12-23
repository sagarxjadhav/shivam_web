import React from 'react';
import { Factory, Home, Building2, Zap, Settings, Shield, Lightbulb, Cable, Battery, Camera, Box } from 'lucide-react';

const industrialServices = [
  {
    icon: Settings,
    title: 'HT/LT Panel Installation',
    description: 'We specialize in installing High Tension (HT) and Low Tension (LT) panels that ensure safe, reliable, and efficient power distribution across industrial setups.',
  },
  {
    icon: Factory,
    title: 'Industrial Machinery Wiring',
    description: 'Our team provides professional wiring solutions for industrial machines, designed to handle heavy loads while maintaining safety and operational efficiency.',
  },
  {
    icon: Shield,
    title: 'Earthing & Lightning Protection Systems',
    description: 'We offer robust earthing and lightning protection systems that safeguard your facility, machinery, and workforce from electrical hazards and power surges.',
  },
];

const residentialServices = [
  {
    icon: Home,
    title: 'Wiring & Rewiring for Housing Complexes and Bungalows',
    description: 'We provide safe and efficient wiring and rewiring solutions for all types of residences, ensuring long-term reliability and compliance with safety standards.',
  },
  {
    icon: Box,
    title: 'Load Distribution Panels',
    description: 'Our expertly installed load distribution panels manage and balance electricity usage across households, preventing overloads and ensuring smooth power flow.',
  },
  {
    icon: Zap,
    title: 'LT Work',
    description: 'We carry out LT (Low Tension) electrical work with precision, offering dependable power distribution systems for residential requirements.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting & Backup Systems',
    description: 'From modern lighting solutions to backup power integration, we ensure your home remains well-lit and powered during outages.',
  },
  {
    icon: Cable,
    title: 'Cable Tray Installation',
    description: 'Professional cable tray systems that keep wiring organized, protected, and easy to maintain in residential complexes.',
  },
];

const commercialServices = [
  {
    icon: Building2,
    title: 'Office Electrification',
    description: 'We provide complete electrical installations for offices, covering structured wiring, lighting, and safe power distribution to create efficient workplaces.',
  },
  {
    icon: Lightbulb,
    title: 'Retail Store Wiring & Lighting',
    description: 'Our wiring and lighting solutions for retail spaces improve safety, reliability, and ambiance, ensuring an enhanced shopping experience.',
  },
  {
    icon: Battery,
    title: 'UPS & Generator Backup Integration',
    description: 'We integrate UPS and generator systems to guarantee uninterrupted power supply, keeping business operations running smoothly during outages.',
  },
  {
    icon: Camera,
    title: 'CCTV & Surveillance Wiring',
    description: 'We offer secure and professional CCTV and surveillance wiring to support advanced monitoring and safety systems.',
  },
  {
    icon: Settings,
    title: 'Panel Work',
    description: 'Our panel installation and maintenance services ensure safe load management and reliable power distribution in commercial setups.',
  },
  {
    icon: Cable,
    title: 'Cable Tray',
    description: 'We design and install sturdy cable tray systems that keep wiring organized, protected, and easy to maintain.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive electrical solutions tailored to your industrial, residential, and commercial needs
          </p>
        </div>

        <div className="space-y-20">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Industrial Electrical Installation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              We provide end-to-end electrical solutions for industries, including HT/LT panel installation, heavy machinery wiring, and advanced earthing & lightning protection systems to ensure safety, efficiency, and uninterrupted operations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {industrialServices.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Residential Electrical Installation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              We deliver safe and reliable electrical solutions for homes, including wiring & rewiring, load distribution panels, LT work, lighting systems, backup power setups, and cable tray installations for housing complexes and bungalows.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {residentialServices.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Commercial Electrical Installation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              We deliver complete electrical solutions for commercial spaces, including office electrification, retail store wiring and lighting, UPS and generator backup integration, CCTV and surveillance wiring, panel work, and cable tray installations.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialServices.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
