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
      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-white transition-opacity duration-300 ${
          visible ? "opacity-50" : "opacity-0"
        }`}
      />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-xl w-full max-w-lg p-6 transform transition-all duration-300 ease-out
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
        <h2 className="text-xl font-semibold border-b-2 border-orange-500 pb-2 mb-4">
          Add Sub Category
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Select Category */}
          <div>
            <label className="block mb-1 font-medium">Select Category</label>
            <input
              type="text"
              placeholder="Enter Category Name use this name for search Category"
              className="w-full border border-orange-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* Sub Category Name */}
          <div>
            <label className="block mb-1 font-medium">Sub Category Name</label>
            <input
              type="text"
              placeholder="Enter Sub Category Name"
              className="w-full border border-orange-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
            />
          </div>

          {/* Sub Category Description */}
          <div>
            <label className="block mb-1 font-medium">
              Sub Category Description
            </label>
            <input
              type="text"
              placeholder="Enter Sub Category Description"
              className="w-full border border-orange-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={subCategoryDesc}
              onChange={(e) => setSubCategoryDesc(e.target.value)}
            />
          </div>

          {/* Sub Category Image */}
          <div>
            <label className="block mb-1 font-medium">Sub Category Image</label>
            <input
              type="text"
              placeholder="Enter Image URL"
              className="w-full border border-orange-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={subCategoryImage}
              onChange={(e) => setSubCategoryImage(e.target.value)}
            />
          </div>

          {/* Sub Category Tag */}
          <div>
            <label className="block mb-1 font-medium">Sub Category Tag</label>
            <textarea
              placeholder="Enter Sub Category Tag"
              className="w-full border border-orange-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={subCategoryTag}
              onChange={(e) => setSubCategoryTag(e.target.value)}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubCategoryModal;
