import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  label: string;
  icon: LucideIcon;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon: Icon, isActive }) => {
  return (
    <li>
      <a 
        href="#" 
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
          ${isActive 
            ? 'bg-white/10 text-white font-medium shadow-sm' 
            : 'text-orange-100 hover:bg-white/5 hover:text-white'
          }`}
      >
        <Icon size={20} />
        <span>{label}</span>
      </a>
    </li>
  );
};

export default NavItem;