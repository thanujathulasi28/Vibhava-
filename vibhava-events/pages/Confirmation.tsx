import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcfaf8] dark:bg-[#221c10] font-jakarta relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 bg-[#fcfaf8] dark:bg-[#221c10] justify-between sticky top-0 z-10">
        <div 
          onClick={() => navigate('/')}
          className="text-[#1b170d] dark:text-[#f8f7f6] flex size-12 shrink-0 items-center justify-start cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors pl-2"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </div>
        <h2 className="text-[#1b170d] dark:text-[#f8f7f6] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Confirmation</h2>
        <div className="size-12"></div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 p-4 text-center animate-fade-in-up">
        {/* Success Icon */}
        <div className="flex items-center justify-center w-32 h-32 bg-primary-gold/10 rounded-full mb-8 ring-1 ring-primary-gold/20">
          <div className="flex items-center justify-center w-20 h-20 bg-primary-gold rounded-full shadow-lg shadow-primary-gold/40">
            <span className="material-symbols-outlined text-5xl text-[#1b170d]">check</span>
          </div>
        </div>

        {/* Headline Text */}
        <h1 className="text-[#1b170d] dark:text-[#f8f7f6] tracking-tight text-4xl font-extrabold leading-tight px-4 pb-4">Thank You!</h1>
        
        {/* Body Text */}
        <p className="text-[#1b170d]/70 dark:text-[#f8f7f6]/70 text-lg font-medium leading-relaxed pb-3 px-4 max-w-md">
            Your dream event ideas are on their way to our expert planners. A member of our team will reach out to you within 24 hours to schedule a consultation.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col p-4 space-y-4 mb-8 max-w-md mx-auto w-full">
        {/* Primary CTA */}
        <button 
          onClick={() => navigate('/')}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary-gold text-[#1b170d] text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary-gold/20 hover:bg-primary-gold/90 transition-transform active:scale-95"
        >
          <span className="truncate">Back to Homepage</span>
        </button>
        
        {/* Secondary CTA */}
        <button 
          onClick={() => navigate('/')}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-transparent text-primary-gold border-2 border-primary-gold/20 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-gold/5 transition-colors"
        >
          <span className="truncate">Explore Past Events</span>
        </button>
      </div>
    </div>
  );
};

export default Confirmation;