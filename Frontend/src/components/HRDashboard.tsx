import React from 'react';

const HRDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#FDFDFD]">
      {/* Sidebar */}
      <div className="w-1/4 bg-gradient-to-b from-[#FF8C00] to-[#FF6A00] text-white p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">HR Profile</h2>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-[#FF8C00]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12c2.28 0 4.14-1.86 4.14-4.14S14.28 3.72 12 3.72 7.86 5.58 7.86 7.86 9.72 12 12 12z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14.28c-3.72 0-7.14 1.86-7.14 4.14v1.44h14.28v-1.44c0-2.28-3.42-4.14-7.14-4.14z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Company Name</h3>
          </div>
          <ul className="space-y-4 text-sm">
            <li>List of applicants (Above ATS Score)</li>
            <li>Candidates according to their rank</li>
            <li>Interview Schedule</li>
            <li>Job Description</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#FF8C00]">Resumify.<span className="text-[#FF6A00]">AI</span></h1>
          <h2 className="text-2xl font-bold text-[#FF6A00]">HR DASHBOARD</h2>
        </header>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#FF6A00] mb-6">Applicants</h3>
          <div className="space-y-4">
            {/* Applicant 1 */}
            <div className="flex justify-between items-center border border-[#FF6A00] rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12c2.28 0 4.14-1.86 4.14-4.14S14.28 3.72 12 3.72 7.86 5.58 7.86 7.86 9.72 12 12 12z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14.28c-3.72 0-7.14 1.86-7.14 4.14v1.44h14.28v-1.44c0-2.28-3.42-4.14-7.14-4.14z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Applicant 1</h4>
                  <p className="text-sm text-gray-600">Rank - 1</p>
                </div>
              </div>
              <button className="bg-[#FF6A00] text-white px-4 py-2 rounded-lg">+</button>
            </div>

            {/* Applicant 2 */}
            <div className="flex justify-between items-center border border-[#FF6A00] rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12c2.28 0 4.14-1.86 4.14-4.14S14.28 3.72 12 3.72 7.86 5.58 7.86 7.86 9.72 12 12 12z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14.28c-3.72 0-7.14 1.86-7.14 4.14v1.44h14.28v-1.44c0-2.28-3.42-4.14-7.14-4.14z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Applicant 2</h4>
                  <p className="text-sm text-gray-600">Rank - 2</p>
                </div>
              </div>
              <button className="bg-[#FF6A00] text-white px-4 py-2 rounded-lg">+</button>
            </div>

            {/* Applicant 3 */}
            <div className="flex justify-between items-center border border-[#FF6A00] rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12c2.28 0 4.14-1.86 4.14-4.14S14.28 3.72 12 3.72 7.86 5.58 7.86 7.86 9.72 12 12 12z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14.28c-3.72 0-7.14 1.86-7.14 4.14v1.44h14.28v-1.44c0-2.28-3.42-4.14-7.14-4.14z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Applicant 3</h4>
                  <p className="text-sm text-gray-600">Rank - 3</p>
                </div>
              </div>
              <button className="bg-[#FF6A00] text-white px-4 py-2 rounded-lg">+</button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#FF6A00] text-white px-6 py-3 rounded-lg text-lg font-bold">
            See full list
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Click above button to see the list of applicants
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;