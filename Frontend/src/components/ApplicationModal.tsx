import React, { useState } from 'react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  companyName,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Apply to {companyName}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {/* Contact Info Section */}
            <div>
              <h3 className="text-sm font-medium mb-4">Contact info</h3>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <input
                    type="text"
                    placeholder="Applicant Name"
                    className="bg-transparent border-none p-0 text-base font-medium focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                  <div className="text-sm text-gray-500">Applicant Detail</div>
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>

            {/* Resume Upload and Submit */}
            <div className="flex items-center justify-between">
              <div>
                <label className="inline-flex items-center px-4 py-2 rounded-full border border-[#0088FF] text-[#0088FF] cursor-pointer hover:bg-blue-50">
                  <span>Upload Resume</span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".doc,.docx,.pdf"
                    onChange={handleFileChange}
                  />
                </label>
                {formData.resume && (
                  <div className="mt-2 text-xs text-gray-500">
                    {formData.resume.name} ({Math.round(formData.resume.size / 1024)}KB)
                  </div>
                )}
                <div className="text-xs text-gray-400 mt-1">DOC, DOCX, PDF (5 MB)</div>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#0088FF] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 