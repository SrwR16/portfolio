import React, { useState } from "react";
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path: string) => {
    setCurrentPath(path);
    setIsMobileMenuOpen(false);
  };

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
            <button className="transition-transform transform hover:scale-110 flex h-6 items-center justify-between rounded-xl p-5 font-mono text-xl font-semibold space-x-2">
              <div className="flex items-center space-x-2">
                <OSLogo osType={osType} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="hidden md:block h-6 w-6"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475s35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="hidden md:block h-6 w-6"
                  width="1.13em"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93"
                  ></path>
                </svg>
              </div>

              <div className="font-mono inline-flex items-center">
                <span style={{ paddingLeft: "7px", marginLeft: "5px" }}>&nbsp;~/ </span>
                <span
                  className="ml-2 w-[0.2ch] h-[1.1em] animate-blink"
                  style={{ backgroundColor: "currentColor" }}
                ></span>
              </div>
            </button>
          </a>

          <div className="flex items-center text-base leading-5 p-5">
            <Navigation onNavigate={handleNavigation} currentPath={currentPath} />

            <ThemeToggle />

            <div className="sm:hidden">
              <button
                type="button"
                className="ml-1 mr-1 h-8 w-8 rounded py-1"
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
