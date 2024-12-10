"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const links = [
  { id: "#hero", title: "Home" },
  { id: "#about", title: "About" },
  { id: "#services", title: "Services" },
  { id: "#courses", title: "Courses" },
  { id: "#pricing", title: "Pricing" },
  { id: "#testimonials", title: "Testimonials" },
  { id: "#contact", title: "Contact" },
];

const socials = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/profile.php?id=61569188792086",
  },
  {
    icon: <FaTiktok />,
    href: "https://www.tiktok.com/@hashtagaimers?_t=8s35QrBRxah&_r=1",
  },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/105291996" },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/hashtagaimers/?hl=en",
  },
];

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ClientFooter = () => {
  return (
    <motion.footer
      className="px-6 py-12 md:px-16 lg:px-24 bg-gray-900 text-gray-100"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      {/* Main Content */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {/* Logo and Tagline */}
        <motion.div
          className="flex flex-col text-center md:items-start"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-blue-500 mb-4 tracking-wider">
            AIMERS ACADEMY
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Where aspirations take flight!
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          variants={itemVariants}
        >
          <h4 className="text-xl font-semibold mb-4 text-blue-400">
            Quick Links
          </h4>
          <div className="flex flex-col space-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.id}
                className="hover:text-blue-400 transition duration-300 text-sm sm:text-base"
              >
                {link.title}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          variants={itemVariants}
        >
          <h4 className="text-xl font-semibold mb-4 text-blue-400">
            Get in Touch
          </h4>
          <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
            Have questions? Contact us for more information about our courses
            and services.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            📞 <span className="font-semibold">+977 9810689165</span>
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            📧{" "}
            <a
              href="mailto:login.aimers@gmail.com"
              className="hover:text-blue-400 transition duration-300"
            >
              login.aimers@gmail.com
            </a>
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            🏢 <span>Aimers Academy</span>
          </p>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        variants={itemVariants}
      >
        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © 2024 AIMERS ACADEMY. All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex space-x-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default ClientFooter;
