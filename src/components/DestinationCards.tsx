import React from 'react';
interface DestinationCardProps {
  image: string;
  name: string;
}
function DestinationCard({
  image,
  name
}: DestinationCardProps) {
  return <div className="relative group overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute bottom-4 left-4 z-20">
        <h3 className="text-white font-medium text-lg">{name}</h3>
      </div>
    </div>;
}
export function DestinationCards() {
  const destinations = [{
    name: 'Pacific Rim',
    image: 'https://images.unsplash.com/photo-1502636621341-79769dd36684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
  }, {
    name: 'Vancouver',
    image: 'https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
  }, {
    name: 'Victoria',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }, {
    name: 'Banff',
    image: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  }, {
    name: 'Whistler',
    image: 'https://images.unsplash.com/photo-1609081144289-e5c16af8f0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
  }];
  return <section className="w-full bg-[#0c1112] py-12">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 h-[300px]">
          {destinations.map((destination, index) => <DestinationCard key={index} name={destination.name} image={destination.image} />)}
        </div>
      </div>
    </section>;
}