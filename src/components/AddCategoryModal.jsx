import React from "react";
import { X } from "lucide-react";

const AddCategoryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
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
              placeholder="Enter Category Name use this name for search Category"
              className="w-full border border-orange-500 rounded-sm px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Category Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Description
            </label>
            <textarea
              placeholder="Enter Category Description and use this description category for search result category"
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
              placeholder="Enter Category Name use this name for search Category"
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
              className="bg-orange-500 text-white px-8 py-2 text-sm font-medium hover:bg-orange-600"
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
