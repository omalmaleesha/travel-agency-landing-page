import React from 'react';
interface TravelStepProps {
  number: string;
  title: string;
}
function TravelStep({
  number,
  title
}: TravelStepProps) {
  return <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border border-[#d5b062] flex items-center justify-center text-[#d5b062] mb-3">
        {number}
      </div>
      <div className="text-sm text-center">{title}</div>
    </div>;
}
export function TravelPlan() {
  return <section className="w-full bg-[#0c1112] py-16 md:py-24">
      <div className="container px-6 md:px-12">
        <h2 className="text-2xl font-serif text-center mb-16">
          CAMPER TRAVEL PLAN
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <TravelStep number="1" title="Destination" />
          <TravelStep number="2" title="Transport" />
          <TravelStep number="3" title="Family Size" />
          <TravelStep number="4" title="Duration" />
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#d5b062]/30"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <TravelStep number="5" title="Luggage" />
          <TravelStep number="6" title="Board" />
          <TravelStep number="7" title="Dinner" />
          <TravelStep number="8" title="Ready to go" />
        </div>
      </div>
    </section>;
}