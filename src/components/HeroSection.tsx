import React from 'react';
import { Button } from './Button';
import { ChevronDown, ChevronUp } from 'lucide-react';
export function HeroSection() {
  return <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
      backgroundImage: "url('https://uploadthingy.s3.us-west-1.amazonaws.com/19p5rnF9d2VQ8HsVFBrj7u/Stunning_Travel_Agency_Website_Design.jpg')",
      backgroundPosition: 'center top'
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-1 container px-6 md:px-12 text-center md:text-left" data-aos="fade-up">
        <div className="flex flex-col max-w-xl">
          <p className="text-sm text-white/80 mb-4" data-aos="fade-right">
            Go On The Trip Of Your Life
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4" data-aos="zoom-in">
            It's Great Time
            <br />
            to Start Living Now
          </h1>
          <div className="mt-6" data-aos="fade-up">
            <Button>Know More</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="flex flex-col items-center">
          <ChevronUp size={20} className="text-white/50" />
          <div className="h-12 w-px bg-white/20 my-2"></div>
          <ChevronDown size={20} className="text-white/50" />
        </div>
      </div>
      <div className="absolute right-8 bottom-16 z-10 hidden md:flex flex-col items-center gap-4">
        <div className="h-12 w-px bg-white/20"></div>
        <span className="transform -rotate-90 text-xs tracking-wider text-white/70">
          SCROLL
        </span>
      </div>
    </section>;
}