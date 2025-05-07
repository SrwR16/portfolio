import React from 'react';
import { Link as Linux, Apple, AppWindow as Windows, Cuboid as Android } from 'lucide-react';
import { OSType } from '../../types/os';

interface OSLogoProps {
  osType: OSType;
}

const OSLogo: React.FC<OSLogoProps> = ({ osType }) => {
  const iconSize = 24;

  switch (osType) {
    case 'linux':
      return (
        <Linux
          size={iconSize}
          className="text-primary"
          aria-label="Linux operating system"
        />
      );
    case 'windows':
      return (
        <Windows
          size={iconSize}
          className="text-primary"
          aria-label="Windows operating system"
        />
      );
    case 'apple':
      return (
        <Apple
          size={iconSize}
          className="text-primary"
          aria-label="Apple operating system"
        />
      );
    case 'android':
      return (
        <Android
          size={iconSize}
          className="text-primary"
          aria-label="Android operating system"
        />
      );
    default:
      return (
        <Linux
          size={iconSize}
          className="text-primary"
          aria-label="Default operating system"
        />
      );
  }
};

export default OSLogo;