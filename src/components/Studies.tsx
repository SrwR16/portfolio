import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Studies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const studies = [
    {
      title: "Universidade Federal do Rio de Janeiro",
      role: "Computer Science",
      date: "FEB 2021 - NOV 2025",
      description: [
        "I gained strong foundations into algorithms, data structures, and programming languages, exploring the foundational concepts of computing. Through coursework and projects, I gain practical experience in software development, problem-solving, and system design.",
        "In the university environment, I also developed soft skills essential for effective communication, teamwork, and problem-solving. I am adept at collaborating with peers on group projects, presenting ideas clearly, and adapting to new challenges and learning environments.",
      ],
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="studies" ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent opacity-30 pointer-events-none"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            <span className="text-gray-200">academic</span>
            <span className="text-[#ff5f00]">_background</span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff5f00] to-transparent"></span>
          </motion.h2>

          <div className="grid grid-cols-1 gap-8">
            {studies.map((study, index) => (
              <motion.div key={index} variants={cardVariants} className="relative overflow-hidden">
                <div className="relative z-10 bg-gradient-to-br from-black/40 to-black/10 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8">
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-[#ff5f00]/5 rounded-full blur-3xl pointer-events-none"></div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 md:flex items-baseline justify-between"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-2 md:mb-0">
                      {study.role}
                      <span className="text-[#ff5f00]"> @ {study.title}</span>
                    </h3>
                    <span className="inline-block font-mono text-sm text-gray-400 px-3 py-1 rounded-full bg-white/5">
                      {study.date}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-4"
                  >
                    {study.description.map((paragraph, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        className="text-gray-300 leading-relaxed"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-8 flex flex-wrap gap-2"
                  >
                    {[
                      "Algorithms",
                      "Data Structures",
                      "Computer Architecture",
                      "Operating Systems",
                      "Computer Networks",
                    ].map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-mono rounded-md border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Studies;
