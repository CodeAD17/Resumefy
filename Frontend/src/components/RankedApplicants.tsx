import React from 'react';
import { Trophy } from 'lucide-react';

const RankedApplicants: React.FC = () => {
  const topApplicants = [
    { rank: 1, name: 'John Doe', score: 95 },
    { rank: 2, name: 'Jane Smith', score: 92 },
    { rank: 3, name: 'Mike Johnson', score: 88 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Top Ranked Applicants</h2>
      </div>
      
      <div className="divide-y divide-gray-100">
        {topApplicants.map((applicant) => (
          <div key={applicant.rank} className="p-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 rounded-full p-2">
                <Trophy size={20} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{applicant.name}</h3>
                <p className="text-sm text-gray-500">Rank #{applicant.rank}</p>
              </div>
            </div>
            <span className="text-lg font-semibold text-orange-500">{applicant.score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankedApplicants;