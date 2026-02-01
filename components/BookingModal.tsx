
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleBook = () => {
    setStep(3);
    setTimeout(() => {
      onClose();
      setStep(1);
      setSelectedDate(null);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[40px] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="p-10">
              {step === 1 && (
                <div>
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Schedule a Discovery Call</h3>
                  <p className="text-slate-500 text-sm mb-8">Select a time for a 15-minute strategic alignment session.</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {['Oct 24, 10:00 AM', 'Oct 24, 2:30 PM', 'Oct 25, 9:00 AM', 'Oct 26, 4:00 PM'].map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-4 rounded-2xl border text-sm font-bold transition-all ${selectedDate === date ? 'border-accent bg-accent text-white shadow-lg' : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-accent/30'}`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    disabled={!selectedDate}
                    onClick={() => setStep(2)}
                    className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-accent transition-all disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Almost there</h3>
                  <p className="text-slate-500 text-sm mb-8">Briefly, what is the main challenge you are facing?</p>
                  
                  <textarea 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm mb-8 h-32 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="e.g., We need to refine our unit economics for Series B..."
                  />
                  
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 bg-slate-100 text-slate-600 font-bold py-4 rounded-2xl">Back</button>
                    <button onClick={handleBook} className="flex-1 bg-accent text-white font-bold py-4 rounded-2xl shadow-lg">Confirm Booking</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Call Scheduled!</h3>
                  <p className="text-slate-500 text-sm">You will receive an invitation for <br/><span className="font-bold text-primary">{selectedDate}</span> shortly.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
