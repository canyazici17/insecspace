import React from 'react';
import { Link } from 'react-router-dom';

const whySponsorText = `Why Should You Sponsor INSECSPACE 2026?`;
const whySponsorDesc = `INSECSPACE 2026 is a high–value, strategically significant conference positioned at the intersection of space and satellite technologies, innovation, and cyber security.`;
const whySponsorBullets = [
  'Gain direct access to the right target audience, including key decision-makers and industry leaders',
  'Enhance brand visibility and strengthen corporate image in a high-profile strategic environment',
  'Establish sectoral leadership and trust within the space, defense, and cyber security ecosystem',
  'Create new partnerships and collaboration opportunities',
  'Invest in the future by supporting secure and sustainable space technologies',
];
const whySponsorFooter = `Sponsoring INSECSPACE 2026 positions your organization at the forefront of innovation, security, and strategic dialogue shaping the future of space`;

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
        {/* Why Sponsor - EN ÜSTE EKLENDİ */}
        <div className="max-w-3xl mx-auto mb-8 p-8 rounded-2xl border border-cyan-700 bg-gradient-to-br from-black via-blue-950 to-cyan-900 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight font-sans">{whySponsorText}</h2>
          <p className="text-gray-200 text-base md:text-lg mb-6 font-sans leading-relaxed">{whySponsorDesc}</p>
          <ul className="text-gray-300 text-left mx-auto mb-6 max-w-xl list-disc list-inside space-y-2 font-sans text-base md:text-lg">
            {whySponsorBullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-cyan-300 text-base md:text-lg font-semibold font-sans leading-relaxed">{whySponsorFooter}</p>
        </div>
        {/* Interested in Sponsoring - HEMEN ALTINA */}
        <div className="max-w-2xl mx-auto mb-10 p-8 rounded-xl border border-cyan-700 bg-gradient-to-br from-black via-blue-950 to-cyan-900 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interested in Sponsoring?</h2>
          <p className="text-gray-300 mb-6">Join our prestigious sponsors and showcase your brand to the global space security community</p>
          <Link
            to="/contact"
            replace
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block px-8 py-3 rounded-lg bg-cyan-500 text-white font-semibold text-lg shadow-md hover:bg-cyan-600 transition-all duration-200"
          >
            CONTACT US
          </Link>
        </div>
        {/* SPONSORSHIP PROSPECTUS BUTTON */}
        <div className="max-w-2xl mx-auto mb-10 flex justify-center">
          <a
            href="/INSECSPACE-SPONSORSHIP.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-md hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 border border-cyan-400 uppercase tracking-wider"
          >
            SPONSORSHIP PROSPECTUS
          </a>
        </div>
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
              <div className={`text-center${tier === 'silver' ? ' mt-20 mb-8' : ''}${tier === 'gold' ? ' mt-20 mb-8' : ''}${tier === 'bronze' ? ' mt-20 mb-8' : tier !== 'silver' && tier !== 'gold' && tier !== 'bronze' ? ' mb-8' : ''}`}> 
                <h3 className={`${tierSizes[tier]} font-bold uppercase tracking-wider bg-gradient-to-r ${tierColors[tier]} bg-clip-text text-transparent`}>
                  {tier === 'platinum' ? 'Strategic Partner' : tier === 'gold' ? 'BRONZE SPONSORS' : tier === 'silver' ? 'Media Sponsor' : tier === 'bronze' ? 'Supporters' : `${tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors`}
                </h3>
              </div>

              {/* Sponsors Grid */}
              <div className={`grid gap-8 md:gap-12 ${
                tier === 'platinum' ? 'md:grid-cols-2' : 
                tier === 'gold' ? 'md:grid-cols-2' : 
                tier === 'silver' ? 'md:grid-cols-2' :
                'md:grid-cols-3'
              }`}> 
                {tierSponsors.map((sponsor, idx) => (
                  <div
                    key={sponsor.id}
                    className="group relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-10 flex flex-col items-center justify-center hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                  >
                    {/* Sponsor Name (Placeholder Logo) */}
                    <div className="flex items-center justify-center h-24 w-full">
                      <div className="text-center w-full">
                        {tier === 'platinum' && idx === 0 ? (
                          <img src="/turkiye-uzay-ajansi-tua-logo-png_seeklogo-397524.png" alt="TUA Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'platinum' && idx === 1 ? (
                          <img src="/BilgiTeknolojileri.png" alt="BTK Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'platinum' && idx === 2 ? (
                          <img src="/türksat.jpg" alt="TÜRKSAT Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'platinum' && idx === 3 ? (
                          <img src="/Tübitak.jpeg" alt="TÜBİTAK Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'platinum' && idx === 4 ? (
                          <img src="/TUYAD.png" alt="TUYAD Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'gold' && idx === 0 ? (
                          <img src="/SPACELİS.jpeg" alt="SPACELİS Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'gold' && idx === 1 ? (
                          <img src="/imarine.jpeg" alt="iMarine Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'gold' && idx === 2 ? (
                          <img src="/MON IN.jpeg" alt="MON IN Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'gold' && idx === 3 ? (
                          <img src="/RSAT.jpeg" alt="RSAT Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'silver' && idx === 0 ? (
                          <img src="/Media.jpeg" alt="Media Sponsor Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 0 ? (
                          <img src="/USTIL.jpeg" alt="USTIL Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 1 ? (
                          <img src="/TÜYAFED.jpeg" alt="TÜYAFED Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 2 ? (
                          <img src="/TOSYÖV.jpeg" alt="TOSYÖV Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 3 ? (
                          <img src="/KARNYUZ.jpeg" alt="KARNYUZ Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 4 ? (
                          <img src="/MCT.jpeg" alt="MCT Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 5 ? (
                          <img src="/İKP.jpeg" alt="İKP Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 6 ? (
                          <img src="/TDTV.jpeg" alt="TDTV Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 7 ? (
                          <img src="/INTER.jpeg" alt="INTER Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 8 ? (
                          <img src="/SIGNATURE.jpeg" alt="SIGNATURE Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
                        {tier === 'bronze' && idx === 9 ? (
                          <img src="/ECUADOR.jpeg" alt="ECUADOR Logo" className="mx-auto mb-2 h-20 w-auto object-contain" />
                        ) : null}
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
      </div>
    </section>
  );
};

export default SponsorsSection;
