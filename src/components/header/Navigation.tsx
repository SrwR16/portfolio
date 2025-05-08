import React from "react";
import { NavLink } from "./NavLink";

interface NavigationProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPath }) => {
  const links = [
    { href: "/about", label: "About", path: "~/about " },
    { href: "/uses", label: "Uses", path: "~/uses " },
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
            onNavigate(link.path);
          }}
        />
      ))}
    </div>
  );
};

export default Navigation;
