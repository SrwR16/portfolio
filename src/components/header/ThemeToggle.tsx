import React, { useEffect, useState } from "react";
import { useTheme } from "../theme/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [animationState, setAnimationState] = useState<"idle" | "first" | "second">("idle");
  const [nextThemeIsDark, setNextThemeIsDark] = useState(!isDarkMode);

  // Update nextThemeIsDark whenever isDarkMode changes
  useEffect(() => {
    setNextThemeIsDark(!isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    // First animation: rotate and pop out current icon
    setAnimationState("first");

    // After first animation completes, toggle theme and start second animation
    setTimeout(() => {
      toggleTheme();
      setAnimationState("second");

      // Reset animation state after second animation completes
      setTimeout(() => {
        setAnimationState("idle");
      }, 250);
    }, 300);
  };

  return (
    <button
      className="theme-switch rounded-full w-9 h-9 flex items-center justify-center transition hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={handleToggle}
      disabled={animationState !== "idle"} // Prevent clicks during animation
    >
      <div className="icon-wrapper flex items-center justify-center relative w-full h-full">
        {/* Current icon */}
        {isDarkMode ? (
          <img
            src="/icons/sun-icon.svg"
            alt="Light mode"
            width={20}
            height={20}
            className={animationState === "first" ? "rotate-pop-out absolute" : "absolute"}
            style={{
              filter: "invert(100%)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              opacity: animationState === "second" ? 0 : 1,
            }}
          />
        ) : (
          <img
            src="/icons/moon-icon.svg"
            alt="Dark mode"
            width={20}
            height={20}
            className={animationState === "first" ? "rotate-pop-out absolute" : "absolute"}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              opacity: animationState === "second" ? 0 : 1,
            }}
          />
        )}

        {/* Next icon that pops in */}
        {animationState === "second" && (
          <img
            src={nextThemeIsDark ? "/icons/moon-icon.svg" : "/icons/sun-icon.svg"}
            alt={nextThemeIsDark ? "Dark mode" : "Light mode"}
            width={20}
            height={20}
            className="pop-in absolute"
            style={{
              filter: !nextThemeIsDark ? "invert(100%)" : "none",
              left: "50%",
              top: "50%",
            }}
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
