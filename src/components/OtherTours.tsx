import React from 'react';
import { Button } from './Button';
export function OtherTours() {
  return <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80')"
    }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-1 container px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-6">
          The CAMPER Has Other Tours As Well
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          We have many other great tours that you might be interested in. Check
          out all our tours and find the one that suits your needs and interests
          the most.
        </p>
        <Button>See The Tours</Button>
      </div>
    </section>;
}