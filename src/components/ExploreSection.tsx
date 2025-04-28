import React from 'react';
import { Button } from './Button';
export function ExploreSection() {
  return <section className="w-full bg-[#0c1112] py-16 md:py-24">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Let's Explore
              <br />
              the World Together
            </h2>
            <div className="mt-6">
              <Button>Let's Go</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-white/70 mb-6">
              CAMPER is an online tour trip planner on which you can experience
              your trips, learn more and be creative.
            </p>
            <p className="text-white/70 mb-6">
              We offer you a chance to visit the places that you have never seen
              before. Our tours are full of adventures where you can learn a
              lot. We provide you the possibility of visiting various countries
              and a good company.
            </p>
          </div>
        </div>
      </div>
    </section>;
}