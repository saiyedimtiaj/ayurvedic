import { LocateFixed } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row gap-y-5 items-center justify-between">
        <div className="text-sm md:text-base border-zinc-300 flex flex-col md:flex-row items-center justify-center gap-2">
          <LocateFixed className="text-xl" />
          <span className="text-center">
            গাজীপুর, পল্লী ভিত্তড, মিরপুরপ্লাজা ৫ম তলা, দোকান নম্বর #৫০৯, ঢাকা,
            বাংলাদেশ
          </span>
        </div>
        <div className="flex items-center gap-1">
          <FaLink size={20} />
          <Link className="text-base" href={"/privacy-policy"}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
