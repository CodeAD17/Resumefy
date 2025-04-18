import React from 'react';
import { X, User, Users, Calendar, FileText, Settings, LogOut } from 'lucide-react';
import NavItem from './NavItem';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'List of applicants (Above ATS Score)', icon: Users, isActive: true },
    { label: 'Candidates according to their rank', icon: User, isActive: false },
    { label: 'Interview Schedule', icon: Calendar, isActive: false },
    { label: 'Job description', icon: FileText, isActive: false },
  ];

  return (
    <aside 
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-orange-500 to-orange-600 text-white w-72 shadow-xl transition-transform duration-300 z-20 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="relative h-full flex flex-col p-6">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center mt-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
            <div className="bg-blue-100 rounded-full h-24 w-24 flex items-center justify-center border-4 border-white">
              <User size={48} className="text-blue-500" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-white">HR Profile</h2>
          <p className="text-orange-100 font-medium">Company name</p>
        </div>
        
        <div className="h-px bg-orange-400/30 w-full my-6" />
        
        <nav className="flex-1 mt-2">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <NavItem 
                key={index} 
                label={item.label} 
                icon={item.icon}
                isActive={item.isActive} 
              />
            ))}
          </ul>
        </nav>
        
        <div className="h-px bg-orange-400/30 w-full my-6" />
        
        <div className="space-y-2">
          <button className="w-full flex items-center space-x-2 px-4 py-2 text-orange-100 hover:text-white transition-colors rounded-lg">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button className="w-full flex items-center space-x-2 px-4 py-2 text-orange-100 hover:text-white transition-colors rounded-lg">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;