import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Freelancer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const projects = [
    {
      title: "Instituto de Proteção ao Jogador",
      link: "https://ipjbr.com.br",
      description:
        "Developed a responsive website for an organization focused on gambling addiction awareness and prevention.",
      tech: ["React", "Tailwind CSS", "WordPress"],
    },
    {
      title: "UFRJ — LARHCO",
      link: "https://larhco.iq.ufrj.br",
      description:
        "Created a digital presence for a university research laboratory, showcasing their projects and publications.",
      tech: ["Gatsby", "GraphQL", "Styled Components"],
    },
    {
      title: "Bracell — Floresta Sempre Viva",
      link: "https://florestasempreviva.com.br",
      description:
        "Built an environmental initiative platform highlighting conservation efforts and sustainability practices.",
      tech: ["Next.js", "Framer Motion", "Sanity CMS"],
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="freelancer"
      ref={ref}
      className="py-24 md:py-32 px-6 relative overflow-hidden pt-24 md:pt-32 mt-8 md:mt-12"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 opacity-30 pointer-events-none"></div>
      <div className="absolute -right-32 top-1/3 w-64 h-64 rounded-full bg-green-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 bottom-1/3 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            <span className="text-gray-200">freelance</span>
            <span className="text-[#ff5f00]">_projects</span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff5f00] to-transparent"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-black/40 to-black/5 dark:from-white/5 dark:to-transparent backdrop-blur-sm border border-white/10 hover:border-[#ff5f00]/30 rounded-xl overflow-hidden h-full group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-[#ff5f00] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-[#ff5f00] transition-colors duration-300 p-1"
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
                  </div>

                  <p className="text-gray-300 text-sm mb-6">{project.description}</p>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-500/10 text-green-300 text-xs font-mono rounded-md border border-green-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-gray-300 mb-6">Interested in working together on a project?</p>
            <motion.a
              href="mailto:hugofolloni@gmail.com?subject=Freelance Project Inquiry&body=Hi Sarwar, I'd like to discuss a potential project..."
              className="inline-block relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-[#ff5f00]/40 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-lg z-10">
                <span className="font-semibold text-white">Start a conversation</span>
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
                  className="text-white"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Freelancer;
