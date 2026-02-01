
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const StrategyAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      // Corrected: Use the named parameter and process.env.API_KEY directly as required.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the Strategis AI Business Assistant. You provide elite consulting advice. Tone: Senior Partner at McKinsey. Style: Sharp, data-driven, strategic, and professional. Use markdown formatting.`,
          temperature: 0.7,
        },
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "Error processing request." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Service unavailable." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-[100]"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-8 w-[90vw] md:w-[380px] h-[500px] bg-white rounded-[32px] shadow-2xl z-[100] flex flex-col overflow-hidden border border-slate-100"
          >
            <div className="bg-primary p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-medium">Strategy Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[10px] text-slate-400 font-medium">Active Partner</span>
                  </div>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto bg-slate-50 space-y-4">
              {messages.length === 0 && (
                <div className="text-left py-12">
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">Ask about growth strategy, market analysis, or how we help scale operations.</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                    m.role === 'user' ? 'bg-primary text-white' : 'bg-white text-slate-800 shadow-sm border border-slate-100'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-1">
                    <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Consult AI..."
                  className="flex-grow bg-transparent px-4 py-2 text-xs font-medium focus:outline-none"
                />
                <button onClick={handleSend} disabled={isTyping} className="bg-primary text-white p-2.5 rounded-xl disabled:opacity-50">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StrategyAssistant;
