
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BookingModal } from './BookingModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 bg-primary group-hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-300">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled || location.pathname !== '/' ? 'text-primary' : 'text-white'}`}>
              Strategis
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-accent ${
                  isActive(link.path) 
                    ? 'text-accent' 
                    : (isScrolled || location.pathname !== '/' ? 'text-slate-500' : 'text-white/80')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex items-center gap-1.5 bg-accent text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-teal-700 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/10"
            >
              Schedule a Call <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button 
            className={`md:hidden ${isScrolled || location.pathname !== '/' ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-t border-slate-100 py-6 absolute top-full left-0 w-full shadow-2xl"
            >
              <div className="flex flex-col space-y-5 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-lg font-bold ${isActive(link.path) ? 'text-accent' : 'text-slate-800'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => { setIsMobileMenuOpen(false); setIsBookingOpen(true); }}
                  className="bg-accent text-white text-center py-4 rounded-2xl font-bold"
                >
                  Schedule Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Navbar;
