"use client";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import logo from "../assets/ADIVASHI-LOGOiu-01.png";
import banner1 from "../assets/Social Design 03-01(3-11-25)iu.jpg";
import banner2 from "../assets/Social Design 02(3-11-25)iu.jpg";
import banner3 from "../assets/Social Design 06 (12-03-25)iu.jpg";
import banner4 from "../assets/social media design 05iu 12-3-25.jpg";

export default function Hero() {
  return (
    <div className="container mx-auto px-3 md:px-14">
      <Image
        src={logo}
        alt="logo"
        className="-mt-4 -mb-6 w-36 mx-auto"
        width={300}
        height={300}
      />
      <div className="animate__swing animate__animated ">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 1500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={banner1}
              alt="banner-1"
              className="w-full h-auto object-cover"
              width={1500}
              height={800}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={banner2}
              alt="banner-2"
              className="w-full h-auto object-cover"
              width={1500}
              height={800}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={banner3}
              alt="banner-1"
              className="w-full h-auto object-cover"
              width={1500}
              height={800}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={banner4}
              alt="banner-2"
              className="w-full h-auto object-cover"
              width={1500}
              height={800}
              layout="responsive"
            />
          </SwiperSlide>
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
        </Swiper>
      </div>
    </div>
  );
}
