import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface StepNavigationProps {
  currentStep: number;
}

const RESUME_STEPS = [
  { id: 1, title: 'Header', path: '/resume-builder' },
  { id: 2, title: 'Education', path: '/resume-builder/education' },
  { id: 3, title: 'Skills', path: '/resume-builder/skills' },
  { id: 4, title: 'Projects', path: '/resume-builder/projects' },
  { id: 5, title: 'Experience', path: '/resume-builder/experience' },
  { id: 6, title: 'Download', path: '/resume-builder/download' }
];

export const StepNavigation: React.FC<StepNavigationProps> = ({ currentStep }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = RESUME_STEPS[currentStep - 2];
      navigate(prevStep.path);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="w-64 bg-[#0088FF] text-white p-8 fixed h-full">
      <div className="flex items-center space-x-2 mb-8">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <button onClick={handleBack} className="text-sm font-medium">
          Back
        </button>
      </div>

      <div className="relative">
        {RESUME_STEPS.map((step, index) => (
          <div key={step.id} className="flex items-center mb-8">
            <div className="relative">
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                  ${step.id < currentStep ? 'bg-white border-white' : 
                    step.id === currentStep ? 'border-white' : 'border-white/50'}`}
              >
                {step.id < currentStep ? (
                  <svg className="w-5 h-5 text-[#0088FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className={step.id === currentStep ? 'text-white' : 'text-white/50'}>
                    {step.id}
                  </span>
                )}
              </div>
              {index < RESUME_STEPS.length - 1 && (
                <div
                  className={`absolute left-4 top-8 w-0.5 h-8 
                    ${step.id < currentStep ? 'bg-white' : 'bg-white/50'}`}
                />
              )}
            </div>
            <span className={`ml-4 ${step.id === currentStep ? 'text-white' : 'text-white/50'}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}; 