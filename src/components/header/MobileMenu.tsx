import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const links = [
    { href: "#home", label: "Home", path: "~/ " },
    { href: "#about", label: "About", path: "~/about " },
    { href: "#skills", label: "Skills", path: "~/skills " },
    { href: "#experience", label: "Experience", path: "~/experience " },
    { href: "#studies", label: "Studies", path: "~/studies " },
    { href: "#projects", label: "Projects", path: "~/projects " },
    { href: "#freelancer", label: "Freelancer", path: "~/freelancer " },
    { href: "#contact", label: "Contact", path: "~/contact " },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, href: string) => {
    e.preventDefault();

    // Close the mobile menu
    onClose();

    // Navigate to the section with smooth scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      onNavigate(path);
    }, 300); // Add a small delay to allow the menu to close first
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="relative">
          {/* Overlay to capture clicks outside menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[58px] z-40 bg-black/30"
            onClick={onClose}
          />

          {/* Mobile menu panel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-50 mx-3 max-h-[80vh] overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-md"
          >
            <nav className="py-3">
              <div className="grid grid-cols-1 divide-y divide-white/5">
                {links.map((link) => (
                  <motion.div key={link.href} whileHover={{ backgroundColor: "rgba(255, 95, 0, 0.1)" }} className="p-2">
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:text-white"
                      onClick={(e) => handleClick(e, link.path, link.href)}
                    >
                      <span
                        className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#ff5f00] to-[#ff5f00]/50 opacity-70"
                        style={{
                          opacity: link.href === "#home" ? 1 : 0.6,
                        }}
                      />
                      <span className="flex-1">{link.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Social links and resume button */}
            <div className="mt-2 mb-4 flex items-center justify-center gap-6 border-t border-white/5 pt-4">
              <motion.a
                href="https://github.com/hugofolloni"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.15 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/hugofolloni"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.15 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>

              <motion.a
                href="mailto:contact@hugofolloni.com"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.15 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 rounded-full bg-[#ff5f00]/90 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#ff5f00]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
