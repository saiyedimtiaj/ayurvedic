"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component

import img1 from "../assets/INFU-Banner-1-1024x576.jpg";
import img2 from "../assets/Swzon-rumi-mashrum-1024x576.jpg";

const imgs = [img1, img2, img1, img2];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 4;
const DRAG_BUFFER = 40; // Threshold for changing slides

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0); // For tracking drag position

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1); // Move to the next slide
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1); // Move to the previous slide
    }

    // Reset drag position after finishing the drag
    dragX.set(0);
  };

  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{
        rotate: [0, 8, -8, 8, -8, 0],
      }}
      transition={{
        duration: 1.1,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: "center" }}
      className="overflow-hidden relative container mx-auto"
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }} // Ensure the drag can move horizontally
        style={{ x: dragX }} // Track the drag position
        animate={{ x: -imgIndex * 100 + "%" }} // Move carousel based on imgIndex
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd} // Trigger slide change after drag
        className="flex items-center"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </motion.div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          animate={{ scale: imgIndex === idx ? 1 : 0.85 }}
          transition={SPRING_OPTIONS}
          className="relative w-full flex-shrink-0"
        >
          <Image
            src={imgSrc}
            alt={`Slide ${idx + 1}`}
            layout="responsive"
            width={1024}
            height={576}
            objectFit="cover"
            className="w-full h-full"
          />
        </motion.div>
      ))}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)} // Change the image index on dot click
          className={`h-2.5 w-2.5 rounded-full transition-colors ${
            idx === imgIndex ? "bg-blue-700" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px]" />
    </>
  );
};
