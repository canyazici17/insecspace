import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HighlightsSection from "./components/HighlightsSection";
import SpeakersSection from "./components/SpeakersSection";
import ScheduleSection from "./components/ScheduleSection";
import SponsorsSection from "./components/SponsorsSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { conferenceData } from "./data/mockData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection 
        heroData={conferenceData.heroImages} 
        eventDate={conferenceData.eventDate}
      />
      <AboutSection aboutData={conferenceData.about} />
      <HighlightsSection highlights={conferenceData.highlights} />
      <SpeakersSection speakers={conferenceData.speakers} />
      <ScheduleSection schedule={conferenceData.schedule} />
      <SponsorsSection sponsors={conferenceData.sponsors} />
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
