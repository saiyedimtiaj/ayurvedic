"use client";

import { useEffect, useState } from "react";
import OrderForm from "./OrderForm";
import Products from "./Products";
import { TFormData } from "@/types";
import Review from "./Review";
import AOS from "aos";
import "aos/dist/aos.css";
import prod2 from "../assets/iu01.jpg";
import prod1 from "../assets/iu02.jpg";
import prod5 from "../assets/iu05.jpg";

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

  useEffect(() => {
    AOS.init({
      duration: 250,
    });
  }, []);

  return (
    <>
      <Products products={products} setFormData={setFormData} />
      <Review />
      <div className="border-2 mx-2 mt-4 md:mt-10 border-green-700 px-3 mb-9 md:px-8 rounded-2xl">
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
