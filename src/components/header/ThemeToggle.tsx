import React, { useRef } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const iconWrapperRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (iconWrapperRef.current) {
      iconWrapperRef.current.classList.remove('toggle-rotate');
      void iconWrapperRef.current.offsetWidth;
      iconWrapperRef.current.classList.add('toggle-rotate');
    }
    
    toggleTheme();
  };

  return (
    <button
      className="theme-switch rounded-full w-9 h-9 flex items-center justify-center transition hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={handleToggle}
    >
      <div 
        ref={iconWrapperRef} 
        className="icon-wrapper flex items-center justify-center"
      >
        {isDarkMode ? (
          <Sun size={20} className="text-white" />
        ) : (
          <Moon size={20} className="text-gray-900" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;