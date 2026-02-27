import React from 'react';

const Venue = () => (
  <section className="py-24">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Venue</h1>
      <p className="text-gray-400">Bilgi Teknolojileri ve İletişim Kurumu, Eskişehir Yolu 10.Km, 06530 Çankaya/Ankara</p>
      <div className="mt-6">
        <iframe
          title="BTK Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.073964479836!2d32.7988103!3d39.8936376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34605bfffffff%3A0xc8b5584953131e8f!2sBilgi%20Teknolojileri%20ve%20%C4%B1leti%C5%9Fim%20Kurumu!5e0!3m2!1str!2str!4v1709140000000!5m2!1str!2str"
          className="w-full h-80 border-0 rounded-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default Venue;
