import { TFormData, TProduct } from "@/types";
import { convertToBangla } from "@/utils";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import OrderDetails from "./OrderDetails";
import { puchageEvent } from "@/services/fbPixel";

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
  const subtotal = selectedProduct.price;
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
      setShipping("40");
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

    const resData = {
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
    puchageEvent(resData);

    setOrderSuccess(true);
    setLoading(false);
  };

  return (
    <form id="order-form" onSubmit={handleSubmit} className="mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Customer Information */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-6">আপনার তথ্য</h3>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              পূর্ণ নাম
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
              ঠিকানা
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="আপনার ঠিকানা লিখুন"
            />
          </div>

          {/* Product Selection */}
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            আপনার পণ্য নির্বাচন করুন
          </h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductSelect(product.id)}
                className={`relative overflow-hidden flex items-center py-4 px-2 md:p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                  formData.productId === product.id
                    ? "border-zinc-400 bg-zinc-200"
                    : "border-zinc-400"
                }`}
              >
                {/* Free Delivery Tag */}
                {product.isFreeDelibery && (
                  <span className="absolute top-4 rotate-45 -right-7 bg-green-700 text-white text-xs md:font-bold font-medium px-6 py-1 rounded">
                    ফ্রি ডেলিভারি
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
                  <h4 className="font-bold ">{product.name}</h4>
                  <p className="hidden md:block text-sm text-gray-600">
                    {product.description}
                  </p>
                  <p className="block md:hidden font-bold text-black">
                    <span className="text-sm font-extrabold mr-1">৳</span>
                    {convertToBangla(product.price)}
                  </p>
                </div>
                <div className="md:block hidden z-50 text-right md:mr-6">
                  <p className="font-bold text-black">
                    <span className="text-sm font-extrabold mr-1">৳</span>
                    {convertToBangla(product.price)}
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
