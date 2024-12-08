"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import { FaStar } from "react-icons/fa";

function ClientTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { theme } = useTheme();

  const testimonials = [
    {
      title: "Amazing",
      name: "Avishek Acharya",
      feedback:
        "Teaching here is a rewarding experience. The institute provides the right tools and support to ensure students succeed while allowing us to grow as educators.",
      role: "Teacher",
    },
    {
      title: "Affordable",

      name: "Sailesh Magar",
      feedback:
        "The coaching here transformed my learning experience! The interactive sessions and dedicated support helped me excel in my exams with confidence.",
      role: "Student",
    },
    {
      title: "Great",

      name: "Anish Shahi",
      feedback:
        "The tutors have been incredible. My child's improvement in academics and self-confidence is remarkable. I highly recommend this institute to other parents.",
      role: "Parent",
    },
  ];

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

  return (
    <div
      className="py-16 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16"
      ref={ref}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          variants={itemVariants}
        >
          Testimonials
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl font-bold mb-4"
          variants={itemVariants}
        >
          What Our Clients Say
        </motion.h2>
      </motion.div>

      {/* Testimonial Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className=" rounded-lg shadow-lg p-6 flex flex-col gap-5 items-center text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: theme.colors.surface }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 text-amber-500"
              variants={itemVariants}
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </motion.div>

            <h2
              className="font-bold text-xl"
              style={{ color: theme.colors.textPrimary }}
            >
              &quot;{testimonial.title}&quot;
            </h2>
            <p
              className="text-lg italic mb-4"
              style={{ color: theme.colors.textPrimary }}
            >
              &quot;{testimonial.feedback}&quot;
            </p>

            <h3
              className="text-xl font-semibold "
              style={{ color: theme.colors.textPrimary }}
            >
              {testimonial.name}
            </h3>
            <p
              className="text-sm "
              style={{ color: theme.colors.textSecondary }}
            >
              {testimonial.role}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ClientTestimonials;
