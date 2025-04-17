import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepNavigation } from '../components/StepNavigation';

export const EducationPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(2);

  const handleNext = () => {
    navigate('/resume-builder/skills');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StepNavigation currentStep={currentStep} />

      {/* Right Side - Form Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-12 min-h-[90vh]">
          <h2 className="text-4xl font-bold text-[#0088FF] mb-6">Let's add your education details</h2>
          <p className="text-gray-600 mb-12 text-xl">Tell us about your educational background.</p>

          <form className="space-y-10">
            {/* School Details */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">School Details</h3>
              
              <div className="grid grid-cols-2 gap-10 mb-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">School Name</label>
                  <input
                    type="text"
                    placeholder="School Name"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">School Board</label>
                  <input
                    type="text"
                    placeholder="e.g., CBSE, ICSE, State Board"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 mb-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Start Year</label>
                  <input
                    type="number"
                    placeholder="e.g., 2010"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">End Year</label>
                  <input
                    type="number"
                    placeholder="e.g., 2020"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Percentage/CGPA</label>
                  <input
                    type="text"
                    placeholder="e.g., 85% or 8.5 CGPA"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Location</label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>
            </div>

            {/* College Details */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">College Details</h3>
              
              <div className="grid grid-cols-2 gap-10 mb-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">College Name</label>
                  <input
                    type="text"
                    placeholder="College Name"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Degree</label>
                  <input
                    type="text"
                    placeholder="e.g., B.Tech, B.E., B.Sc."
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 mb-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Field of Study</label>
                  <input
                    type="text"
                    placeholder="e.g., Computer Science, Mechanical Engineering"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">University</label>
                  <input
                    type="text"
                    placeholder="University Name"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 mb-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Start Year</label>
                  <input
                    type="number"
                    placeholder="e.g., 2020"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">End Year</label>
                  <input
                    type="number"
                    placeholder="e.g., 2024"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Percentage/CGPA</label>
                  <input
                    type="text"
                    placeholder="e.g., 8.5 CGPA"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Location</label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Additional Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Additional Education (Optional)</h3>
              
              <div className="grid grid-cols-2 gap-10 mb-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Course/Certification</label>
                  <input
                    type="text"
                    placeholder="e.g., AWS Certified, Google Data Analytics"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Institution</label>
                  <input
                    type="text"
                    placeholder="Institution Name"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Year</label>
                  <input
                    type="number"
                    placeholder="e.g., 2023"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Score/Grade</label>
                  <input
                    type="text"
                    placeholder="e.g., A+, 95%"
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-16">
              <button
                type="button"
                onClick={() => navigate('/resume-builder')}
                className="text-[#0088FF] px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Back
              </button>
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