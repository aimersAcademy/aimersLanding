"use client";
import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { useState } from "react";

import { CiLight, CiDark } from "react-icons/ci";
import { listItemVariants, listVariants } from "@/utils/Variants";

const links = [
  { id: "#hero", title: "Home" },
  { id: "#about", title: "About" },
  { id: "#services", title: "Services" },
  { id: "#courses", title: "Courses" },
  { id: "#pricing", title: "Pricing" },
  { id: "#testimonials", title: "Testimonials" },
  { id: "#contact", title: "Contact" },
];

const ClientNavbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleOpen = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "visible" : "hidden";
  };

  return (
    <nav
      className={`flex items-center justify-between p-4 rounded-md shadow-lg transition-all duration-300`}
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="flex items-center space-x-4">
        <a href="#hero" className="flex items-center">
          {theme.name === "dark" ? (
            <div className="flex items-center space-x-4">
              <Image
                src={"/Aimers white.jpeg"}
                width={60}
                height={60}
                alt="Logo"
                className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-xl lg:text-2xl font-bold text-white tracking-wider">
                A<span className="text-blue-400">I</span>MERS
              </h2>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Image
                src={"/aimers-logo.png"}
                width={60}
                height={60}
                alt="Logo"
                className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-wider">
                A<span className="text-blue-600">I</span>MERS
              </h2>
            </div>
          )}
        </a>
      </div>

      <div className="hidden lg:flex gap-10 font-semibold">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.id}
            className={`transition-all hover:text-blue-500`}
          >
            {link.title}
          </a>
        ))}
      </div>

      <button
        onClick={toggleTheme}
        className={`p-2   rounded-full transition-all hover:bg-gray-300 duration-300 theme-btn`}
      >
        {theme.name === "dark" ? (
          <CiDark height={20} />
        ) : (
          <CiLight height={20} />
        )}
      </button>

      {/* Responsive Menu */}
      <div className="flex lg:hidden items-center">
        <button
          className="w-10 h-8 flex flex-col items-center justify-around z-50 relative"
          onClick={handleOpen}
        >
          <motion.div
            className="w-10 h-1 rounded origin-left"
            style={{ backgroundColor: theme.colors.textPrimary }}
          />
          <motion.div
            className="w-10 h-1 rounded"
            style={{ backgroundColor: theme.colors.textPrimary }}
            animate={open ? "opened" : "closed"}
          />
          <motion.div
            className="w-10 h-1 rounded origin-left"
            style={{ backgroundColor: theme.colors.textPrimary }}
          />
        </button>
        {open && (
          <motion.div
            className="fixed top-0 right-0 w-1/2 h-full flex flex-col items-center gap-8 justify-center bg-opacity-75 z-20"
            style={{ backgroundColor: theme.colors.background }}
            variants={listVariants}
            initial="closed"
            animate="opened"
            transition={{ duration: 1 }}
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <a href={link.id} className="flex gap-2" onClick={handleOpen}>
                  {link.title}
                </a>
              </motion.div>
            ))}
            {/* <motion.button
              onClick={toggleTheme}
              variants={listVariants}
              className={`p-2 block lg:hidden  rounded-full transition-all hover:bg-gray-300 duration-300 theme-btn`}
            >
              {theme.name === "dark" ? (
                <CiDark height={10} />
              ) : (
                <CiLight height={10} />
              )}
            </motion.button> */}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default ClientNavbar;
