import React from "react";
import { ShoppingBag, Phone } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div className="flex mt-10 mb-8 flex-col items-center gap-4">
      {/* Order Now Button */}
      <Link
        href="#order-form"
        className="p-0.5 border-[1.3px] cursor-pointer border-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.6),0_-4px_8px_rgba(0,0,0,0.2)]"
      >
        <p className="p-0.5 border-black border-[3px] rounded-full">
          <span className="flex items-center gap-2 px-6 py-3 text-white text-xl font-bold bg-gradient-to-r from-[#008037] to-red-800 rounded-full border-2 border-white shadow-md">
            <ShoppingBag size={24} /> এখনই অর্ডার করুন
          </span>
        </p>
      </Link>

      {/* Call Now Button */}
      <Link
        href="tel:+8801234567890"
        className="p-0.5 border-[1.3px] cursor-pointer border-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.4),0_-4px_8px_rgba(0,0,0,0.2)]"
      >
        <p className="p-0.5 border-black border-[3px] rounded-full">
          <span className="flex items-center gap-2 px-6 py-3 text-white text-xl font-bold bg-gradient-to-r from-black to-gray-900 rounded-full border-2 border-white">
            <Phone size={24} /> কল করুন
          </span>
        </p>
      </Link>
    </div>
  );
};

export default ActionButtons;
