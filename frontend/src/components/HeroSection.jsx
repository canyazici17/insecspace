import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = ({ heroData, eventDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(eventDate) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroData.main})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={heroData.logo} 
            alt="INSECSPACE'2026" 
            className="h-32 sm:h-40 md:h-48 w-auto object-contain"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 uppercase tracking-tight">
          <span className="block text-white drop-shadow-2xl">INSECSPACE</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent mt-2">
            2026
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide">
          INNOVATIONS & SECURITY IN SPACE
        </p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span className="text-lg">29 APRIL 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-cyan-400 rounded-full" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span className="text-lg">Information and Communication Technologies Authority (BTK) Conference Hall</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <div className="inline-block bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6">
            <div className="grid grid-cols-4 gap-4 sm:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm text-cyan-400 uppercase tracking-wider">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold uppercase tracking-wider shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/70 hover:scale-105"
          >
            Register Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={() => scrollToSection('about')}
            size="lg"
            variant="outline"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg font-semibold uppercase tracking-wider backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
