import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Define skill categories with their own colors
const CATEGORIES = {
  language: {
    label: "Programming Languages",
    color: "orange",
    description: "Core languages I use to build applications",
    icon: "💻",
  },
  frontend: {
    label: "Frontend",
    color: "orange",
    description: "Technologies for creating responsive, interactive UIs",
    icon: "🎨",
  },
  backend: {
    label: "Backend",
    color: "orange",
    description: "Server-side technologies and frameworks",
    icon: "⚙️",
  },
  database: {
    label: "Databases",
    color: "orange",
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
  logo?: string;
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2, margin: "0px 0px -20% 0px" });

  // Complete skill list with categories
  const skills: Skill[] = [
    { name: "JavaScript", category: "language" },
    { name: "React.js", category: "frontend" },
    { name: "Python", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "HTML/CSS", category: "frontend" },
    { name: "C#", category: "language" },
    { name: ".NET", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Git", category: "tools" },
    { name: "Docker", category: "tools" },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  // Animation variants
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

  const skillVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-32 px-6 relative overflow-hidden pt-24 md:pt-32 mt-8 md:mt-12"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent opacity-40 pointer-events-none"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
            <span className="text-gray-200">technical</span>
            <span className="text-[#ff5f00]">_skills</span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff5f00] to-transparent"></span>
          </motion.h2>

          <motion.div variants={containerVariants} className="space-y-12">
            {Object.entries(CATEGORIES).map(([category, { label, description }]) => {
              const categorySkills = groupedSkills[category as SkillCategory] || [];
              if (categorySkills.length === 0) return null;

              return (
                <motion.div key={category} variants={itemVariants} className="mb-14">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-200 mb-3">{label}</h3>
                    <p className="text-gray-400">{description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        className="p-4 rounded-xl bg-gradient-to-br from-black/50 to-black/10 backdrop-blur-sm border border-white/10 hover:border-[#ff5f00]/30 transition-all duration-300"
                      >
                        <div className="flex items-center">
                          <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                        </div>
                        <div className="mt-2 h-1 w-16 bg-gradient-to-r from-[#ff5f00] to-transparent rounded-full"></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
