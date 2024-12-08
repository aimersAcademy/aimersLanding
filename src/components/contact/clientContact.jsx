"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ContactCard from "./ContactCard";
import { useTheme } from "@/context/ThemeProvider";
import emailjs from "@emailjs/browser";
import { toast } from "@/app/toast";

function ClientContact() {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);

  const contactRef = useRef(null);

  const form = useRef(null);

  const isContactInView = useInView(contactRef, { once: true, threshold: 0.1 });

  const resetContents = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!name || !phone || !message || !email) {
      toast.error("Please don't leave the fields empty");
      return null;
    }
    setIsSending(true);

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        }
      )
      .then(() => {
        setIsSending(false);
        toast.success("Message Sent Successfully!");
        form.current.reset();
        resetContents();
      })
      .catch((err) => console.log(err));
  };

  const formVariant = {
    hidden: { opacity: 0, y: "50vw" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  const detailVariant = {
    hidden: { opacity: 0, y: "50vw" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const dividerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "500px",
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  const dividerVariants2 = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "500px",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div
      className="flex flex-wrap justify-evenly items-center w-full gap-8 py-16 text-gray-800 shadow-lg"
      style={{ backgroundColor: theme.colors.surface }}
      ref={contactRef}
    >
      {/* Contact Form Section */}
      <motion.div
        className="flex items-center md:w-1/3 w-full justify-center"
        initial="hidden"
        animate={isContactInView ? "visible" : "hidden"}
        variants={formVariant}
      >
        <form
          className="flex flex-col gap-5 items-center justify-center w-full p-6"
          onSubmit={sendEmail}
          action=""
          ref={form}
        >
          <h1
            className="text-bold text-3xl md:text-5xl mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Contact
          </h1>
          <input
            type="text"
            placeholder="Name and Surname"
            name="user_name"
            className="p-4 rounded-md border-none outline-none bg-gray-100 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email Address"
            name="user_email"
            className="p-4 rounded-md border-none outline-none bg-gray-100 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="user_phone"
            className="p-4 rounded-md border-none outline-none bg-gray-100 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            cols="30"
            rows="3"
            name="message"
            placeholder="Message"
            className="p-4 rounded-md border-none outline-none bg-gray-100 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-all"
            type="submit"
          >
            {isSending ? "Sending" : "Send"}
          </motion.button>
        </form>
      </motion.div>

      {/* Animated Divider */}
      <motion.div
        className="h-[500px] w-[1px] hidden lg:block"
        initial="hidden"
        animate={isContactInView ? "visible" : "hidden"}
        variants={dividerVariants}
        style={{ backgroundColor: theme.colors.textPrimary }}
      ></motion.div>
      <motion.div
        className="w-[500px] h-[1px] block lg:hidden"
        initial="hidden"
        animate={isContactInView ? "visible" : "hidden"}
        variants={dividerVariants2}
        style={{ backgroundColor: theme.colors.textPrimary }}
      ></motion.div>

      {/* Contact Details Section */}
      <motion.div
        className="md:w-1/3  w-full flex flex-col gap-6 justify-center"
        initial="hidden"
        animate={isContactInView ? "visible" : "hidden"}
        variants={detailVariant}
      >
        <div className="flex items-center justify-center w-full">
          <h1
            className="font-semibold text-3xl lg:text-5xl mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Contact Details
          </h1>
        </div>
        <ContactCard />
      </motion.div>
    </div>
  );
}

export default ClientContact;
