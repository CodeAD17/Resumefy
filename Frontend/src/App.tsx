import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation Component */}
      <Navigation />

      {/* Main Content */}
      <main className="relative pt-16 pb-16 sm:pb-24 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Component */}
          <Hero />
        </div>
      </main>
    </div>
  );
}

export default App;