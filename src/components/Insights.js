import React from "react";
import { motion } from "framer-motion";

const Insights = () => {
  const stats = [
    { number: "50+", text: "Supported standards" },
    { number: "90%", text: "Faster compliance planning" },
    { number: "100%", text: "Audit-ready coverage" },
  ];

  return (
    <section
      id="insights"
      className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-20 text-center scroll-mt-24 bg-robot-arm bg-lock-left"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFDD0] mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Insights That Matter
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-[#A4BBDD] mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Pipeline makes security and compliance accessible for the entire product
        team – not just the security experts.
      </motion.p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-5xl w-full justify-items-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            viewport={{ once: false }}
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFFDD0] mb-2">
              {stat.number}
            </p>
            <p className="text-base sm:text-lg text-[#A4BBDD]">{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
