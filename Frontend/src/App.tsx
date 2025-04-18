import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SignupPage } from './components/SignupPage';
import { Dashboard } from './components/Dashboard';
import { ResumeBuilderPage } from './CreateResumepages/ResumeBuilderPage';
import { EducationPage } from './CreateResumepages/EducationPage';
import { SkillsPage } from './CreateResumepages/SkillsPage';
import { ProjectsPage } from './CreateResumepages/ProjectsPage';
import { ExperiencePage } from './CreateResumepages/ExperiencePage';
import { DownloadResumePage } from './CreateResumepages/DownloadResumePage';
import { ATSCheckerModal } from './components/ATSCheckerModal';
import HRDashboard from './components/HRDashboard'
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen bg-white relative overflow-hidden">
              {/* Navigation Component */}
              <Navigation />

              {/* Main Content */}
              <main className="relative pt-16 sm:pt-20 lg:pt-24 h-[calc(100%-4rem)]">
                <div className="max-w-7xl mx-auto px-6">
                  {/* Hero Component */}
                  <Hero />
                </div>
              </main>
            </div>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-builder" element={<ResumeBuilderPage />} />
        <Route path="/resume-builder/education" element={<EducationPage />} />
        <Route path="/resume-builder/skills" element={<SkillsPage />} />
        <Route path="/resume-builder/projects" element={<ProjectsPage />} />
        <Route path="/resume-builder/experience" element={<ExperiencePage />} />
        <Route path="/resume-builder/download" element={<DownloadResumePage />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />  
        {/* ATS Checker Route */}
        <Route
          path="/ats-checker"
          element={
            <ATSCheckerModal
              isOpen={true} // Set to true to display the modal
              onClose={() => {
                // Handle modal close logic here
                console.log('ATS Checker Modal closed');
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;