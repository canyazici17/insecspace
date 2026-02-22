import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HighlightsSection from '../components/HighlightsSection';
import SpeakersSection from '../components/SpeakersSection';
import ScheduleSection from '../components/ScheduleSection';
import SponsorsSection from '../components/SponsorsSection';
import { conferenceData } from '../data/mockData';

const Home = () => {
  return (
    <div>
      <HeroSection heroData={conferenceData.heroImages} eventDate={conferenceData.eventDate} />
      <AboutSection aboutData={conferenceData.about} />
      <HighlightsSection highlights={conferenceData.highlights} />
      <SpeakersSection speakers={conferenceData.speakers} />
      <ScheduleSection schedule={conferenceData.schedule} />
      <SponsorsSection sponsors={conferenceData.sponsors} />
    </div>
  );
};

export default Home;
