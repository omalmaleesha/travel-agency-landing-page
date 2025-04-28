import React from 'react';
import { User } from 'lucide-react';
export function Header() {
  return <header className="absolute top-0 left-0 w-full z-10 py-4 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold tracking-wider text-white mr-12">
            CAMPER
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Travel Plan
            </a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              About us
            </a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Blog
            </a>
          </nav>
        </div>
        <button className="flex items-center text-sm text-white/80 hover:text-white transition-colors">
          <User size={16} className="mr-2" />
          <span>Account</span>
        </button>
      </div>
    </header>;
}