import React, { useState } from 'react';
import '../styles/globals.css';
import { JobModal } from './JobModal';
import { ResumeCreationModal } from './ResumeCreationModal';
import { ATSCheckerModal } from './ATSCheckerModal';

export const Dashboard: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isATSCheckerModalOpen, setIsATSCheckerModalOpen] = useState(false); // State for ATSCheckerModal
  const [selectedJob, setSelectedJob] = useState<{ title: string } | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Job Profile - (Software eng./ Webdev Intern/ etc.)',
      description: 'Are you a passionate AI/ML enthusiast eager to work on real-world systems instead of toy models?',
    },
    {
      id: 2,
      title: 'Job Profile - (Software eng./ Webdev Intern/ etc.)',
      description: 'Are you a passionate AI/ML enthusiast eager to work on real-world systems instead of toy models?',
    },
    {
      id: 3,
      title: 'Job Profile - (Software eng./ Webdev Intern/ etc.)',
      description: 'Are you a passionate AI/ML enthusiast eager to work on real-world systems instead of toy models?',
    },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleJobClick = (job: { title: string }) => {
    setSelectedJob(job);
    setIsJobModalOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-mulish">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg"
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Left Sidebar */}
      <div className={`fixed lg:static w-80 min-h-screen bg-gradient-to-b from-[#0088FF] to-[#1144FF] text-white p-8 rounded-tr-[50px] rounded-br-[50px] transition-transform duration-300 transform lg:transform-none ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} z-40`}>
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-4 mb-12">
            <div className="w-32 h-32 bg-white rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img
                src="img/applicant.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">Profile</h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-6">
          <button 
              onClick={() => setIsATSCheckerModalOpen(true)} // Open ATSCheckerModal
              className="w-full text-left py-3 px-6 hover:bg-white/10 rounded-xl transition-colors duration-200 flex items-center space-x-3 font-medium"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Create ATS Friendly Resume</span>
            </button>
            <button 
              onClick={() => setIsResumeModalOpen(true)} 
              className="w-full text-left py-3 px-6 hover:bg-white/10 rounded-xl transition-colors duration-200 flex items-center space-x-3 font-medium"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Create ATS Friendly Resume</span>
            </button>
            <button className="w-full text-left py-3 px-6 hover:bg-white/10 rounded-xl transition-colors duration-200 flex items-center space-x-3 font-medium">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span>Recent shortlisting notification</span>
            </button>
            <button className="w-full text-left py-3 px-6 hover:bg-white/10 rounded-xl transition-colors duration-200 flex items-center space-x-3 font-medium">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>Recent Application Rank</span>
            </button>
          </nav>

          {/* Premium Button */}
          <div className="mt-auto pt-6 border-t border-white/20">
            <button className="w-full text-left py-3 px-6 hover:bg-white/10 rounded-xl transition-colors duration-200 flex items-center space-x-3">
              <span className="text-2xl"><img src="img/premium.svg" alt="Premium" /></span>
              <span className="font-bold">Check Out Premium</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 lg:pl-12">
        <div className="relative flex flex-col h-[calc(100vh-4rem)]">
          {/* White Background Container */}
          <div className="flex-1 bg-white rounded-[50px] shadow-lg p-8 flex flex-col">
            {/* Header */}
            <header className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                <span className="text-black">Resumify</span>
                <span className="text-[#00A3FF]">.AI</span>
              </h1>
              <div className="relative w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Search for job openings"
                  className="w-full lg:w-96 px-6 py-3 rounded-full border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium placeholder:font-normal"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </header>

            {/* Job Listings */}
            <div className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shadow-sm">
                        <img
                          src="img/applicant.png"
                          alt="Company"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{job.title}</h3>
                        <p className="text-gray-600 font-medium">{job.description}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleJobClick(job)}
                      className="bg-gradient-to-r from-[#0088FF] to-[#1144FF] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200 flex items-center space-x-2 font-semibold"
                    >
                      <span>Apply</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Upload Section */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Attach your resume here"
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-24 font-medium placeholder:font-normal"
                  readOnly
                  value={selectedFile?.name || ''}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                    />
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </label>
                  <button className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Modal */}
      {selectedJob && (
        <JobModal
          isOpen={isJobModalOpen}
          onClose={() => setIsJobModalOpen(false)}
          jobTitle={selectedJob.title}
        />
      )}

      {/* Resume Creation Modal */}
      <ResumeCreationModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
      <ATSCheckerModal
        isOpen={isATSCheckerModalOpen}
        onClose={() => setIsATSCheckerModalOpen(false)}
      />
    </div>
  );
}; 