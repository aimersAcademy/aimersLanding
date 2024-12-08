"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import PricingCard from "./PricingCard";
import Modal from "../modal/Modal";

function ClientPricing() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-16 bg-transparent" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            variants={cardVariants}
            style={{ color: theme.colors.textPrimary }}
          >
            Pricing Plans
          </motion.h2>
          <motion.p
            className="mt-4 text-lg dark:text-gray-300 max-w-3xl mx-auto"
            variants={cardVariants}
            style={{ color: theme.colors.textSecondary }}
          >
            Choose the plan that fits your learning needs.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <PricingCard
            type={"Starter"}
            characteristics={[
              "1 Subject of your choice",
              "For 2 months",
              "Comprehensive curriculum",
              "Expert educators",
              "Interactive lessons",
            ]}
            discountablePrice={2000}
            actualPrice={1500}
            onClick={onClick}
          />
          {/* Plan 2 */}
          <PricingCard
            type={"Over-Achiever"}
            characteristics={[
              "All 3 Subjects",
              "For 2 months",
              "Comprehensive curriculum",
              "Expert educators",
              "Interactive lessons",
            ]}
            discountablePrice={5000}
            actualPrice={4000}
            isPopular={true}
            onClick={onClick}
          />
        </motion.div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default ClientPricing;
