
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

interface Props {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div 
          key={i} 
          className={`border rounded-3xl overflow-hidden transition-all duration-300 ${activeIndex === i ? 'border-accent bg-accent/5' : 'border-slate-100 bg-white'}`}
        >
          <button
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-medium text-primary">{item.q}</span>
            <motion.div
              animate={{ rotate: activeIndex === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className={`w-5 h-5 ${activeIndex === i ? 'text-accent' : 'text-slate-400'}`} />
            </motion.div>
          </button>
          <AnimatePresence>
            {activeIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50 pt-4">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
