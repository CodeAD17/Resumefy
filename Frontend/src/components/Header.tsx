import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-8">
                    <div className='flex'>

                        <h1 className="text-2xl font-bold bg-gradient-to-r text-black bg-clip-text">
                            Resumify
                        </h1>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            .AI
                        </h1>
                    </div>
                    <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
                        <Search size={20} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search applicants..."
                            className="bg-transparent outline-none text-gray-600 placeholder-gray-400 w-64"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between md:justify-end space-x-6">
                    <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <Bell size={24} className="text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
                    </button>
                    <h2 className="text-3xl font-bold text-orange-500">HR DASHBOARD</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;