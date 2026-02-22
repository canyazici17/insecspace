import React from 'react';

const SponsorsSection = ({ sponsors }) => {
  const tierColors = {
    platinum: 'from-cyan-400 to-blue-400',
    gold: 'from-yellow-400 to-yellow-600',
    silver: 'from-gray-300 to-gray-400',
    bronze: 'from-orange-400 to-orange-600'
  };

  const tierSizes = {
    platinum: 'text-4xl',
    gold: 'text-3xl',
    silver: 'text-2xl',
    bronze: 'text-xl'
  };

  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  return (
    <section id="sponsors" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Our Sponsors
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powered by industry-leading organizations committed to space innovation
          </p>
        </div>

        {/* Sponsors by Tier */}
        <div className="space-y-12">
          {Object.entries(groupedSponsors).map(([tier, tierSponsors]) => (
            <div key={tier}>
              {/* Tier Title */}
              <div className="text-center mb-8">
                <h3 className={`${tierSizes[tier]} font-bold uppercase tracking-wider bg-gradient-to-r ${tierColors[tier]} bg-clip-text text-transparent`}>
                  {tier} Sponsors
                </h3>
              </div>

              {/* Sponsors Grid */}
              <div className={`grid gap-6 ${
                tier === 'platinum' ? 'md:grid-cols-2' : 
                tier === 'gold' ? 'md:grid-cols-3' : 
                'md:grid-cols-4'
              }`}>
                {tierSponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="group relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                  >
                    {/* Sponsor Name (Placeholder Logo) */}
                    <div className="flex items-center justify-center h-24">
                      <div className="text-center">
                        <div className={`font-bold uppercase tracking-wider text-gray-400 group-hover:bg-gradient-to-r group-hover:${tierColors[tier]} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${
                          tier === 'platinum' ? 'text-2xl' :
                          tier === 'gold' ? 'text-xl' :
                          tier === 'silver' ? 'text-lg' :
                          'text-base'
                        }`}>
                          {sponsor.name}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-2 right-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${tierColors[tier]} opacity-50 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Sponsoring?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              Join our prestigious sponsors and showcase your brand to the global space security community
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wider shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/70 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
