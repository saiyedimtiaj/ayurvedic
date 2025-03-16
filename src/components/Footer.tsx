import { GrMapLocation } from "react-icons/gr";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-6 border-t bg-green-700 text-white">
      <div className="container mx-auto px-2 flex flex-col md:flex-row gap-y-5 items-center justify-between">
        <div className="text-sm md:text-base border-zinc-300 flex flex-col md:flex-row items-center justify-center gap-2">
          <GrMapLocation fill="#008037" className="text-xl -mt-2" />
          <span className="text-center">
            গাজীপুর, পল্লী বিদ্যুৎ, ঢাকা, বাংলাদেশ
          </span>
        </div>
        <div className="flex text-sm md:text-base items-center gap-4">
          <div className="flex items-center gap-1">
            <FaLink size={20} />
            <Link className="text-base" href={"/terms-and-condition"}>
              Terms & Condition
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <FaLink size={20} />
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <p className="hidden md:block">Support : 01615117126</p>
        </div>
        <p className="lg:hidden block text-xs">Support : 01615117126</p>
      </div>
    </div>
  );
};

export default Footer;
