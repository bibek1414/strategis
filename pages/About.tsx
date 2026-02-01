
import React from 'react';
import { HISTORY, TEAM } from '../constants';
import { Reveal } from '../components/MotionWrapper';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-xs font-medium text-accent mb-6 block">Our story</span>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-12 leading-tight max-w-4xl">
              Our mission is to help visionary teams turn complexity into <span className="italic text-accent">momentum.</span>
            </h1>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed text-base">
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
      <section className="py-16 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
             <Reveal direction="up">
               <span className="text-xs font-medium text-slate-400 block mb-4">Our journey</span>
               <h2 className="text-3xl font-serif font-medium text-primary mb-6">How we got here</h2>
               <p className="text-slate-500 text-sm mb-8 leading-relaxed">From our first engagement to becoming a trusted partner for growth-stage leaders, every milestone has shaped how we deliver impact today.</p>
             </Reveal>
          </div>
          <div className="md:col-span-2 space-y-10">
            {HISTORY.map((h, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex gap-8 group">
                  <div className="text-xl font-medium text-accent/40 pt-1 font-serif">{h.year}</div>
                  <div className="pb-10 border-l border-slate-100 pl-8 relative">
                    <div className="absolute top-3 -left-[5px] w-[10px] h-[10px] rounded-full bg-slate-100 group-hover:bg-accent transition-colors duration-500"></div>
                    <h4 className="text-lg font-medium mb-2 text-primary">{h.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-medium text-primary">Meet our team</h2>
            <p className="text-slate-500 mt-4 max-w-xl text-sm leading-relaxed">Expertise across finance, systems, and growth—all dedicated to your mission.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group flex flex-col h-full">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h3 className="text-lg font-medium text-primary mb-1">{member.name}</h3>
                  <p className="text-xs font-medium text-accent mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex gap-4 mt-auto">
                    <Linkedin className="w-4 h-4 text-slate-300 hover:text-primary cursor-pointer transition-colors" />
                    <Twitter className="w-4 h-4 text-slate-300 hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-medium text-accent block mb-4">Our values</span>
            <h2 className="text-3xl font-serif font-medium">How we think, work, and win together</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Clarity', desc: 'We believe clarity is a competitive advantage—and we bring it into every strategy, system, and spreadsheet.' },
              { title: 'Accountability', desc: 'Whether it’s a spreadsheet, a roadmap, or a decision—we deliver, follow through, and stand behind our work.' },
              { title: 'Partnership', desc: 'We work with you, not just for you. Collaboration, trust, and shared goals are at the core of every engagement.' }
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 bg-slate-50 rounded-2xl h-full">
                  <h4 className="text-lg font-medium text-primary mb-4">{v.title}</h4>
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
