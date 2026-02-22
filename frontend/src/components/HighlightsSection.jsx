import React from 'react';
import { Satellite, Rocket, Globe, Cpu } from 'lucide-react';

const iconMap = {
  1: Satellite,
  2: Rocket,
  3: Globe,
  4: Cpu
};

const HighlightsSection = ({ highlights }) => {
  return (
    <section id="highlights" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Conference Highlights
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => {
            const Icon = iconMap[highlight.id];
            return (
              <div
                key={highlight.id}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed flex-grow">
                    {highlight.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
