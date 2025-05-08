import clsx from "clsx";
import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive = false, onClick }) => {
  return (
    <a
      href={href}
      className={clsx(
        "terminal-header-link terminal-header horizontal-underline rounded py-1 px-3 font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700",
        isActive && "bg-gray-100 dark:bg-gray-800"
      )}
      style={{ fontFamily: "inherit" }}
      onClick={onClick}
    >
      {label}
    </a>
  );
};
