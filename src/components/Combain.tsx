"use client";

import { useState } from "react";
import OrderForm from "./OrderForm";
import { TFormData } from "@/types";
import Review from "./Review";
import prod2 from "../assets/iu01.jpg";
import prod1 from "../assets/iu02.jpg";
import prod5 from "../assets/iu05.jpg";
import banner5 from "../assets/banner69.jpg";
import Banneer from "./Banneer";
import ActionButton from "./ActionButtons";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "150ml ইন্ডিয়ান আয়ুর্বেদিক রিলিফ অয়েল।",
    price: 1250,
    image: prod1,
    isFreeDelibery: false,
    tag: "হাফ কোর্স ",
    offerPrice: 890,
  },
  {
    id: 2,
    name: "300ml ইন্ডিয়ান আয়ুর্বেদিক রিলিফ অয়েল।",
    price: 2500,
    image: prod2,
    isFreeDelibery: true,
    isHotSales: "HOT Combo",
    offerPrice: 1549,
    tag: "ফুল কোর্স",
  },
  {
    id: 6,
    name: "200ml ইন্ডিয়ান আদিবাসী হেয়ার অয়েল ও 150ml আয়ুর্বেদিক রিলিফ অয়েলের সাথে 200gm আয়ুর্বেদিক হেয়ার স্পা প‍্যাক-ফ্রি।",
    price: 2875,
    image: prod5,
    isFreeDelibery: true,
    isHotSales: "FAMILY Combo",
    offerPrice: 1649,
    tag: "সুপার কোর্স",
  },
];

const Combain = () => {
  const [formData, setFormData] = useState<TFormData>({
    name: "",
    mobile: "",
    address: "",
    selectedProducts: [],
  });

  return (
    <>
      <h2 className="text-[18px] md:text-4xl py-2 md:py-4 px-2 rounded-md text-center text-green-700 font-bold ">
        আয়ূর্বেদিক রিলিফ অয়েল প্রাচীন ইন্ডিয়ান আদিবাসি ফর্মূলায় তৈরি যা কোন
        <span className="text-red-500"> পার্শ্ব প্রতিক্রিয়া</span> ছাড়াই ব্যথা
        দূর করবে।
      </h2>
      <h2 className="text-[18px] md:text-4xl py-2 md:py-4 px-2 rounded-md text-center text-green-700 font-bold ">
        <span className="text-yellow-500 text-[20px] md:text-[42px]">
          {" "}
          লিমিটেড স্টক,
        </span>{" "}
        তাই দেরি না করে এখনই অর্ডার করুন।
      </h2>
      <div>
        <Image
          src={banner5}
          alt="banner"
          width={500}
          height={500}
          className="w-full h-full rounded-2xl shadow-md shadow-green-500 p-2"
        />
      </div>
      <h2 className="text-[18px] -mb-3 md:text-4xl mt-2 py-2 md:py-4 px-2 rounded-md text-center text-green-700 font-bold ">
        ১৫ দিন নিয়মিত দিনে ২ বার এই তেল ব‍্যবহার করলে ইনশাআল্লাহ ব‍্যথা
        স্থায়ীভাবে দূর হবে।
      </h2>
      <ActionButton />
      <Review />
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto mb-4 px-2">
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src="https://www.youtube.com/embed/klc5opdc6Zw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src="https://www.youtube.com/embed/B0ackQT6VYw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src="https://www.youtube.com/embed/EM8eFNP7GwA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <ActionButton />
      <Banneer />
      <div className="border-2 mx-2 mt-4 md:mt-10 border-green-700 px-3 mb-9 md:px-8 rounded-2xl -pr-10">
        <OrderForm
          products={products}
          setFormData={setFormData}
          formData={formData}
        />
        <h3 className="text-2xl md:text-3xl text-center font-semibold text-green-700 mb-8">
          সরাসরি অর্ডার করতে অথবা ফ্রি কনসাল্টেশন পেতে কল করুনঃ 01615117126
        </h3>
      </div>
    </>
  );
};

export default Combain;
