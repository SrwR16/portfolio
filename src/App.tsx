import { Galaxy } from "react-stars-particles";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/header/Header";
import Home from "./components/Home";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Freelancer from "./components/Freelancer";
import Projects from "./components/Projects";
import Studies from "./components/Studies";
import { ThemeProvider } from "./components/theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Galaxy color="#2f2f2f" quantity={300} />
        <Header />
        <Home id="home" />
        <About />
        <Experience />
        <Studies />
        <Projects />
        <Freelancer />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
