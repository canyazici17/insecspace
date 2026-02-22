import React from 'react';

const Venue = () => (
  <section className="py-24">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Venue</h1>
      <p className="text-gray-400">Information and Communication Technologies Authority (BTK) Conference Hall</p>
      <div className="mt-6">
        <iframe
          title="BTK Location"
          src="https://www.google.com/maps?q=Information+and+Communication+Technologies+Authority&output=embed"
          className="w-full h-80 border-0 rounded-md"
        />
      </div>
    </div>
  </section>
);

export default Venue;
