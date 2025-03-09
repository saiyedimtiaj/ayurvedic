"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import logo from "../assets/ADIVASHI-LOGOiu-01.png";

export default function Hero() {
  return (
    <div className="container mx-auto md:px-5">
      <Image
        src={logo}
        alt="logo"
        className="-mt-4 -mb-6 w-36 mx-auto"
        width={300}
        height={300}
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, 8, -8, 8, -8, 0], // Only shaking rotation effect
        }}
        transition={{
          duration: 1.1,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "center" }} // Keep the center fixed while shaking the edges
        viewport={{ once: true }} // Trigger animation only once when the component appears
      >
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="https://naturalsbyrakhi.com/wp-content/uploads/2022/08/Exit-Pop-Up-27.11.2024-copy.jpg"
              alt="banner-1"
              className="w-full h-auto object-cover"
              width={1500}
              height={800}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://naturalsbyrakhi.com/wp-content/uploads/2022/08/Web-Banner-discount-V2-1536x864.jpg"
              alt="banner-2"
              className="w-full h-auto object-cover"
              width={1500}
              height={800}
              layout="responsive"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}
