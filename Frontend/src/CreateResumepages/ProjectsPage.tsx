import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepNavigation } from '../components/StepNavigation';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  hostedLink: string;
  startDate: string;
  endDate: string;
}

export const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(4);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: '',
      description: '',
      techStack: [],
      githubLink: '',
      hostedLink: '',
      startDate: '',
      endDate: '',
    },
  ]);
  const [currentTechInput, setCurrentTechInput] = useState('');

  const steps = [
    { id: 1, title: 'Header', path: '/resume-builder' },
    { id: 2, title: 'Education', path: '/resume-builder/education' },
    { id: 3, title: 'Skills', path: '/resume-builder/skills' },
    { id: 4, title: 'Projects', path: '/resume-builder/projects' },
    { id: 5, title: 'Experience', path: '/resume-builder/experience' },
    { id: 6, title: 'Achievements', path: '/resume-builder/achievements' },
    { id: 7, title: 'Review', path: '/resume-builder/review' },
  ];

  const handleProjectChange = (
    id: number,
    field: keyof Project,
    value: string | string[]
  ) => {
    setProjects(projects.map(project =>
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  const handleAddTechStack = (projectId: number) => {
    if (currentTechInput.trim()) {
      const project = projects.find(p => p.id === projectId);
      if (project && !project.techStack.includes(currentTechInput.trim())) {
        handleProjectChange(projectId, 'techStack', [...project.techStack, currentTechInput.trim()]);
      }
      setCurrentTechInput('');
    }
  };

  const handleRemoveTechStack = (projectId: number, tech: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      handleProjectChange(
        projectId,
        'techStack',
        project.techStack.filter(t => t !== tech)
      );
    }
  };

  const addNewProject = () => {
    if (projects.length < 4) {
      setProjects([
        ...projects,
        {
          id: projects.length + 1,
          title: '',
          description: '',
          techStack: [],
          githubLink: '',
          hostedLink: '',
          startDate: '',
          endDate: '',
        },
      ]);
    }
  };

  const removeProject = (id: number) => {
    if (projects.length > 1) {
      setProjects(projects.filter(project => project.id !== id));
    }
  };

  const handleNext = () => {
    // Validate at least one project with required fields
    const hasValidProject = projects.some(
      project => project.title && project.description && project.techStack.length > 0
    );
    if (hasValidProject) {
      navigate('/resume-builder/experience');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StepNavigation steps={steps} currentStep={currentStep} />

      {/* Right Side - Form Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-12 min-h-[90vh]">
          <h2 className="text-4xl font-bold text-[#0088FF] mb-6">Add your projects</h2>
          <p className="text-gray-600 mb-8 text-xl">
            Showcase your best work. Add up to 4 projects that highlight your skills.
          </p>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-lg p-6 space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Project {project.id}
                  </h3>
                  {projects.length > 1 && (
                    <button
                      onClick={() => removeProject(project.id)}
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
                      Project Title
                    </label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
                      placeholder="Enter project title"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-3">
                        Start Date
                      </label>
                      <input
                        type="month"
                        value={project.startDate}
                        onChange={(e) => handleProjectChange(project.id, 'startDate', e.target.value)}
                        className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-3">
                        End Date
                      </label>
                      <input
                        type="month"
                        value={project.endDate}
                        onChange={(e) => handleProjectChange(project.id, 'endDate', e.target.value)}
                        className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Project Description
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                    placeholder="Describe your project, its features, and your role"
                    rows={4}
                    className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg resize-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Tech Stack
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={currentTechInput}
                      onChange={(e) => setCurrentTechInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTechStack(project.id);
                        }
                      }}
                      placeholder="Add technologies used"
                      className="flex-1 px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddTechStack(project.id)}
                      className="px-6 py-4 bg-[#0088FF] text-white rounded-lg hover:bg-blue-600"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800"
                      >
                        {tech}
                        <button
                          onClick={() => handleRemoveTechStack(project.id, tech)}
                          className="hover:text-red-500"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      GitHub Repository Link
                    </label>
                    <input
                      type="url"
                      value={project.githubLink}
                      onChange={(e) => handleProjectChange(project.id, 'githubLink', e.target.value)}
                      placeholder="https://github.com/username/repo"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      Hosted Project Link
                    </label>
                    <input
                      type="url"
                      value={project.hostedLink}
                      onChange={(e) => handleProjectChange(project.id, 'hostedLink', e.target.value)}
                      placeholder="https://your-project.com"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length < 4 && (
            <button
              type="button"
              onClick={addNewProject}
              className="mt-6 flex items-center gap-2 text-[#0088FF] font-medium hover:text-blue-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Another Project
            </button>
          )}

          <div className="flex justify-between mt-16">
            <button
              type="button"
              onClick={() => navigate('/resume-builder/skills')}
              className="text-[#0088FF] px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!projects.some(
                project => project.title && project.description && project.techStack.length > 0
              )}
              className={`px-12 py-4 rounded-full text-lg font-medium transition-colors duration-200
                ${!projects.some(
                  project => project.title && project.description && project.techStack.length > 0
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