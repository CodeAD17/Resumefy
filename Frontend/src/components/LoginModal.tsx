import React from 'react';
import { Modal } from './Modal';
import { useNavigate } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleApplicantClick = () => {
    onClose(); // Close login modal
    navigate('/signup'); // Navigate to signup page
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Choose Login Type</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Applicant Login */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              <img
                src="img/applicant.png"
                alt="Applicant"
                className="w-full h-full object-contain"
              />
            </div>
            <button
              onClick={handleApplicantClick}
              className="w-full bg-[#00A3FF] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
            >
              Login as Applicant
            </button>
          </div>

          {/* HR Login */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              <img
                src="img/HR.png"
                alt="HR"
                className="w-full h-full object-contain"
              />
            </div>
            <button
              onClick={() => {/* Handle HR login */}}
              className="w-full bg-[#F5A623] text-white px-4 py-2 rounded-full hover:bg-[#E69512] transition-colors duration-200"
            >
              Login as HR
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}; 