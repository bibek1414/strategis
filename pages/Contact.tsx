
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from 'lucide-react';
import { Reveal } from '../components/MotionWrapper';

const Contact: React.FC = () => {
  return (
    <div className="bg-white pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
            Let's <span className="italic text-accent">Connect.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mb-16">
            Ready to take your business to the next stage of growth? Our team is standing by to help you solve your most complex problems.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-16">
          <div className="md:col-span-3">
            <Reveal direction="right">
              <form className="space-y-8 bg-slate-50 p-10 rounded-[40px]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Interested In</label>
                  <select className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none">
                    <option>Growth Strategy</option>
                    <option>Financial Modeling</option>
                    <option>Systems & Ops Audit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 h-32" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl hover:bg-accent transition-all flex items-center justify-center gap-2">
                  Send Inquiry <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </Reveal>
          </div>

          <div className="md:col-span-2 space-y-12">
            <Reveal direction="left" delay={0.2}>
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-accent" /> Reach Out
                </h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:border-accent transition-colors group">
                    <Mail className="w-5 h-5 group-hover:text-accent" />
                    <span className="font-medium">hello@strategis.co</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:border-accent transition-colors group">
                    <Phone className="w-5 h-5 group-hover:text-accent" />
                    <span className="font-medium">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" /> Our Offices
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2">New York</h4>
                    <p className="text-slate-500 text-sm">250 Hudson Street, Suite 500<br />New York, NY 10013</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2">London</h4>
                    <p className="text-slate-500 text-sm">10 York Rd, South Bank<br />London SE1 7ND, UK</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
