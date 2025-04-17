import React, { useState } from 'react';


interface ATSCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ATSCheckerModal: React.FC<ATSCheckerModalProps> = ({ isOpen, onClose }) => {
  const [score, setScore] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validTypes = [
        'application/msword', // .doc
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
        'application/pdf' // .pdf
      ];
      
      if (validTypes.includes(file.type)) {
        setSelectedFile(file);
      } else {
        alert('Please upload a .doc, .docx, or .pdf file');
      }
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile || !jobDescription) {
      alert('Please provide both a resume and job description');
      return;
    }
    setIsAnalyzing(true);
    // Simulate analysis (replace with actual API call)
    setTimeout(() => {
      setScore(Math.floor(Math.random() * 100));
      setIsAnalyzing(false);
    }, 2000);
  };

  // Calculate the circle's circumference and offset
  const radius = 50; // Reduced radius from 70 to 50
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-xl font-bold text-[#0088FF] mb-4">Check ATS score of your Resume</h2>

        <div className="flex flex-col items-center mb-4">
          <div className="relative w-32 h-32">
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-200"
              />
              {/* Progress circle */}
              <circle
                cx="64"
                cy="64"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="text-[#0088FF] transition-all duration-1000 ease-in-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-[#0088FF]">{score}%</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume
            </label>
            <div className="relative">
              <input
                type="text"
                readOnly
                value={selectedFile?.name || ''}
                placeholder="Attach your resume here"
                className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-20"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <label className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <input
                    type="file"
                    className="hidden"
                    accept=".doc,.docx,.pdf"
                    onChange={handleFileUpload}
                  />
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </label>
                {selectedFile && (
                  <button
                    type="button"
                    onClick={() => setSelectedFile(null)}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
                  >
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Supported formats: .doc, .docx, .pdf
            </p>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !selectedFile || !jobDescription}
            className={`w-full py-2.5 rounded-lg text-white font-medium text-base transition-colors
              ${isAnalyzing || !selectedFile || !jobDescription
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-[#0088FF] hover:bg-blue-600'
              }`}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
          </button>
        </div>
      </div>
    </div>
  );
}; 