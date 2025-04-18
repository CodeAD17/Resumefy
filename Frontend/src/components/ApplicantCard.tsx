import React from 'react';
import { User, Plus, Star } from 'lucide-react';

interface ApplicantCardProps {
  name: string;
  rank: number;
  score: number;
}

const ApplicantCard: React.FC<ApplicantCardProps> = ({ name, rank, score }) => {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="bg-blue-100 rounded-full h-14 w-14 flex items-center justify-center border-2 border-blue-200">
              <User size={28} className="text-blue-500" />
            </div>
            {rank <= 3 && (
              <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
                <Star size={14} className="text-white" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
            <div className="flex items-center space-x-3 mt-1">
              <span className="text-gray-500">Rank - {rank}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-gray-500">ATS Score: {score}%</span>
            </div>
          </div>
        </div>
        
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-all transform hover:scale-105 hover:shadow-md">
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default ApplicantCard;