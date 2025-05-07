import { Cuboid as Android, Apple, Link as Linux, AppWindow as Windows } from "lucide-react";
import React from "react";
import { OSType } from "../../types/os";

interface OSLogoProps {
  osType: OSType;
}

const OSLogo: React.FC<OSLogoProps> = ({ osType }) => {
  const iconSize = 24;
  const iconClass = "text-gray-900 dark:text-gray-100";

  switch (osType) {
    case "linux":
      return <Linux size={iconSize} className={iconClass} aria-label="Linux operating system" />;
    case "windows":
      return <Windows size={iconSize} className={iconClass} aria-label="Windows operating system" />;
    case "apple":
      return <Apple size={iconSize} className={iconClass} aria-label="Apple operating system" />;
    case "android":
      return <Android size={iconSize} className={iconClass} aria-label="Android operating system" />;
    default:
      return <Linux size={iconSize} className={iconClass} aria-label="Default operating system" />;
  }
};

export default OSLogo;
