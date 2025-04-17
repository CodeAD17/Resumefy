import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepNavigation } from '../components/StepNavigation';

export const ResumeBuilderPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(1);

  const handleNext = () => {
    navigate('/resume-builder/education');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StepNavigation currentStep={currentStep} />

      {/* Right Side - Form Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-12 min-h-[90vh]">
          <h2 className="text-4xl font-bold text-[#0088FF] mb-6">Let's start with your header</h2>
          <p className="text-gray-600 mb-12 text-xl">Include your full name and multiple ways for employers to reach you.</p>

          <form className="space-y-10">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Country</label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Pincode</label>
                  <input
                    type="text"
                    placeholder="Pincode"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Phone</label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Email</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>
            </div>

            <div className="flex justify-end mt-16">
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#0088FF] text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors duration-200"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}; 