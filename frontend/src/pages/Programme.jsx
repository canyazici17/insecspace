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
            <span className="font-bold text-cyan-300 text-lg">09:30-09:35</span>
            <span className="mt-2 text-white">MOMENT OF SILENCE and THE NATIONAL ANTHEM</span>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">09:35-10:45</span>
            <span className="mt-2 text-white">OPENING SPEECHES | PLAQUE CEREMONY</span>
            <div className="mt-2 text-xs md:text-sm text-cyan-200">
              <span className="block mb-1">Ali YAZICI, INSECSPACE’2026 Conference President</span>
              <span className="block mb-1">Ahmet Hamdi ATALAY, TÜRKSAT General Manager</span>
              <span className="block mb-1">Yusuf KIRAÇ, President of Turkish Space Agency (TUA)</span>
              <span className="block mb-1">Ömer Fatih SAYAN, T.C. Deputy Minister of Transport and Infrastructure*</span>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">10:45-12.00</span>
            <span className="mt-2 text-white">SESSION-1: <span className="text-yellow-300">INNOVATIVE & EMERGING SATELLITE TECHNOLOGIES AND THEIR ROLE IN NATIONAL DEFENSE  / YENİLİKÇİ VE GELİŞMEKTE OLAN UYDU TEKNOLOJİLERİ VE ULUSAL SAVUNMADAKİ ROLLERİ</span></span>
            <div className="mt-2 text-xs md:text-sm text-cyan-200">
              MODERATOR: Assoc. Prof. Dr. Şeyda ERTEKİN, Vice Head of METU BILTIR Center | METU Computer Engineering Faculty Member<br/>
              Panelists:<br/>
              <span className="text-white block mb-1">Veli YANIKGÖNÜL, Satellite Spectrum and Operations Director at TÜRKSAT</span>
              <span className="text-white block mb-1">M. Mehmet NEFES, Director / Chairman of the Board at TÜBİTAK UZAY</span>
              <span className="text-white block mb-1">Dr. Onur TARAKÇIOĞLU, Executive Vise President, Space System, TUSAŞ</span>
              <span className="text-white block mb-1">Gurvinder CHOHAN, CEO at RSAT Space</span>
              <span className="text-white block mb-1">Önder TATAR, Director of Product and ILS at CTech</span>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">12:00-13.15</span>
            <span className="mt-2 text-white">SESSION-2: <span className="text-yellow-300">SPACE ECONOMY & SITUATIONAL AWARENESS / UZAY EKONOMİSİ VE DURUM FARKINDALIĞI</span></span>
            <div className="mt-2 text-xs md:text-sm text-cyan-200">
              MODERATOR: Dr. Medeni SOYSAL, Senior Chief Researcher at TÜBİTAK UZAY
            </div>
            <div className="pl-6 text-sm md:text-base mt-1">
              <span className="font-bold text-cyan-300">12:00-12.15</span>&nbsp;&nbsp;“Space Debris Risk and Mitigation Methods”, Uğur COŞKUN, CEO at Ad Astra Technology Group (AATG)<br/>
              <span className="font-bold text-cyan-300">12:15-12.30</span>&nbsp;&nbsp;“Space Economy & Space Security”, Fatih DULKAN, VP at Turkish Space Agency (TUA)<br/>
              <span className="font-bold text-cyan-300">12:30-12.45</span>&nbsp;&nbsp;“Resilient Solar Energy for Defence & Space”, Dr. Güler KOÇAK, CEO at SPACELIS<br/>
              <span className="font-bold text-cyan-300">12:45-13.00</span>&nbsp;&nbsp;“Economic and Security Dimensions of the Space Industry: A 25-Year Projection for the Communications Sector (2025–2050)” Dr. Mustafa HELVACI, Scientific Researcher at TUBITAK UZAY / Executive Board Member at TÜRKSAT<br/>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4 h-32 min-h-0">
            <span className="font-bold text-cyan-300 text-lg">13:15-14:00</span>
            <span className="mt-2 text-white">LUNCH BREAK</span>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">14:00-15:15</span>
            <span className="mt-2 text-white">SESSION-3: <span className="text-yellow-300">RESILIENT & SECURE SATELLITE COMMUNICATION TECHNOLOGIES / DAYANIKLI VE GÜVENLİ UYDU İLETİŞİM TEKNOLOJİLERİ</span></span>
            <div className="mt-2 text-xs md:text-sm text-white-200">
              <span className="block mb-1 text-cyan-200">MODERATOR: Halit MİRAHMETOĞLU, Managing Director at Space Agenda</span>
              <span className="block mb-1 text-cyan-200">Panelists:</span>
              <span className="block mb-1">Prof. Dr. Rüstem Alim ASLAN, Manager of Space Systems Design and Test Laboratory at Istanbul Technical University</span>
              <span className="block mb-1">M. Fuat EROĞLU, Satellite Business Development and Sales Director at TÜRKSAT </span>
              <span className="block mb-1">Hasan Hüseyin ERTOK, COO at Fergani Space </span>
              <span className="block mb-1">Cem BİLSEL, Board Member at TUYAD</span>
              <span className="block mb-1">Prof. Dr. Lokman KUZU, Karabük Üniversity Electrical and Electronics Engineering Faculty Member| Chairman of the Board GSATCOM</span>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4 h-32 min-h-0">
            <span className="font-bold text-cyan-300 text-lg">15:15-15:30</span>
            <span className="mt-2 text-white">COFFEE BREAK</span>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4 h-60 min-h-0">
            <span className="font-bold text-cyan-300 text-lg">15:30-15:45</span>
            <span className="block mb-1 text-yellow-300">Keynote Speech: “Space Domain Awareness” </span>
            <span className="mt-2 text-xs md:text-sm text-cyan-200">Gurvinder CHOHAN, CEO at RSAT Space</span>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4 h-60 min-h-0">
            <span className="font-bold text-cyan-300 text-lg">15:45-16:00</span>
            <span className="block mb-1 text-yellow-300">Keynote Speech “Radio Harmful Interference as a Security Threat to Satellite System”</span>
            <span className="mt-2 text-xs md:text-sm text-cyan-200">Dat VO, Radiocommunication Enginer, Space Services Department at International Telecommunication Union</span>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col mb-4">
            <span className="font-bold text-cyan-300 text-lg">16:00-17:30</span>
            <span className="mt-2 text-white">SESSION-4: <span className="text-yellow-300">FUTURE SATELLITES TECHNOLOGIES / GELECEK UYDU TEKNOLOJİLERİ</span></span>
            <div className="mt-2 text-xs md:text-sm text-cyan-200">
              MODERATOR: Fatih AYHAN, Satellite Programs Director, TÜRKSAT<br/>
            </div>
            <div className="pl-6 text-sm md:text-base mt-1">  
              <span className="font-bold text-cyan-300">16:00-16:15</span>&nbsp;&nbsp;“Secure Maritime Traffic Control via Satellites”, Dr. Ejder VAROL, CEO at iMARINE<br/>
              <span className="font-bold text-cyan-300">16:15-16.30</span>&nbsp;&nbsp;“TÜRKSAT 6A: A Landmark Achievement In National Geostationary Communication Satellite Development”, Dr. Cevher Levent ERTÜRK, Project Manager at TÜBİTAK UZAY<br/>
              <span className="font-bold text-cyan-300">16:30-16.45</span>&nbsp;&nbsp;"Autonomous Satellite Swarms", İhsan KÜSMEZ, CEO at TSPACE<br/>
              <span className="font-bold text-cyan-300">16:45-17.00</span>&nbsp;&nbsp;"AI-Native Autonomous Satellite Systems for the Transition from Data to Decision Intelligence", Dr. Ali BERKOL, Director at ULAK Haberleşme<br/>
              <span className="font-bold text-cyan-300">17:00-17.15</span>&nbsp;&nbsp;“Space Security in the Age of AI: Protecting Satellites, Ground Systems, and Mission Integrity”, Anıl YAĞIZ, Founder & CEO at Singularity<br/>
              <span className="font-bold text-cyan-300">17:15-17.30</span>&nbsp;&nbsp;“Multi-Orbit Satellite Services”, Gürkan SENCAR, VP, Managed Services, Profen<br/>
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
