import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const data = [
  "ব্যাকপেইন (কোমর ব্যথা)",
  "হাড় ক্ষয়জনিত ব্যথা",
  "গেটে বাত বা গাউট এর ব্যথা",
  "পিঠ, ঘাড় বা মাথা ব্যথা",
  "বাত্ব-ব্যথা এবং রগে টান লাগা",
  "মাংসপেশি কামড়ানো, চিলিক মেরে উঠা",
  "শরীরে যেকোনো জয়েন্টে ব্যথা",
];

const Faq = () => {
  return (
    <div className="container px-2 md:mx-auto pt-4 pb-2">
      <h2 className="text-xl md:text-4xl font-bold text-center text-white bg-green-700 py-2 md:py-4 px-2 rounded-md">
        রিলিফ অয়েলের উপকারিতা
      </h2>

      <div className="mt-4 space-y-3 md:ml-6">
        {data.map((text, index) => (
          <p
            key={index}
            className="text-base md:text-2xl flex items-center gap-2 font-semibold"
          >
            <FaCheckCircle className="text-green-700" /> {text}
          </p>
        ))}
      </div>

      <h4 className="text-xl md:text-3xl font-bold text-center mt-6">
        সহ সকল ব্যথা স্থায়ীভাবে দূর করতে পরীক্ষিত সমাধান।
      </h4>
    </div>
  );
};

export default Faq;
