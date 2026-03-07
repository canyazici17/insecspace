import React from 'react';
import SpeakersSection from '../components/SpeakersSection';
import { conferenceData } from '../data/mockData';

const Committee = () => (
  <div>
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Speakers</h1>
        <p className="text-gray-400 mb-6">Meet the INSECSPACE'2026 Conference speakers.</p>
      </div>
    </section>
    <SpeakersSection speakers={conferenceData.speakers} />
  </div>
);

export default Committee;
