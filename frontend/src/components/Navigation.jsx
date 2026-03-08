import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
    const menuItems = [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Programme', to: '/programme' },
      { label: 'Sponsorship', to: '/sponsorship' },
      { label: 'Registration', to: '/registration' },
      { label: 'Venue', to: '/venue' },
      { label: 'COMMITTEE', to: '/comittee' },
      { label: 'Contact', to: '/contact', tight: true },
      { label: 'SPEAKERS', to: '/speakers', tight: true }
    ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showRegModal, setShowRegModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
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
          <div className="hidden md:flex items-center space-x-8 w-full">
            <div className="flex items-center space-x-8 flex-1">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={handleNavClick}
                  className={`text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wider ${item.tight ? 'px-2 mx-0' : 'px-3 mx-1'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setShowRegModal(true)}
              className="ml-8 px-4 py-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 border border-cyan-400 uppercase tracking-wider text-sm"
            >
              Register Now
            </button>
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
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={`text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wider ${item.tight ? 'px-2 mx-0' : 'px-3 mx-1'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
    {/* Registration Modal */}
    {showRegModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-cyan-600 text-2xl font-bold"
            onClick={() => setShowRegModal(false)}
            aria-label="Close"
          >
            ×
          </button>
          {/* Registration form embed */}
          <iframe
            src="/registration"
            title="Registration"
            className="w-full h-[600px] border-none rounded-lg"
          />
        </div>
      </div>
    )}
    </>
  );
};

export default Navigation;
