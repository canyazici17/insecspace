import React from 'react';

const AboutSection = ({ aboutData }) => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-white">{aboutData.title}</span>
            </h2>
            <div className="w-24 h-0.5 bg-gray-700 rounded-sm" />
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              {Array.isArray(aboutData.description)
                ? aboutData.description.map((p, i) => (
                    <p
                      key={i}
                      className="text-lg"
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))
                : <p className="text-lg text-gray-300 leading-relaxed">{aboutData.description}</p>
              }
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
