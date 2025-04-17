import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from './Modal';

interface ResumeCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeCreationModal: React.FC<ResumeCreationModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleGetStarted = (type: 'fresher' | 'experienced') => {
    onClose();
    navigate('/resume-builder', { state: { type } });
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Create your ATS friendly Resume</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Complete Fresher */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-100 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-4">Complete Fresher</h3>
              <p className="text-gray-600 text-sm">
                Aspiring professional ready to build a standout resume and kickstart a successful career journey with confidence and clarity
              </p>
            </div>
            <div className="mt-6">
              <button 
                onClick={() => handleGetStarted('fresher')}
                className="w-full bg-[#0088FF] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Experienced */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-100 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-4">Experienced</h3>
              <p className="text-gray-600 text-sm">
                Skilled professional with proven expertise, crafting a powerful resume to take the next big leap in their career
              </p>
            </div>
            <div className="mt-6">
              <button 
                onClick={() => handleGetStarted('experienced')}
                className="w-full bg-[#0088FF] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}; 