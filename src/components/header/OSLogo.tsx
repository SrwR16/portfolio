import React from "react";

interface OSLogoProps {
  osType: string;
}

const OSLogo: React.FC<OSLogoProps> = ({ osType }) => {
  const iconClass = "text-gray-900 dark:text-gray-100 h-6 w-6";

  switch (osType.toLowerCase()) {
    case "linux":
      return <img src="/icons/linux-logo.svg" alt="Linux" className={iconClass} />;
    case "windows":
      return <img src="/icons/windows-logo.svg" alt="Windows" className={iconClass} />;
    case "macos":
      return <img src="/icons/apple-logo.svg" alt="MacOS" className={iconClass} />;
    case "android":
      return <img src="/icons/android-logo.svg" alt="Android" className={iconClass} />;
    default:
      return <img src="/icons/linux-logo.svg" alt="OS" className={iconClass} />;
  }
};

export default OSLogo;
