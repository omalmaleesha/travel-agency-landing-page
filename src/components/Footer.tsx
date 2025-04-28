import React from 'react';
import { Phone, Mail } from 'lucide-react';
export function Footer() {
  return <footer className="w-full bg-[#0a0f10] py-12 md:py-16">
      <div className="container px-6 md:px-12">
        <div className="mb-12">
          <h3 className="text-sm font-medium mb-6">STAY INFORMED</h3>
          <div className="flex max-w-md">
            <input type="email" placeholder="Your email" className="bg-transparent border-b border-white/20 py-2 flex-1 text-sm focus:outline-none focus:border-[#d5b062]" />
            <button className="ml-4 text-sm text-[#d5b062]">Subscribe</button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-medium mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-white/60 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white/60 hover:text-white">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white/60 hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={14} className="text-[#d5b062] mr-2" />
                <span className="text-xs">+1 234-567-890</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="text-[#d5b062] mr-2" />
                <span className="text-xs">camper@email.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-xl font-bold tracking-wider text-white mb-4 md:mb-0">
            CAMPER
          </div>
          <div className="text-xs text-white/50">
            © 2023 CAMPER Agency • Made with love everywhere
          </div>
        </div>
      </div>
    </footer>;
}