
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Reveal } from '../components/MotionWrapper';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
               <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
               <span className="text-xs font-medium text-slate-400">Latest insights</span>
             </div>
            <h1 className="text-5xl md:text-6xl font-sans font-medium text-primary mb-8 leading-tight tracking-tight">
              Thinking that drives <br/><span className="italic font-serif font-normal">tangible progress</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
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

      {/* CTA Section */}
      <section className="py-16 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl font-sans font-medium mb-8">Want deep strategy delivered to your inbox?</h2>
            <div className="max-w-md flex gap-2 p-1.5 bg-slate-50 rounded-lg">
              <input type="email" placeholder="Your work email" className="flex-grow bg-transparent px-4 py-2 text-sm focus:outline-none" />
              <button className="bg-primary text-white px-6 py-2 rounded-md text-xs font-medium hover:bg-accent transition-colors">Subscribe</button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Blog;
