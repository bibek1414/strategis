
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from 'lucide-react';
import { Reveal } from '../components/MotionWrapper';

const Contact: React.FC = () => {
  return (
    <div className="bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-8 leading-tight">
            Let's <span className="italic text-accent">connect.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mb-12">
            Ready to take your business to the next stage of growth? Our team is standing by to help you solve your most complex problems.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <Reveal direction="up">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-400 ml-1">Full name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-400 ml-1">Email address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-400 ml-1">Interested in</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent appearance-none">
                    <option>Growth strategy</option>
                    <option>Financial modeling</option>
                    <option>Systems & ops audit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-400 ml-1">Your message</label>
                  <textarea className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent h-32" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="bg-primary text-white font-medium px-8 py-3 rounded-lg hover:bg-accent transition-all flex items-center justify-center gap-2">
                  Send inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </Reveal>
          </div>

          <div className="md:col-span-5 space-y-10">
            <Reveal direction="up" delay={0.2}>
              <div>
                <h3 className="text-lg font-medium mb-6 flex items-center gap-3">
                  Reach out
                </h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>hello@strategis.co</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-medium mb-6 flex items-center gap-3">
                  Our offices
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-sm mb-1">New York</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">250 Hudson Street, Suite 500<br />New York, NY 10013</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">London</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">10 York Rd, South Bank<br />London SE1 7ND, UK</p>
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
