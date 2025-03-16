"use client";

import { AlertCircle, CheckCircle } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TFormData, TProduct } from "@/types";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

const FormOrder = dynamic(() => import("./FormOrder"), {
  ssr: false,
});

const OrderForm = ({
  formData,
  setFormData,
  products,
}: {
  formData: TFormData;
  setFormData: Dispatch<SetStateAction<TFormData>>;
  products: TProduct[];
}) => {
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);

  return (
    <section id="order-form" className="py-20 bg-white">
      <div className="container mx-auto px-2 md:px-4">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-green-700 mb-4"
          >
            আপনার অর্ডার দিন
          </h2>
          <p
            data-aos="fade-up"
            className="md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            আপনার অর্ডার প্লেস করতে নিচের ফর্মটি পূর্ণ করুন। আমরা অর্ডার নিশ্চিত
            করতে আপনার সাথে যোগাযোগ করব।
          </p>
        </div>

        {orderSuccess ? (
          <div className="max-w-4xl mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-8">
            <div className="flex items-center">
              <CheckCircle className="mr-2" />
              <span className="font-bold">অর্ডার সফলভাবে প্লেস হয়েছে!</span>
            </div>
            <p className="mt-2">
              আপনার অর্ডারের জন্য ধন্যবাদ। আমরা অর্ডার নিশ্চিত করতে শীঘ্রই আপনার
              সাথে যোগাযোগ করব।
            </p>
          </div>
        ) : formErrors.length > 0 ? (
          <div className="max-w-4xl mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8">
            <div className="flex items-center">
              <AlertCircle className="mr-2" />
              <span className="font-bold">
                দয়া করে নিম্নলিখিত প্রয়োজনীয় ক্ষেত্রগুলি পূর্ণ করুন:
              </span>
            </div>
            <ul className="mt-2 list-disc list-inside">
              {formErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <FormOrder
          setFormErrors={setFormErrors}
          setOrderSuccess={setOrderSuccess}
          orderSuccess={orderSuccess}
          setFormData={setFormData}
          formData={formData}
          products={products}
        />
      </div>
    </section>
  );
};

export default OrderForm;
