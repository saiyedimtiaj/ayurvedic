"use client";
import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ActionButtons = () => {
  return (
    <div className="flex mt-10 mb-8 flex-col items-center gap-4">
      {/* Order Now Button with Smooth Scaling Animation */}
      <Link href="#order-form">
        <motion.div
          className="p-0.5 border-[1.3px] cursor-pointer border-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.6),0_-4px_8px_rgba(0,0,0,0.2)]"
          animate={{ scale: [1, 1.1, 1] }} // Scale up and down
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} // Smooth loop
        >
          <p className="p-0.5 border-black border-[3px] rounded-full">
            <span className="flex items-center gap-2 px-6 py-3 text-white text-lg md:text-xl font-bold bg-gradient-to-r from-[#008037] to-amber-600 rounded-full border-2 border-white shadow-md">
              <ShoppingBag size={24} /> এখনই অর্ডার করুন
            </span>
          </p>
        </motion.div>
      </Link>
    </div>
  );
};

export default ActionButtons;
