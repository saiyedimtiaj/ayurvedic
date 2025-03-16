"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import banner from "../assets/website asset-01.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface AccordionContextProps {
  isActive: boolean;
  index: number;
  onChangeIndex: (index: number) => void;
}

const AccordionContext = createContext<AccordionContextProps | null>(null);
const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an <Accordion>");
  }
  return context;
};

interface AccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  defaultIndex?: number;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  multiple = false,
  defaultIndex = -1,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | number[]>(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index: number) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return currentActiveIndex === index ? -1 : index;
      }
      if (
        Array.isArray(currentActiveIndex) &&
        currentActiveIndex.includes(index)
      ) {
        return currentActiveIndex.filter((i) => i !== index);
      }
      return Array.isArray(currentActiveIndex)
        ? [...currentActiveIndex, index]
        : [index];
    });
  }

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const isActive = Array.isArray(activeIndex)
          ? activeIndex.includes(index)
          : activeIndex === index;
        return (
          <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
            {child}
          </AccordionContext.Provider>
        );
      })}
    </>
  );
};

interface AccordionItemProps {
  children: React.ReactNode;
}
const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  return (
    <div className="mb-2 overflow-hidden text-white border-b border-white">
      {children}
    </div>
  );
};

interface AccordionHeaderProps {
  children: React.ReactNode;
}
const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className="cursor-pointer gap-2 py-3 px-3 font-semibold text-base md:text-xl transition-colors duration-200 text-white"
      onClick={() => onChangeIndex(index)}
    >
      <motion.span
        animate={{ rotate: isActive ? 180 : 270 }}
        transition={{ duration: 0.3 }}
        className="text-lg float-left mr-1"
      >
        <FaCaretDown size={23} />
      </motion.span>
      <span className="">{children}</span>
    </motion.div>
  );
};

interface AccordionPanelProps {
  children: React.ReactNode;
}
const AccordionPanel: React.FC<AccordionPanelProps> = ({ children }) => {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className="p-3 md:p-4 text-sm md:text-base">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section className="pb-16 pt-8">
      <div className="mx-auto bg-[#008037] pt-20 pb-36 relative">
        <Image
          src={banner}
          alt="banner"
          width={1000}
          height={400}
          className="w-full h-full absolute bottom-0 z-10 left-0"
        />
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            সাধারন জিজ্ঞাসা
          </h2>
          <p
            data-aos="fade-up"
            className="md:text-lg text-gray-100 max-w-3xl mx-auto"
          >
            আমাদের পণ্য সম্পর্কিত সাধারণ প্রশ্নের উত্তর খুঁজে নিন।
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <Accordion>
            <AccordionItem>
              <AccordionHeader>
                আয়ুর্বেদিক হেয়ার অয়েল কম্বোর দাম কত ? কিভাবে অর্ডার করব ?
              </AccordionHeader>
              <AccordionPanel>
                ২০০ ml আয়ুর্বেদিক রিলিফ অয়েল এর দাম অফার প্রাইজ ৮৯৫টাকা।
                ডেলিভারি চার্জ ঢাকার ভেতর ৮০ টাকা, ঢাকার বাইরে ১৩০টাকা। ৪০০ ml
                আয়ুর্বেদিক রিলিফ অয়েলের এর দাম ১৬০৫টাকা (ডেলিভারি চার্জ ফ্রি)।
                ডেলিভারিতে প্রোডাক্ট হাতে পাবার পর টাকা দিয়ে নিতে পারবেন। অর্ডার
                করতে আপনার বিস্তারিত ঠিকানা লিখে নীচের ফর্মটি পূরণ করুন। ৩-৫
                দিনের মধ্যে ডেলিভারি পাবেন।
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>
                আমার প্রচুর চুল পড়ছে ও খুশকির সমস্যা আছে, আমার কি চুল পড়া বন্ধ
                হবে বা নতুন চুল গজাবে আয়ুর্বেদিক হেয়ার অয়েল ব‍্যবহার করে ?
              </AccordionHeader>
              <AccordionPanel>
                ২০০ ml আয়ুর্বেদিক রিলিফ অয়েল এর দাম অফার প্রাইজ ৮৯৫টাকা।
                ডেলিভারি চার্জ ঢাকার ভেতর ৮০ টাকা, ঢাকার বাইরে ১৩০টাকা। ৪০০ ml
                আয়ুর্বেদিক রিলিফ অয়েলের এর দাম ১৬০৫টাকা (ডেলিভারি চার্জ ফ্রি)।
                ডেলিভারিতে প্রোডাক্ট হাতে পাবার পর টাকা দিয়ে নিতে পারবেন। অর্ডার
                করতে আপনার বিস্তারিত ঠিকানা লিখে নীচের ফর্মটি পূরণ করুন। ৩-৫
                দিনের মধ্যে ডেলিভারি পাবেন।
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>
                আয়ুর্বেদিক হেয়ার অয়েল কি কি উপাদান দিয়ে তৈরি ?
              </AccordionHeader>
              <AccordionPanel>
                খাটি নারিকেল তেলের সাথে তিলের তৈল,জবা ফুলের নির্যাস, আমলকি,
                মেথি, ব্রাহ্মি, কারিপাতা, শিকাকাই, রিঠা সহ প্রায় ৪০টি প্রাকৃতিক
                উপাদান ব্যবহার করা হয়েছে। যার প্রতিটি উপাদান চুলের জন্য অনেক
                অনেক উপকারী
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>
                আয়ুর্বেদিক রিলিফ অয়েলের দাম কত ? কিভাবে অর্ডার করব ?
              </AccordionHeader>
              <AccordionPanel>
                ১৫০ ml আয়ুর্বেদিক রিলিফ অয়েল এর দাম অফার প্রাইজ ৮৯০টাকা।
                ডেলিভারি চার্জ ঢাকার ভেতর ৮০ টাকা, ঢাকার বাইরে ১৩০টাকা। ৪০০ ml
                আয়ুর্বেদিক রিলিফ অয়েলের এর দাম ১৬০৫টাকা (ডেলিভারি চার্জ ফ্রি)।
                ডেলিভারিতে প্রোডাক্ট হাতে পাবার পর টাকা দিয়ে নিতে পারবেন। অর্ডার
                করতে আপনার বিস্তারিত ঠিকানা লিখে নীচের ফর্মটি পূরণ করুন। ৩-৫
                দিনের মধ্যে ডেলিভারি পাবেন।
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>
                আমার শরীরে বিভিন্ন অংশে প্রচুর ব‍্যথা, রিলিফ ওয়েলটি কি কি ব‍্যথা
                দূর করবে ?
              </AccordionHeader>
              <AccordionPanel>
                আমাদের আয়ুর্বেদিক রিলিফ অয়েলটির কার্যকারিতাঃ
                <br />
                💊বাতের ব্যথা,
                <br />
                💊মাথা ব্যথা,
                <br />
                💊রগে টান লাগা,
                <br />
                💊মাংসপেশিতে খিচ ধরা
                <br />
                💊ঘাড়ের ব্যথা,
                <br />
                💊হাত-পায়ের জয়েন্টে ব্যথা,
                <br />
                💊কোমরের ব্যথা,
                <br />
                💊হাটু ব্যথা,
                <br />
                💊পায়ের তালুতে ব্যথা,
                <br />
                💊হাড় ক্ষয় ও পুরনো ব‍্যথা,
                <br />
                💊ভাঙ্গা ব‍্যথা, মুছকানো ইত‍্যাদি ব্যথায় দ্রুত কমিয়ে আনে পাহাড়ি
                আয়ুর্বেদিক এই রিলিফ অয়েল। ০৭ দিনের Guaranty ইনশাআল্লাহ
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>
                ব‍্যথার তৈলটি কিভাবে ব‍্যবহার করব?
              </AccordionHeader>
              <AccordionPanel>
                🟢ব্যথার স্থানে ৫-৬ ফোটা তেল নিয়ে ৫ মিনিট মালিশ করতে হবে, দিনে
                ২-৩ বার । <br /> 🟢ফলাফল পেতে প্রথম ৭ দিন দিনে ৩ বার এবং পরের ৭
                দিন দিলে ২ বার মালিশ করতে হবে। এই নিয়ম পালন করলে ইনশাআল্লাহ ভালো
                ফলাফল পাবেন।
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
