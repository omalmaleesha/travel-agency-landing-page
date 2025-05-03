import React from 'react';
import { Users, Truck, Map } from 'lucide-react';
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}
function StatCard({
  icon,
  value,
  label,
  description
}: StatCardProps) {
  return <div className="flex flex-col items-center text-center">
      <div className="mb-6 text-[#d5b062]">{icon}</div>
      <div className="text-3xl font-serif text-[#d5b062] mb-2">{value}</div>
      <div className="text-sm font-medium mb-4">{label}</div>
      <p className="text-xs text-white/60 max-w-[250px]">{description}</p>
    </div>;
}
export function StatsSection() {
  return <section className="w-full bg-[#0c1112] py-16 md:py-24">
      <div className="container px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">
          Why CAMPER?
        </h2>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
          We thoroughly take care of each of our clients and their families
          during each trip. Our company is a symbol of secure trips in beautiful
          places. Our customers will be provided with everything necessary for
          comfortable conditions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8" data-aos="fade-up">
          <StatCard icon={<Users size={32} />} value="10K+" label="Happy Customers" description="We have over 10,000 happy customers that come back to us for future adventures." />
          <StatCard icon={<Truck size={32} />} value="247" label="Comfortable Vans" description="Our vans are equipped with all the necessary things to make your journey comfortable." />
          <StatCard icon={<Map size={32} />} value="3860" label="Completed Tours" description="We have already organized trips across Canada and USA, creating unique experiences that last forever." />
        </div>
      </div>
    </section>;
}