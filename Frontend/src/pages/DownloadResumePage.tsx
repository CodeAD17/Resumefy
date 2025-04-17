import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepNavigation } from '../components/StepNavigation';

export const DownloadResumePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(6);

  const handleBack = () => {
    navigate('/resume-builder/experience');
  };

  const handleHome = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StepNavigation currentStep={currentStep} />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-12 min-h-[90vh]">
          <h2 className="text-4xl font-bold text-[#0088FF] mb-6">Download Your Resume</h2>
          <p className="text-gray-600 mb-12 text-xl">Preview and download your resume in your preferred format.</p>
          
          {/* Resume Preview */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Resume Preview</h3>
            <div className="border border-gray-200 rounded-lg p-4 min-h-[400px]">
              {/* Resume preview content will be rendered here */}
            </div>
          </div>

          {/* Download Options */}
          <div className="space-y-4 mb-12">
            <button
              className="w-full bg-[#0088FF] text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 text-lg font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Download as PDF</span>
            </button>
            <button
              className="w-full border-2 border-[#0088FF] text-[#0088FF] px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 text-lg font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
              </svg>
              <span>Download as DOCX</span>
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="text-[#0088FF] px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Back
            </button>
            <button
              onClick={handleHome}
              className="bg-[#0088FF] text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 