"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import { TiTick } from "react-icons/ti";

function PricingCard({
  actualPrice,
  type,
  characteristics,
  discountablePrice,
  isPopular,
  onClick,
}) {
  const { theme } = useTheme();

  const calculateDiscountPercentage = (mp, sp) => {
    return ((mp - sp) / mp) * 100;
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <motion.div
      className="p-6 rounded-lg shadow-lg flex flex-col  items-center gap-5 relative hover:scale-105 transition-all ease-linear"
      style={{ backgroundColor: theme.colors.surface }}
      variants={cardVariants}
    >
      {isPopular && (
        <div className="flex items-center justify-center bg-amber-500 p-1 rounded-full absolute top-1 right-1">
          <h1 className="text-white font-semibold text-center">Popular</h1>
        </div>
      )}
      <h1
        className="md:text-3xl text-2xl mb-5 font-bold"
        style={{ color: theme.colors.textPrimary }}
      >
        {type}
      </h1>
      <div className="flex items-center space-x-4">
        {/* Discounted Price */}
        <span
          className="text-2xl font-semibold "
          style={{ color: theme.colors.textPrimary }}
        >
          Rs {actualPrice}
        </span>

        {/* Actual Price */}
        <span
          className="text-lg font-medium line-through text-gray-500"
          style={{ color: theme.colors.textSecondary }}
        >
          Rs {discountablePrice}
        </span>

        {/* Discount Badge */}
        <span className="px-2 py-1 text-sm font-bold text-white bg-green-500 rounded-lg">
          {calculateDiscountPercentage(discountablePrice, actualPrice)}% OFF
        </span>
      </div>

      <div
        className="w-full h-0.5 "
        style={{ backgroundColor: theme.colors.textPrimary }}
      ></div>
      <div className="flex flex-col items-start md:items-center justify-center gap-5  p-6 rounded-lg ">
        {characteristics.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full  rounded-lg shadow-md p-2"
          >
            <div className="flex items-center justify-center w-10 h-10  rounded-full">
              <TiTick color="green" size={20} />
            </div>

            <h2
              className="text-lg font-medium text-gray-700 dark:text-gray-300 text-right flex-1 ml-4"
              style={{ color: theme.colors.textSecondary }}
            >
              {item}
            </h2>
          </div>
        ))}
      </div>

      <button
        onClick={onClick}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Contact to Book
      </button>
    </motion.div>
  );
}

export default PricingCard;
