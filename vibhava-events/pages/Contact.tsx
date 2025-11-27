import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="bg-background-light dark:bg-[#221015] font-epilogue min-h-screen w-full relative">
      <div className="relative min-h-screen w-full">
        {/* Hero Section */}
        <div 
            className="relative flex min-h-[50vh] flex-col items-center justify-center bg-cover bg-center p-6 text-center" 
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkaPWaeF7ot9tsdBvyQplYxZfcApcp85yHuWT2UCw1JFxxQ_NYRFydYVz_brwEs_S_UThs09GCdXyK9eyr0svjsNEDQPgF6iTn0ROMAm36QB33ioVSlZMXcM2PhfIOQziTJ9orXUIBZpjc0d6nKfq9TD41ZRsMuRKrQLQhtv7O7S2yV-HiCPAhw3aOVBhpWLSBqRA4KATOKCGG0XeCtkhB9WwiuQL28NnT3VcPpbLZluLXVHTCd_vWdQ_U4E3ZoGp8OxEUGXge-Qo")` }}
        >
            <div className="flex flex-col gap-4">
                <h1 className="font-epilogue text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                Yes, you are one step away to make your day bigger.
                </h1>
                <h2 className="font-epilogue text-base font-normal text-white/90 md:text-lg">
                Fill out the form below, and one of our expert planners will get back to you shortly.
                </h2>
            </div>
        </div>

        {/* Form Section */}
        <div className="relative z-10 -mt-16 bg-background-light px-4 py-8 dark:bg-[#221015] sm:mx-auto sm:max-w-xl md:rounded-lg">
           <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Name */}
                <label className="flex flex-col">
                    <p className="font-epilogue pb-2 text-base font-medium text-gray-800 dark:text-gray-200">Name</p>
                    <input 
                        required
                        type="text"
                        className="form-input font-epilogue h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-gray-300 bg-background-light p-4 text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary-pink focus:outline-0 focus:ring-2 focus:ring-primary-pink/50 dark:border-gray-700 dark:bg-[#221015] dark:text-white dark:placeholder:text-gray-500 transition-all" 
                        placeholder="Enter your full name" 
                    />
                </label>

                {/* Email */}
                <label className="flex flex-col">
                    <p className="font-epilogue pb-2 text-base font-medium text-gray-800 dark:text-gray-200">Email ID</p>
                    <input 
                        required
                        type="email"
                        className="form-input font-epilogue h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-gray-300 bg-background-light p-4 text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary-pink focus:outline-0 focus:ring-2 focus:ring-primary-pink/50 dark:border-gray-700 dark:bg-[#221015] dark:text-white dark:placeholder:text-gray-500 transition-all" 
                        placeholder="Enter your email address" 
                    />
                </label>

                {/* Mobile Number */}
                <label className="flex flex-col">
                    <p className="font-epilogue pb-2 text-base font-medium text-gray-800 dark:text-gray-200">Mobile Number</p>
                    <input 
                        required
                        type="tel"
                        className="form-input font-epilogue h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-gray-300 bg-background-light p-4 text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary-pink focus:outline-0 focus:ring-2 focus:ring-primary-pink/50 dark:border-gray-700 dark:bg-[#221015] dark:text-white dark:placeholder:text-gray-500 transition-all" 
                        placeholder="Enter your mobile number" 
                    />
                </label>

                {/* Event Name */}
                <label className="flex flex-col">
                    <p className="font-epilogue pb-2 text-base font-medium text-gray-800 dark:text-gray-200">Event Name</p>
                    <input 
                        type="text"
                        className="form-input font-epilogue h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-gray-300 bg-background-light p-4 text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary-pink focus:outline-0 focus:ring-2 focus:ring-primary-pink/50 dark:border-gray-700 dark:bg-[#221015] dark:text-white dark:placeholder:text-gray-500 transition-all" 
                        placeholder="e.g., Wedding, Corporate Conference" 
                    />
                </label>
                
                {/* Message */}
                <label className="flex flex-col">
                    <p className="font-epilogue pb-2 text-base font-medium text-gray-800 dark:text-gray-200">Message to Planner Team</p>
                    <textarea 
                        className="form-textarea font-epilogue w-full min-w-0 flex-1 resize-y overflow-hidden rounded-xl border border-gray-300 bg-background-light p-4 text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary-pink focus:outline-0 focus:ring-2 focus:ring-primary-pink/50 dark:border-gray-700 dark:bg-[#221015] dark:text-white dark:placeholder:text-gray-500 transition-all" 
                        placeholder="Tell us more about your event..." 
                        rows={4}
                    ></textarea>
                </label>

                {/* CTA Button */}
                <button className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary-pink text-base font-bold text-white transition-colors hover:bg-primary-pink/90 focus:outline-none focus:ring-2 focus:ring-primary-pink focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark">
                    <span className="truncate">Send Message</span>
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;