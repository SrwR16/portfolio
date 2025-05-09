import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface ExperienceItem {
  title: string;
  role: string;
  date: string;
  status: string;
  tasks: string[];
  chronology?: string; // Added optional chronology field
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const experiences: ExperienceItem[] = [
    {
      title: "Machine Teaching",
      role: "Undergraduate Researcher",
      date: "FEB 2022 - NOW",
      status: "Current",
      tasks: [
        "I am responsible for automating tests and optimizing dashboards to ensure the platform's reliability and enhance user experience. This involves creating automated test cases, implementing testing frameworks, and refining dashboard layouts for efficient data visualization.",
        "Additionally, I develop and add new functionalities to the platform while troubleshooting and fixing bugs to maintain its stability and functionality. This hands-on experience allows me to contribute effectively to the platform's continuous improvement and user satisfaction.",
      ],
    },
    {
      title: "COPPETEC",
      role: "ETL Researcher",
      date: "JUN 2023 - NOW",
      status: "Current",
      tasks: [
        "As an intern on the ETL area within Verde, I tackle challenges centered on creating and maintaining Talend jobs. This role also involves providing support in resolving database-related issues. Through this experience, I've enhanced my skills in SQL and Java.",
        "I work under the Scrum methodology, ensuring efficient and collaborative project management. This environment has allowed me to gain practical insights into agile development practices and teamwork dynamics.",
      ],
    },
    {
      title: "BigDataCorp",
      role: "Software Engineer Intern",
      date: "JUN 2024 - NOW",
      status: "Current",
      tasks: [
        "In my role, I focus on solving challenges involving the foundational services of the company, like billing and access control. This role involves the development of web pages with React + Redux and implementing API routes in .NET, enhancing my skills in front-end and back-end integration.",
        "I contribute to the continuous improvement of the platform by refactoring legacy code, adopting modern technologies, and fostering collaboration to ensure a user-centric and reliable experience.",
      ],
    },
  ].reverse();

  // Update the experiences array with chronological indicators
  experiences.forEach((exp, index) => {
    if (index === 0) {
      exp.chronology = "Most Recent";
    } else if (index === experiences.length - 1) {
      exp.chronology = "Earliest";
    } else {
      exp.chronology = `Position ${experiences.length - index}`;
    }
  });

  const [selectedExperience, setSelectedExperience] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const taskVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 opacity-30 pointer-events-none"></div>
      <div className="absolute -right-32 top-1/3 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 bottom-1/3 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            <span className="text-gray-200">work</span>
            <span className="text-[#ff5f00]">_experience</span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff5f00] to-transparent"></span>
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              variants={itemVariants}
              className="w-full md:w-64 flex md:flex-col overflow-x-auto md:overflow-visible mb-6 md:mb-0"
            >
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedExperience(index)}
                  className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal border-b-2 md:border-l-2 md:border-b-0 transition-all duration-300 ${
                    selectedExperience === index
                      ? "border-[#ff5f00] text-[#ff5f00] bg-[#ff5f00]/5"
                      : "border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-500"
                  }`}
                  whileHover={{ x: selectedExperience === index ? 0 : 4 }}
                >
                  <div>
                    <span className="flex items-center gap-2">
                      {exp.title}
                      {index === 0 && <span className="inline-block h-2 w-2 bg-green-500 rounded-full animate-pulse" />}
                    </span>
                    <span className="text-xs opacity-60 block mt-1">{exp.chronology}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <div className="flex-1 relative bg-gradient-to-br from-black/30 to-transparent backdrop-blur-sm rounded-xl border border-white/5 p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedExperience}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={contentVariants}
                  className="absolute inset-0 p-6 md:p-8"
                >
                  <motion.div variants={taskVariants} className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-100 flex items-center flex-wrap gap-2">
                      <span>{experiences[selectedExperience].role}</span>
                      <span className="text-[#ff5f00]">@ {experiences[selectedExperience].title}</span>
                      {selectedExperience === 0 && (
                        <span className="bg-[#ff5f00]/20 text-[#ff5f00] text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center text-gray-400 font-mono text-sm mt-1">
                      <span>{experiences[selectedExperience].date}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-gray-500">{experiences[selectedExperience].chronology}</span>
                    </div>
                  </motion.div>

                  <div className="space-y-4">
                    {experiences[selectedExperience].tasks.map((task, idx) => (
                      <motion.div key={idx} variants={taskVariants} className="flex">
                        <span className="text-[#ff5f00] mr-2 mt-1 flex-shrink-0">▹</span>
                        <p className="text-gray-300">{task}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Empty div to maintain the parent container height */}
              <div className="opacity-0 pointer-events-none">
                {experiences.map((exp, index) => (
                  <div key={index} className={selectedExperience === index ? "block" : "hidden"}>
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">
                        {exp.role} @ {exp.title}
                      </h3>
                      <p className="font-mono text-sm mt-1">{exp.date}</p>
                    </div>
                    <div className="space-y-4">
                      {exp.tasks.map((task, idx) => (
                        <div key={idx} className="flex">
                          <span className="mr-2 mt-1 flex-shrink-0">▹</span>
                          <p>{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
