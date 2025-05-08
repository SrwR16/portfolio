import clsx from "clsx";
import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const links = [
    { href: "/about", label: "About", path: "~/about " },
    { href: "/uses", label: "Uses", path: "~/uses " },
    { href: "/blog", label: "Blog", path: "~/blog " },
    { href: "/projects", label: "Projects", path: "~/projects " },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    onClose();
  };

  return (
    <div
      className={clsx(
        "terminal-header fixed top-20 right-0 z-10 min-h-screen w-full transform bg-gray-200 opacity-95",
        "duration-300 ease-in-out dark:bg-gray-800",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <button
        type="button"
        aria-label="Close mobile menu"
        className="terminal-header fixed h-full w-full cursor-auto focus:outline-none"
        onClick={onClose}
      ></button>

      <nav className="terminal-header fixed mt-8 h-full">
        {links.map((link) => (
          <div key={link.href} className="terminal-header px-12 py-4">
            <a
              href={link.href}
              className="terminal-header terminal-header-link text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 transition-colors hover:text-primary-500 dark:hover:text-primary-400"
              style={{ fontFamily: "inherit" }}
              onClick={(e) => handleClick(e, link.path)}
            >
              {link.label}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
