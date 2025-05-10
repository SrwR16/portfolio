import React, { useCallback, useEffect, useState } from "react";
import { useOS } from "../../hooks/useOS";
import { useTheme } from "../theme/ThemeContext";
import MobileMenu from "./MobileMenu";
import OSLogo from "./OSLogo";
import ThemeToggle from "./ThemeToggle";

// Define the sections in the order they appear on the page
const SECTIONS = [
  { id: "home", path: "~/ " },
  { id: "about", path: "~/about " },
  { id: "skills", path: "~/skills " },
  { id: "experience", path: "~/experience " },
  { id: "studies", path: "~/studies " },
  { id: "projects", path: "~/projects " },
  { id: "freelancer", path: "~/freelancer " },
  { id: "contact", path: "~/contact " },
];

const Header: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { osType } = useOS();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("~/ ");
  const [displayPath, setDisplayPath] = useState("~/ ");
  const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
  const [isHomePage, setIsHomePage] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [sectionInView, setSectionInView] = useState("home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Function to start the typing animation
  const startTypingAnimation = useCallback(
    (path: string) => {
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
    },
    [typingTimer]
  );

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
    startTypingAnimation(path);
  };

  // Detect current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Detect which section is in view
      const sectionElements = SECTIONS.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
        path: section.path,
      }));

      // Find the current section
      const viewportHeight = window.innerHeight;
      let currentSectionId = "home";
      let currentSectionPath = "~/ ";

      sectionElements.forEach(({ id, element, path }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section in view if its top is within the viewport or if it's the last section and we're at the bottom
          if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.1) {
            currentSectionId = id;
            currentSectionPath = path;
          }
        }
      });

      // Update the current section if it changed
      if (sectionInView !== currentSectionId) {
        setSectionInView(currentSectionId);
        // Only update path and do typing animation if this is from scrolling (not clicking navigation)
        if (currentPath !== currentSectionPath) {
          setCurrentPath(currentSectionPath);
          setIsHomePage(currentSectionId === "home");
          startTypingAnimation(currentSectionPath);
        }
      }
    };

    // Initial check
    handleScroll();

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath, sectionInView, startTypingAnimation]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (typingTimer) {
        clearTimeout(typingTimer);
      }
    };
  }, [typingTimer]);

  const headerMarginClass = scrolled ? "mt-4 md:mt-4" : "mt-8 md:mt-8";

  return (
    <header
      className={`terminal-header pointer-events-none fixed left-0 right-0 z-50 flex h-14 origin-top ${headerMarginClass} transition-all duration-300`}
    >
      <div className="terminal-header fixed inset-x-0 top-0 h-28 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent)]"></div>

      <div className="w-full max-w-3xl mx-auto px-3 xl:px-0">
        <div
          className={`
            h-[58px] p-2 rounded-2xl border relative z-50 pointer-events-auto flex justify-between
            gap-0.5 px-1 items-center transition-all duration-300
            supports-backdrop-blur:bg-white/20 supports-backdrop-blur:dark:bg-black/20 backdrop-blur-lg
            [box-shadow:0_0_0_1px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.1),0_12px_24px_rgba(0,0,0,.1)]
            dark:[border:1px_solid_rgba(255,255,255,.15)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
            sm:gap-1 md:gap-2
          `}
        >
          <a
            href="#home"
            className="transition-all"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
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

          <div className="flex items-center text-base leading-5 p-4 pr-5">
            <div>
              <ThemeToggle />
            </div>

            <div>
              <button
                type="button"
                className={`ml-2 mr-0 h-8 w-8 rounded flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen ? "bg-gray-200 dark:bg-gray-700" : ""
                }`}
                aria-label="Toggle Menu"
                onClick={toggleMobileMenu}
              >
                <div className="relative w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-gray-900 dark:text-gray-100 absolute top-0 left-0 transform transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                    }`}
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`text-gray-900 dark:text-gray-100 absolute top-0 left-0 transform transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
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
