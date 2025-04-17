import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SignupPage } from './components/SignupPage';
import { Dashboard } from './components/Dashboard';
import { ResumeBuilderPage } from './pages/ResumeBuilderPage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { DownloadResumePage } from './pages/DownloadResumePage';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="h-screen bg-white relative overflow-hidden">
            {/* Navigation Component */}
            <Navigation />

            {/* Main Content */}
            <main className="relative pt-32 sm:pt-40 lg:pt-48 h-[calc(100%-4rem)]">
              <div className="max-w-7xl mx-auto px-6">
                {/* Hero Component */}
                <Hero />
              </div>  
            </main>
          </div>
        } />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-builder" element={<ResumeBuilderPage />} />
        <Route path="/resume-builder/education" element={<EducationPage />} />
        <Route path="/resume-builder/skills" element={<SkillsPage />} />
        <Route path="/resume-builder/projects" element={<ProjectsPage />} />
        <Route path="/resume-builder/experience" element={<ExperiencePage />} />
        <Route path="/resume-builder/download" element={<DownloadResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;