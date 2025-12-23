import React from 'react';
import { MapPin, Phone, Mail, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shivam Enterprises</h3>
                <p className="text-sm text-gray-400">Electrical Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Safe. Reliable. Professional Electrical Solutions for Industrial, Residential & Commercial needs.
            </p>
            <p className="text-sm text-gray-500">Established 2024</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-blue-400 transition-colors">Our Process</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Industrial Electrical Installation</li>
              <li>Residential Wiring & Rewiring</li>
              <li>Commercial Electrification</li>
              <li>HT/LT Panel Installation</li>
              <li>Earthing & Lightning Protection</li>
              <li>Cable Tray Installation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Flat no.02, Yamuna Heights, Keshav Nagar, Mundawa, Pune, MH - 411036
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:9478975727" className="hover:text-blue-400 block">9478975727</a>
                  <a href="tel:8318688722" className="hover:text-blue-400 block">8318688722</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:shivamenterprises5727@gmail.com" className="text-gray-400 text-sm hover:text-blue-400">
                  shivamenterprises5727@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Shivam Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
