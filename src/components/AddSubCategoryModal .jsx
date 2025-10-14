// src/components/AddSubCategoryModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const AddSubCategoryModal = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const animationDuration = 300;
  const closeTimerRef = useRef(null);

  const [category, setCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryDesc, setSubCategoryDesc] = useState("");
  const [subCategoryImage, setSubCategoryImage] = useState("");
  const [subCategoryTag, setSubCategoryTag] = useState("");

  const categoryOptions = [
    "Electronics",
    "Clothing",
    "Footwear",
    "Accessories",
    "Home & Kitchen",
    "Beauty",
  ];

  useEffect(() => {
    if (isOpen) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    } else if (mounted) {
      setVisible(false);
      closeTimerRef.current = setTimeout(() => {
        setMounted(false);
        closeTimerRef.current = null;
      }, animationDuration);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      category,
      subCategoryName,
      subCategoryDesc,
      subCategoryImage,
      subCategoryTag,
    };
    console.log("Form Data:", formData);
    handleClose();
  };

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay (white 50% transparent) */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-300 ${
          visible ? "opacity-50" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-sm shadow-2xl w-[580px] h-auto p-4 transform transition-all duration-300 ease-out
        ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-5"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-orange-500 hover:text-orange-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-md font-semibold mb-2 text-black pb-1 inline-block border-b-4 border-orange-400">
          Add Sub Category
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-1.5">
          {/* Select Category Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-0.5">
              Select Category
            </label>
            <select
              className="w-full border border-orange-400 rounded-sm px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">-- Choose Category --</option>
              {categoryOptions.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sub Category Name */}
          <div>
            <label className="block text-sm font-medium mb-0.5">
              Sub Category Name
            </label>
            <input
              type="text"
              placeholder="Enter Sub Category Name"
              className="w-full border border-orange-400 rounded-sm px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
              required
            />
          </div>

          {/* Sub Category Description */}
          <div>
            <label className="block text-sm font-medium mb-0.5">
              Sub Category Description
            </label>
            <textarea
              placeholder="Enter Sub Category Description"
              className="w-full border border-orange-400 rounded-sm px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 h-16 resize-none"
              value={subCategoryDesc}
              onChange={(e) => setSubCategoryDesc(e.target.value)}
            ></textarea>
          </div>

          {/* Sub Category Image (File Upload with name display) */}
          <div>
            <label className="block text-sm font-medium mb-0.5">
              Sub Category Image
            </label>

            <input
              type="file"
              accept="image/*"
              className="w-full border border-orange-400 rounded-sm px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setSubCategoryImage(file); // store file object
                } else {
                  setSubCategoryImage(null);
                }
              }}
            />

            {/* Show file name if uploaded */}
            {subCategoryImage && (
              <div className="mt-2 text-sm text-gray-700">
                Uploaded:{" "}
                <span className="font-medium">{subCategoryImage.name}</span>
              </div>
            )}
          </div>

          {/* Sub Category Tag */}
          <div>
            <label className="block text-sm font-medium mb-0.5">
              Sub Category Tag
            </label>
            <textarea
              placeholder="Enter Sub Category Tag"
              className="w-full border border-orange-400 rounded-sm px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 h-12 resize-none"
              value={subCategoryTag}
              onChange={(e) => setSubCategoryTag(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-1">
            <button
              type="submit"
              className="bg-orange-500 text-white px-5 py-1.5 text-sm font-medium hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubCategoryModal;
