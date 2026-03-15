import React from 'react';

const Programme = () => (
  <section className="py-16 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
    <div className="w-full max-w-3xl px-4">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-widest text-center">INSECSPACE’2026 CONFERENCE PROGRAM</h1>
        <p className="text-center text-cyan-300 font-semibold mt-2">www.insecspace.org.tr</p>
        <p className="text-yellow-400 font-bold text-base md:text-lg mt-2 text-center">29 April 2026, Information Technologies and Communication Authority of Turkey (BTK) Conference Hall in Ankara</p>
      </div>
      <div className="space-y-2 text-white text-base md:text-lg font-normal">
        {/* Modern Responsive Programme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Session Blocks */}
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">09:00-09:30</span>
            <span className="mt-2 text-white">REGISTRATION / COFFEE BREAK</span>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">09:30-09:40</span>
            <span className="mt-2 text-white">MOMENT OF SILENCE and THE NATIONAL ANTHEM</span>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">09:45-10:45</span>
            <span className="mt-2 text-white">OPENING SPEECHES</span>
            <div className="mt-2 text-xs md:text-sm text-cyan-200">
              Ali YAZICI, INSECSPACE’2026 Conference President<br/>
              Ahmet Hamdi ATALAR, TÜRKSAT General Manager<br/>
              Ömer Abdullah KARAGÖZOĞLU, President of Turkish Information Technologies and Communication Authority (BTK)*<br/>
              Ömer Fatih SAYAN, T.C. Deputy Minister of Transport and Infrastructure*
            </div>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">10:45-12.00</span>
            <span className="mt-2 text-white">SESSION-1: <span className="text-yellow-300">INNOVATIVE & EMERGING SATELLITE TECHNOLOGIES AND THEIR ROLE IN NATIONAL DEFENSE  / YENİLİKÇİ VE GELİŞMEKTE OLAN UYDU TEKNOLOJİLERİ VE ULUSAL SAVUNMADAKİ ROLLERİ</span></span>
            <div className="mt-2 text-xs md:text-sm text-cyan-200">
              MODERATOR: * to be announced soon<br/>
              Panelists:<br/>
              Dr. Selman DEMİREL, VP of Satellite Operations at TURKSAT<br/>
              M. Mehmet NEFES, Director / Chairman of the Board at TÜBİTAK-Space<br/>
              ASELSAN Representative (*Speaker information awaited)<br/>
              Turkish Aerospace (TAI) Representative (*Speaker information awaited)<br/>
              Gurvinder CHOHAN, CEO at RSAT Space
            </div>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">12:00-13.15</span>
            <span className="mt-2 text-white">SESSION-2: <span className="text-yellow-300">SPACE ECONOMY & SITUATIONAL AWARENESS / UZAY EKONOMİSİ VE DURUM FARKINDALIĞI</span></span>
            <div className="mt-2 text-xs md:text-sm text-cyan-200">
              MODERATOR: Medeni SOYSAL, Senior Chief Researcher at TÜBİTAK- Space
            </div>
            <div className="pl-6 text-sm md:text-base mt-1">
              <span className="font-bold text-cyan-300">12:00-12.15</span>&nbsp;&nbsp;“Topic is awaited”, Prof. Dr. Rüstem Alim ASLAN, Manager of Space Systems Design and Test Laboratory at Istanbul Technical University<br/>
              <span className="font-bold text-cyan-300">12:15-12.30</span>&nbsp;&nbsp;“Topic is awaited”, Ali BAYGELDİ, Head of Space Systems and Spacecraft Department at Turkish Space Agency (TUA)<br/>
              <span className="font-bold text-cyan-300">12:30-12.45</span>&nbsp;&nbsp;“Resilient Solar Energy for Defence & Space”, Dr. Güler KOÇAK, CEO at SPACELIS<br/>
              <span className="font-bold text-cyan-300">12:45-13.00</span>&nbsp;&nbsp;“Topic is awaited”, Dr. Mustafa HELVACI, Scientific Researcher at TUBITAK-Space / Executive Board Member at TÜRKSAT<br/>
              <span className="font-bold text-cyan-300">13:00-13.15</span>&nbsp;&nbsp; Invited Speaker / Davetli Konuşmacı * to be announced soon
            </div>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4 h-32 min-h-0">
            <span className="font-bold text-cyan-300 text-lg">13:15-14:00</span>
            <span className="mt-2 text-white">LUNCH BREAK</span>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">14:00-15:15</span>
            <span className="mt-2 text-white">SESSION-3: <span className="text-yellow-300">RESILIENT & SECURE SATELLITE COMMUNICATION TECHNOLOGIES / DAYANIKLI VE GÜVENLİ UYDU İLETİŞİM TEKNOLOJİLERİ</span></span>
            <div className="mt-2 text-xs md:text-sm text-cyan-200">
              MODERATOR: Halit MİRAHMETOĞLU, Managing Director at Space Agenda<br/>
              Panelists:<br/>
              Uğur COŞKUN, CEO at Ad Astra Technology Group (AATG)<br/>
              Prof. Dr. M. Bilge DEMİRKÖZ, Director at ODTÜ İVMER | Member of the <br/>
              UN AI Panel<br/> 
              Cem BİLSEL, Board Member at TUYAD<br/>
              Panelist-4 to be announced soon<br/>
              Panelist-5 to be announced soon
            </div>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4 h-32 min-h-0">
            <span className="font-bold text-cyan-300 text-lg">15:15-15:30</span>
            <span className="mt-2 text-white">COFFEE BREAK</span>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">15:30-17.30</span>
            <span className="mt-2 text-white">SESSION-4: <span className="text-yellow-300">FUTURE SATELLITES TECHNOLOGIES / GELECEK UYDU TEKNOLOJİLERİ</span></span>
            <div className="mt-2 text-xs md:text-sm text-cyan-200">
              MODERATOR: Panel Moderator to be announced soon<br/>
            </div>
            <div className="pl-6 text-sm md:text-base mt-1">  
              <span className="font-bold text-cyan-300">15:30-15.45</span>&nbsp;&nbsp;“Secure Maritime Traffic Control via Satellites”, Dr. Ejder Varol, CEO @iMARINE<br/>
              <span className="font-bold text-cyan-300">15:45-16.00</span>&nbsp;&nbsp;NATO Representative (*Speaker information awaited)<br/>
              <span className="font-bold text-cyan-300">16:00-16.15</span>&nbsp;&nbsp;“Topic is awaited”, Kazım EFENDİOĞLU, Executive Coordinator at ULAK Haberleşme<br/>
              <span className="font-bold text-cyan-300">16:15-16.30</span>&nbsp;&nbsp;“Topic is awaited”, Dr. Cevher Levent ERTÜRK, Project Manager at TÜBİTAK Space<br/>
              <span className="font-bold text-cyan-300">16:30-16.45</span>&nbsp;&nbsp;Invited Speaker / Davetli Konuşmacı* to be announced soon<br/>
              <span className="font-bold text-cyan-300">16:45-17.00</span>&nbsp;&nbsp;Invited Speaker / Davetli Konuşmacı* to be announced soon<br/>
              <span className="font-bold text-cyan-300">17:00-17.15</span>&nbsp;&nbsp;Invited Speaker / Davetli Konuşmacı* to be announced soon<br/>
              <span className="font-bold text-cyan-300">17:15-17.30</span>&nbsp;&nbsp;“The Strategic Role of Satellite Communications in Modern Security Architectures”, Mehmet TOROS, CEO at MCT Telco Global <br/>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4 h-36 min-h-0">
            <span className="font-bold text-cyan-300 text-lg">17:30-17.45</span>
            <span className="mt-2 text-white">WRAP UP SESSION / KAPANIŞ OTURUMU</span>
          </div>
        </div>
        {/* For mobile, stack cards; for desktop, grid layout. Keep all text content unchanged. */}
      </div>
    </div>
  </section>
);

export default Programme;
