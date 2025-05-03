import React from 'react';
import { Link } from 'react-router-dom';
import { User, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-4 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold tracking-wider text-white mr-12">
            CAMPER
          </h1>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/blog" className="text-sm text-white/80 hover:text-white transition-colors">
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-white/80 hover:text-white transition-colors">
            <Sun size={16} className="hidden dark:block" />
            <Moon size={16} className="block dark:hidden" />
          </button>
          <button className="flex items-center text-sm text-white/80 hover:text-white transition-colors">
            <User size={16} className="mr-2" />
            <span>Account</span>
          </button>
        </div>
      </div>
    </header>
  );
}