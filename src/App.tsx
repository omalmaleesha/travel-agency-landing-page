import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { ExploreSection } from './components/ExploreSection';
import { DestinationCards } from './components/DestinationCards';
import { StatsSection } from './components/StatsSection';
import { OtherTours } from './components/OtherTours';
import { TravelPlan } from './components/TravelPlan';
import { Footer } from './components/Footer';

export function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`flex flex-col w-full min-h-screen ${theme === 'dark' ? 'bg-[#0c1112] text-white' : 'bg-white text-black'}`}>
      <Header toggleTheme={toggleTheme} />
      <HeroSection />
      <FeatureSection tag="ADVENTURE" title="Become Part of Two Week Canada Western Conquest" description="With thrilling adventures hidden out in the wild, make an unforgettable journey through the breathtaking landscapes. Climb the mountains, swim in the healing hot springs, take photos while under the stars you worship, relax and think." image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" imagePosition="right" />
      <FeatureSection tag="TRAVEL MAP" title="Explore & Enjoy" description="From Vancouver to Calgary, 2 provinces, 7 cities, 9 stops total etc. Visit the highest point of the Canadian Rocky Mountains, the majestic Moraine Lake, and the Athabasca Glacier. Enjoy Lake, meet the residents of Banff, a small mountain town, all at elevation of 1400 meters." image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" imagePosition="left" />
      <FeatureSection tag="TRANSPORT" title="How to Move Around?" description="The CAMPER provides you with comfortable vans with all of the needed features. All vans have electronic kettles, TV, a comfortable bed, pillows, blankets, a small refrigerator, a stove, solar-powered electricity." image="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" imagePosition="right" />
      <ExploreSection />
      <DestinationCards />
      <StatsSection />
      <OtherTours />
      <TravelPlan />
      <Footer />
    </div>
  );
}