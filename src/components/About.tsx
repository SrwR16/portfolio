import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/profile.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const techs = [
    { name: "JavaScript", category: "language" },
    { name: "React.js", category: "frontend" },
    { name: "Python", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "C#", category: "language" },
    { name: ".NET", category: "backend" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
  ];

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent opacity-40 pointer-events-none"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <motion.div variants={containerVariants} className="order-2 md:order-1">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
              <span className="text-gray-200">about</span>
              <span className="text-[#ff5f00]">_me</span>
              <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff5f00] to-transparent"></span>
            </motion.h2>

            <motion.div variants={containerVariants} className="space-y-6">
              <motion.p variants={itemVariants} className="text-gray-300 text-lg">
                I'm a Brazilian <span className="text-[#ff5f00] font-semibold">software engineer</span> based in Rio de
                Janeiro. Self-taught and curious, I always want to learn new things. I love to{" "}
                <span className="text-[#ff5f00] font-semibold">solve problems</span> and think rationally about them,
                and that's why I love to code.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-300 text-lg">
                I study Computer Science at Universidade Federal do Rio de Janeiro, one of the most prestigious
                universities in Brazil. Besides, I am a software engineer intern at{" "}
                <span className="text-[#ff5f00] font-semibold">BigDataCorp</span>. I also work under{" "}
                <span className="text-[#ff5f00] font-semibold">COPPETEC</span> and{" "}
                <span className="text-[#ff5f00] font-semibold">UFRJ</span> scientific projects, learning a lot about
                diverse areas of technology and development.
              </motion.p>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, index) => (
                    <motion.span
                      key={index}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        tech.category === "language"
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : tech.category === "frontend"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : tech.category === "backend"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      }`}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-300 text-lg">
                Furthermore, I speak Portuguese fluently as my native language, and I am also fluent in English. I'm
                currently trying to learn Italian as well.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-300 text-lg">
                Also, I spend most of my free time playing guitar and playing games such as Valorant, Chess and League
                of Legends.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div variants={imageVariants} className="relative order-1 md:order-2 flex justify-center">
            <div className="relative w-80 h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5f00]/40 to-purple-500/40 opacity-70 mix-blend-overlay"></div>

              <motion.div
                className="absolute inset-0 border-2 rounded-2xl border-white/10"
                animate={{
                  borderRadius: [
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                    "50% 50% 50% 50%",
                    "30% 70% 70% 30% / 70% 30% 70% 30%",
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>

              <motion.img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl z-10 relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -z-10 w-full h-full left-5 top-5 bg-gradient-to-br from-[#ff5f00]/20 to-transparent rounded-2xl"
              animate={{
                left: [5, 10, 5],
                top: [5, 15, 5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>

            <motion.div
              className="absolute bottom-0 right-0 w-20 h-20 bg-[#ff5f00]/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
