import React, { useState } from 'react';
import { LoginModal } from './LoginModal';

export const Navigation: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                <span className="text-black">Resumify</span>
                <span className="text-[#00A3FF]">.AI</span>
              </div>
            </div>

            {/* Sign Up/Login Button */}
            <div className="flex items-center space-x-4">
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-[#00A3FF] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200 shadow-md"
              >
                Signup/Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}; 