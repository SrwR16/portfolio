import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

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
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-transparent opacity-40 pointer-events-none"></div>
      <div className="absolute -right-32 top-1/4 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 bottom-1/4 w-64 h-64 rounded-full bg-[#ff5f00]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            <span className="text-gray-200">get_in</span>
            <span className="text-[#ff5f00]">_touch</span>
            <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff5f00] to-transparent"></span>
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto my-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Let's <span className="text-[#ff5f00] font-semibold">create</span> something together.
            </p>

            <p className="text-gray-400 mb-12">
              Have a project in mind or just want to chat about technology? I'm always open to new opportunities and
              collaborations.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8">
            <motion.a
              href="mailto:hugofolloni@gmail.com?subject=Let's create something together!&body=Hi, I visited your portfolio website and I want to contact you."
              className="relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5f00] to-[#ff8700] rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-lg z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#ff5f00]"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="font-semibold text-white">Send an Email</span>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/hugofolloni"
              target="_blank"
              rel="noreferrer"
              className="relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-lg z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="font-semibold text-white">GitHub</span>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/hugofolloni"
              target="_blank"
              rel="noreferrer"
              className="relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0077B5] to-[#0e94de] rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-lg z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#0077B5]"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="font-semibold text-white">LinkedIn</span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
