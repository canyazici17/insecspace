import React from 'react';

const SpeakersSection = ({ speakers, hideHeader }) => {
  const isThreeOrLess = speakers.length <= 3;
  return (
    <section id="speakers" className="relative pt-10 pb-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4">
              <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Featured Speakers
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Learn from industry leaders and pioneers shaping the future of space security
            </p>
          </div>
        )}

        {/* Speakers Grid */}
        <div className={`grid gap-8 ${isThreeOrLess ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center place-items-center' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-3 font-medium">
                    {speaker.title}
                  </p>
                  {speaker.bio === 'linkedin' ? (
                    <a
                      href="https://www.linkedin.com/in/ali-yaz%C4%B1c%C4%B1-a3576b46?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  ) : speaker.bio === 'linkedin2' ? (
                    <a
                      href="https://www.linkedin.com/in/alim-r%C3%BCstem-aslan-a306b118?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  ) : speaker.bio === 'linkedin3' ? (
                    <a
                      href="https://www.linkedin.com/in/ali-baygeldi-3262abb1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  ) : speaker.bio === 'linkedin4' ? (
                    <a
                      href="https://www.linkedin.com/in/dr-ejder-varol-890bb414?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  ) : speaker.bio === 'linkedin5' ? (
                    <a
                      href="https://www.linkedin.com/in/guler-kocak-ph-d-76335b207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  ) : speaker.bio === 'linkedin6' ? (
                    <a
                      href="https://www.linkedin.com/in/mirahmetoglu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  ) : speaker.bio === 'linkedin7' ? (
                    <a
                      href="https://www.linkedin.com/in/kaz%C4%B1m-efendio%C4%9Flu-a1129245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  ) : speaker.bio === 'linkedin8' ? (
                    <a
                      href="https://www.linkedin.com/in/m-mehmet-nefes-157197152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  ) : speaker.bio === 'linkedin9' ? (
                    <a
                      href="https://www.linkedin.com/in/mustafa-helvaci-ph-d-65938486?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                      <span>LinkedIn Profile</span>
                    </a>
                    ) : speaker.bio === 'linkedin10' ? (
                      <a
                        href="https://www.linkedin.com/in/oakaragozoglu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                        <span>LinkedIn Profile</span>
                      </a>
                    ) : speaker.bio === 'linkedin11' ? (
                      <a
                        href="https://www.linkedin.com/in/dr-selman-d-25627b18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mt-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path d="M9.429 12.857h3.143v9.714H9.429v-9.714zm1.571-1.571c-1.029 0-1.857-.829-1.857-1.857 0-1.029.829-1.857 1.857-1.857 1.029 0 1.857.829 1.857 1.857 0 1.029-.829 1.857-1.857 1.857zm4.286 1.571h3.014v1.329h.043c.42-.8 1.443-1.643 2.971-1.643 3.177 0 3.771 2.091 3.771 4.808v5.22h-3.143v-4.629c0-1.104-.02-2.523-1.543-2.523-1.543 0-1.779 1.206-1.779 2.449v4.703h-3.143v-9.714z" fill="#fff"/></svg>
                        <span>LinkedIn Profile</span>
                      </a>
                  ) : (
                    <p className="text-gray-400 text-sm leading-relaxed">{speaker.bio}</p>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-lg transition-all duration-300 pointer-events-none" />
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
