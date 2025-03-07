"use client";

import { useState } from "react";
import OrderForm from "./OrderForm";
import Products from "./Products";
import { TFormData } from "@/types";
import Review from "./Review";

const products = [
  {
    id: 1,
    name: "প্রিমিয়াম জলপাই তেল",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    description:
      "আমাদের স্বাক্ষর শীতল-চাপানো জলপাই তেল, স্বাদ এবং পুষ্টিতে সমৃদ্ধ।",
    isFreeDelibery: false,
  },
  {
    id: 2,
    name: "প্রিমিয়াম জলপাই তেল",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    description:
      "আমাদের স্বাক্ষর শীতল-চাপানো জলপাই তেল, স্বাদ এবং পুষ্টিতে সমৃদ্ধ।",
    isFreeDelibery: true,
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
  return (
    <div>
      <Products products={products} setFormData={setFormData} />
      <Review />
      <OrderForm
        products={products}
        setFormData={setFormData}
        formData={formData}
      />
    </div>
  );
};

export default Combain;
