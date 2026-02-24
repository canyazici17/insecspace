import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Send } from 'lucide-react';
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
      {/* Newsletter Section - only show on Home and Registration pages */}
      {showNewsletter && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-8 md:p-12 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Subscribe to our newsletter for the latest updates on INSECSPACE'2026
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400 h-12"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 h-12 font-semibold uppercase tracking-wider shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/70"
                >
                  {isSubmitting ? 'Subscribing...' : (
                    <>
                      Subscribe
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent mb-4">
              INSECSPACE'26
            </h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Leading the conversation on innovations and security in space exploration. Join us for an unforgettable experience.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>info@insecspace2026.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Information and Communication Technologies Authority (BTK) Conference Hall</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Facebook, label: 'Facebook' }
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </button>
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
