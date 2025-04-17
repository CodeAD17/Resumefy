import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepNavigation } from '../components/StepNavigation';

export const SkillsPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const steps = [
    { id: 1, title: 'Header', path: '/resume-builder' },
    { id: 2, title: 'Education', path: '/resume-builder/education' },
    { id: 3, title: 'Skills', path: '/resume-builder/skills' },
    { id: 4, title: 'Projects', path: '/resume-builder/projects' },
    { id: 5, title: 'Experience', path: '/resume-builder/experience' },
    { id: 6, title: 'Achievements', path: '/resume-builder/achievements' },
    { id: 7, title: 'Review', path: '/resume-builder/review' },
  ];

  // Mock skills data - in a real app, this could come from an API
  const suggestedSkills = [
    'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS',
    'Node.js', 'Python', 'Java', 'C++', 'SQL',
    'Git', 'Docker', 'AWS', 'MongoDB', 'Express.js'
  ];

  const handleAddSkill = (skill: string) => {
    if (selectedSkills.length < 8 && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleNext = () => {
    if (selectedSkills.length >= 1) {
      navigate('/resume-builder/projects');
    }
  };

  const filteredSkills = suggestedSkills.filter(skill =>
    skill.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StepNavigation steps={steps} currentStep={currentStep} />

      {/* Right Side - Form Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-12 min-h-[90vh]">
          <h2 className="text-4xl font-bold text-[#0088FF] mb-6">Add your skills</h2>
          <p className="text-gray-600 mb-4 text-xl">We recommend including 6-8 skills</p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Left Column - Search and Suggestions */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search for skills"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg pr-12"
                />
                <svg
                  className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <p className="text-gray-600 mb-4">
                Showing {filteredSkills.length} results for {searchQuery || 'all skills'}
              </p>

              <div className="flex flex-wrap gap-2">
                {filteredSkills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleAddSkill(skill)}
                    disabled={selectedSkills.includes(skill)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border 
                      ${selectedSkills.includes(skill)
                        ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                        : 'border-[#0088FF] text-[#0088FF] hover:bg-blue-50'
                      }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Selected Skills */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Selected Skills</h3>
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0088FF] text-white"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="hover:text-red-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                {selectedSkills.length === 0 && (
                  <p className="text-gray-500">Add ready-to-use skills or write your own...</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-16">
            <button
              type="button"
              onClick={() => navigate('/resume-builder/education')}
              className="text-[#0088FF] px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={selectedSkills.length === 0}
              className={`px-12 py-4 rounded-full text-lg font-medium transition-colors duration-200
                ${selectedSkills.length === 0
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