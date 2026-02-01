
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
      <div className="min-h-screen flex items-start justify-start pt-32 max-w-7xl mx-auto px-6">
        <div className="text-left">
          <h1 className="text-4xl font-medium mb-4 text-primary">Post not found</h1>
          <Link to="/blog" className="text-accent font-medium">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pb-16">
      {/* Hero Header */}
      <section className="pt-32 pb-12 bg-white text-primary border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <Reveal direction="up">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-accent transition-colors mb-8">
              <ArrowLeft className="w-3 h-3" /> Back to insights
            </Link>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-1.5 h-1.5 bg-accent rounded-sm"></div>
               <span className="text-xs font-medium text-slate-400">Insights</span>
               <div className="text-xs font-medium text-slate-300">
                 {post.date}
               </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-medium leading-tight mb-8 max-w-4xl">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="max-w-3xl">
              <div className="whitespace-pre-line text-base text-slate-600 leading-relaxed space-y-6">
                {post.content}
                
                <div className="h-px bg-slate-100 my-12"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8">
                  <div className="flex items-center gap-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-medium text-primary">Alex Tran</div>
                      <div className="text-xs text-slate-400 font-medium">Managing Partner</div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-medium text-accent hover:underline">
                    <Share2 className="w-4 h-4" /> Share insight
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Suggested Reading */}
      <section className="py-16 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-sans font-medium text-primary tracking-tight">Suggested reading</h2>
            <Link to="/blog" className="text-xs font-medium text-accent hover:underline">Browse all</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.id !== id).slice(0, 2).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                 <Link to={`/blog/${p.id}`} className="group block">
                    <div className="p-8 bg-slate-50 rounded-2xl">
                      <div className="text-xs font-medium text-slate-400 mb-4">{p.date}</div>
                      <h4 className="text-lg font-medium text-primary group-hover:text-accent transition-colors mb-6 leading-tight">{p.title}</h4>
                      <div className="flex items-center gap-2 text-xs font-medium text-accent group-hover:gap-3 transition-all">
                        Read more <ArrowRight className="w-3 h-3" />
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
