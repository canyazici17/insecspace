import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { newsletterSignup } from '../data/mockData';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const path = location?.pathname || '/';
  // Show newsletter only on the home page
  const showNewsletter = path === '/';

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await newsletterSignup(email);
      if (result.success) {
        toast.success(result.message);
        setEmail('');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative bg-black border-t border-cyan-500/30">
      {/* Newsletter section on Home: simplified CTA with Register button */}
      {showNewsletter && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-10 md:p-16 backdrop-blur-sm">
              <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-wide text-white mb-0">
                  Click Here to Registration
                </h3>
                <Link to="/registration" className="inline-block">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 md:py-4 text-base md:text-lg font-semibold uppercase tracking-wider shadow-lg shadow-cyan-500/40 transition-all duration-300">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <div className="grid md:grid-cols-3 gap-12 justify-items-center items-start">
          {/* About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent mb-4">
              INSECSPACE'26
            </h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Leading the conversation on innovations and security in space exploration. Join us for an unforgettable experience.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-16">
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>info@insecspace.org.tr</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+90 532 4155777</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+90 555 6244348</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <MapPin className="w-10 h-10 text-cyan-400" />
                <span>Kızılırmak Mahallesi 1443.Cadde 1071 Usta Plaza No:25B/8 Çankaya /Ankara-Türkiye  PK: 06510</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/insecspace?igsh=MXhubHI1ZzlpaHczZA==' },
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/insecspace-platform-2023723a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 INSECSPACE. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-500 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-500 hover:text-cyan-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-500 hover:text-cyan-400 transition-colors">
                Code of Conduct
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
