import React from 'react';
import HeroSection from '../components/HeroSection';
import { conferenceData } from '../data/mockData';

const Home = () => {
  return (
    <main>
      {/* Only show hero (video + description) on initial home landing */}
      <HeroSection heroData={conferenceData.heroImages} eventDate={conferenceData.eventDate} />
    </main>
  );
};

export default Home;
