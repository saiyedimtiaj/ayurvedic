"use client";
import "animate.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import logo from "../assets/ADIVASHI-LOGOiu-01.png";
import "aos/dist/aos.css";
import VideoComponent from "./VideoComponent";

export default function Hero() {
  return (
    <>
      {/* <div data-aos="fade-down">
        <div className="bg-green-600 px-4 text-center font-semibold md:font-semibold text-sm md:text-lg text-white md:py-3 py-1">
          প্রাচীন ইন্ডিয়ান আদিবাসী ফর্মুলায় তৈরি।
        </div>
      </div> */}

      <div className="container mx-auto px-3 md:px-14">
        <Image
          src={logo}
          alt="logo"
          className="md:-mt-8 md:-mb-7 -mt-6 -mb-6 w-24 md:w-36 mx-auto"
          width={300}
          height={300}
        />

        <h2 className="text-[13px] md:text-4xl font-bold text-center text-white bg-green-700 py-2 md:py-4 px-2 rounded-md">
          পুরাতন বাত বা আর্থ্রাইটিস ব্যথা সহ শারিরীক যেকোনো ব্যথা নিরাময়ে
          পরীক্ষিত সমাধান।
        </h2>

        <VideoComponent />

        <h2 className="text-[15px] md:text-4xl -mt-3 -mb-2 font-bold text-center text-green-700 px-2 rounded-md">
          প্রায় ৫০,০০০+ মানুষের বাত ব্যথা, কাঁধ ব্যথা, হাড় ক্ষয়ের ব্যথা, পুরনো
          কোমর ব্যথা ভালো হয়েছে &quot; আদিবাসী আয়ুর্বেদিক রিলিফ অয়েল &quot; এর
          মাধ্যমে।
        </h2>
      </div>
    </>
  );
}
