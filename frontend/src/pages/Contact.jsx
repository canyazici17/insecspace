import React from 'react';

const contacts = [
  {
    label: 'Programme',
    email: 'support@insecspace.org.tr',
    color: 'from-blue-900 to-blue-600',
    icon: '📅',
    iconBg: 'bg-blue-700',
  },
  {
    label: 'Sponsorship & Exhibition',
    email: 'info@insecspace.org.tr',
    color: 'from-yellow-500 to-yellow-300',
    icon: '🤝',
    iconBg: 'bg-yellow-400',
  },
  {
    label: 'Media',
    email: 'media@insecspace.org.tr',
    color: 'from-cyan-500 to-cyan-300',
    icon: '📰',
    iconBg: 'bg-cyan-500',
  },
];

const Contact = () => (
  <section className="py-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-950 to-black">
    <div className="max-w-4xl w-full px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-white drop-shadow-lg tracking-tight">Contact</h1>
      <div className="grid gap-10 md:grid-cols-3">
        {contacts.map(({ label, email, color, icon, iconBg }) => (
          <div
            key={label}
            className={`rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center bg-gradient-to-br ${color} bg-opacity-80 backdrop-blur-lg border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
            style={label === 'Programme' ? { minWidth: '260px', maxWidth: '420px', width: '100%' } : {}}
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-full ${iconBg} mb-5 shadow-lg`}>
              <span className="text-3xl md:text-4xl">{icon}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-wide drop-shadow">{label}</h2>
            <a
              href={`mailto:${email}`}
              className="text-base md:text-lg font-sans font-medium tracking-wide text-white underline whitespace-nowrap hover:text-yellow-200 transition-colors duration-200 px-2"
              style={label === 'Programme' ? { fontSize: '1rem' } : {}}
            >
              {email}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
