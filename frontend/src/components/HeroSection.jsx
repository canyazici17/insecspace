import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = ({ heroData, eventDate, showContent = false }) => {
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
    <>
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {/* Background video (full viewport) */}
        <video
          id="main-video"
          className="absolute inset-0 w-full h-full object-cover"
          src={heroData.video || '/main-video.mp4'}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Optionally show content above video (default: hidden for pure-video hero) */}
        {showContent && (
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
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
            </div>
          </div>
        )}
      </section>

      {/* Text block shown under the video (styled like screenshot) */}
      <section className="bg-black text-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-cyan-300">
              <span className="font-bold text-white text-3xl sm:text-4xl">INSECSPACE’2026</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl mb-4">
            will take place on <span className="font-bold">29 April 2026</span> in Ankara, Turkey
          </p>

          <p className="text-lg sm:text-xl mb-4">
            at the <span className="font-bold">Information and Communication Technologies Authority (BTK) Conference Hall</span>,
          </p>

          <p className="text-lg sm:text-xl italic mb-8">
            under the main theme “<span className="font-semibold">Secure Use of Innovative Technologies in Satellite Systems.</span>”
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
            We as an <span className="font-bold">INSECSPACE’2026</span> Organizing Committee would like to extend our sincere thanks to all participants, speakers, partners, and sponsors, and I look forward to welcoming you to <span className="font-bold">INSECSPACE’2026</span>, where we will shape the future of space security together.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
