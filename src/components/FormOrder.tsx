"use client";
import { TFormData, TProduct } from "@/types";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import OrderDetails from "./OrderDetails";
import { purchaseEvent } from "@/services/fbPixel"; // Corrected function name
import axios from "axios";

const FormOrder = ({
  setFormErrors,
  setOrderSuccess,
  orderSuccess,
  formData,
  setFormData,
  products,
}: {
  setFormErrors: Dispatch<SetStateAction<string[]>>;
  setOrderSuccess: Dispatch<SetStateAction<boolean>>;
  formData: TFormData;
  setFormData: Dispatch<SetStateAction<TFormData>>;
  orderSuccess: boolean;
  products: TProduct[];
}) => {
  const [shipping, setShipping] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);

  const selectedProduct =
    products.find((p: TProduct) => p.id === formData.productId) || products[0];
  const subtotal = selectedProduct.offerPrice;
  const total = subtotal + parseInt(shipping as string);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping(e.target.value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Math.max(1, parseInt(value) || 1) : value,
    }));
  };

  useEffect(() => {
    if (selectedProduct.isFreeDelibery === false) {
      setShipping("80");
    } else {
      setShipping("0");
    }
  }, [selectedProduct]);

  const handleProductSelect = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setFormData((prev) => ({
        ...prev,
        productId,
        productName: product.name,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormErrors([]);

    const errors: string[] = [];

    if (!formData.name.trim()) errors.push("Name");
    if (!formData.mobile.trim()) errors.push("Mobile Number");
    if (!formData.address.trim()) errors.push("Address");

    if (errors.length > 0) {
      setFormErrors(errors);
      document
        .getElementById("order-form")
        ?.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
      return;
    }

    try {
      const orderData = {
        name: formData.name,
        mobile: formData.mobile,
        address: formData.address,
        productId: formData.productId,
        productName: formData.productName,
        subtotal,
        shipping,
        total,
        status: "Pending",
      };
      purchaseEvent(orderData); // Corrected function call
      const { data } = await axios.post("/api/orders", orderData);

      if (data.success) {
        setOrderSuccess(true);
      }
    } catch (error) {
      console.error("Order submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="order-form" onSubmit={handleSubmit} className="mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Customer Information */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-green-700 mb-6">
            Billing details
          </h3>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              আপনার নাম লিখুন *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="আপনার নাম লিখুন"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-semibold mb-2"
            >
              মোবাইল নম্বর
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="আপনার মোবাইল নম্বর লিখুন"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-2"
            >
              আপনার ঠিকানা লিখুন *
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="বাসা নং, রোড নং, থানা, জেলা"
            />
          </div>

          {/* Product Selection */}
          <h3 className="text-xl font-bold text-green-700 mb-6">
            কোন প্যাকেজটি নিতে চান সিলেক্ট করুন:
          </h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductSelect(product.id)}
                className={`relative order-card overflow-hidden flex items-center py-4 px-2 md:py-6 md:px-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                  formData.productId === product.id
                    ? "border-zinc-400 bg-zinc-200"
                    : "border-zinc-400"
                }`}
              >
                {/* Free Delivery Tag */}
                {product.isHotSales && (
                  <span
                    className={`absolute ${
                      product.isHotSales == "SUPER Combo"
                        ? "bottom-6 -right-7"
                        : product.isHotSales == "FAMILY Combo"
                        ? "bottom-6 -right-7"
                        : "bottom-5 -right-6"
                    } rotate-[-43deg] bg-orange-500 text-white text-xs md:font-bold font-medium px-6 py-1 rounded`}
                  >
                    {product.isHotSales}
                  </span>
                )}

                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="md:flex-1 z-50">
                  <h4 className="font-bold mb-3">{product.name}</h4>
                  {product.isFreeDelibery && (
                    <span className="bg-green-700 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full ">
                      ফ্রি ডেলিভারি
                    </span>
                  )}
                  <p className="block md:hidden font-bold text-black">
                    <span className="text-sm font-extrabold mr-1">৳</span>
                    {product.offerPrice}
                  </p>
                </div>
                <div className="md:block hidden z-50 text-right md:mr-6">
                  <p className="font-bold text-black">
                    <span className="text-sm font-extrabold mr-1">৳</span>
                    {product.offerPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <OrderDetails
          handleShippingChange={handleShippingChange}
          selectedProduct={selectedProduct}
          subtotal={subtotal}
          total={total}
          loading={loading}
          orderSuccess={orderSuccess}
          shipping={shipping}
        />
      </div>
    </form>
  );
};

export default FormOrder;
