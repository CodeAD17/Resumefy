import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepNavigation } from '../components/StepNavigation';

interface Experience {
  id: number;
  jobTitle: string;
  employer: string;
  city: string;
  country: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  responsibilities: string[];
  achievements: string[];
}

export const ExperiencePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(5);
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      jobTitle: '',
      employer: '',
      city: '',
      country: '',
      startDate: '',
      endDate: '',
      isCurrentJob: false,
      responsibilities: [''],
      achievements: [''],
    },
  ]);

  const handleExperienceChange = (
    id: number,
    field: keyof Experience,
    value: string | boolean | string[]
  ) => {
    setExperiences(experiences.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const handleResponsibilityChange = (expId: number, index: number, value: string) => {
    const experience = experiences.find(exp => exp.id === expId);
    if (experience) {
      const newResponsibilities = [...experience.responsibilities];
      newResponsibilities[index] = value;
      handleExperienceChange(expId, 'responsibilities', newResponsibilities);
    }
  };

  const handleAchievementChange = (expId: number, index: number, value: string) => {
    const experience = experiences.find(exp => exp.id === expId);
    if (experience) {
      const newAchievements = [...experience.achievements];
      newAchievements[index] = value;
      handleExperienceChange(expId, 'achievements', newAchievements);
    }
  };

  const addResponsibility = (expId: number) => {
    const experience = experiences.find(exp => exp.id === expId);
    if (experience) {
      handleExperienceChange(expId, 'responsibilities', [...experience.responsibilities, '']);
    }
  };

  const addAchievement = (expId: number) => {
    const experience = experiences.find(exp => exp.id === expId);
    if (experience) {
      handleExperienceChange(expId, 'achievements', [...experience.achievements, '']);
    }
  };

  const removeResponsibility = (expId: number, index: number) => {
    const experience = experiences.find(exp => exp.id === expId);
    if (experience && experience.responsibilities.length > 1) {
      const newResponsibilities = experience.responsibilities.filter((_, i) => i !== index);
      handleExperienceChange(expId, 'responsibilities', newResponsibilities);
    }
  };

  const removeAchievement = (expId: number, index: number) => {
    const experience = experiences.find(exp => exp.id === expId);
    if (experience && experience.achievements.length > 1) {
      const newAchievements = experience.achievements.filter((_, i) => i !== index);
      handleExperienceChange(expId, 'achievements', newAchievements);
    }
  };

  const addNewExperience = () => {
    if (experiences.length < 4) {
      setExperiences([
        ...experiences,
        {
          id: experiences.length + 1,
          jobTitle: '',
          employer: '',
          city: '',
          country: '',
          startDate: '',
          endDate: '',
          isCurrentJob: false,
          responsibilities: [''],
          achievements: [''],
        },
      ]);
    }
  };

  const removeExperience = (id: number) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter(exp => exp.id !== id));
    }
  };

  const handleNext = () => {
    const hasValidExperience = experiences.some(
      exp => exp.jobTitle && exp.employer && exp.responsibilities.some(r => r.trim())
    );
    if (hasValidExperience) {
      navigate('/resume-builder/download');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StepNavigation currentStep={currentStep} />

      {/* Right Side - Form Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-12 min-h-[90vh]">
          <h2 className="text-4xl font-bold text-[#0088FF] mb-6">Let's work on your experience</h2>
          <p className="text-gray-600 mb-8 text-xl">
            Add your work experience, starting with your most recent position.
          </p>

          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="border border-gray-200 rounded-lg p-6 space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Experience {experience.id}
                  </h3>
                  {experiences.length > 1 && (
                    <button
                      onClick={() => removeExperience(experience.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={experience.jobTitle}
                      onChange={(e) => handleExperienceChange(experience.id, 'jobTitle', e.target.value)}
                      placeholder="e.g., Software Engineer"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      Employer
                    </label>
                    <input
                      type="text"
                      value={experience.employer}
                      onChange={(e) => handleExperienceChange(experience.id, 'employer', e.target.value)}
                      placeholder="Company name"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      City
                    </label>
                    <input
                      type="text"
                      value={experience.city}
                      onChange={(e) => handleExperienceChange(experience.id, 'city', e.target.value)}
                      placeholder="City"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      Country
                    </label>
                    <input
                      type="text"
                      value={experience.country}
                      onChange={(e) => handleExperienceChange(experience.id, 'country', e.target.value)}
                      placeholder="Country"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      Start Date
                    </label>
                    <input
                      type="month"
                      value={experience.startDate}
                      onChange={(e) => handleExperienceChange(experience.id, 'startDate', e.target.value)}
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      End Date
                    </label>
                    <div className="space-y-2">
                      <input
                        type="month"
                        value={experience.endDate}
                        onChange={(e) => handleExperienceChange(experience.id, 'endDate', e.target.value)}
                        disabled={experience.isCurrentJob}
                        className={`w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg
                          ${experience.isCurrentJob ? 'bg-gray-100' : ''}`}
                      />
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={experience.isCurrentJob}
                          onChange={(e) => {
                            handleExperienceChange(experience.id, 'isCurrentJob', e.target.checked);
                            if (e.target.checked) {
                              handleExperienceChange(experience.id, 'endDate', '');
                            }
                          }}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-gray-700">I currently work here</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Key Responsibilities
                  </label>
                  {experience.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={responsibility}
                        onChange={(e) => handleResponsibilityChange(experience.id, index, e.target.value)}
                        placeholder="Add a key responsibility"
                        className="flex-1 px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                      />
                      {experience.responsibilities.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeResponsibility(experience.id, index)}
                          className="px-4 text-red-500 hover:text-red-600"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addResponsibility(experience.id)}
                    className="text-[#0088FF] font-medium hover:text-blue-600 flex items-center gap-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Responsibility
                  </button>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Key Achievements
                  </label>
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={achievement}
                        onChange={(e) => handleAchievementChange(experience.id, index, e.target.value)}
                        placeholder="Add a key achievement"
                        className="flex-1 px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                      />
                      {experience.achievements.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeAchievement(experience.id, index)}
                          className="px-4 text-red-500 hover:text-red-600"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addAchievement(experience.id)}
                    className="text-[#0088FF] font-medium hover:text-blue-600 flex items-center gap-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Achievement
                  </button>
                </div>
              </div>
            ))}
          </div>

          {experiences.length < 4 && (
            <button
              type="button"
              onClick={addNewExperience}
              className="mt-6 flex items-center gap-2 text-[#0088FF] font-medium hover:text-blue-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Another Experience
            </button>
          )}

          <div className="flex justify-between mt-16">
            <button
              type="button"
              onClick={() => navigate('/resume-builder/projects')}
              className="text-[#0088FF] px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!experiences.some(
                exp => exp.jobTitle && exp.employer && exp.responsibilities.some(r => r.trim())
              )}
              className={`px-12 py-4 rounded-full text-lg font-medium transition-colors duration-200
                ${!experiences.some(
                  exp => exp.jobTitle && exp.employer && exp.responsibilities.some(r => r.trim())
                )
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#0088FF] text-white hover:bg-blue-600'
                }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 