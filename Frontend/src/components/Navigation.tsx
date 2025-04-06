import { Monitor } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 p-6 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Monitor className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold text-gray-800">UNIWORLD</span>
        </div>
        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
          Create with your credential
        </button>
      </div>
    </nav>
  );
}