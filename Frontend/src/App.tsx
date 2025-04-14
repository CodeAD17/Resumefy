import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SignupPage } from './components/SignupPage';
import { Dashboard } from './components/Dashboard';
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
      </Routes>
    </Router>
  );
}

export default App;