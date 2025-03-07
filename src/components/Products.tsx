"use client";
import { TFormData, TProduct } from "@/types";
import { convertToBangla } from "@/utils";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const Products = ({
  products,
  setFormData,
}: {
  products: TProduct[];
  setFormData: Dispatch<SetStateAction<TFormData>>;
}) => {
  const route = useRouter();
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
    <section id="products" className="py-16 px-2 md:px-4 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আমাদের প্রিমিয়াম পণ্যসমূহ
          </h2>
          <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
            বিভিন্ন চুলের যত্নের জন্য আমাদের বিশেষায়িত তেলের সংগ্রহ আবিষ্কার
            করুন।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="h-64 overflow-hidden">
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#016531]">
                    <span className="text-xl font-extrabold mr-1">৳</span>
                    {convertToBangla(product.price)}
                  </span>
                  <motion.button
                    className="px-4 py-2 bg-[#008037] cursor-pointer text-white rounded-lg transition-colors duration-300 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProductSelect(product.id)}
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    অর্ডার দিন
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
