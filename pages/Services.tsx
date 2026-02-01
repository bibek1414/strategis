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
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
               <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
               <span className="text-xs font-medium text-slate-400">Our services</span>
             </div>
            <h1 className="text-5xl md:text-6xl font-sans font-medium text-primary mb-8 leading-tight tracking-tight max-w-4xl">
              Expert advisory for <br/><span className="italic font-serif font-normal">finance, tech, and growth strategy</span>
            </h1>
            <p className="text-sm text-slate-500 max-w-2xl mb-12 leading-relaxed">
              From early-stage planning to enterprise-scale execution—our services are built to align business, technology, and financial clarity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Engagement Philosophy Section */}
      <section className="py-16 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
             <h2 className="text-xl md:text-2xl font-sans font-medium text-primary mb-12 leading-relaxed max-w-3xl">
               At Strategis, we don't just offer recommendations—we design and implement strategies tailored to your business realities.
             </h2>
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <UserCheck className="w-5 h-5"/>, label: "Partner-led, no handoffs" },
                  { icon: <ShieldCheck className="w-5 h-5"/>, label: "Flexible engagement models" },
                  { icon: <Users className="w-5 h-5"/>, label: "Embedded in your team" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-800">{item.label}</span>
                  </div>
                ))}
             </div>
          </Reveal>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 space-y-24 border-t border-slate-50">
        {serviceDetails.map((s, i) => (
          <div key={s.id} className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7">
                <Reveal direction="up">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-medium text-accent">{s.step}</span>
                    <h2 className="text-2xl font-sans font-medium text-primary">{s.title}</h2>
                  </div>
                  <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-2xl">{s.description}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {s.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-accent" /> {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-slate-50 rounded-2xl">
                       <h4 className="text-xs font-medium text-slate-400 mb-3">Who it's for</h4>
                       <p className="text-xs text-slate-600 leading-relaxed font-medium">{s.whoItsFor}</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl">
                       <h4 className="text-xs font-medium text-slate-400 mb-3">Outcome</h4>
                       <p className="text-xs text-slate-600 leading-relaxed font-medium">{s.outcome}</p>
                    </div>
                  </div>

                  <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-xs font-medium hover:bg-accent transition-all">
                    Schedule your strategy call <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <Reveal>
              <h2 className="text-3xl font-sans font-medium mb-6 tracking-tight">Fast answers</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">Everything you need to know about partnering with Strategis.</p>
              <Link to="/contact" className="text-accent text-sm font-medium hover:underline">Contact support</Link>
            </Reveal>
          </div>
          <div className="md:col-span-2">
            <Reveal delay={0.2}>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl transition-all">
                    <h4 className="text-lg font-medium mb-4 text-primary">{faq.q}</h4>
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