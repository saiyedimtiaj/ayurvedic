"use client";

import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import overlay1 from "../assets/website asset FINAL-02.png";
import overlay2 from "../assets/website asset FINAL-01.png";
import Image from "next/image";
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
    <div className="overflow-hidden text-white border-b border-white">
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
      className="cursor-pointer gap-1.5 md:gap-2 py-3 flex items-start px-3 font-semibold text-[14px] md:text-xl transition-colors duration-200 text-white"
      onClick={() => onChangeIndex(index)}
    >
      <motion.span
        animate={{ rotate: isActive ? 180 : 270 }}
        transition={{ duration: 0.3 }}
        className="text-lg"
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
          <div className="p-3 md:p-4 text-xs md:text-base">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Faq = () => {
  return (
    <section className="pb-3 md:pb-8 pt-2">
      <div className="mx-auto bg-[#008036] pt-4 pb-5 relative">
        <Image
          src={overlay1}
          alt="banner"
          width={1000}
          height={400}
          className="w-full h-full absolute bottom-0 z-10 left-0"
        />
        <Image
          src={overlay2}
          alt="banner"
          width={1000}
          height={400}
          className="w-full h-full absolute top-0 z-10 left-0"
        />
        <div className="text-center mb-0">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            সাধারন জিজ্ঞাসা
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <Accordion>
            <AccordionItem>
              <AccordionHeader>
                আয়ুর্বেদিক রিলিফ অয়েলের দাম কত ? কিভাবে অর্ডার করব ?
              </AccordionHeader>
              <AccordionPanel>
                ১৫০ ml আয়ুর্বেদিক রিলিফ অয়েল এর অফার প্রাইজ ৮৯০ টাকা। ডেলিভারি
                চার্জ চট্টগ্রামের ভেতর ৮০ টাকা, চট্টগ্রামের বাইরে ১৩০ টাকা। ৩০০
                ml আয়ুর্বেদিক রিলিফ অয়েলের এর অফার প্রাইজ ১৫৪৯ টাকা (ডেলিভারি
                চার্জ ফ্রি)। ডেলিভারিতে প্রোডাক্ট হাতে বুঝে পাবার পর টাকা দিয়ে
                নিতে পারবেন। অর্ডার করতে আপনার বিস্তারিত ঠিকানা দিয়ে নিচের
                ফর্মটি পূরণ করুন। ৩-৫ দিনের মধ্যে ডেলিভারি পাবেন।
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
                💊মাংশ পেশি চাবায় কামড়ায়!
                <br />
                💊রগে টান লাগে!
                <br />
                💊জালাপোড়া করে, ঝিনঝিন করে!
                <br />
                💊মাংসপেশিতে খিচ ধরা!
                <br />
                💊ঘাড়ের ব্যথা, রাতে ব্যথা বেড়ে যায়! <br />
                💊হাত-পায়ের জয়েন্টে ব্যথা, হাত-পা অবোশ হয়ে থাকে!
                <br />
                💊কোমরের ব্যথা, উঠলে বসা যায় না, বসলে উঠা যায় না!
                <br />
                💊হাটু ব্যথা, হাড়ক্ষয় বা কার্টিলেজ জনিত সমস্যার কারনে ব্যথা!
                <br />
                💊পায়ের তালুতে ব্যথা, ভাঙ্গা ব‍্যথা, মুছকানো, এক কথায় সকল ব্যথায়
                কার্যকরী পাহাড়ি আয়ুর্বেদিক এই রিলিফ অয়েল। ০৭ দিনের
                Guaranty ইনশাআল্লাহ।
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>
                ব‍্যথার তৈলটি কিভাবে ব‍্যবহার করব?
              </AccordionHeader>
              <AccordionPanel>
                🟢ব্যথার স্থানে ৫-৬ ফোটা তেল নিয়ে ৫ মিনিট মালিশ করতে হবে ।{" "}
                <br /> 🟢ফলাফল পেতে প্রথম ৭ দিন, দিনে ৩ বার এবং পরের ৭
                দিন,কমপক্ষে দিনে ২ বার মালিশ করতে হবে। এই নিয়ম পালন করলে
                ইনশাআল্লাহ ভালো ফলাফল পাবেন।
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
