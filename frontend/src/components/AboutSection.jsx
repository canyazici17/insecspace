import React from 'react';

const AboutSection = ({ aboutData }) => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase">
              <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                {aboutData.title}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <p className="text-lg text-gray-300 leading-relaxed">
              {aboutData.description}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-cyan-400 text-sm uppercase tracking-wider">Days</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-cyan-400 text-sm uppercase tracking-wider">Speakers</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-cyan-400 text-sm uppercase tracking-wider">Sessions</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-cyan-400 text-sm uppercase tracking-wider">Attendees</div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={aboutData.image}
                alt="About INSECSPACE"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 mix-blend-overlay" />
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-lg" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
