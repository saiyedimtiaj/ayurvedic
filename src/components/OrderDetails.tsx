import { convertToBangla } from "@/utils";
import { CheckCircle, Loader2, ShoppingBag, Truck } from "lucide-react";
import { SlCheck } from "react-icons/sl";
import Image from "next/image";
import React from "react";
import { TProduct } from "@/types";

const OrderDetails = ({
  selectedProduct,
  subtotal,
  handleShippingChange,
  total,
  loading,
  orderSuccess,
  shipping,
}: {
  total: number;
  selectedProduct: TProduct;
  subtotal: number;
  handleShippingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  orderSuccess: boolean;
  shipping: string;
}) => {
  return (
    <div className="flex-1 md:sticky md:top-8 md:self-start">
      <h3 className="text-xl font-bold text-gray-800 mb-6">অর্ডার সারাংশ</h3>

      <div className="p-4 md:p-6 mb-6">
        <div className="flex items-center border-t-1 border-gray-400 pt-6 border-dashed mb-6">
          <Image
            width={300}
            height={300}
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h4 className="font-bold text-lg">{selectedProduct.name}</h4>
            <p className="text-gray-600">
              <span className="text-sm font-extrabold mr-1">৳</span>
              {convertToBangla(selectedProduct.price.toFixed(2))}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-400 border-dashed pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-lg font-semibold">সাবটোটাল : </span>
            <span>
              <span className="text-sm font-extrabold mr-1">৳</span>
              {convertToBangla(subtotal.toFixed(2))}
            </span>
          </div>

          <div className="flex justify-between mt-8 items-center gap-3">
            <p className="text-lg font-semibold">শিপিং : </p>
            <div className="flex justify-between items-center">
              {selectedProduct.isFreeDelibery ? (
                <span>ফ্রি ডেলিভারি</span>
              ) : (
                <div className="flex flex-col space-y-1">
                  <label className="flex gap-1.5 items-center justify-end space-x-1">
                    <input
                      type="radio"
                      name="shipping"
                      value="40"
                      checked={
                        !selectedProduct.isFreeDelibery && shipping === "40"
                      }
                      className="ml-3 scale-125 cursor-pointer" // Reduced size
                      onChange={handleShippingChange}
                    />
                    <span>ঢাকার ভিতরে</span>
                  </label>
                  <p className="text-lg ml-4">
                    <span className="text-base font-extrabold mr-1">৳</span>
                    {convertToBangla(40)}
                  </p>

                  <div className="flex items-center gap-1.5 mt-3 justify-end mr-2">
                    <input
                      type="radio"
                      name="shipping"
                      value="140"
                      className="ml-3 scale-125 cursor-pointer"
                      onChange={handleShippingChange}
                    />
                    <span className="">ঢাকার বাইরে</span>
                  </div>
                  <p className="text-lg ml-4">
                    <span className="text-base font-extrabold mr-1">৳</span>
                    {convertToBangla(140)}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-400 border-dashed">
            <span>মোট : </span>
            <span>
              <span className="text-lg font-extrabold mr-1">৳</span>
              {convertToBangla(total.toFixed(2))}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg mb-6">
        <h4 className="font-bold text-lg mb-4 flex items-center">
          <Truck className="mr-2" />
          ডেলিভারি তথ্য
        </h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            ক্যাশ অন ডেলিভারি উপলব্ধ
          </li>
          <li className="flex items-center">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            ২-৩ কার্যদিবসের মধ্যে ডেলিভারি
          </li>
          <li className="flex items-center">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            নিরাপদ ডেলিভারির জন্য সুরক্ষিত প্যাকেজিং
          </li>
        </ul>
      </div>

      <button
        type="submit"
        disabled={loading || orderSuccess}
        className={`w-full py-4 cursor-pointer text-white font-bold rounded-lg transition duration-300 flex items-center justify-center ${
          orderSuccess
            ? "bg-[#008037] cursor-not-allowed opacity-80"
            : loading
            ? "bg-gray-400 cursor-not-allowed opacity-50"
            : "bg-[#133196] hover:bg-[#0f2d85]"
        }`}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin mr-2" /> অর্ডার প্রসেসিং...
          </>
        ) : orderSuccess ? (
          <>
            <SlCheck className="mr-2" />
            অর্ডার সফল
          </>
        ) : (
          <>
            <ShoppingBag className="mr-2" />
            অর্ডার দিন
          </>
        )}
      </button>
      <p className="text-sm text-gray-500 mt-4 text-center">
        অর্ডার দিয়ে আপনি আমাদের সেবা শর্তাবলী এবং গোপনীয়তা নীতি সম্মত হন।
      </p>
    </div>
  );
};

export default OrderDetails;
