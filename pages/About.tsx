
import React from 'react';
import { HISTORY, TEAM } from '../constants';
import { Reveal } from '../components/MotionWrapper';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <span className="text-xs font-bold text-accent uppercase tracking-widest mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-12 leading-tight">
              Our mission is to help visionary teams turn complexity into <span className="italic text-accent">momentum.</span>
            </h1>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed text-lg">
            <Reveal delay={0.1}>
              <p>At Strategis, we believe the fastest-growing companies don’t need more information—they need sharper structure, better strategy, and a team that can help execute both.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>What drives us is simple: we want to be the consulting team you’d hire if your reputation depended on it. Because often, it does. We believe great strategy is useless without traction.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
             <Reveal direction="right">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Our Journey</span>
               <h2 className="text-4xl font-serif font-bold text-primary mb-6">How We Got Here—and Where We're Headed</h2>
               <p className="text-slate-500 mb-8">From our first engagement to becoming a trusted partner for growth-stage leaders, every milestone has shaped how we deliver impact today.</p>
               <button className="flex items-center gap-2 font-bold text-accent hover:gap-4 transition-all">Join the Journey <ArrowRight className="w-4 h-4" /></button>
             </Reveal>
          </div>
          <div className="md:col-span-2 space-y-12">
            {HISTORY.map((h, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex gap-12 group">
                  <div className="text-2xl font-bold text-accent/30 group-hover:text-accent transition-colors duration-500 pt-1 font-serif">{h.year}</div>
                  <div className="pb-12 border-l border-slate-100 pl-12 relative">
                    <div className="absolute top-3 -left-[5px] w-[10px] h-[10px] rounded-full bg-slate-200 group-hover:bg-accent transition-colors duration-500"></div>
                    <h4 className="text-xl font-bold mb-3">{h.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary">Meet Our Team</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">Expertise across finance, systems, and growth—all dedicated to your mission.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">{member.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                      {member.bio}
                    </p>
                    <div className="flex gap-4">
                      <Linkedin className="w-4 h-4 text-slate-300 hover:text-primary cursor-pointer transition-colors" />
                      <Twitter className="w-4 h-4 text-slate-300 hover:text-primary cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">Our Values</span>
            <h2 className="text-4xl font-serif font-bold">How We Think, Work, and Win Together</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Clarity', desc: 'We believe clarity is a competitive advantage—and we bring it into every strategy, system, and spreadsheet.' },
              { title: 'Accountability', desc: 'Whether it’s a spreadsheet, a roadmap, or a decision—we deliver, follow through, and stand behind our work.' },
              { title: 'Partnership', desc: 'We work with you, not just for you. Collaboration, trust, and shared goals are at the core of every engagement.' }
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center p-10 bg-slate-50 rounded-[40px] h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
