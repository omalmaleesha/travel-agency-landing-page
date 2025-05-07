import React from 'react';
import { motion } from 'framer-motion';
import { FaMapPin, FaCar, FaUsers, FaCalendar, FaSuitcase, FaClipboard, FaUtensils, FaCheck } from 'react-icons/fa';

interface TravelStepProps {
  number: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function TravelStep({ number, title, icon: Icon }: TravelStepProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border border-[#d5b062] flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#d5b062]" />
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#d5b062] text-white flex items-center justify-center text-xs">
            {number}
          </div>
        </div>
        <div className="text-sm text-center mt-2 text-white">{title}</div>
      </div>
    </motion.div>
  );
}

export function TravelPlan() {
  const stepsRow1 = [
    { number: "1", title: "Destination", icon: FaMapPin },
    { number: "2", title: "Transport", icon: FaCar },
    { number: "3", title: "Family Size", icon: FaUsers },
    { number: "4", title: "Duration", icon: FaCalendar },
  ];

  const stepsRow2 = [
    { number: "5", title: "Luggage", icon: FaSuitcase },
    { number: "6", title: "Board", icon: FaClipboard },
    { number: "7", title: "Dinner", icon: FaUtensils },
    { number: "8", title: "Ready to go", icon: FaCheck },
  ];

  return (
    <section className="w-full bg-[#0c1112] py-16 md:py-24">
      <div className="container px-6 md:px-12">
        <h2 className="text-2xl font-serif text-center mb-16 text-white">
          CAMPER TRAVEL PLAN
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stepsRow1.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TravelStep {...step} />
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stepsRow2.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
              viewport={{ once: true }}
            >
              <TravelStep {...step} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}