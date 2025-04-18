import React from 'react';
import { Menu } from 'lucide-react';

interface MobileToggleProps {
  onClick: () => void;
}

const MobileToggle: React.FC<MobileToggleProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="md:hidden fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg z-30 hover:bg-orange-600 transition-all transform hover:scale-105 hover:shadow-xl"
      aria-label="Toggle sidebar"
    >
      <Menu size={24} />
    </button>
  );
};

export default MobileToggle;