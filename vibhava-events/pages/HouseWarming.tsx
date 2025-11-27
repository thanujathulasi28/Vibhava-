import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EVENTS } from '../constants';

const HouseWarming: React.FC = () => {
  const navigate = useNavigate();
  const event = EVENTS.housewarming;

  return (
    <div className="relative flex min-h-screen w-full flex-col font-jakarta bg-background-light dark:bg-background-dark group/design-root">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-center bg-no-repeat bg-cover" 
          style={{ backgroundImage: `url("${event.heroImage}")` }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>
      </div>

      {/* Header for Navigation */}
      <div className="relative z-20 flex items-center p-4 justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-grow flex-col justify-end">
        <div className="px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-white">Celebrate Your New Beginning</h1>
          <p className="mt-2 text-white/90">Elegant House Warming Events, Crafted for You.</p>
        </div>

        <div className="pb-6">
          <div className="flex overflow-x-auto no-scrollbar">
            <div className="flex items-stretch px-4 gap-4">
              {event.gallery.map((item, index) => (
                <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 shadow-lg">
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col" 
                    style={{ backgroundImage: `url("${item.image}")` }}
                  ></div>
                  <div className="p-2 text-center">
                    <p className="text-white text-base font-medium leading-normal">{item.title}</p>
                    <p className="text-white/80 text-sm font-normal leading-normal">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4 pb-12 pt-4">
          <button 
            onClick={() => navigate('/contact')}
            className="flex w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary-gold text-[#221c10] text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:bg-primary-gold/90 transition-transform active:scale-95"
          >
            <span className="truncate">Talk with our team</span>
          </button>
          <p className="text-white/90 text-sm font-normal leading-normal pt-4 px-4 text-center">
            Share your dream house warming ideas, we will make it memorable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseWarming;