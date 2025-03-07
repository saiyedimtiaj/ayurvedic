"use client";

import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/shared/data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
      className="cursor-pointer flex items-center justify-between gap-4 py-3 px-3 font-semibold text-base md:text-xl transition-colors duration-200"
      onClick={() => onChangeIndex(index)}
    >
      {children}
      <motion.span
        animate={{ rotate: isActive ? 180 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isActive ? <FaChevronUp /> : <FaChevronDown />}
      </motion.span>
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
  return (
    <section className="pb-16 pt-8">
      <div className="mx-auto bg-[#008037] py-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            সাধারন জিজ্ঞাসা
          </h2>
          <p className="md:text-lg text-gray-100 max-w-3xl mx-auto">
            আমাদের পণ্য সম্পর্কিত সাধারণ প্রশ্নের উত্তর খুঁজে নিন।
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4">
          <Accordion>
            {faqItems.map((item, i) => (
              <AccordionItem key={i}>
                <AccordionHeader>{item.question}</AccordionHeader>
                <AccordionPanel>{item.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
