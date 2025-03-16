"use client";
import { useEffect, useState, useRef } from "react";
import { TFormData, TProduct } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = ({
  products,
  setFormData,
}: {
  products: TProduct[];
  setFormData: Dispatch<SetStateAction<TFormData>>;
}) => {
  const route = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after animation triggers
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 250,
    });
  }, []);

  const handleProductSelect = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setFormData((prev) => ({
        ...prev,
        productId,
        productName: product.name,
      }));
    }
    route.push("#order-form");
  };

  return (
    <section id="products" className={`pb-16 mt-[60px] px-2 md:px-4 `}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 `}>
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-4xl font-bold text-green-700 mb-4"
          >
            আমাদের আয়ুর্বেদিক পণ্যসমূহ
          </h2>
          <p
            data-aos="fade-up"
            className="md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            শরীরের যেকোন ব্যথা বা চুলের যত্নে বিশ্বস্ত আয়ুর্বেদিক সমাধান।
          </p>
        </div>

        <section
          ref={sectionRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3
                ${
                  isVisible
                    ? `animate__animated animate__bounceIn`
                    : "opacity-0"
                }
              `}
        >
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className={`bg-white  block rounded-xl shadow-md overflow-hidden prod-card 
              `}
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {product.isFreeDelibery && (
                  <span className="text-base absolute top-2 right-2 text-white font-medium bg-orange-600 px-2.5 py-0.5 rounded-full">
                    ফ্রি ডেলিভারি
                  </span>
                )}
              </div>
              <div className="p-4">
                <span className="px-2.5 py-0.5 bg-orange-600 text-white text-base font-medium rounded-full">
                  {product.tag}
                </span>
                <h3 className="text-lg mt-2 font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#016531]">
                    <span className="text-xl text-black font-extrabold mr-1">
                      ৳
                    </span>
                    <span className="line-through text-black">
                      {product.price}
                    </span>
                    <br />
                    <span className="text-base">অফার মূল্য 🎁</span>
                    <p>
                      <span className="text-xl text-black font-extrabold">
                        ৳
                      </span>
                      <span className="text-green-700">
                        {" "}
                        {product.offerPrice}
                      </span>
                    </p>
                  </span>
                  <button
                    className="px-4 py-2 bg-[#008037] cursor-pointer text-white rounded-lg transition-all duration-300 flex items-center hover:scale-105 active:scale-95"
                    onClick={() => handleProductSelect(product.id)}
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    অর্ডার দিন
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div
            className={`bg-white block rounded-xl shadow-md overflow-hidden prod-card 
              `}
          >
            <div className="h-64 overflow-hidden relative">
              <Image
                width={300}
                height={300}
                src={products[3].image}
                alt={products[3].name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {products[3].isFreeDelibery && (
                <span className="text-base absolute top-2 right-2 text-white font-medium bg-orange-600 px-2.5 py-0.5 rounded-full">
                  ফ্রি ডেলিভারি
                </span>
              )}
            </div>
            <div className="p-4">
              <span className="px-2.5 py-0.5 bg-orange-600 text-white text-base font-medium rounded-full">
                {products[3].tag}
              </span>
              <h3 className="text-lg mt-2 font-bold text-gray-900 mb-2">
                ৪০০ মিলি আয়ুর্বেদিক হেয়ার অয়েল ও
                <span className="text-[15px] ml-1">
                  <span className="text-[17px]"> ২০০ গ্রাম </span> আয়ুর্বেদিক
                  হেয়ার স্পা প‍্যাক।
                </span>
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-[#016531]">
                  <span className="text-xl text-black font-extrabold mr-1">
                    ৳
                  </span>
                  <span className="line-through text-black">
                    {products[3].price}
                  </span>
                  <br />
                  <span className="text-base">অফার মূল্য 🎁</span>
                  <p>
                    <span className="text-xl text-black font-extrabold">৳</span>
                    <span className="text-green-700">
                      {" "}
                      {products[3].offerPrice}
                    </span>
                  </p>
                </span>
                <button
                  className="px-4 py-2 bg-[#008037] cursor-pointer text-white rounded-lg transition-all duration-300 flex items-center hover:scale-105 active:scale-95"
                  onClick={() => handleProductSelect(products[3].id)}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  অর্ডার দিন
                </button>
              </div>
            </div>
          </div>
          <div
            className={`bg-white block rounded-xl shadow-md overflow-hidden prod-card 
              `}
          >
            <div className="h-64 overflow-hidden relative">
              <Image
                width={300}
                height={300}
                src={products[4].image}
                alt={products[4].name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {products[4].isFreeDelibery && (
                <span className="text-base absolute top-2 right-2 text-white font-medium bg-orange-600 px-2.5 py-0.5 rounded-full">
                  ফ্রি ডেলিভারি
                </span>
              )}
            </div>
            <div className="p-4">
              <span className="px-2.5 py-0.5 bg-orange-600 text-white text-base font-medium rounded-full">
                {products[4].tag}
              </span>
              <h3 className="text-lg mt-2 font-bold text-gray-900 mb-2">
                ২০০ মিলি আয়ুর্বেদিক হেয়ার অয়েল ও
                <span className="text-[15px] ml-1">
                  <span className="text-[17px]"> ১৫০ মিলি</span> আয়ুর্বেদিক
                  রিলিফ অয়েলের সাথে
                </span>{" "}
                <span className="text-[15px] ml-1">
                  <span className="text-[17px]"> ১০০ গ্রাম </span>
                  আয়ুর্বেদিক হেয়ার স্পা প‍্যাক ফ্রি।
                </span>
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-[#016531]">
                  <span className="text-xl text-black font-extrabold mr-1">
                    ৳
                  </span>
                  <span className="line-through text-black">
                    {products[4].price}
                  </span>
                  <br />
                  <span className="text-base">অফার মূল্য 🎁</span>
                  <p>
                    <span className="text-xl text-black font-extrabold">৳</span>
                    <span className="text-green-700">
                      {" "}
                      {products[4].offerPrice}
                    </span>
                  </p>
                </span>
                <button
                  className="px-4 py-2 bg-[#008037] cursor-pointer text-white rounded-lg transition-all duration-300 flex items-center hover:scale-105 active:scale-95"
                  onClick={() => handleProductSelect(products[4].id)}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  অর্ডার দিন
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Products;
