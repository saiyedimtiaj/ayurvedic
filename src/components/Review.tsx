"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import img1 from "../assets/INFU-Banner-1-1024x576.jpg";
import img2 from "../assets/Swzon-rumi-mashrum-1024x576.jpg";
import img3 from "../assets/Website-Review-copy-1024x455.jpg";
import img4 from "../assets/Website-Review-copy-2-1024x455.jpg";

const Review = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="container mx-auto px-2 md:px-4 my-20">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        গ্রাহকদের পর্যালোচনা
      </h1>
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
        {images.map((i, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={i}
              alt="banner-1"
              className="w-full h-auto object-cover"
              width={1500}
              height={800}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
