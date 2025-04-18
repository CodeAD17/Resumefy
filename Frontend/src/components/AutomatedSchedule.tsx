import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const AutomatedSchedule: React.FC = () => {
  const interviews = [
    { time: '10:00 AM', candidate: 'Sarah Wilson', date: 'Today' },
    { time: '2:30 PM', candidate: 'Robert Brown', date: 'Tomorrow' },
    { time: '11:00 AM', candidate: 'Emily Davis', date: 'Mar 25' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Automated Interview Schedule</h2>
      </div>
      
      <div className="divide-y divide-gray-100">
        {interviews.map((interview, index) => (
          <div key={index} className="p-4 flex items-center space-x-4 hover:bg-gray-50">
            <div className="bg-blue-100 rounded-full p-2">
              <Calendar size={20} className="text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{interview.candidate}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Clock size={14} className="mr-1" />
                <span>{interview.time} - {interview.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomatedSchedule;