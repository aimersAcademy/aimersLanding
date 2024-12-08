"use client";

import { useTheme } from "@/context/ThemeProvider";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

function ClientModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(null);
  const { theme } = useTheme(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!name || !phone || !message || !address) {
      toast.error("Please don't leave the fields empty.");
      return;
    }
    setIsSubmitting(true);
    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_MODAL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(() => {
        form.current.reset();
        resetForm();
        setIsSubmitting(false);
        toast.success("Message sent successfully!");
        onClose();
      })
      .catch((err) => console.error(err));
  };

  const resetForm = () => {
    setName("");
    setAddress("");
    setPhone("");
    setSubject("");
    setGrade("");
    setMessage("");
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.3 }}
          >
            <div
              className="rounded-lg shadow-lg w-96 p-6"
              style={{
                backgroundColor: theme.colors.surface,
                color: theme.colors.textPrimary,
              }}
            >
              <h2 className="text-2xl font-semibold text-center mb-4">
                Book Now
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                {/* Name */}
                <div className="mb-4">
                  <label className="block font-medium mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded px-3 py-2 text-gray-800"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label className="block font-medium mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border rounded px-3 py-2 text-gray-800"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label className="block font-medium mb-1" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="user_address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border rounded px-3 py-2 text-gray-800"
                    placeholder="Enter your address"
                    required
                  />
                </div>

                {/* Subjects */}
                <div className="mb-4">
                  <label className="block font-medium mb-1" htmlFor="subjects">
                    Subjects
                  </label>
                  <select
                    id="subjects"
                    name="user_subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-gray-800 border rounded px-3 py-2"
                  >
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="math">Math</option>
                    <option value="all">All</option>
                  </select>
                </div>

                {/* Grade */}
                <div className="mb-4">
                  <label className="block font-medium mb-1" htmlFor="grade">
                    Grade
                  </label>
                  <select
                    id="grade"
                    name="user_grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full border rounded px-3 py-2 text-gray-800"
                    required
                  >
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <textarea
                    cols="30"
                    rows="2"
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-4 rounded-md border-none text-gray-800 outline-none bg-gray-100 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    {isSubmitting ? "Submitting" : "Submit"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ClientModal;
