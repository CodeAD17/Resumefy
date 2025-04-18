import React from 'react';
import ApplicantCard from './ApplicantCard';
import { ListFilter } from 'lucide-react';

const ApplicantList: React.FC = () => {
  const applicants = [
    { id: 1, name: 'Applicant 1', rank: 1, score: 95 },
    { id: 2, name: 'Applicant 2', rank: 2, score: 88 },
    { id: 3, name: 'Applicant 3', rank: 3, score: 82 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">Applicants</h2>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
            <ListFilter size={20} />
            <span>Filter</span>
          </button>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {applicants.map(applicant => (
          <ApplicantCard 
            key={applicant.id}
            name={applicant.name}
            rank={applicant.rank}
            score={applicant.score}
          />
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 flex flex-col items-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 hover:shadow-lg">
          See full list
        </button>
        <p className="text-gray-500 mt-3 text-sm">
          Click above button to see the list of applicants
        </p>
      </div>
    </div>
  );
};

export default ApplicantList;