"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/REVIEW POST iu-04.jpg.png";
import img2 from "../assets/REVIEW POST iu-05.jpg.png";
import img3 from "../assets/REVIEW POST iu-01.jpg.png";
import img4 from "../assets/REVIEW POST iu-06.png";
import img5 from "../assets/REVIEW POST iu-02.jpg.png";
import img6 from "../assets/REVIEW POST iu-03.jpg.png";
import leepImg from "../assets/vecteezy_green-leaf-transparent-background_15100115.png";

const Review = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [selectedImage, setSelectedImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null); // To get the container ref
  const [isClient, setIsClient] = useState(false); // To track if we're in the client-side

  // UseEffect to make sure this runs only in the client-side (browser)
  useEffect(() => {
    setIsClient(true); // This will ensure that the window object is available
  }, []);

  // Function to go to the next image, wrapped in useCallback to prevent unnecessary re-creations
  const nextImage = useCallback(() => {
    if (selectedImage === images.length - 1) {
      setSelectedImage(0); // Reset to first image when reaching the end
      // We can set a timeout to reset the transition effect
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          containerRef.current.style.transform = `translateX(0%)`; // Go back to the first image
        }
      }, 500);
    } else {
      setSelectedImage((prev) => prev + 1); // Move to the next image
    }
  }, [selectedImage, images.length]);

  // Function to go to the previous image
  const prevImage = useCallback(() => {
    if (selectedImage === 0) {
      setSelectedImage(images.length - 1); // Reset to the last image if we're at the start
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          containerRef.current.style.transform = `translateX(-${
            (selectedImage * 100) / (window.innerWidth < 768 ? 1 : 3)
          }%)`;
        }
      }, 500);
    } else {
      setSelectedImage((prev) => prev - 1); // Move to the previous image
    }
  }, [selectedImage, images.length]);

  // Auto slide change every 3 seconds
  useEffect(() => {
    if (isClient) {
      const interval = setInterval(nextImage, 3000);
      return () => clearInterval(interval);
    }
  }, [nextImage, isClient]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [selectedImage]);

  // Ensure the window object is available for rendering
  if (!isClient) {
    return null; // Return nothing during SSR (server-side rendering)
  }

  return (
    <div className="container mx-auto px-2 md:px-4 mb-5 md:mb-10 text-center overflow-hidden">
      <div className="py-0 md:py-3 px-3 max-w-[260px] md:max-w-[400px] text-green-700 mx-auto border-2 border-green-700 rounded-2xl font-bold mb-5 md:mb-10 relative">
        <h1 className="text-[18px] py-1 md:text-4xl">আমাদের কাস্টমার রিভিউ</h1>
        <Image
          width={100}
          height={100}
          src={leepImg}
          alt="decorative leaf"
          className="md:w-12 h-4 w-4 opacity-70 md:h-12 absolute left-0 -bottom-0 rotate-[12deg] -z-20"
        />
        <Image
          width={100}
          height={100}
          src={leepImg}
          alt="decorative leaf"
          className="md:w-12 h-4 w-4 opacity-70 md:h-12 absolute right-0 top-0 -rotate-[170deg] -z-20"
        />
      </div>

      {/* Carousel Section */}
      <div className="relative w-full">
        <div className="flex overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform ease-in-out duration-500"
            style={{
              transform: `translateX(-${
                (selectedImage * 100) / (window.innerWidth < 768 ? 1 : 3)
              }%)`, // Move to the selected image index
            }}
          >
            {[...images, ...images].map(
              (
                image,
                index // Duplicate images for seamless looping
              ) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[33.33%] md:w-[33.33%] px-2" // 1 image for small screen, 3 images for large
                >
                  <Image
                    src={image}
                    alt={`review ${index}`}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute z-50 cursor-pointer left-2 md:left-5 text-black p-2 rounded-full bg-white shadow-md"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 z-50 cursor-pointer md:right-5 text-black p-2 rounded-full bg-white shadow-md"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Review;
