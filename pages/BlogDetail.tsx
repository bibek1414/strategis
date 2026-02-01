
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Reveal } from '../components/MotionWrapper';
import { ArrowLeft, Share2, Calendar } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-accent font-bold">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      {/* Hero Header - Full Image Background Style */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pt-48 pb-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
          <Reveal direction="up">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors mb-12">
              <ArrowLeft className="w-3 h-3" /> Back to Insights
            </Link>
            <div className="flex items-center gap-4 mb-8">
               <div className="w-2 h-2 bg-accent"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">NEWS</span>
               <div className="bg-white text-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest">
                 {post.date}
               </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-sans font-bold leading-[1.05] mb-8 max-w-4xl">
              {post.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-medium mb-4">
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Area */}
      <section className="pt-24">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="prose prose-slate lg:prose-xl max-w-none">
              <div className="whitespace-pre-line text-lg text-slate-600 leading-[1.8] space-y-8 font-medium">
                {post.content}
                
                <div className="h-px bg-slate-100 my-16"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-12 border-y border-slate-50">
                  <div className="flex items-center gap-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-14 h-14 rounded-full border border-slate-100 object-cover" />
                    <div>
                      <div className="text-sm font-bold text-primary">Alex Tran</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Managing Partner</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" /> Share Insight
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Suggested Reading */}
      <section className="pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-sans font-bold text-primary tracking-tight">Suggested Reading</h2>
            <Link to="/blog" className="text-xs font-bold uppercase tracking-widest text-accent hover:underline decoration-2 underline-offset-8">Browse All Insights</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.id !== id).slice(0, 2).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                 <Link to={`/blog/${p.id}`} className="group flex flex-col md:flex-row bg-slate-50/50 rounded-[40px] overflow-hidden border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                    <div className="md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
                      <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                    </div>
                    <div className="p-10 md:w-3/5 flex flex-col justify-center">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{p.date}</div>
                      <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-6 leading-tight">{p.title}</h4>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                        Read More <ArrowLeft className="w-3 h-3 rotate-180" />
                      </div>
                    </div>
                 </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
