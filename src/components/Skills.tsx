import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Define skill categories with their own colors
const CATEGORIES = {
  language: {
    label: "Programming Languages",
    color: "purple",
    description: "Core languages I use to build applications",
    icon: "💻",
  },
  frontend: {
    label: "Frontend",
    color: "blue",
    description: "Technologies for creating responsive, interactive UIs",
    icon: "🎨",
  },
  backend: {
    label: "Backend",
    color: "green",
    description: "Server-side technologies and frameworks",
    icon: "⚙️",
  },
  database: {
    label: "Databases",
    color: "yellow",
    description: "Database systems and data management solutions",
    icon: "🗄️",
  },
  tools: {
    label: "Tools & Platforms",
    color: "orange",
    description: "Development tools and platforms I'm proficient with",
    icon: "🛠️",
  },
};

type SkillCategory = keyof typeof CATEGORIES;

interface Skill {
  name: string;
  category: SkillCategory;
  logo: string;
  proficiency?: number; // 1-10 scale
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Complete skill list with categories and logos
  const skills: Skill[] = [
    { name: "JavaScript", category: "language", logo: "/logos/javascript.svg", proficiency: 9 },
    { name: "React.js", category: "frontend", logo: "/logos/react.svg", proficiency: 9 },
    { name: "Python", category: "language", logo: "/logos/python.svg", proficiency: 8 },
    { name: "TypeScript", category: "language", logo: "/logos/typescript.svg", proficiency: 8 },
    { name: "HTML/CSS", category: "frontend", logo: "/logos/html-css.svg", proficiency: 9 },
    { name: "C#", category: "language", logo: "/logos/csharp.svg", proficiency: 7 },
    { name: ".NET", category: "backend", logo: "/logos/dotnet.svg", proficiency: 7 },
    { name: "Node.js", category: "backend", logo: "/logos/nodejs.svg", proficiency: 8 },
    { name: "PostgreSQL", category: "database", logo: "/logos/postgresql.svg", proficiency: 8 },
    { name: "MongoDB", category: "database", logo: "/logos/mongodb.svg", proficiency: 7 },
    { name: "Git", category: "tools", logo: "/logos/git.svg", proficiency: 9 },
    { name: "Docker", category: "tools", logo: "/logos/docker.svg", proficiency: 7 },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  // Animation variants - simplified to match other sections
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

  const getColorClasses = (category: SkillCategory) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-300",
        border: "border-purple-500/30",
      },
      blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-300",
        border: "border-blue-500/30",
      },
      green: {
        bg: "bg-green-500/10",
        text: "text-green-300",
        border: "border-green-500/30",
      },
      yellow: {
        bg: "bg-yellow-500/10",
        text: "text-yellow-300",
        border: "border-yellow-500/30",
      },
      orange: {
        bg: "bg-[#ff5f00]/10",
        text: "text-[#ff5f00]",
        border: "border-[#ff5f00]/30",
      },
    };

    const color = CATEGORIES[category].color;
    return colorMap[color];
  };

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements - similar to other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 opacity-30 pointer-events-none"></div>
      <div className="absolute -right-32 top-1/3 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 bottom-1/3 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            <span className="text-gray-200">technical</span>
            <span className="text-[#ff5f00]">_skills</span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff5f00] to-transparent"></span>
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-3xl mb-12 text-gray-300">
            <p className="text-lg">
              My expertise spans various technologies and tools that allow me to build robust, scalable applications
              from frontend to backend.
            </p>
          </motion.div>

          <div className="space-y-16">
            {Object.entries(CATEGORIES).map(([category, { label, description, icon }], index) => {
              const categorySkills = groupedSkills[category as SkillCategory] || [];
              if (categorySkills.length === 0) return null;

              const colorClasses = getColorClasses(category as SkillCategory);
              const isEven = index % 2 === 0;

              // Calculate how many columns are needed based on number of skills
              // For categories with fewer skills, use fewer columns to create a centered look
              const skillCount = categorySkills.length;
              let gridClass = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";

              // For categories with 3 or fewer skills, adjust the grid
              if (skillCount <= 2) {
                gridClass = "grid-cols-1 sm:grid-cols-2";
              } else if (skillCount <= 3) {
                gridClass = "grid-cols-1 sm:grid-cols-3";
              }

              return (
                <motion.div key={category} variants={itemVariants} className="relative">
                  {/* Category header */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <span className="text-2xl">{icon}</span>
                      <h3 className={`text-2xl font-semibold ${colorClasses.text}`}>{label}</h3>
                    </div>
                    <div className="flex justify-center">
                      <div className={`w-20 h-1 ${colorClasses.bg} rounded-full my-3`}></div>
                    </div>
                    <p className="text-gray-400 text-base max-w-2xl mx-auto">{description}</p>
                  </div>

                  {/* Skills grid with alternating layouts */}
                  <div
                    className={`grid ${gridClass} gap-4 ${isEven ? "" : "md:ml-auto"} max-w-5xl mx-auto justify-center`}
                  >
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={itemVariants}
                        className={`border rounded-lg p-3 backdrop-blur-sm ${colorClasses.bg} ${colorClasses.border} transition-all duration-300`}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-white/10 rounded-full">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="h-6 w-6 object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://placehold.co/40x40/3d3d3d/white?text=${skill.name.charAt(0)}`;
                              }}
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">{skill.name}</h4>
                            {skill.proficiency && (
                              <div className="w-full mt-1">
                                <div className="flex items-center gap-1">
                                  {[...Array(10)].map((_, i) => (
                                    <div
                                      key={i}
                                      className={`h-1 w-1 rounded-full ${
                                        i < skill.proficiency! ? colorClasses.text : "bg-gray-700"
                                      }`}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Visual balancing decorative elements */}
                  <div
                    className={`absolute -z-10 ${isEven ? "-right-4" : "-left-4"} top-1/2 h-20 w-20 rounded-full ${
                      colorClasses.bg
                    } opacity-30 blur-xl`}
                  ></div>
                </motion.div>
              );
            })}
          </div>

          {/* Final decorative element for balance */}
          <div className="h-20 w-full relative mt-12">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#ff5f00]/30 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
