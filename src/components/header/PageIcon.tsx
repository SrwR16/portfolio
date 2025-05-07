import React from 'react';
import { Home, Folder } from 'lucide-react';

interface PageIconProps {
  path: string;
}

const PageIcon: React.FC<PageIconProps> = ({ path }) => {
  const isHome = path === '~/ ' || path === '~/';
  
  return (
    <span id="page-icon" className="ml-2 flex items-center">
      {isHome ? (
        <Home 
          className="hidden md:block h-6 w-6" 
          aria-label="Home page" 
        />
      ) : (
        <Folder 
          className="hidden md:block h-6 w-6" 
          aria-label="Folder page" 
        />
      )}
    </span>
  );
};

export default PageIcon;