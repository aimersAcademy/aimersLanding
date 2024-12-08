"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";

function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { theme } = useTheme();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { label: "Teachers", value: 15 },
    { label: "Groups", value: 10 },
    { label: "Students", value: 200 },
    { label: "Classes", value: 3 },
  ];

  return (
    <div
      className="py-16 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16"
      style={{ backgroundColor: theme.colors.surface }}
      ref={ref}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          variants={itemVariants}
          style={{ color: theme.colors.textPrimary }}
        >
          Our Achievements
        </motion.h2>
        <motion.p
          className="mt-2 text-base sm:text-lg"
          variants={itemVariants}
          style={{ color: theme.colors.textSecondary }}
        >
          We are proud of the milestones we have reached.
        </motion.p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 cursor-pointer lg:grid-cols-4 gap-6 max-w-7xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: theme.colors.cardBackground,
            }}
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-blue-600">
              {stat.value}
            </h3>
            <p
              className="text-sm sm:text-base mt-2"
              style={{ color: theme.colors.textSecondary }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default Stats;
