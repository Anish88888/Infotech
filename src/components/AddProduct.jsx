import React, { useState } from "react";
import { Upload } from "lucide-react";

export default function AddProductPopup() {
  const [isOpen, setIsOpen] = useState(true); // control popup visibility
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    sku: "",
    inventory: "",
    category: "",
    subCategory: "",
    actualPrice: "",
    mrp: "",
    sellPrice: "",
    tags: "",
    mainImage: null,
    galleryImages: Array(5).fill(null),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, mainImage: file }));
    }
  };

  const handleGalleryUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newGallery = [...formData.galleryImages];
      newGallery[index] = file;
      setFormData((prev) => ({ ...prev, galleryImages: newGallery }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Product submitted! Check console for details.");
  };

  if (!isOpen) return null; // hide popup when closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-2">
      <div className="bg-white w-full max-w-[1100px] rounded-md shadow-lg relative border border-gray-300 max-h-[90vh] flex flex-col">
        {/* ❌ Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-orange-500 hover:text-red-600 text-lg font-bold"
        >
          ✕
        </button>

        {/* 🔹 Header */}
        <h2 className="text-[14px] font-bold border-b border-gray-300 pb-2 pt-3 px-5">
          Add Product
        </h2>

        {/* 🔸 Scrollable Form */}
        <div className="overflow-y-auto px-5 py-4">
          <form className="space-y-4 text-[13px]" onSubmit={handleSubmit}>
            {/* 🔹 Product Title + Upload Image */}
            <div className="grid grid-cols-1 lg:grid-cols-[2.2fr,1fr] gap-4">
              {/* Left Side — Title + Description */}
              <div className="flex flex-col space-y-3">
                <div>
                  <label className="block font-semibold mb-1">
                    Product Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter product title recommended upto 100 words"
                    className="w-full border border-orange-400 rounded-sm p-2 focus:outline-none text-[13px]"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="block font-semibold mb-1">
                    Product Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="10"
                    placeholder="Write Product Description"
                    className="flex-1 w-full border border-orange-400 rounded-sm p-2 resize-none focus:outline-none text-[13px] min-h-[200px] lg:h-[260px]"
                  ></textarea>
                </div>
              </div>

              {/* Right Side — Upload Image */}
              <div className="flex flex-col justify-end">
                <label className="block font-semibold mb-1">
                  Upload Main Image
                </label>
                <div className="flex items-center justify-center border border-orange-400 rounded-sm h-[250px] sm:h-[280px] lg:h-[330px] relative">
                  {formData.mainImage ? (
                    <img
                      src={URL.createObjectURL(formData.mainImage)}
                      alt="Main"
                      className="object-contain h-full w-full"
                    />
                  ) : (
                    <Upload size={60} className="text-orange-500" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleMainImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* 🔸 SKU / Inventory / Category / Subcategory */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block font-semibold mb-1">SKU/HSN</label>
                <input
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  placeholder="Enter Product HSN/SKU Code"
                  className="w-full border border-orange-400 rounded-sm p-2 focus:outline-none text-[13px]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Inventory</label>
                <input
                  type="number"
                  name="inventory"
                  value={formData.inventory}
                  onChange={handleChange}
                  placeholder="Enter Inventory"
                  className="w-full border border-orange-400 rounded-sm p-2 focus:outline-none text-[13px]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Select Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-orange-400 rounded-sm p-2 focus:outline-none text-[13px]"
                >
                  <option value="">Select Category</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Select Sub-Category
                </label>
                <select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                  className="w-full border border-orange-400 rounded-sm p-2 focus:outline-none text-[13px]"
                >
                  <option value="">Select Sub-Category</option>
                </select>
              </div>
            </div>

            {/* 🔹 Price Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold mb-1">Actual Price</label>
                <input
                  type="number"
                  name="actualPrice"
                  value={formData.actualPrice}
                  onChange={handleChange}
                  placeholder="Enter Rupees in INR"
                  className="w-full border border-orange-400 rounded-sm p-2 focus:outline-none text-[13px]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">MRP*</label>
                <input
                  type="number"
                  name="mrp"
                  value={formData.mrp}
                  onChange={handleChange}
                  placeholder="Enter Rupees in INR"
                  className="w-full border border-orange-400 rounded-sm p-2 focus:outline-none text-[13px]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Sell Price*</label>
                <input
                  type="number"
                  name="sellPrice"
                  value={formData.sellPrice}
                  onChange={handleChange}
                  placeholder="Enter Rupees in INR"
                  className="w-full border border-orange-400 rounded-sm p-2 focus:outline-none text-[13px]"
                />
              </div>
            </div>

            {/* 🔸 Product Gallery + Tag */}
            <div className="grid grid-cols-1 lg:grid-cols-[4fr,1fr] gap-4">
              <div>
                <label className="block font-semibold mb-1">
                  Product Gallery
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {formData.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="border border-orange-400 rounded-sm h-[120px] sm:h-[130px] md:h-[150px] flex items-center justify-center relative hover:border-orange-600 transition"
                    >
                      {img ? (
                        <img
                          src={URL.createObjectURL(img)}
                          alt={`Gallery ${i}`}
                          className="object-contain h-full w-full"
                        />
                      ) : (
                        <Upload size={35} className="text-orange-500" />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleGalleryUpload(i, e)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Tag</label>
                <textarea
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Write Multiple Tags for Searching"
                  rows="5"
                  className="w-full border border-orange-400 rounded-sm p-2 resize-none focus:outline-none text-[13px] min-h-[120px] sm:min-h-[130px] md:min-h-[150px]"
                ></textarea>
              </div>
            </div>

            {/* ✅ Submit Button */}
            <div className="flex justify-end mt-3">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-sm text-[13px] font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
