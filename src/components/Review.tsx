"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/INFU-Banner-1-1024x576.jpg";
import img2 from "../assets/Swzon-rumi-mashrum-1024x576.jpg";
import img3 from "../assets/Website-Review-copy-1024x455.jpg";
import img4 from "../assets/Website-Review-copy-2-1024x455.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import leepImg from "../assets/vecteezy_green-leaf-transparent-background_15100115.png";

const Review = () => {
  const images = [img1, img2, img3, img4, img1, img2];
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    AOS.init({
      duration: 250,
    });
  }, []);

  return (
    <div className="container mx-auto px-2 md:px-4 mb-10 text-center overflow-hidden">
      <div
        data-aos="fade-up"
        className="py-3 px-3 max-w-[260px] md:max-w-[400px] text-green-700 mx-auto mt-10 border-2 border-green-700 rounded-2xl font-bold mb-10"
      >
        <h1 className="text-2xl md:text-4xl">Customer Reviews</h1>
        <Image
          width={100}
          height={100}
          src={leepImg}
          alt="hgfnm"
          className="md:w-12 h-8 w-8 opacity-70 md:h-12 absolute left-0 -bottom-0 rotate-[12deg] -z-20"
        />
        <Image
          width={100}
          height={100}
          src={leepImg}
          alt="hgfnm"
          className="md:w-12 h-8 w-8 opacity-70 md:h-12 absolute right-0 top-0 -rotate-[170deg] -z-20"
        />
      </div>
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <button
          className="absolute z-30 cursor-pointer left-2 md:left-5 text-black  p-2 rounded-full "
          onClick={prevImage}
        >
          <ChevronLeft size={24} />
        </button>
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full overflow-hidden"
        >
          <Image
            src={images[selectedImage]}
            alt="review"
            width={800}
            height={800}
            className="w-full h-full px-3 object-cover"
          />
        </motion.div>
        <button
          className="absolute right-2 z-30 cursor-pointer md:right-5 text-black p-2 rounded-full"
          onClick={nextImage}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex items-center gap-2 md:gap-3 mt-5 justify-center">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={img}
              alt="click"
              width={40}
              height={40}
              onClick={() => setSelectedImage(idx)}
              className={`w-14 h-14 cursor-pointer border-2 rounded-md object-cover transition-all ${
                selectedImage === idx ? "border-black" : "border-gray-300"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Review;
