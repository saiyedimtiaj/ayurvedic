"use client";
import { useEffect } from "react";
import leepImg from "../assets/vecteezy_green-leaf-transparent-background_15100115.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const HeadingText = () => {
  useEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="font-bold relative text-center mx-2 md:mx-auto px-3 md:px-5 border-green-600 border-2 py-4 md:py-7 max-w-[900px] rounded-2xl mt-14"
    >
      <h1 className="text-[18px]  md:text-4xl ">
        শরীরের যেকোন ব্যথা বা চুলের যত্নে বিশ্বস্ত আয়ুর্বেদিক সমাধান।
      </h1>
      <Image
        width={100}
        height={100}
        src={leepImg}
        alt="hgfnm"
        className="md:w-16 h-7 w-7 opacity-70 md:opacity-100 md:h-16 absolute left-0 -bottom-0 rotate-[12deg] -z-20"
      />
      <Image
        width={100}
        height={100}
        src={leepImg}
        alt="hgfnm"
        className="md:w-16 h-6 w-6 opacity-70 md:opacity-100 md:h-16 absolute right-0 top-0 -rotate-[170deg] -z-20"
      />
    </div>
  );
};

export default HeadingText;
