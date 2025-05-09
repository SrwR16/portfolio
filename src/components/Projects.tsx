import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import multiverse from "../assets/multiverse.png";
import profileapp from "../assets/profileapp.png";
import wedding from "../assets/wedding.png";
import wiki from "../assets/wiki.png";

interface ProjectInfo {
  title: string;
  photo: string;
  description: string;
  github: string;
  link: string;
  tools: string[];
  color: string;
}

interface MinorProjectInfo {
  title: string;
  description: string;
  github: string;
  link: string;
  tools: string[];
  color: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const projectsInfos = [
    {
      title: "yze-bio",
      photo: profileapp,
      description:
        'A "create your card" system, where users can create profiles to display information about themselves, linking social media and showing their favorite song and GIF. The design is fully customizable, allowing creators to change colors, fonts, and positions of items on screen.',
      github: "https://github.com/hugofolloni/yze-bio",
      link: "https://yze.bio",
      tools: ["JavaScript", "React", "C#", ".NET", "PostgreSQL"],
      color: "#7928CA",
    },
    {
      title: "spotify-multiverse",
      photo: multiverse,
      description:
        "A full-stack application that helps users discover new songs based on a playlist they already love. Through mathematical analysis, the project extracts the essential elements of the user's favorite songs, enabling the search for other tracks that will also be appealing.",
      github: "https://github.com/hugofolloni/spotify-multiverse",
      link: "https://spotify-multiverse.netlify.app",
      tools: ["JavaScript", "React", "PostgreSQL", "Python", "Flask", "NumPy", "Sklearn"],
      color: "#1DB954",
    },
    {
      title: "wiki-analysis",
      photo: wiki,
      description:
        "A final project for Algorithmic Linear Algebra. It aims to categorize Wikipedia articles based on their URL and similar articles using linear algebra comparisons. The project utilizes cosine similarity between article vectors to determine categories and improves efficiency by learning from requests.",
      github: "https://github.com/hugofolloni/wiki-analysis",
      link: "https://wiki-analysis.netlify.app",
      tools: ["TypeScript", "React", "NodeTS", "Python", "PostgreSQL", "BeautifulSoup", "NumPy", "Express"],
      color: "#2597F4",
    },
    {
      title: "wedding-gifts",
      photo: wedding,
      description:
        "A comprehensive web application with an API designed to streamline wedding gift management. Couples can easily add gifts to the list and track who has chosen to purchase each item. Guests have access to an organized list of gifts, allowing them to choose, purchase, and pay via an automatically generated PIX code.",
      github: "https://github.com/hugofolloni/wedding-gifts",
      link: "https://wedding-manager.netlify.app",
      tools: ["JavaScript", "React", "PostgreSQL", "NodeJS", "Express"],
      color: "#FF4081",
    },
  ];

  const minorProjects = [
    {
      title: "tagnalyzer",
      description:
        "A webapp that provides Last.fm users with detailed insights into their listening habits by analyzing the tags associated with their favorite artists.",
      github: "https://github.com/hugofolloni/tagnalyzer",
      link: "https://tagnalyzer.vercel.app",
      tools: ["TypeScript", "React", "Next.js", "Sass", "Redux"],
      color: "#D51007",
    },
    {
      title: "react-stars-particles",
      description:
        "A captivating React component that brings a dynamic and interactive galaxy background to your web pages. With stars that are attracted to the mouse pointer and smooth animations, it offers a unique and engaging user experience.",
      github: "https://github.com/hugofolloni/react-stars-particles",
      link: "https://galaxysimulator.netlify.app",
      tools: ["JavaScript", "React", "NodeJS", "Rollup"],
      color: "#4A00E0",
    },
    {
      title: "word.zzz",
      description:
        "A game where you try to guess the word based on your previous attempts, like wordle or term.ooo. It allows users to play non-stop, instead of daily playing like others.",
      github: "https://github.com/hugofolloni/word.zzz",
      link: "https://wordzzz.netlify.app",
      tools: ["JavaScript", "React", "Styled Components"],
      color: "#00C2FF",
    },
    {
      title: "anigme",
      description:
        "A game to guess who is the anime character behind the blur photo. It uses a public API to select the character and changes it every day.",
      github: "https://github.com/hugofolloni/anigme",
      link: "https://anigme.netlify.app",
      tools: ["JavaScript", "React", "Python", "CSV"],
      color: "#FFA500",
    },
    {
      title: "stockglass",
      description:
        "An implementation of a chess game with Pygame, featuring classes for the game, pieces, and the board. It utilizes algorithms to make computer moves. The game logic manages moves, checks, and interactions, while the graphical interface displays the board and allows interactive gameplay.",
      github: "https://github.com/hugofolloni/wiki-analysis",
      link: "",
      tools: ["Python", "Pygame", "Numpy"],
      color: "#2E8B57",
    },
    {
      title: "heyo-discord-bot",
      description:
        "An interactive bot for Discord that allows users to listen to music, play some games and get infos about weather and space missions.",
      github: "https://github.com/hugofolloni/heyo-discord-bot",
      link: "",
      tools: ["JavaScript", "NodeJS", "DiscordJS"],
      color: "#7289DA",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-1/2 right-0 w-1/3 h-full opacity-30 bg-gradient-radial from-[#ff5f00]/10 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 opacity-30 bg-gradient-radial from-[#ff5f00]/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 variants={projectVariants} className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
            <span className="text-gray-200">featured</span>
            <span className="text-[#ff5f00]">_projects</span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff5f00] to-transparent"></span>
          </motion.h2>

          <motion.div variants={projectVariants} className="grid grid-cols-1 gap-20">
            {projectsInfos.map((project, index) => (
              <FeaturedProject key={index} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="pt-16"
        >
          <motion.h2 variants={projectVariants} className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            <span className="text-gray-200">other</span>
            <span className="text-[#ff5f00]">_projects</span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff5f00] to-transparent"></span>
          </motion.h2>

          <motion.div variants={projectVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minorProjects.map((project, index) => (
              <MinorProject key={index} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedProject = ({ project, index }: { project: ProjectInfo; index: number }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
    >
      <motion.div
        className="w-full lg:w-1/2 relative group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-tr from-${project.color.replace(
            "#",
            ""
          )} to-transparent opacity-30 rounded-xl group-hover:opacity-50 transition-opacity duration-300`}
          style={{
            backgroundColor: `${project.color}15`,
            borderRadius: "12px",
          }}
        />

        <motion.div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <a
          href={project.link || project.github}
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden rounded-xl relative"
        >
          <div className="absolute inset-0 bg-black/50 opacity-20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
          <img
            src={project.photo}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-[#ff5f00]/30 transition-colors duration-300" />
        </a>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className={`w-full lg:w-1/2 ${isEven ? "lg:text-left" : "lg:text-right"}`}
      >
        <motion.div variants={itemVariants} className="mb-3">
          <span className="text-[#ff5f00] font-mono text-sm tracking-wider uppercase">Featured Project</span>
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-4 text-gray-200">
          {project.title}
        </motion.h3>

        <motion.div variants={itemVariants} className="p-6 rounded-xl backdrop-blur-sm bg-white/5 mb-6">
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`flex flex-wrap gap-2 mb-6 ${isEven ? "justify-start" : "justify-end"}`}
        >
          {project.tools.map((tool: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-mono rounded-md">
              {tool}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`flex items-center gap-4 ${isEven ? "justify-start" : "justify-end"}`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
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
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
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
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const MinorProject = ({ project }: { project: MinorProjectInfo }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-black/50 to-black/10 dark:from-white/5 dark:to-transparent backdrop-blur-sm border border-white/10 hover:border-[#ff5f00]/30 rounded-xl overflow-hidden h-full"
    >
      <div className="h-2 w-full" style={{ backgroundColor: project.color }} />

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tools.slice(0, 3).map((tool: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-white/10 text-gray-300 text-xs font-mono rounded-md">
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs font-mono rounded-md">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
