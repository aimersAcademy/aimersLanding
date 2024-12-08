"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeProvider";
import { itemVariants, letterVariants } from "@/utils/Variants";

const ClientHero = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16 p-8 ">
      <div className="md:w-1/2 text-center flex flex-col items-center justify-center md:text-left space-y-6">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ color: theme.colors.textPrimary }}
        >
          {"AIMERS".split("").map((letter, index) => (
            <motion.span
              key={index}
              className={`inline-block ${
                letter === "I" ? "text-blue-600" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              style={{ margin: "0 0.2em" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-2xl md:text-4xl font-semibold tracking-tight text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          style={{ color: theme.colors.textSecondary }}
        >
          Where aspirations take flight!
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-4 text-lg text-center md:text-left max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          style={{ color: theme.colors.textSecondary }}
        >
          At Aimers Academy, we believe education is the foundation of a
          brighter tomorrow. So our mission is to provide quality learning
          experiences, foster critical thinking, and nurture creativity in
          students of all ages.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="mt-6 flex justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="px-8 py-3 rounded-md shadow-lg font-medium text-lg transition-all"
            href={"#courses"}
            style={{
              backgroundColor: theme.colors.primary,
              color: "white",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            }}
          >
            Get Started
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="px-8 py-3 rounded-md shadow-lg font-medium text-lg transition-all"
            style={{
              backgroundColor: theme.colors.secondary,
              color: theme.name === "dark" ? "#000" : "#FFF",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            href={"#about"}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        {[
          { src: "/hero-1.jpg", alt: "Grid Image 1" },
          { src: "/hero-2.jpg", alt: "Grid Image 2" },
          { src: "/hero-3.jpg", alt: "Grid Image 3" },
          { src: "/hero-4.jpg", alt: "Grid Image 4" },
        ].map((image, index) => (
          <motion.div
            key={index}
            className="h-32 md:h-60 rounded-lg overflow-hidden relative group shadow-lg"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              height={300}
              width={300}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ClientHero;