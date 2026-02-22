import React from 'react';

const SpeakersSection = ({ speakers }) => {
  return (
    <section id="speakers" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Featured Speakers
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn from industry leaders and pioneers shaping the future of space security
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-3 font-medium">
                    {speaker.title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-lg transition-all duration-300 pointer-events-none" />
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
