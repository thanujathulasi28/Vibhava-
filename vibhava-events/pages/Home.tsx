import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES, EVENTS } from '../constants';
import { EventData } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleEventClick = (id: string) => {
    navigate(`/event/${id}`);
  };

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  const handleContinueClick = () => {
    navigate('/contact');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-[#211111] font-jakarta overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-[#211111]/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="#" className="text-xl font-bold text-primary-red">Vibhava Events</a>
          <div className="flex items-center gap-2">
            <a href="tel:7893434485" className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-700/50 px-3">
              <span className="material-symbols-outlined text-base">call</span>
              <span className="text-sm font-semibold hidden sm:inline">7893434485</span>
            </a>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-700 dark:text-gray-300">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero */}
        <div className="@container">
          <div className="p-4">
            <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4 text-center relative overflow-hidden" 
                 style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXtchfSU68JK-IWJ7dAQMznWF53-BSz-Uwz3u5USCW-UGMsO7sZnhVCwk1RKht0bjS-_8SxjEr33G1Kez-_2-qjJ54gwH-erZy8AuehHvftiCcruDw0gTvKPBk_dhTHp8Wxv_wr228SWy8FLb1iR1uhCZoL_R7RimF56YI2hmRqAtofYmZDjp652fpoHZGSFrp-exkdJJFc0Woi212d79lNfhbbSsbxGlfk0jKHB4-fQ3f_LLNDiv1omdv1ANoZP2R0qLnAlU984g')` }}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="flex flex-col gap-2 relative z-10">
                <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight">
                  Welcome Vibhava,<br/>thanks for choosing us!
                </h1>
                <h2 className="text-white/90 text-sm sm:text-base font-normal">
                  Select your event to get started
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Card */}
        <div className="p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#221015] p-4 shadow-sm">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="material-symbols-outlined text-primary-red text-3xl">calendar_month</span>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Need a consultation?</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Schedule a call with our experts.</p>
              </div>
            </div>
            <button 
              onClick={handleConsultationClick}
              className="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary-red text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary-red/30 hover:bg-primary-red/90 transition-all active:scale-95"
            >
              <span className="truncate">Book an Appointment</span>
            </button>
          </div>
        </div>

        {/* Services */}
        <div className="px-4 py-2">
          <div className="rounded-xl border border-primary-red/20 bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950/20 dark:to-rose-950/20 p-6 shadow-lg shadow-primary-red/5">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">Your All-in-One Event Solution</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">We handle everything from start to finish. Our comprehensive services include:</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {SERVICES.map((service, idx) => (
                  <span key={idx} className="flex items-center gap-2 rounded-full bg-white dark:bg-gray-800/50 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    <span className="material-symbols-outlined text-primary-red text-base">{service.icon}</span>
                    {service.label}
                  </span>
                ))}
              </div>
              <div className="mt-4 w-full flex flex-col gap-4">
                <div className="rounded-lg bg-green-100/80 dark:bg-green-900/30 p-4 text-center border-2 border-dashed border-green-300 dark:border-green-700">
                  <p className="font-bold text-green-800 dark:text-green-200 text-base tracking-wide uppercase">...everything in your own budget!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Choose Event */}
        <div className="px-4 py-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Choose Your Event</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-20">
          {Object.values(EVENTS).map((event: EventData) => (
            <div 
              key={event.id}
              onClick={() => handleEventClick(event.id)}
              className="group flex cursor-pointer flex-col gap-3 rounded-lg border border-transparent p-2 transition-all hover:border-primary-red/50 hover:bg-primary-red/10 dark:hover:bg-primary-red/20 active:scale-95"
            >
              <div 
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md" 
                style={{ backgroundImage: `url('${event.gallery[0].image}')` }}
              ></div>
              <div>
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">{event.title}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal line-clamp-1">{event.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Continue Button */}
        <div className="px-4 py-6 fixed bottom-0 left-0 right-0 bg-background-light dark:bg-[#211111] border-t border-gray-200 dark:border-gray-800 z-20">
          <button 
            onClick={handleContinueClick}
            className="flex min-w-[84px] w-full max-w-md mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary-red text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary-red/30 hover:bg-primary-red/90 transition-all active:scale-95 disabled:bg-gray-400 dark:disabled:bg-gray-600"
          >
            <span className="truncate">Continue</span>
          </button>
        </div>
      </main>

       {/* Footer */}
       <footer className="flex flex-col gap-8 px-5 py-10 pb-32 text-center bg-background-light dark:bg-[#211111] border-t border-gray-200 dark:border-gray-800 mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {['About Us', 'Contact Support', 'Privacy Policy', 'Terms of Service'].map((link) => (
             <a key={link} href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-red dark:hover:text-primary-red/90 text-sm font-medium leading-normal min-w-32">{link}</a>
          ))}
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">© 2024 Vibhava Events. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;