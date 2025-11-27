import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EVENTS } from '../constants';
import { EventData } from '../types';

const EventPage: React.FC = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = EVENTS[eventId as string] as EventData | undefined;

  if (!event) {
    return <div>Event not found</div>;
  }

  // Styles based on theme
  const fontClass = event.font === 'epilogue' ? 'font-epilogue' : 'font-jakarta';
  const primaryColorClass = {
    red: 'bg-primary-red text-white shadow-primary-red/30',
    pink: 'bg-primary-pink text-white shadow-primary-pink/30',
    gold: 'bg-primary-gold text-[#1b170d] shadow-primary-gold/30',
  }[event.themeColor];

  const handleBack = () => navigate(-1);
  const handleContact = () => navigate('/contact');

  // Generic Grid Layout (used for Dhothi)
  const renderGridGallery = () => (
    <div className="grid w-full max-w-sm grid-cols-2 grid-rows-2 gap-4 mx-auto pb-8">
      {event.gallery.slice(0, 4).map((item, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-lg ring-2 ring-white/10 group">
          <img 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
            src={item.image} 
            alt={item.title} 
          />
        </div>
      ))}
    </div>
  );

  // Horizontal Scroll Layout (used for others)
  const renderScrollGallery = () => (
    <div className="flex overflow-x-auto no-scrollbar pb-8 pt-4 -mx-4 px-4 snap-x snap-mandatory">
      <div className="flex items-stretch gap-4">
        {event.gallery.map((item, index) => (
          <div key={index} className="flex h-full flex-col gap-4 rounded-xl min-w-[18rem] snap-center">
            <div 
              className="w-full bg-center bg-no-repeat aspect-video sm:aspect-square bg-cover rounded-xl flex flex-col justify-end p-4 border-2 border-white/20 shadow-xl relative overflow-hidden group"
              style={{ backgroundImage: `url("${item.image}")` }}
            >
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
               {event.id === 'wedding' && (
                  <p className="text-white text-lg font-bold leading-normal drop-shadow-md z-10">{item.title}</p>
               )}
            </div>
            {event.id !== 'wedding' && (
              <div className={event.id === 'puberty' ? 'bg-white/10 p-3 rounded-lg backdrop-blur-sm' : 'px-1'}>
                 <p className="text-white text-base font-medium leading-normal">{item.title}</p>
                 {item.subtitle && <p className="text-white/70 text-sm font-normal leading-normal">{item.subtitle}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`relative min-h-screen w-full flex-col overflow-x-hidden ${fontClass} bg-background-dark`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <div 
            className="h-full w-full bg-cover bg-center transition-transform duration-[2s]" 
            style={{ 
                backgroundImage: event.type === 'grid' 
                ? `none` // Grid layout has img tag
                : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url("${event.heroImage}")`
            }}
         >
            {/* Special handling for Dhothi which uses an img tag in HTML for background logic */}
            {event.type === 'grid' && (
                <>
                 <img className="h-full w-full object-cover" src={event.heroImage} alt="Hero" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/70 to-transparent"></div>
                </>
            )}
         </div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center p-4 pb-2 justify-between">
        <button 
          onClick={handleBack}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        {/* Title in header only for some layouts or generic fallback */}
        {event.id !== 'wedding' && (
             <h1 className="text-white text-lg font-bold leading-tight flex-1 text-center line-clamp-1 px-4 drop-shadow-md">{event.title}</h1>
        )}
        
        {/* Menu or Heart button */}
        <div className="flex h-12 w-12 items-center justify-end">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-colors">
                 <span className="material-symbols-outlined">{event.type === 'grid' ? 'favorite_border' : 'menu'}</span>
            </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-end p-4 pt-10 min-h-[85vh]">
        
        {/* Title Section for Grid Layout (Dhothi) */}
        {event.type === 'grid' && (
            <div className="flex-1 flex flex-col items-center justify-center">
                {renderGridGallery()}
                 <h1 className="text-[32px] font-bold leading-tight tracking-tight text-white text-center mb-2">{event.subtitle}</h1>
            </div>
        )}

        {/* Content for Scroll Layouts */}
        {event.type === 'scroll' && (
            <>
                 {/* Only Wedding/Puberty/Housewarming have large titles in the body typically, but we standardize */}
                 {event.id === 'puberty' && (
                     <div className="px-2 pb-4 text-left">
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white">{event.subtitle}</h1>
                        <p className="mt-2 max-w-md text-base font-normal text-white/90">{event.description}</p>
                     </div>
                 )}

                 {event.id === 'house-warming' && (
                    <div className="px-4 py-8 text-center">
                        <h1 className="text-4xl font-bold text-white">{event.title}</h1>
                        <p className="mt-2 text-white/90">{event.subtitle}</p>
                    </div>
                 )}

                 {event.id === 'birthday' && (
                     <div className="px-2 pb-4">
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">{event.title}</h1>
                        <p className="text-white/80 mt-2 text-lg drop-shadow-md">{event.subtitle}</p>
                     </div>
                 )}

                 {/* The Gallery */}
                 {renderScrollGallery()}
                 
                 {/* Dots indicator for scroll */}
                 <div className="flex justify-center items-center gap-2 pt-2 pb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                 </div>

                 {/* Wedding specific body text */}
                 {event.id === 'wedding' && (
                     <>
                        <h2 className="text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
                            Your Perfect Day, Perfectly Planned
                        </h2>
                        <p className="text-stone-300 text-base font-normal leading-relaxed pb-3 pt-1 px-4 text-center">
                            We believe in creating unique, personalized wedding experiences that reflect your love story. Let us handle the details, so you can cherish every moment.
                        </p>
                     </>
                 )}
            </>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-auto pt-6 pb-8 bg-transparent flex flex-col items-center">
             {event.type === 'grid' && (
                  <p className="mb-6 max-w-sm text-base font-normal leading-normal text-white/90 text-center">
                    {event.description}
                  </p>
             )}
             
            <button 
                onClick={handleContact}
                className={`flex min-w-[84px] w-full max-w-[480px] sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 text-base font-bold leading-normal tracking-[0.015em] shadow-lg transition-transform active:scale-95 ${primaryColorClass}`}
            >
                <span className="truncate">Talk with our team</span>
            </button>
            
            {event.id !== 'wedding' && event.type !== 'grid' && (
                 <p className="text-white/90 text-center text-sm font-normal leading-normal pt-4 px-4">
                    Share your dream {event.id === 'house-warming' ? 'house warming' : event.id} ideas, we will make it memorable.
                 </p>
            )}
             {event.id === 'wedding' && (
                 <p className="text-stone-400 text-sm text-center px-4 pt-2">
                    Share your dream wedding ideas, we will make it memorable.
                 </p>
            )}
        </div>

      </main>
    </div>
  );
};

export default EventPage;