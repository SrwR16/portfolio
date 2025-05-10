import React from "react";
import { NavLink } from "./NavLink";

interface NavigationProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPath }) => {
  const links = [
    { href: "#home", label: "Home", path: "~/ " },
    { href: "#about", label: "About", path: "~/about " },
    { href: "#skills", label: "Skills", path: "~/skills " },
    { href: "#experience", label: "Experience", path: "~/experience " },
    { href: "#projects", label: "Projects", path: "~/projects " },
  ];

  return (
    <div className="terminal-header hidden sm:flex">
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          isActive={currentPath === link.path}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(link.href.substring(1))?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            onNavigate(link.path);
          }}
        />
      ))}
    </div>
  );
};

export default Navigation;
