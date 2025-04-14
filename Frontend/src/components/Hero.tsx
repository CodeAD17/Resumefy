import React, { useState } from 'react';
import { LoginModal } from './LoginModal';

export const Hero: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="relative min-h-[calc(100vh-6rem)]">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 relative z-10">
        {/* Text Content */}
        <div className="mt-8 sm:mt-12 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Resumify.AI</span>
          </h1>
          <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-bold">
            UNDERSTANDS AND EVALUATES JOB CANDIDATES SMARTLY
          </p>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
            Screening Process: Now Faster, Smarter, and Easier
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-[#00A3FF] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200 shadow-md"
            >
              GET STARTED
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full lg:max-w-md">
            <img
              className="w-full h-auto"
              src="img/landingPageImg.png"
              alt="Resume screening illustration"
            />
          </div>
        </div>
      </div>

      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 w-screen overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
        <img
          src="img/wave.png"
          alt="Wave background"
          className="w-full h-auto min-h-[200px] object-cover object-bottom scale-105"
        />
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}; 