import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Hey, I'm SARWAR";
  const textIndex = useRef(0);
  const typingSpeed = 100;
  const [typingComplete, setTypingComplete] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (textIndex.current < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, textIndex.current + 1));
        textIndex.current += 1;
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
      // Delay showing content for a smoother transition
      setTimeout(() => setContentVisible(true), 400);
    }
  }, [typedText, fullText]);

  // Custom spotlight effect that follows cursor
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.background = `radial-gradient(600px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255, 95, 0, 0.15), transparent 40%)`;
    }
  }, [cursorPosition]);

  // Split the typed text to render differently
  const getRenderedText = () => {
    const breakpoint = "Hey, I'm ".length;
    if (typedText.length <= breakpoint) {
      return { intro: typedText, name: "" };
    } else {
      return {
        intro: "Hey, I'm",
        name: typedText.substring(breakpoint),
      };
    }
  };

  const { intro, name } = getRenderedText();

  return (
    <div id={id} className="relative w-full min-h-screen overflow-hidden pt-16 md:pt-0">
      {/* Cursor spotlight effect */}
      <div ref={cursorRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 50}px`,
              height: `${20 + Math.random() * 50}px`,
              backgroundColor: i % 2 === 0 ? "rgba(255, 95, 0, 0.1)" : "rgba(255, 255, 255, 0.05)",
              borderRadius: i % 3 === 0 ? "50%" : "0",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 md:px-6">
        <div className="max-w-4xl mx-auto w-full mt-8 md:mt-0 text-center">
          <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
            <motion.div
              className="font-mono text-2xl md:text-3xl text-gray-300 mb-2 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: intro ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {intro}
            </motion.div>
            <div className="relative">
              <motion.h1
                className="text-5xl sm:text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 dark:from-white dark:to-gray-400 tracking-tight leading-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: name ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {name}
                <span
                  className={`inline-block w-3 h-8 sm:w-4 sm:h-10 md:w-5 md:h-12 ml-1 align-middle bg-[#ff5f00] ${
                    !typingComplete ? "animate-blink" : "opacity-0"
                  }`}
                ></span>
              </motion.h1>
              <motion.div
                className="absolute -bottom-2 md:-bottom-5 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-transparent via-[#ff5f00] to-transparent"
                initial={{ width: "0%" }}
                animate={{ width: name ? "25%" : "0%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
            </div>
          </div>

          <AnimatePresence>
            {contentVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, staggerChildren: 0.1 }}
              >
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 md:mb-12 flex-wrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="px-3 py-1.5 text-xs uppercase tracking-wider font-semibold border border-[#ff5f00] text-[#ff5f00] rounded-full">
                    Software Engineer
                  </span>
                  <span className="px-3 py-1.5 text-xs uppercase tracking-wider font-semibold bg-[#ff5f00]/10 text-[#ff5f00] rounded-full">
                    Computer Science Student
                  </span>
                  <span className="px-3 py-1.5 text-xs uppercase tracking-wider font-semibold bg-white/5 text-gray-200 dark:text-gray-300 rounded-full backdrop-blur-sm">
                    Tech Enthusiast
                  </span>
                </motion.div>

                <motion.div
                  className="mb-8 md:mb-12 font-mono text-base md:text-xl text-gray-300 h-8 mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  I build digital experiences that leave an impression.
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-black/50 to-black/10 dark:from-white/5 dark:to-transparent backdrop-blur-sm border border-white/10 hover:border-[#ff5f00]/30 transition-all duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-6">
                      <motion.a
                        href="https://github.com/hugofolloni"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
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
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
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
                        href="mailto:hugofolloni@gmail.com"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
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
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-black/50 to-black/10 dark:from-white/5 dark:to-transparent backdrop-blur-sm border border-white/10 hover:border-[#ff5f00]/30 transition-all duration-300 flex items-center justify-center"
                  >
                    <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#ff5f00] text-white font-medium text-base transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                      <span>Resume</span>
                    </motion.a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-3 md:gap-4 justify-center mb-20 sm:mb-32"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.a
                    href="#about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-[#ff5f00] text-white font-medium text-base md:text-lg transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get to know me
                  </motion.a>

                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-base md:text-lg transition-all hover:bg-white/15"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View my work
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, 10, 0],
            opacity: contentVisible ? 1 : 0,
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ pointerEvents: "none" }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
