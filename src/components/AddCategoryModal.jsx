// src/components/AddCategoryModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const AddCategoryModal = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const animationDuration = 300; // ms
  const closeTimerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    } else {
      if (mounted) {
        setVisible(false);
        closeTimerRef.current = setTimeout(() => {
          setMounted(false);
          closeTimerRef.current = null;
        }, animationDuration);
      }
    }

    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [isOpen, mounted]);

  const handleClose = () => {
    setVisible(false);
    closeTimerRef.current = setTimeout(() => {
      if (onClose) onClose();
      closeTimerRef.current = null;
    }, animationDuration);
  };

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-white transition-opacity duration-300 ${
          visible ? "opacity-50" : "opacity-0"
        }`}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 transform transition-all duration-300 ease-out
        ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-6"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-orange-500 hover:text-orange-700"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2 text-black">
          <span className="border-b-2 border-orange-500">Add Category</span>
        </h2>

        {/* Form */}
        <form className="space-y-4 mt-4">
          {/* Category Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Enter Category Name"
              className="w-full border border-orange-500 rounded-sm px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Category Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Description
            </label>
            <textarea
              placeholder="Enter Category Description"
              rows="3"
              className="w-full border border-orange-500 rounded-sm px-3 py-2 text-sm focus:outline-none"
            ></textarea>
          </div>

          {/* Category Update */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Update
            </label>
            <input
              type="text"
              placeholder="Enter Category Update Info"
              className="w-full border border-orange-500 rounded-sm px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Category Tag */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Tag
            </label>
            <textarea
              placeholder="Enter Category Tag"
              rows="3"
              className="w-full border border-orange-500 rounded-sm px-3 py-2 text-sm focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-2 text-sm font-medium rounded hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
