import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Eye, Edit, Trash2 } from "lucide-react";
import AddCategoryModal from "../components/AddCategoryModal";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 8;

  // Dummy category data (replace with API data if needed)
  const [categories, setCategories] = useState([
    {
      id: "CT101",
      image: "Img",
      category: "Electronics",
      products: "120",
      subCategory: "15",
      status: "Active",
    },
    {
      id: "CT102",
      image: "Img",
      category: "Fashion",
      products: "80",
      subCategory: "12",
      status: "Inactive",
    },
    {
      id: "CT103",
      image: "Img",
      category: "Home & Kitchen",
      products: "95",
      subCategory: "18",
      status: "Active",
    },
    {
      id: "CT104",
      image: "Img",
      category: "Beauty",
      products: "60",
      subCategory: "9",
      status: "Active",
    },
    {
      id: "CT105",
      image: "Img",
      category: "Sports",
      products: "50",
      subCategory: "10",
      status: "Inactive",
    },
    {
      id: "CT106",
      image: "Img",
      category: "Toys",
      products: "35",
      subCategory: "7",
      status: "Active",
    },
    {
      id: "CT107",
      image: "Img",
      category: "Books",
      products: "42",
      subCategory: "5",
      status: "Active",
    },
    {
      id: "CT108",
      image: "Img",
      category: "Automotive",
      products: "28",
      subCategory: "6",
      status: "Inactive",
    },
    {
      id: "CT109",
      image: "Img",
      category: "Health",
      products: "70",
      subCategory: "10",
      status: "Active",
    },
  ]);

  const statusColors = {
    Active: "text-green-600 font-semibold",
    Inactive: "text-gray-600 font-semibold",
  };

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    }
  };

  // Filter based on tab
  const filteredCategories = categories.filter((cat) => {
    if (activeTab === "active") return cat.status === "Active";
    if (activeTab === "inactive") return cat.status === "Inactive";
    return true;
  });

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  return (
    <DashboardLayout>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 max-w-[95%] mx-auto mt-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 w-full">
          {/* Tabs */}
          <div className="flex gap-2 items-center overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            <button
              onClick={() => {
                setActiveTab("all");
                setCurrentPage(1);
              }}
              className={`px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-orange-500 text-orange-500 hover:bg-orange-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                setActiveTab("active");
                setCurrentPage(1);
              }}
              className={`px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${
                activeTab === "active"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-400 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => {
                setActiveTab("inactive");
                setCurrentPage(1);
              }}
              className={`px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${
                activeTab === "inactive"
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
              placeholder="Search Category by Name, ID..."
              className="flex-1 px-4 text-sm text-gray-800 focus:outline-none h-full"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 sm:px-6 h-full">
              Search
            </button>
          </div>
        </div>

        {/* Add Category Button */}
        <div className="w-full md:w-auto flex justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-4 sm:px-5 py-2 rounded-sm shadow hover:bg-orange-600 text-xs sm:text-sm flex items-center justify-center whitespace-nowrap"
          >
            + Add Category
          </button>
        </div>
      </div>

      {/* Category Table */}
      <div className="bg-white rounded-sm shadow-sm overflow-x-auto max-w-[95%] mx-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-orange-500 text-black">
              <th className="p-3 text-left">S.N</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Category Name</th>
              <th className="p-3 text-left">Products</th>
              <th className="p-3 text-left">Sub Categories</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentCategories.map((cat, idx) => (
              <tr
                key={cat.id}
                className="bg-white shadow-sm rounded-sm hover:bg-gray-50 transition border-b-4 border-gray-200"
              >
                <td className="p-3">{indexOfFirst + idx + 1}</td>
                <td className="p-3">{cat.image}</td>
                <td className="p-3">{cat.category}</td>
                <td className="p-3">{cat.products}</td>
                <td className="p-3">{cat.subCategory}</td>
                <td className={`p-3 ${statusColors[cat.status]}`}>
                  {cat.status}
                </td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditModalOpen(true)}
                      className="text-orange-600 hover:text-blue-700"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="text-orange-600 hover:text-blue-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate(`/category/${cat.id}`)}
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

      {/* Pagination */}
      <div className="flex justify-end items-center gap-6 mt-8 max-w-[95%] mx-auto">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="bg-orange-500 text-white px-10 py-3 text-sm font-medium hover:bg-orange-600"
        >
          Back
        </button>
        <div className="flex items-center gap-2 text-sm text-black font-medium">
          {(() => {
            const pages = [];
            const visiblePages = new Set([
              1,
              2,
              totalPages - 1,
              totalPages,
              currentPage - 1,
              currentPage,
              currentPage + 1,
            ]);
            for (let i = 1; i <= totalPages; i++) {
              if (visiblePages.has(i)) pages.push(i);
              else if (pages[pages.length - 1] !== "...") pages.push("...");
            }
            return pages.map((page, idx) =>
              page === "..." ? (
                <span key={idx} className="px-1 text-black select-none">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-1 ${
                    currentPage === page ? "text-orange-600 font-semibold" : ""
                  }`}
                >
                  {page}
                </button>
              )
            );
          })()}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="bg-green-700 text-white px-10 py-3 text-sm font-medium hover:bg-green-800"
        >
          Next
        </button>
      </div>

      {/* Add Category Modal */}
      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Edit Category Modal */}
      <AddCategoryModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        isEdit={true}
      />
    </DashboardLayout>
  );
};

export default CreateCategory;
