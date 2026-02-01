
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
      <section className="relative pt-32 pb-16 bg-white text-primary">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <Reveal direction="up">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-accent"></div>
                <span className="text-xs font-medium text-slate-500">Welcome to Strategis</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-sans font-medium leading-[1.1] mb-8">
                Strategic consulting for <br/>
                <span className="italic font-serif font-normal block mt-2">the next stage of growth</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                We help financial leaders, technology innovators, and business strategists turn complex goals into tangible outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  to="/contact" 
                  className="bg-accent text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-teal-700 transition-all shadow-lg shadow-accent/10"
                >
                  Start your strategy call
                </Link>
                <Link 
                  to="/services" 
                  className="bg-slate-50 text-primary px-8 py-3 rounded-lg font-medium hover:bg-slate-100 transition-all border border-slate-100 flex items-center justify-center"
                >
                  View our services
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img 
                      key={i} 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=100`} 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      alt="User"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <div className="text-[10px] font-medium text-slate-400">
                    4.8/5 <span className="mx-1">•</span> 610+ Reviews
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Logo Cloud Section */}
      <section className="py-12 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-400 text-xs font-medium mb-8">Trusted by innovators in finance, tech, and strategy</p>
          <div className="flex flex-wrap justify-start items-center gap-x-12 gap-y-8 grayscale opacity-40">
            {['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'].map((logo, i) => (
              <span key={i} className="text-lg font-medium text-slate-800 tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Solving Complexity Section (About Strategis) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal direction="left">
              <div>
                <span className="text-xs font-medium text-accent block mb-4 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div> Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-sans font-medium text-primary mb-6 leading-tight">
                  Solving complexity with <br/><span className="italic font-serif font-normal text-slate-500">consulting clarity</span>
                </h2>
                <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-xl">
                  We specialize in turning fast-moving challenges into structured, strategic solutions. Our expertise spans finance, systems, and strategy—all designed to accelerate growth and simplify decision-making.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Strategic financial modeling for funding, forecasting, and planning",
                    "Tech stack audits and infrastructure design for scalable operations",
                    "Go-to-market strategies and growth execution playbooks"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start group">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-accent transition-all inline-block">
                  Learn more about us
                </Link>
              </div>
            </Reveal>
            <div className="hidden md:block">
              {/* Removed image to simplify and reduce image count */}
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
             <div className="flex items-center gap-2 mb-4">
               <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
               <span className="text-xs font-medium text-slate-400">Services</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-sans font-medium mb-12 text-primary tracking-tight">Tailored solutions to unlock <br/>your business potential</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-slate-50 p-8 rounded-2xl h-full flex flex-col group">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-lg font-medium leading-tight">Financial<br/>consulting</h3>
                  <span className="text-xs font-medium text-slate-300">01</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">Our financial consulting empowers leaders with decision-ready clarity—building models, plans, and forecasts that move with your business.</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {['Scenario-based forecasting', 'Fundraising & investor readiness', 'Financial model development', 'Cash flow efficiency'].map(li => (
                    <li key={li} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {li}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-accent text-sm font-medium hover:underline">View details</Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-slate-50 p-8 rounded-2xl h-full flex flex-col group">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-lg font-medium leading-tight">Tech<br/>advisory</h3>
                  <span className="text-xs font-medium text-slate-300">02</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">We assess, streamline, and guide your technology choices—ensuring your systems scale as fast as your ambition.</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {['Tool & systems audit', 'Tech stack planning', 'Operational automation', 'Digital infrastructure'].map(li => (
                    <li key={li} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {li}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-accent text-sm font-medium hover:underline">View details</Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-slate-50 p-8 rounded-2xl h-full flex flex-col group">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-lg font-medium leading-tight">Growth<br/>strategy</h3>
                  <span className="text-xs font-medium text-slate-300">03</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">From go-to-market to team structure, we help design the strategic backbone that supports sustainable, measurable growth.</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {['Go-to-market planning', 'KPI framework & dashboards', 'Team structure clarity', 'Strategic offsite facilitation'].map(li => (
                    <li key={li} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {li}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-accent text-sm font-medium hover:underline">View details</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Real Impact Section (Case Study) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Reveal direction="up">
              <div className="flex items-center gap-2 mb-4 opacity-40">
                <Layers className="w-5 h-5" /> <span className="text-xs font-medium">Real Case Study</span>
              </div>
              <h3 className="text-3xl font-sans font-medium mb-6">Real impact, proven results</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-12">A Series B SaaS startup faced growing pressure from misaligned financial models and an inefficient burn rate. Strategis delivered a full FP&A reset, leading to a $15M Series C raise at double the previous valuation.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="">
                  <div className="text-xs text-slate-400 font-medium mb-2">Challenge</div>
                  <div className="text-sm font-medium leading-tight">Misaligned financial models and inefficient burn rate</div>
                </div>
                <div className="">
                  <div className="text-xs text-slate-400 font-medium mb-2">Solution</div>
                  <div className="text-sm font-medium leading-tight">Strategic FP&A overhaul and funding readiness</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                 <div>
                   <div className="text-xs text-slate-400 font-medium mb-1">Result</div>
                   <div className="text-4xl font-medium tracking-tighter text-primary">$15M secured</div>
                 </div>
                 <Link to="/services" className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-all inline-block">View more stories</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Refined & Clean */}
      <section className="py-16 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
             <div className="flex items-center gap-2 mb-4">
               <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
               <span className="text-xs font-medium text-slate-400">Testimonials</span>
             </div>
             <h2 className="text-3xl font-sans font-medium text-primary mb-12 tracking-tight">Real results from elite teams</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full flex flex-col p-8 bg-slate-50 rounded-2xl">
                  <p className="text-base font-medium text-slate-600 leading-relaxed mb-8 flex-grow">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full object-cover grayscale" />
                    <div>
                      <h4 className="font-medium text-primary text-sm">{t.author}</h4>
                      <p className="text-xs text-slate-400 font-medium">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Reveal direction="up">
               <div className="flex items-center gap-2 mb-4">
                 <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
                 <span className="text-xs font-medium text-slate-400">Our Process</span>
               </div>
               <h2 className="text-3xl font-sans font-medium text-primary mb-12 leading-tight tracking-tight">
                 From funding decks to systems overhauls, we guide high-growth teams through strategic execution
               </h2>
               <div className="space-y-10">
                 {[
                   { step: '01', title: 'Clarify the challenge', desc: 'We start by identifying the real issue—whether it\'s a financial gap, an operational bottleneck, or a lack of strategic clarity—through fast, focused discovery sessions.' },
                   { step: '02', title: 'Craft a custom plan', desc: 'We design a tailored engagement roadmap, combining strategic insight, financial modeling, and system design to align with your goals and growth stage.' },
                   { step: '03', title: 'Embed and execute', desc: 'Our consultants integrate with your team, delivering hands-on execution, decision support, and tools that actually get used—not just presented.' }
                 ].map((p, i) => (
                   <div key={i} className="flex gap-6">
                     <div className="text-xs font-medium text-accent pt-1 flex-shrink-0">{p.step}</div>
                     <div>
                       <h4 className="text-lg font-medium mb-2">{p.title}</h4>
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
      <section className="py-16 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
                <span className="text-xs font-medium text-slate-400">Latest Insights</span>
              </div>
              <h2 className="text-3xl font-sans font-medium text-primary tracking-tight">Thinking that drives <br/><span className="italic font-serif font-normal">tangible progress</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/blog" className="flex items-center gap-2 text-sm font-medium text-accent hover:underline group">
                Browse all articles <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.1}>
                <Link to={`/blog/${post.id}`} className="group block flex flex-col h-full">
                  <div className="p-8 bg-slate-50 rounded-2xl flex-grow flex flex-col">
                    <div className="text-xs font-medium text-slate-400 mb-4">{post.date}</div>
                    <h3 className="text-lg font-medium text-primary mb-4 leading-tight group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs font-medium text-accent group-hover:gap-3 transition-all">
                      Read insight <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
             <Reveal>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
                  <span className="text-xs font-medium text-accent block">Knowledge</span>
                </div>
                <h2 className="text-3xl font-sans font-medium mb-6 tracking-tight">Frequently asked questions</h2>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Clear answers to common questions about our methodology and partnership model.
                </p>
                <Link to="/contact" className="text-accent text-sm font-medium hover:underline flex items-center gap-2">
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
      <section className="py-16 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="bg-slate-50 rounded-2xl p-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-sans font-medium text-primary mb-6 leading-tight tracking-tight">Ready to strategize your <br/><span className="italic font-serif font-normal">next move?</span></h2>
                <p className="text-slate-600 mb-8 font-medium leading-relaxed">Let's talk about your next milestone—and how to reach it faster than you ever thought possible.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-accent transition-all">
                  Schedule your strategy call <ArrowUpRight className="w-4 h-4" />
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
