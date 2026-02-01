
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ArrowUpRight, Quote, CheckCircle2, Target, Cpu, Layers, Play } from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQS, BLOG_POSTS } from '../constants';
import { Reveal } from '../components/MotionWrapper';
import { FaqAccordion } from '../components/FaqAccordion';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="Strategic Partners"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <Reveal direction="up">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 bg-accent"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">WELCOME TO STRATEGIS</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-sans font-bold leading-[1.1] mb-8">
                Strategic Consulting for <br/>
                <span className="italic font-serif font-normal block mt-2 text-white/95">the Next Stage of Growth</span>
              </h1>
              
              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
                We help financial leaders, technology innovators, and business strategists turn complex goals into tangible outcomes
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  to="/contact" 
                  className="bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-teal-700 transition-all shadow-xl shadow-accent/20"
                >
                  Start Your Strategy Call
                </Link>
                <Link 
                  to="/services" 
                  className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-100 transition-all"
                >
                  View Our Services
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img 
                      key={i} 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=100`} 
                      className="w-10 h-10 rounded-full border-2 border-primary object-cover" 
                      alt="User"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <div className="text-[10px] font-bold text-white/60 tracking-wider">
                    4.8/5 <span className="mx-1">•</span> 610+ Reviews
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 relative h-full flex flex-col justify-between py-12">
            <Reveal direction="left" delay={0.2}>
              <div className="bg-white rounded-3xl p-8 text-primary shadow-2xl max-w-xs ml-auto mb-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 block">KEY ADVISORY</span>
                <ul className="space-y-4">
                  {[
                    "Expert growth roadmaps",
                    "Deep financial modeling",
                    "Scalable tech infrastructure",
                    "Embedded strategic execution",
                    "Data-driven insights"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-sm ml-auto">
                <p className="text-sm font-medium leading-relaxed mb-6 text-white/80">
                  We design the thinking, infrastructure, and intelligence that fuel visible progress.
                </p>
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-800 group cursor-pointer shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Intelligence" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
                       <Play className="w-5 h-5 fill-current ml-1" />
                     </div>
                   </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Logo Cloud Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-12">Trusted by innovators in finance, tech, and strategy</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 grayscale opacity-40">
            {['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'].map((logo, i) => (
              <span key={i} className="text-xl font-bold text-slate-800 tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Solving Complexity Section (About Strategis) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Consulting Clarity"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </Reveal>
            <Reveal direction="left">
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div> EXPERTISE
                </span>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-8 leading-tight">
                  Solving Complexity with <br/><span className="italic font-serif font-normal text-slate-500">Consulting Clarity</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  We specialize in turning fast-moving challenges into structured, strategic solutions. Our expertise spans finance, systems, and strategy—all designed to accelerate growth and simplify decision-making.
                </p>
                <ul className="space-y-6 mb-10">
                  {[
                    "Strategic financial modeling for funding, forecasting, and planning",
                    "Tech stack audits and infrastructure design for scalable operations",
                    "Go-to-market strategies and growth execution playbooks"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center group">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-primary font-bold text-sm tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-accent transition-all inline-block">
                  Learn more about us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
             <div className="flex items-center gap-2 mb-4">
               <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">SERVICES</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-sans font-bold mb-16 text-primary tracking-tight">Tailored Solutions to Unlock <br/>Your Business Potential</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Reveal delay={0.1} className="md:col-span-1">
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 h-full flex flex-col group hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-lg font-bold leading-tight">Financial<br/>Consulting</h3>
                  <span className="text-[10px] font-bold text-slate-300">01</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-8">Our financial consulting empowers leaders with decision-ready clarity—building models, plans, and forecasts that move with your business.</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {['Scenario-based forecasting', 'Fundraising & investor readiness', 'Financial model development', 'Cash flow efficiency'].map(li => (
                    <li key={li} className="flex items-center gap-3 text-[11px] font-bold text-primary">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {li}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="bg-slate-50 text-[11px] font-bold py-4 rounded-xl text-center hover:bg-slate-100 transition-colors">More on Financial Consulting</Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="md:col-span-1">
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 h-full flex flex-col group hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-lg font-bold leading-tight">Tech<br/>Advisory</h3>
                  <span className="text-[10px] font-bold text-slate-300">02</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-8">We assess, streamline, and guide your technology choices—ensuring your systems scale as fast as your ambition.</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {['Tool & systems audit', 'Tech stack planning', 'Operational automation', 'Digital infrastructure'].map(li => (
                    <li key={li} className="flex items-center gap-3 text-[11px] font-bold text-primary">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {li}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="bg-slate-50 text-[11px] font-bold py-4 rounded-xl text-center hover:bg-slate-100 transition-colors">More on Tech Advisory</Link>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="md:col-span-1">
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 h-full flex flex-col group hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-lg font-bold leading-tight">Growth<br/>Strategy</h3>
                  <span className="text-[10px] font-bold text-slate-300">03</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-8">From go-to-market to team structure, we help design the strategic backbone that supports sustainable, measurable growth.</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {['Go-to-market planning', 'KPI framework & dashboards', 'Team structure clarity', 'Strategic offsite facilitation'].map(li => (
                    <li key={li} className="flex items-center gap-3 text-[11px] font-bold text-primary">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {li}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="bg-slate-50 text-[11px] font-bold py-4 rounded-xl text-center hover:bg-slate-100 transition-colors">More on Growth Strategy</Link>
              </div>
            </Reveal>

            <Reveal delay={0.4} className="md:col-span-1">
              <div className="bg-accent rounded-[32px] p-8 text-white h-full flex flex-col justify-between relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-all"></div>
                <div className="relative z-10">
                  <p className="text-sm font-medium leading-relaxed mb-12">From financial modeling to technology strategy and business scaling—we provide tailored solutions for each stage of your growth.</p>
                </div>
                <Link to="/services" className="relative z-10 bg-white text-primary text-[11px] font-bold py-5 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all">
                  Explore All Services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Real Impact Section (Case Study) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal direction="right">
              <div className="flex flex-col h-full">
                <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-100 mb-6 flex-grow shadow-sm">
                  <div className="flex items-center gap-2 mb-8 opacity-40 grayscale">
                    <Layers className="w-6 h-6" /> <span className="text-sm font-bold tracking-tight">Real Case Study</span>
                  </div>
                  <h3 className="text-3xl font-sans font-bold mb-6">Real Impact, Proven Results</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-12">A Series B SaaS startup faced growing pressure from misaligned financial models and an inefficient burn rate. Strategis delivered a full FP&A reset, leading to a $15M Series C raise at double the previous valuation.</p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-2xl border border-slate-100">
                      <Target className="w-6 h-6 text-accent mb-4" />
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Challenge</div>
                      <div className="text-[11px] font-bold leading-tight">Misaligned financial models and inefficient burn rate</div>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-slate-100">
                      <Cpu className="w-6 h-6 text-accent mb-4" />
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Solution</div>
                      <div className="text-[11px] font-bold leading-tight">Strategic FP&A overhaul and funding readiness</div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary rounded-[40px] p-10 text-white flex justify-between items-center shadow-2xl">
                   <div>
                     <div className="text-[10px] text-slate-500 font-bold uppercase mb-2">Result</div>
                     <div className="text-5xl font-bold mb-1 tracking-tighter">$15M</div>
                     <div className="text-[11px] text-slate-400 font-medium">Secured in Series C at a 2x higher valuation</div>
                   </div>
                   <Link to="/services" className="bg-accent text-white px-6 py-4 rounded-xl text-xs font-bold hover:bg-teal-700 transition-all">More Stories</Link>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <div className="rounded-[40px] overflow-hidden shadow-2xl h-full">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Case Study Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Refined & Clean */}
      <section className="py-24 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <Reveal>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-accent"></div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">TESTIMONIALS</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary tracking-tight">Real results from elite teams</h2>
             </Reveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full flex flex-col p-10 bg-white rounded-[40px] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="mb-8">
                    <Quote className="w-10 h-10 text-accent/10 group-hover:text-accent/30 transition-colors" />
                  </div>
                  <p className="text-lg font-medium text-slate-700 leading-relaxed mb-10 flex-grow">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                    <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div>
                      <h4 className="font-bold text-primary text-sm tracking-tight">{t.author}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="col-span-2">
                   <div className="rounded-[32px] overflow-hidden shadow-xl aspect-video">
                     <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                   </div>
                </div>
                <div className="col-span-1">
                   <div className="bg-primary p-8 rounded-[32px] text-white h-full flex flex-col justify-between shadow-2xl">
                     <p className="text-sm font-medium leading-relaxed">At Strategis, we don't just advise—we help ambitious teams move faster with confidence.</p>
                     <div className="flex items-center gap-3 mt-8">
                       <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full object-cover border-2 border-white/10" />
                       <div>
                         <div className="text-xs font-bold">Alex Tran</div>
                         <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Founder & CEO</div>
                       </div>
                     </div>
                   </div>
                </div>
                <div className="col-span-1">
                   <div className="rounded-[32px] overflow-hidden shadow-xl h-full">
                     <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
                   </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
               <div className="flex items-center gap-2 mb-4">
                 <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">OUR PROCESS</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-12 leading-tight tracking-tight">
                 From funding decks to systems overhauls, we guide high-growth teams through every step of strategic execution
               </h2>
               <div className="space-y-12">
                 {[
                   { step: '01', title: 'Clarify the Challenge', desc: 'We start by identifying the real issue—whether it\'s a financial gap, an operational bottleneck, or a lack of strategic clarity—through fast, focused discovery sessions.' },
                   { step: '02', title: 'Craft a Custom Plan', desc: 'We design a tailored engagement roadmap, combining strategic insight, financial modeling, and system design to align with your goals and growth stage.' },
                   { step: '03', title: 'Embed and Execute', desc: 'Our consultants integrate with your team, delivering hands-on execution, decision support, and tools that actually get used—not just presented.' }
                 ].map((p, i) => (
                   <div key={i} className="flex gap-8 group">
                     <div className="text-xs font-bold text-slate-300 pt-1 flex-shrink-0">
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-accent/20 rounded-sm group-hover:bg-accent transition-colors"></div> {p.step}
                        </div>
                     </div>
                     <div>
                       <h4 className="text-lg font-bold mb-3">{p.title}</h4>
                       <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Latest Insights (Blog) Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-accent"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LATEST INSIGHTS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary tracking-tight">Thinking that drives <br/><span className="italic font-serif font-normal">tangible progress</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/blog" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-all group">
                Browse All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.1}>
                <Link to={`/blog/${post.id}`} className="group block h-full flex flex-col bg-white rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{post.date}</div>
                    <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                      Read Insight <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
             <Reveal>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest block">KNOWLEDGE</span>
                </div>
                <h2 className="text-4xl font-sans font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-slate-500 mb-10 leading-relaxed">
                  Clear answers to common questions about our methodology and partnership model.
                </p>
                <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-accent transition-colors shadow-lg">
                  Have more questions? <ArrowRight className="w-4 h-4" />
                </Link>
             </Reveal>
          </div>
          <div className="md:col-span-2">
            <Reveal delay={0.2}>
              <FaqAccordion items={FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="relative rounded-[50px] overflow-hidden bg-primary p-16 text-center shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 opacity-20 pointer-events-none grayscale">
                 <img src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full border-2 border-white/20" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white tracking-tight">Alex Tran</div>
                    <div className="text-[8px] text-slate-500 uppercase font-bold tracking-[0.2em]">Founder & CEO</div>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-8 leading-tight tracking-tight">Ready to Strategize Your <br/><span className="italic font-serif font-normal">Next Move?</span></h2>
                <p className="text-white/60 mb-10 max-w-xl mx-auto font-medium leading-relaxed">Let's talk about your next milestone—and how to reach it faster than you ever thought possible.</p>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-accent/20">
                  Schedule Your Strategy Call <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
