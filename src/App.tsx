import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Freelancer from "./components/Freelancer";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Studies from "./components/Studies";
import { ThemeProvider } from "./components/theme/ThemeContext";

function App() {
  // Preload all sections for smoother transitions
  useEffect(() => {
    const sections = ["about", "skills", "experience", "studies", "projects", "contact"];
    sections.forEach((section) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "document";
      link.href = `#${section}`;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-background text-primary relative overflow-hidden"
        >
          {/* Custom background with animated gradient blur */}
          <div className="fixed inset-0 -z-10 bg-[#090015]">
            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#ff5f00]/20 to-transparent blur-[100px] mix-blend-overlay animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-transparent blur-[80px] mix-blend-overlay animate-pulse"></div>

            {/* Star field - keep this from the original design */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-50"></div>
              </div>
            </div>
          </div>

          <Header />

          <main className="relative z-10">
            <Home id="home" />
            <About />
            <Skills />
            <Experience />
            <Studies />
            <Projects />
            <Freelancer />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
