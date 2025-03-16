"use client";

import { useEffect, useState } from "react";
import OrderForm from "./OrderForm";
import Products from "./Products";
import { TFormData } from "@/types";
import Review from "./Review";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    name: "১৫০ মিলি আয়ুর্বেদিক রিলিফ অয়েল।",
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    isFreeDelibery: false,
    tag: "হাফ কোর্স ",
    offerPrice: 890,
  },
  {
    id: 2,
    name: "৩০০ মিলি আয়ুর্বেদিক রিলিফ অয়েল।",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    isFreeDelibery: true,
    isHotSales: "HOT Combo",
    offerPrice: 1605,
    tag: "ফুল কোর্স",
  },
  {
    id: 4,
    name: "২০০ মিলি আয়ুর্বেদিক হেয়ার অয়েল ও ১০০ গ্রাম আয়ুর্বেদিক হেয়ার স্পা প‍্যাক।",
    price: 1650,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    isFreeDelibery: false,
    offerPrice: 895,
    tag: "হাফ কোর্স ",
  },
  {
    id: 3,
    name: "৪০০ মিলি  আয়ুর্বেদিক হেয়ার অয়েল ও ২০০ গ্রাম আয়ুর্বেদিক হেয়ার স্পা প‍্যাক।",
    price: 3260,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    isFreeDelibery: true,
    isHotSales: "SUPER Combo",
    offerPrice: 1605,
    tag: "ফুল কোর্স",
  },
  {
    id: 6,
    name: "২০০ মিলি আয়ুর্বেদিক হেয়ার অয়েল ও ১৫০ মিলি আয়ুর্বেদিক রিলিফ অয়েলের সাথে ১০০ মিলি গ্রাম আয়ুর্বেদিক হেয়ার স্পা প‍্যাক ফ্রি।",
    price: 2875,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    isFreeDelibery: true,
    isHotSales: "FAMILY Combo",
    offerPrice: 1675,
    tag: "সুপার কোর্স",
  },
];

const Combain = () => {
  const [formData, setFormData] = useState<TFormData>({
    name: "",
    mobile: "",
    address: "",
    productId: products[0].id,
    productName: products[0].name,
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
      <div className="border-2 mx-2 mt-10 border-green-700 px-3 mb-9 md:px-8 rounded-2xl">
        <OrderForm
          products={products}
          setFormData={setFormData}
          formData={formData}
        />
        <h3
          data-aos="fade-up"
          className="text-2xl md:text-3xl text-center font-semibold text-green-700 mb-8"
        >
          সরাসরি অর্ডার করতে অথবা ফ্রি কনসাল্টেশন পেতে কল করুনঃ 01615117126
        </h3>
      </div>
    </>
  );
};

export default Combain;
