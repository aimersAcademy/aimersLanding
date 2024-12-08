"use client";
import React from "react";
import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeProvider";

function CourseCard({ icon, title, description, setIsModalOpen, phone }) {
  const { theme } = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="p-6  rounded-lg shadow-lg flex flex-col items-center justify-center"
      style={{ backgroundColor: theme.colors.surface }}
      variants={cardVariants}
    >
      <span className="text-4xl mb-4">{icon}</span>
      {/* Title */}
      <h3
        className="text-2xl font-semibold mb-2"
        style={{ color: theme.colors.textPrimary }}
      >
        {title}
      </h3>
      {/* Description */}
      <p
        className="text-gray-500 dark:text-gray-400 mb-4"
        style={{ color: theme.colors.textSecondary }}
      >
        {description}
      </p>
      {/* Contact Info */}
      <div className="mt-auto flex items-center flex-col justify-center">
        <p className=" " style={{ color: theme.colors.textSecondary }}>
          <strong>Phone:</strong> {phone}
        </p>
        {/* <p
        className=" "
        style={{ color: theme.colors.textSecondary }}
      >
        <strong>Email:</strong>{" "}
        <a
          href={`mailto:${course.contact.email}`}
          className="text-blue-600 hover:underline"
        >
          {course.contact.email}
        </a>
      </p> */}
        <motion.button
          // href={`tel:${course.contact.phone}`}
          onClick={() => setIsModalOpen(true)}
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact to Book
        </motion.button>
      </div>
    </motion.div>
  );
}

export default CourseCard;
