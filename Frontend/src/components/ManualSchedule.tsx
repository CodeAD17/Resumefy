import React from 'react';
import { Calendar, Plus } from 'lucide-react';

const ManualSchedule: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Manual Interview Scheduling</h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-all transform hover:scale-105">
            <Plus size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-center h-48 border-2 border-dashed border-gray-200 rounded-lg">
          <div className="text-center">
            <Calendar size={48} className="mx-auto text-gray-400 mb-3" />
            <p className="text-gray-500">Click + to schedule an interview manually</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualSchedule;