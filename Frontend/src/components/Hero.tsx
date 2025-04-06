export function Hero() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Top Hero Section */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center flex-grow relative z-10">
        {/* Left Column */}
        <div className="mb-12 lg:mb-0">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-500">UNI</span>Resume
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create your professional resume at ease!
          </p>
          <p className="text-gray-600 mb-8">
            Resume Building: Now Faster, Smarter, and Easier
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors">
            Create My Professional Resume
          </button>
        </div>

        {/* Right Column - Illustration */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2070"
            alt="Professional working on resume"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}