
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-medium text-base">S</div>
            <span className="text-xl font-medium">Strategis</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            The strategy firm for founders who prioritize traction over buzzwords.
          </p>
          <div className="flex gap-4">
            <Linkedin className="w-4 h-4 text-slate-400 hover:text-primary transition-colors cursor-pointer" />
            <Twitter className="w-4 h-4 text-slate-400 hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-slate-400 mb-6">Explore</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-600">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About us</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium text-slate-400 mb-6">Expertise</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-600">
            <li><Link to="/services" className="hover:text-accent">Growth strategy</Link></li>
            <li><Link to="/services" className="hover:text-accent">Financial modeling</Link></li>
            <li><Link to="/services" className="hover:text-accent">Systems audit</Link></li>
          </ul>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl">
          <h4 className="text-sm font-medium mb-4">Start your next stage of growth</h4>
          <Link to="/contact" className="flex items-center gap-2 text-accent font-medium text-sm">
            Book a call <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-50 pt-8 flex flex-col md:flex-row justify-between items-start gap-4 text-slate-400 text-[10px] font-medium tracking-tight">
        <p>&copy; {new Date().getFullYear()} Strategis Consulting Group.</p>
        <div className="flex gap-8">
          <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
