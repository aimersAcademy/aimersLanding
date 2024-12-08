"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeProvider";
import Modal from "../modal/Modal";
import CourseCard from "./CourseCard";

function ClientCourses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const courses = [
    {
      title: "Mathematics",
      description:
        "Master mathematical concepts with our expert-led lessons tailored to all levels.",
      icon: "📐",
      contact: {
        phone: "+977 9810689165",
        email: "maths@tuition.com",
      },
    },
    {
      title: "Physics",
      description:
        "Explore the wonders of physics with interactive and engaging lessons.",
      icon: "🌌",
      contact: {
        phone: "+977 9810689165",
        email: "physics@tuition.com",
      },
    },
    {
      title: "Chemistry",
      description:
        "Understand chemical reactions and principles through hands-on learning.",
      icon: "🧪",
      contact: {
        phone: "+977 9810689165",
        email: "chemistry@tuition.com",
      },
    },
    {
      title: "Coming Soon!!!",
      description:
        "We will be comming with great courses in the near future. Please contact us what type of course do you need.",
      icon: "😃",

      contact: {
        phone: "+977 9810689165",
        email: "chemistry@tuition.com",
      },
    },
    {
      title: "Coming Soon!!!",
      description:
        "We will be comming with great courses in the near future. Please contact us what type of course do you need.",
      icon: "😃",

      contact: {
        phone: "+977 9810689165",
        email: "chemistry@tuition.com",
      },
    },
    {
      title: "Coming Soon!!!",
      description:
        "We will be comming with great courses in the near future. Please contact us what type of course do you need.",
      icon: "😃",
      contact: {
        phone: "+977 9810689165",
        email: "chemistry@tuition.com",
      },
    },
  ];

  return (
    <div className="py-16 bg-transparent">
      <div className="container mx-auto px-6 md:px-12 lg:px-20" ref={ref}>
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            variants={cardVariants}
          >
            Our Courses
          </motion.h2>
          <motion.p
            className="mt-4 text-lg "
            variants={cardVariants}
            style={{ color: theme.colors.secondaryText }}
          >
            Explore our specialized courses designed to enhance your knowledge
            and skills.
          </motion.p>

          {/* Course Cards */}
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {courses.map((course, index) => (
              <CourseCard
                icon={course.icon}
                key={index}
                title={course.title}
                description={course.description}
                setIsModalOpen={setIsModalOpen}
                phone={course.contact.phone}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default ClientCourses;
