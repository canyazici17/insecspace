import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={handleNavClick}
              className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              INSECSPACE'26
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', to: '/' },
              { label: 'About', to: '/about' },
              { label: 'Programme', to: '/programme' },
              { label: 'Sponsorship & Exhibition', to: '/sponsorship' },
              { label: 'Registration', to: '/registration' },
              { label: 'Venue', to: '/venue' },
              { label: 'Media Center', to: '/media' },
              { label: 'Contact', to: '/contact' },
              { label: 'Committee', to: '/committee' }
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wider px-3 mx-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20">
          <div className="px-4 py-6 space-y-4">
            {[
              { label: 'Home', to: '/' },
              { label: 'About', to: '/about' },
              { label: 'Programme', to: '/programme' },
              { label: 'Sponsorship & Exhibition', to: '/sponsorship' },
              { label: 'Registration', to: '/registration' },
              { label: 'Venue', to: '/venue' },
              { label: 'Media Center', to: '/media' },
              { label: 'Contact', to: '/contact' },
              { label: 'Committee', to: '/committee' }
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wider py-2 px-3"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
