import React, { useEffect, useState } from "react";
import { useOS } from "../../hooks/useOS";
import { useTheme } from "../theme/ThemeContext";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import OSLogo from "./OSLogo";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { osType } = useOS();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("~/ ");
  const [displayPath, setDisplayPath] = useState("~/ ");
  const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
  const [isHomePage, setIsHomePage] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path: string) => {
    // Check if we're already on the same page (either homepage or any section)
    const isAlreadyOnSamePage = currentPath === path;

    // Don't do anything if we're clicking the same section we're already on
    if (isAlreadyOnSamePage) {
      return;
    }

    setCurrentPath(path);
    setIsMobileMenuOpen(false);
    setIsHomePage(path === "~/ ");

    // Cancel any ongoing typing animation
    if (typingTimer) {
      clearTimeout(typingTimer);
    }

    // Start typing animation
    let currentIndex = 0;
    const typeNextChar = () => {
      if (currentIndex < path.length) {
        setDisplayPath(path.substring(0, currentIndex + 1));
        currentIndex++;
        const timer = setTimeout(typeNextChar, 100); // Speed of typing
        setTypingTimer(timer);
      }
    };

    typeNextChar();
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (typingTimer) {
        clearTimeout(typingTimer);
      }
    };
  }, [typingTimer]);

  return (
    <header className="pointer-events-none fixed left-0 right-0 z-50 flex h-14 origin-top mt-8">
      <div className="fixed inset-x-0 top-0 h-32 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"></div>

      <div className="w-full max-w-3xl mx-auto px-2 xl:px-0">
        <div
          className={`
            h-[58px] p-2 rounded-2xl border relative z-50 pointer-events-auto flex justify-between
            gap-0.5 px-1 items-center transition-all duration-300
            supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md
            [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]
            dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
            sm:gap-1 md:gap-2
          `}
        >
          <a
            href="/"
            className="transition-all"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("~/ ");
            }}
          >
            <button className="transition-transform transform hover:scale-110 flex h-6 items-center justify-between rounded-xl p-5 font-mono text-xl font-semibold space-x-2 text-gray-900 dark:text-gray-100">
              <div className="flex items-center space-x-2">
                <OSLogo osType={osType} />
                <img
                  src="/icons/arrow-icon.svg"
                  alt="Arrow"
                  className="hidden md:block h-6 w-6"
                  style={{ filter: isDarkMode ? "invert(100%)" : "none" }}
                />
                {isHomePage ? (
                  <img
                    src="/icons/home-icon.svg"
                    alt="Home"
                    className="hidden md:block h-6 w-6"
                    style={{ filter: isDarkMode ? "invert(100%)" : "none" }}
                  />
                ) : (
                  <img
                    src="/icons/folder-icon.svg"
                    alt="Folder"
                    className="hidden md:block h-6 w-6"
                    style={{ filter: isDarkMode ? "invert(100%)" : "none" }}
                  />
                )}
              </div>

              <div className="font-mono inline-flex items-center text-gray-900 dark:text-gray-100">
                <span style={{ paddingLeft: "0px", marginLeft: "0px" }}>&nbsp;{displayPath}</span>
                <span
                  className="ml-2 w-[0.2ch] h-[1.1em] animate-blink"
                  style={{ backgroundColor: "currentColor" }}
                ></span>
              </div>
            </button>
          </a>

          <div className="flex items-center text-base leading-5 p-5 pr-6">
            <Navigation onNavigate={handleNavigation} currentPath={currentPath} />

            <div className="ml-5">
              <ThemeToggle />
            </div>

            <div className="sm:hidden">
              <button
                type="button"
                className="ml-2 mr-0 h-8 w-8 rounded py-1"
                aria-label="Toggle Menu"
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-gray-900 dark:text-gray-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} onNavigate={handleNavigation} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
