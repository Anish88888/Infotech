import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Eye, Edit, Trash2 } from "lucide-react";
import AddSubCategoryModal from "../components/AddSubCategoryModal"; // ✅ fixed import
import { useNavigate } from "react-router-dom";

const CreateSubCategory = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [vendors, setVendors] = useState([
    {
      id: "NO101",
      image: "Img",
      category: "Manish Kumar",
      products: "12",
      subCategory: "15",
      status: "Active",
    },
    {
      id: "NO102",
      image: "Img",
      category: "Rohit Sharma",
      products: "20",
      subCategory: "25",
      status: "Active",
    },
    {
      id: "NO103",
      image: "Img",
      category: "Anita Verma",
      products: "10",
      subCategory: "18",
      status: "Active",
    },
    {
      id: "NO104",
      image: "Img",
      category: "Suresh Kumar",
      products: "30",
      subCategory: "35",
      status: "Active",
    },
    {
      id: "NO105",
      image: "Img",
      category: "Priya Singh",
      products: "16",
      subCategory: "22",
      status: "Active",
    },
    {
      id: "NO106",
      image: "Img",
      category: "Amit Patel",
      products: "28",
      subCategory: "32",
      status: "Active",
    },
    {
      id: "NO107",
      image: "Img",
      category: "Neha Gupta",
      products: "14",
      subCategory: "19",
      status: "Active",
    },
    {
      id: "NO108",
      image: "Img",
      category: "Rajesh Mehta",
      products: "40",
      subCategory: "45",
      status: "Active",
    },
    {
      id: "NO109",
      image: "Img",
      category: "Kiran Yadav",
      products: "18",
      subCategory: "21",
      status: "Active",
    },
    {
      id: "NO110",
      image: "Img",
      category: "Sunita Rao",
      products: "22",
      subCategory: "26",
      status: "Active",
    },
    {
      id: "NO111",
      image: "Img",
      category: "Vikas Sharma",
      products: "12",
      subCategory: "17",
      status: "Active",
    },
    {
      id: "NO112",
      image: "Img",
      category: "Meena Joshi",
      products: "27",
      subCategory: "33",
      status: "Active",
    },
    {
      id: "NO113",
      image: "Img",
      category: "Deepak Chauhan",
      products: "19",
      subCategory: "23",
      status: "Active",
    },
  ]);

  const navigate = useNavigate();
  const itemsPerPage = 8;

  const statusColors = {
    Active: "text-green-600 font-semibold",
    Suspended: "text-gray-600 font-semibold",
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (!confirmDelete) return;
    setVendors((prev) => prev.filter((vendor) => vendor.id !== id));
  };

  const handleAddCategory = (newCategory) => {
    setVendors((prev) => [
      ...prev,
      { id: `NO${100 + prev.length + 1}`, ...newCategory },
    ]);
  };

  // Pagination
  const indexOfLastVendor = currentPage * itemsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - itemsPerPage;
  const currentVendors = vendors.slice(indexOfFirstVendor, indexOfLastVendor);
  const totalPages = Math.ceil(vendors.length / itemsPerPage);

  return (
    <DashboardLayout>
      {/* TopBar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 max-w-[95%] mx-auto mt-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 w-full">
          {/* Tabs */}
          <div className="flex gap-2 items-center overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-orange-500 text-orange-500 hover:bg-orange-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("active")}
              className={`px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${
                activeTab === "active"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-400 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab("suspended")}
              className={`px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${
                activeTab === "suspended"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-400 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Inactive
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-black rounded overflow-hidden h-[36px] w-full max-w-[100%] lg:max-w-[600px]">
            <input
              type="text"
              placeholder="Search Vendor by Name, Mobile Number, Vendor ID, City, Pincode..."
              className="flex-1 px-4 text-sm text-gray-800 focus:outline-none h-full"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 sm:px-6 h-full">
              Search
            </button>
          </div>
        </div>
        {/* Add Sub Category Button */}
        <div>
          <button
            onClick={() => setIsModalOpen(true)} // ✅ opens modal
            className="bg-black text-white px-4 sm:px-5 py-2 rounded-sm shadow hover:bg-orange-600 text-xs sm:text-sm flex items-center justify-center whitespace-nowrap"
          >
            + Add Sub Category
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto max-w-[95%] mx-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-orange-500 text-black">
              <th className="p-3 text-left">S.N</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Products</th>
              <th className="p-3 text-left">Sub Category</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentVendors.map((vendor, idx) => (
              <tr key={vendor.id} className="hover:bg-gray-50 border-b">
                <td className="p-3">{indexOfFirstVendor + idx + 1}</td>
                <td className="p-3">{vendor.image}</td>
                <td className="p-3">{vendor.category}</td>
                <td className="p-3">{vendor.products}</td>
                <td className="p-3">{vendor.subCategory}</td>
                <td className={`p-3 ${statusColors[vendor.status]}`}>
                  {vendor.status}
                </td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button className="text-orange-600 hover:text-blue-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(vendor.id)}
                      className="text-orange-600 hover:text-blue-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate(`/vendor/${vendor.id}`)}
                      className="text-orange-600 hover:text-blue-700"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Sub Category Modal */}
      <AddSubCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddCategory} // ✅ add new row
      />
    </DashboardLayout>
  );
};

export default CreateSubCategory;
