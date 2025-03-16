/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, X, Save } from "lucide-react";
import { Products } from "@/shared/data";
import Image from "next/image";

const DashboardProduct = () => {
  const [products, setProducts] = useState(Products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    image: "",
    description: "",
    stock: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenModal = (product = null) => {
    if (product) {
      setCurrentProduct({ ...(product as any) });
      setIsEditing(true);
    } else {
      setCurrentProduct({
        id:
          products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
        name: "",
        price: 0,
        image: "",
        description: "",
        stock: 0,
      });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: name === "price" || name === "stock" ? parseFloat(value) : value,
    });
  };

  const handleSaveProduct = () => {
    if (isEditing) {
      setProducts(
        products.map((p) => (p.id === currentProduct.id ? currentProduct : p))
      );
    } else {
      setProducts([...products, currentProduct]);
    }
    handleCloseModal();
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="mb-6 flex justify-end gap-4">
        <motion.button
          className="px-4 py-2 bg-indigo-600 cursor-pointer text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
          onClick={() => handleOpenModal()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus size={18} className="mr-2" />
          Add Product
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 overflow-hidden relative">
              <Image
                width={500}
                height={500}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <motion.button
                  className="p-2 bg-white rounded-full shadow-md text-red-600 hover:text-red-800 transition-colors duration-200"
                  onClick={() => handleDeleteProduct(product.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Trash2 size={16} />
                </motion.button>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <span className="text-lg font-bold text-indigo-600">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white p-4 rounded-lg shadow-xl max-w-md w-full max-h-[90%] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {isEditing ? "Edit Product" : "Add New Product"}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-3 space-y-2.5">
                <div className="mb-2.5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={currentProduct.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter product name"
                  />
                </div>

                <div className="mb-2.5">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Price ($)
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={currentProduct.price}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                  />
                </div>

                <div className="mb-2.5">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Image URL
                  </label>
                  <div className="flex">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      value={currentProduct.image}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div className="mb-2.5">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={currentProduct.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter product description"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 cursor-pointer rounded-md text-gray-700 mr-2 hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <motion.button
                  onClick={handleSaveProduct}
                  className="px-4 py-2 bg-indigo-600 text-white cursor-pointer rounded-md hover:bg-indigo-700 transition-colors duration-200 flex items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Save size={18} className="mr-2" />
                  Save
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardProduct;
