"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";

function ClientServices() {
  const { theme } = useTheme();
  const services = [
    {
      icon: "🤖",
      title: "Basic Mircocontroller Plus Robotics Training",
      description:
        "Learn to build and program robots with hands-on training in robotics technology.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Master HTML, CSS, and JavaScript to create responsive and dynamic websites.",
    },
    {
      icon: "📱",
      title: "Graphics Designing Plus UI/UX",
      description:
        "Develop modern mobile applications with cutting-edge tools and frameworks.",
    },
  ];

  return (
    <div>
      {/* Our Services Section */}
      <motion.div
        className="py-16 px-6 md:px-12 bg-gray-50 "
        initial="hidden"
        whileInView="visible"
        style={{ backgroundColor: theme.colors.background }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-8 `}
          style={{ color: theme.colors.textPrimary }}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md `}
              style={{ backgroundColor: theme.colors.surface }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ClientServices;
