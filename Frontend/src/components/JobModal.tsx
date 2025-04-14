import React, { useState } from 'react';
import { ApplicationModal } from './ApplicationModal';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, jobTitle }) => {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-xl mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          {/* Company Info */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex-shrink-0">
                <img src="img/applicant.png" alt="Company" className="w-full h-full object-cover rounded-lg" />
              </div>
              <span className="text-gray-500 font-medium">Company Name</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-[#0088FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <button 
                onClick={() => setIsApplicationModalOpen(true)}
                className="bg-[#0088FF] text-white px-6 py-2 rounded-full text-sm font-medium"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Job Title */}
          <h2 className="text-xl font-bold mb-4">{jobTitle}</h2>

          {/* Tags */}
          <div className="flex gap-2 mb-6">
            <span className="bg-[#FFE5CC] text-[#FF8A00] px-4 py-1 rounded-full text-sm">Remote</span>
            <span className="bg-[#E5F3FF] text-[#0088FF] px-4 py-1 rounded-full text-sm">Internship</span>
          </div>

          {/* About the Job */}
          <div className="mb-6">
            <h3 className="font-bold mb-2">About the Job</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Are you a passionate AI/ML enthusiast eager to work on real-world systems instead of toy models? Want to learn directly from experienced tech leaders while building solutions that are already impacting global clients?
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              Join us as a Software Engineer Intern (AI/ML) and contribute to the evolution of our AI-powered Talent Cloud — powering smart matching, intelligent screening, vetting engines, and scalable decision-making systems.
            </p>
          </div>

          {/* About the Company */}
          <div>
            <h3 className="font-bold mb-2">About the Company</h3>
            <div className="flex items-center text-sm text-gray-500">
              <span>Technology, Information and Internet</span>
              <span className="mx-2">•</span>
              <span>11-50 employees</span>
              <span className="mx-2">•</span>
              <span>15 on LinkedIn</span>
            </div>
            <button className="text-[#0088FF] text-sm font-medium mt-2 flex items-center">
              + Follow
            </button>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        companyName="SkillsCapital"
      />
    </div>
  );
}; 