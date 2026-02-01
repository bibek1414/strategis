import React from 'react';
import { SERVICES, FAQS } from '../constants';
import { Reveal } from '../components/MotionWrapper';
// Added missing Layers import from lucide-react
import { CheckCircle2, ArrowRight, HelpCircle, ArrowUpRight, Target, BarChart3, Cpu, UserCheck, ShieldCheck, Users, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceDetails = [
    {
      id: 'financial',
      title: 'Financial Consulting',
      step: '01',
      description: 'Our financial consulting empowers leaders with decision-ready clarity—building models, plans, and forecasts that move with your business.',
      bullets: [
        'Scenario-based forecasting',
        'Fundraising & investor readiness',
        'Financial model development',
        'Cash flow & capital efficiency planning'
      ],
      whoItsFor: 'Founders, CFOs, and ops leaders preparing for growth, capital raises, or major financial decisions.',
      outcome: 'Gain investor confidence, make smarter decisions, and turn your financials into a growth-enabling asset.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'tech',
      title: 'Tech Advisory',
      step: '02',
      description: 'We assess, streamline, and guide your technology choices—ensuring your systems scale as fast as your ambition.',
      bullets: [
        'Tool & systems audit',
        'Tech stack planning',
        'Operational automation strategy',
        'Digital infrastructure alignment'
      ],
      whoItsFor: 'COOs, CTOs, and growth teams seeking to streamline operations, scale infrastructure, or choose the right tools for the next phase.',
      outcome: 'Run leaner, smarter, and faster with a systems strategy that grows with you—not against you.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'growth',
      title: 'Growth Strategy',
      step: '03',
      description: 'From go-to-market to team structure, we help design the strategic backbone that supports sustainable, measurable growth.',
      bullets: [
        'Go-to-market & expansion planning',
        'KPI framework & dashboards',
        'Team structure & role clarity',
        'Strategic offsite facilitation'
      ],
      whoItsFor: 'CEOs, founders, and strategy leaders navigating scaling, market expansion, or organizational realignment.',
      outcome: 'Move from ambiguity to action with a focused growth plan, operational clarity, and aligned leadership ready to execute.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-48 pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-4">
               <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">OUR SERVICES</span>
             </div>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-primary mb-8 leading-[1.05] tracking-tight">
              Expert Advisory for <br/><span className="italic font-serif font-normal">Finance, Tech, and Growth Strategy</span>
            </h1>
            <p className="text-sm text-slate-500 max-w-xl mx-auto mb-16 leading-relaxed">
              From early-stage planning to enterprise-scale execution—our services are built to align business, technology, and financial clarity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hero Visuals Section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal direction="up" delay={0.2}>
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5">
                <div className="rounded-[40px] overflow-hidden shadow-2xl h-[450px]">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover" 
                    alt="Strategic Advisory"
                  />
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[450px] group">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt="Business Health"
                  />
                  {/* Glassmorphic Overlay Card */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-10 max-w-xs w-full text-center text-white">
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-6 text-white/60">Business Health</p>
                        <div className="text-7xl font-bold mb-4">86<span className="text-3xl text-white/50">%</span></div>
                        <div className="flex justify-center mb-8">
                           <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-accent h-full w-[86%]"></div>
                           </div>
                        </div>
                        <button className="flex items-center gap-2 mx-auto text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">
                           View All Stats <ArrowRight className="w-3 h-3" />
                        </button>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Engagement Philosophy Section */}
      <section className="py-24 border-t border-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
             <h2 className="text-2xl md:text-3xl font-sans font-bold text-primary mb-12 leading-relaxed">
               At Strategis, we don't just offer recommendations—we design and implement strategies tailored to your business realities. Whether you're preparing for funding, scaling infrastructure, or optimizing operations, we bring the right mix of strategy, structure, and hands-on support.
             </h2>
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <UserCheck className="w-6 h-6"/>, label: "Partner-led, no handoffs" },
                  { icon: <ShieldCheck className="w-6 h-6"/>, label: "Flexible engagement models" },
                  { icon: <Users className="w-6 h-6"/>, label: "Embedded in your team" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 group">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
             </div>
          </Reveal>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-24 space-y-32">
        {serviceDetails.map((s, i) => (
          <div key={s.id} className="max-w-6xl mx-auto px-6">
            <div className={`grid md:grid-cols-12 gap-16 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`md:col-span-6 ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                <Reveal direction={i % 2 === 0 ? 'right' : 'left'}>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-sans font-bold text-primary">{s.title}</h2>
                    <span className="text-xs font-bold text-slate-300">
                       <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-accent rounded-sm"></div> {s.step}
                       </div>
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-10 leading-relaxed">{s.description}</p>
                  
                  <ul className="grid grid-cols-1 gap-4 mb-12">
                    {s.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs font-bold text-primary">
                        <CheckCircle2 className="w-4 h-4 text-accent" /> {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-6 mb-12">
                    <div className="p-8 bg-slate-50/50 border border-slate-100 rounded-3xl">
                       <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-6">
                          <Layers className="w-5 h-5 text-primary" />
                       </div>
                       <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Who it's for</h4>
                       <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{s.whoItsFor}</p>
                    </div>
                    <div className="p-8 bg-slate-50/50 border border-slate-100 rounded-3xl">
                       <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-6">
                          <Target className="w-5 h-5 text-primary" />
                       </div>
                       <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Outcome</h4>
                       <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{s.outcome}</p>
                    </div>
                  </div>

                  <button className="bg-white border border-slate-100 px-8 py-4 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                    Schedule Your Strategy Call <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </button>
                </Reveal>
              </div>

              <div className="md:col-span-6">
                <Reveal direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-square">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <Reveal>
              <h2 className="text-4xl font-sans font-bold mb-6 tracking-tight">Fast Answers for Fast-Moving Teams</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-10">Everything you need to know about partnering with Strategis.</p>
              <div className="p-10 bg-white rounded-[40px] shadow-sm border border-slate-100">
                <HelpCircle className="w-10 h-10 text-accent mb-6" />
                <h4 className="text-lg font-bold mb-3">Still have questions?</h4>
                <p className="text-xs text-slate-400 mb-8 leading-relaxed">Our strategy team is happy to discuss your specific needs in a free 15-minute discovery call.</p>
                <Link to="/contact" className="text-xs font-bold text-accent underline underline-offset-4">Contact Support</Link>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-2">
            <Reveal delay={0.2}>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 hover:border-accent/30 transition-all group">
                    <h4 className="text-lg font-bold mb-4 group-hover:text-accent transition-colors">{faq.q}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;