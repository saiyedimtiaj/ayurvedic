"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banneer = () => {
  const DURATION = 21300 * 1000; // 5 hours 55 minutes in milliseconds
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Check localStorage for startTime or set a new one
    const storedStart = localStorage.getItem("offerStartTime");
    let startTime = storedStart ? parseInt(storedStart) : Date.now();

    // If start time is in future (edge case), reset
    if (Date.now() - startTime > DURATION) {
      startTime = Date.now();
      localStorage.setItem("offerStartTime", startTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const remaining = Math.max(0, Math.floor((DURATION - elapsed) / 1000));

      setTimeLeft(remaining);

      // Reset if timer expired
      if (remaining <= 0) {
        startTime = Date.now();
        localStorage.setItem("offerStartTime", startTime.toString());
        setTimeLeft(Math.floor(DURATION / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [DURATION]);

  const getTimeParts = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return { hrs, mins, secs };
  };

  const { hrs, mins, secs } = getTimeParts(timeLeft);

  return (
    <div className="bg-green-700 py-6 md:py-16 text-white text-center mt-4 px-2">
      <h3 className="text-2xl md:text-4xl font-bold">
        ১৫০ মি.লি আয়ুর্বেদিক রিলিফ অয়েল এর পূর্বের মূল্য{" "}
        <span className="relative text-white">
          ১২৫০
          <span
            className="absolute left-0 top-1/2 w-full h-[4px] bg-red-600"
            style={{ transform: "translateY(-50%)" }}
          ></span>
        </span>
        টাকা
      </h3>

      <h2 className="text-4xl md:text-8xl font-bold mt-6">
        আজকের জন্য অফার মূল্য <span className="text-[#FFFF00]">৮৯০ টাকা</span>
      </h2>

      <h4 className="text-xl md:text-4xl mt-8 font-bold mb-8">
        অগ্রিম একটি টাকা পেমেন্ট ছাড়াই হোম ডেলিভারি
      </h4>

      <div className="flex justify-center items-center gap-4 mb-4">
        <div className="bg-white text-black px-4 py-3 rounded-md text-2xl font-bold">
          {hrs} <br /> <span className="text-sm font-medium">ঘণ্টা</span>
        </div>
        <div className="bg-white text-black px-4 py-3 rounded-md text-2xl font-bold">
          {mins} <br /> <span className="text-sm font-medium">মিনিট</span>
        </div>
        <div className="bg-white text-black px-4 py-3 rounded-md text-2xl font-bold">
          {secs} <br /> <span className="text-sm font-medium">সেকেন্ড</span>
        </div>
      </div>

      <h4 className="text-2xl md:text-4xl mt-5 font-bold">
        সময় শেষ হওয়ার আগে
      </h4>

      <div className="flex mt-3 md:mt-10 mb-2 md:mb-8 flex-col items-center gap-4">
        <Link href="#order-form">
          <motion.div
            className="p-0.5 border-[1.3px] cursor-pointer border-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.6),0_-4px_8px_rgba(0,0,0,0.2)]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="p-0.5 border-white border-[3px] rounded-full">
              <span className="flex items-center gap-2 px-5 py-2.5 text-green-700 text-lg md:text-[22px] font-bold bg-white rounded-full border-2 border-white shadow-md">
                <ShoppingBag size={22} /> এখনই অর্ডার করুন
              </span>
            </p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Banneer;
