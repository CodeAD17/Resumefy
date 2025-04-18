import React from 'react';
import { FileText, Plus } from 'lucide-react';

const JobDescription: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Job Description</h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-all transform hover:scale-105">
            <Plus size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-center h-48 border-2 border-dashed border-gray-200 rounded-lg">
          <div className="text-center">
            <FileText size={48} className="mx-auto text-gray-400 mb-3" />
            <p className="text-gray-500">Click + to add a new job description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;