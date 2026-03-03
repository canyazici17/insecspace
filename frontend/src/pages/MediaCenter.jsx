import React from 'react';
import SpeakersSection from '../components/SpeakersSection';
import { conferenceData } from '../data/mockData';

const MediaCenter = () => (
  <section className="py-24 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-lg tracking-tight">
        Organization Committee
      </h1>
      <p className="text-cyan-100 mb-12 text-xl md:text-2xl font-semibold tracking-wide drop-shadow">
        Meet the organising committee.
      </p>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-4">
      {[
        { img: "/Comitte1.jpeg", name: "Mehmet Ali Yazıcı", desc: "INSECSPACE Chairman" },
        { img: "/Comite2.jpeg", name: "Prof.Dr.Rüstem Alim Aslan", desc: "INSECSPACE Member" },
        { img: "/Comite3.jpeg", name: "Ali Baygeldi", desc: "INSECSPACE Member" }
      ].map((member, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center rounded-2xl shadow-xl p-8 min-h-[420px] bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
        >
          <div className="w-64 h-80 bg-gray-700 flex items-center justify-center mb-6 overflow-hidden rounded-xl border-2 border-cyan-400/30 group-hover:border-cyan-400/70 transition-all duration-300">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              style={{ objectPosition: 'center top' }}
            />
          </div>
          <div className="w-full text-center mt-4">
            <span className="text-2xl font-extrabold text-white drop-shadow-lg tracking-wide">
              {member.name}
            </span>
            <p className="text-cyan-200 text-base mt-2 font-medium drop-shadow">
              {member.desc}
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  </section>
);

export default MediaCenter;
