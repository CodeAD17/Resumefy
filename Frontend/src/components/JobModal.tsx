import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ApplicantList from './ApplicantList';
import Header from './Header';
import MobileToggle from './MobileToggle';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
      {!sidebarOpen && (
        <button 
          onClick={toggleSidebar}
          className="fixed top-4 left-4 bg-orange-500 text-white p-3 rounded-lg shadow-lg z-30 hover:bg-orange-600 transition-all transform hover:scale-105 hover:shadow-xl hidden md:block"
          aria-label="Open sidebar"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      )}
      <MobileToggle onClick={toggleSidebar} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-0 md:ml-72' : 'ml-0'}`}>
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <Header />
          <main className="mt-8">
            <ApplicantList />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;