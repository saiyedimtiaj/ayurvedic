import { CheckCircle, Loader2, ShoppingBag, Truck } from "lucide-react";
import { SlCheck } from "react-icons/sl";
import Image from "next/image";
import React, { useState } from "react";
import { TProduct } from "@/types";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex-1 md:sticky md:top-8 md:self-start">
      <h3 className="text-xl font-bold text-green-800 mb-6">Your Order</h3>

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
              {selectedProduct.offerPrice.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-400 border-dashed pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-base md:text-lg font-semibold">
              Subtotal:{" "}
            </span>
            <span>
              <span className="text-sm font-extrabold mr-1">৳</span>
              {subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between mt-8 items-center gap-3">
            <span className="text-base md:text-lg font-semibold">
              Shipping:
            </span>
            <div className="flex justify-between items-center">
              {selectedProduct.isFreeDelibery ? (
                <span>ফ্রি ডেলিভারি</span>
              ) : (
                <div className="flex flex-col space-y-1">
                  <label className="flex gap-1.5 items-center justify-end space-x-1">
                    <input
                      type="radio"
                      name="shipping"
                      value="80"
                      checked={
                        !selectedProduct.isFreeDelibery && shipping === "80"
                      }
                      className="ml-3 scale-125 cursor-pointer" // Reduced size
                      onChange={handleShippingChange}
                    />
                    <span>চট্টগ্রাম ভিতরে</span>
                  </label>
                  <p className="text-lg ml-4">
                    <span className="text-base font-extrabold mr-1">৳</span>
                    {80}
                  </p>

                  <div className="flex items-center gap-1.5 mt-3 justify-end mr-2">
                    <input
                      type="radio"
                      name="shipping"
                      value="130"
                      className="ml-3 scale-125 cursor-pointer"
                      onChange={handleShippingChange}
                    />
                    <span className="">চট্টগ্রাম বাইরে</span>
                  </div>
                  <p className="text-lg ml-4">
                    <span className="text-base font-extrabold mr-1">৳</span>
                    {130}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-400 border-dashed">
            <span>Total: </span>
            <span>
              <span className="text-lg font-extrabold mr-1">৳</span>
              {total.toFixed(2)}
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
      <motion.button
        type="submit"
        disabled={loading || orderSuccess}
        onClick={() => setModalOpen(true)}
        className={`w-full py-4 text-xl cursor-pointer text-white font-bold rounded-lg transition duration-300 flex items-center justify-center overflow-hidden relative shadow-[0_4px_10px_#DE7200] opacity-100 ${
          orderSuccess ? "bg-green-500" : "bg-green-800"
        }`}
        whileHover={
          !loading && !orderSuccess
            ? {
                scale: 1.05,
                transition: { duration: 0.3 },
              }
            : {}
        }
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/50 to-transparent opacity-0"
          animate={{
            opacity: [0, 1, 0],
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

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
      </motion.button>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          {<Confetti className="w-full h-full" />}
          <DialogHeader>
            <DialogTitle className="text-center text-green-600">
              অর্ডার সফল!
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p3-6 relative">
            <p className="text-gray-700 text-center">
              “ধন্যবাদ 💐! আপনার অর্ডারটি নিশ্চিত করা হয়েছে। কিছুক্ষণের মধ্যেই
              আমাদের একজন প্রতিনিধি আপনার সাথে ফোনে যোগাযোগ করবেন।”
            </p>
            <button
              className="mt-4 px-4 cursor-pointer py-2 bg-green-600 text-white rounded-md"
              onClick={() => setModalOpen(false)}
            >
              ঠিক আছে
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <p className="text-sm text-gray-500 mt-4 text-center">
        অর্ডার দিয়ে আপনি আমাদের সেবা শর্তাবলী এবং গোপনীয়তা নীতি সম্মত হন।
      </p>
    </div>
  );
};

export default OrderDetails;
