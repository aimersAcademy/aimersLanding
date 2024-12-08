"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import { useRef } from "react";
import Image from "next/image";

function ClientAbout() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-16 bg-gray-100 bg-transparent">
      <div className="container mx-auto px-6 md:px-12 lg:px-20" ref={ref}>
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center"
            variants={itemVariants}
            style={{ color: theme.colors.textPrimary }}
          >
            About Us
          </motion.h2>

          {/* Description */}
          <motion.div className="flex items-center justify-center gap-10 flex-wrap">
            <motion.p
              className="mt-4 text-lg  dark:text-gray-300 max-w-3xl mx-auto md:mx-0"
              variants={itemVariants}
              style={{ color: theme.colors.textSecondary }}
            >
              We are dedicated to providing world-class tuition and coaching
              services. Our mission is to empower students by fostering a love
              for learning and enabling academic excellence. With a team of
              experienced educators, we offer personalized learning solutions
              tailored to your needs.
            </motion.p>
            {theme.name === "light" ? (
              <Image
                src={"/aimers-logo.png"}
                height={200}
                width={200}
                alt="about"
              />
            ) : (
              <Image
                src={"/aimers-dark.png"}
                height={200}
                width={200}
                alt="about"
              />
            )}
          </motion.div>

          {/* Features */}
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: "Expert Educators",
                icon: "📚",
                description:
                  "Our teachers are highly qualified and experienced in their fields, ensuring top-notch guidance and support for every student.",
              },
              {
                title: "Personalized Lessons",
                icon: "🎯",
                description:
                  "We tailor lessons to fit each student's unique learning style and pace, maximizing their potential for academic success.",
              },
              {
                title: "Interactive Platform",
                icon: "🌐",
                description:
                  "Our cutting-edge platform fosters engagement through live classes, quizzes, and collaborative tools for an immersive learning experience.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-6 cursor-pointer shadow-lg rounded-lg  transition-all ease-linear  hover:scale-105"
                variants={itemVariants}
                style={{ backgroundColor: theme.colors.surface }}
              >
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ClientAbout;
