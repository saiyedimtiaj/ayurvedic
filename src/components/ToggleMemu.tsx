"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaTimes, FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import { FaMessage } from "react-icons/fa6";

export default function AnimatedSocialIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-[9999999] bottom-8 right-5">
      {/* Social icons container initially hidden behind the toggle button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="mt-4 flex flex-col space-y-4"
      >
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }} // Initially hidden
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
          }}
          transition={{
            duration: 0.5,
            delay: isOpen ? 0.4 : 0, // Appears second with 0.4s delay, disappears second when closing
          }}
          className="p-2 bg-green-500 text-white rounded-full shadow-md"
        >
          <FaWhatsapp size={35} />
        </motion.a>

        {/* Third icon will appear first, disappears last */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }} // Initially hidden
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
          }}
          transition={{
            duration: 0.5,
            delay: isOpen ? 0.2 : 0, // Appears first with 0.2s delay, disappears last when closing
          }}
          className="p-3 bg-blue-600 text-white rounded-full shadow-md"
        >
          <FaPhoneAlt size={28} />
        </motion.a>
      </motion.div>

      {/* Toggle Button with rotation */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-[#008037] cursor-pointer text-white rounded-full shadow-lg mt-4"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        animate={{ rotate: isOpen ? 180 : 0 }} // Apply rotation here
      >
        {isOpen ? <FaTimes size={24} /> : <FaMessage size={24} />}
      </motion.button>
    </div>
  );
}
