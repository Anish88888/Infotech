import React, { useState } from "react";

const AddSubCategoryModal = ({ isOpen, onClose }) => {
  const [category, setCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryDesc, setSubCategoryDesc] = useState("");
  const [subCategoryImage, setSubCategoryImage] = useState("");
  const [subCategoryTag, setSubCategoryTag] = useState("");

  if (!isOpen) return null;

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
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold border-b-2 border-orange-500 pb-2 mb-4">
          Add Sub Category
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <div>
            <label className="block mb-1 font-medium">
              Sub Category Description
            </label>
            <input
              type="text"
              placeholder="Enter Sub Category Name"
              className="w-full border border-orange-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={subCategoryDesc}
              onChange={(e) => setSubCategoryDesc(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Sub Category Image</label>
            <input
              type="text"
              placeholder="Enter Category Name use this name for search Category"
              className="w-full border border-orange-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={subCategoryImage}
              onChange={(e) => setSubCategoryImage(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Sub Category Tag</label>
            <textarea
              placeholder=""
              className="w-full border border-orange-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={subCategoryTag}
              onChange={(e) => setSubCategoryTag(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubCategoryModal;
