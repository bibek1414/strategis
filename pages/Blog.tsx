
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Reveal } from '../components/MotionWrapper';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-48 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
               <div className="w-2 h-2 bg-accent"></div>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LATEST INSIGHTS</span>
             </div>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-primary mb-8 leading-[1.05] tracking-tight">
              Thinking that drives <br/><span className="italic font-serif font-normal">tangible progress</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
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

      {/* CTA Section */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-sans font-bold mb-8">Want deep strategy delivered to your inbox?</h2>
            <div className="max-w-md mx-auto flex gap-2 p-2 bg-slate-50 border border-slate-100 rounded-2xl">
              <input type="email" placeholder="Your work email" className="flex-grow bg-transparent px-4 py-2 text-sm focus:outline-none" />
              <button className="bg-primary text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-accent transition-colors">Subscribe</button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Blog;
