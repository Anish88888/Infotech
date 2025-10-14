import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Eye, Edit, Trash2 } from "lucide-react";
import AddCategoryModal from "../components/AddCategoryModal";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const itemsPerPage = 7;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setCategories([
        {
          id: "CT101",
          image: "https://i.pravatar.cc/50",
          category: "Electronics",
          products: "120",
          subCategory: "15",
          status: "Active",
        },
        {
          id: "CT102",
          image: "https://i.pravatar.cc/50",
          category: "Fashion",
          products: "80",
          subCategory: "12",
          status: "Inactive",
        },
        {
          id: "CT103",
          image: "https://i.pravatar.cc/50",
          category: "Kitchen",
          products: "95",
          subCategory: "18",
          status: "Active",
        },
        {
          id: "CT104",
          image: "https://i.pravatar.cc/50",
          category: "Beauty",
          products: "60",
          subCategory: "9",
          status: "Active",
        },
        {
          id: "CT105",
          image: "https://i.pravatar.cc/50",
          category: "Sports",
          products: "50",
          subCategory: "10",
          status: "Inactive",
        },
        {
          id: "CT106",
          image: "https://i.pravatar.cc/50",
          category: "Toys",
          products: "35",
          subCategory: "7",
          status: "Active",
        },
        {
          id: "CT107",
          image: "https://i.pravatar.cc/50",
          category: "Books",
          products: "42",
          subCategory: "5",
          status: "Active",
        },
        {
          id: "CT108",
          image: "https://i.pravatar.cc/50",
          category: "Automotive",
          products: "28",
          subCategory: "6",
          status: "Inactive",
        },
        {
          id: "CT109",
          image: "https://i.pravatar.cc/50",
          category: "Health",
          products: "70",
          subCategory: "10",
          status: "Active",
        },
      ]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const statusColors = {
    Active: "text-green-600 font-semibold",
    Inactive: "text-gray-600 font-semibold",
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    }
  };

  // Filter + Search
  const filteredCategories = categories
    .filter((cat) => {
      if (activeTab === "active") return cat.status === "Active";
      if (activeTab === "inactive") return cat.status === "Inactive";
      return true;
    })
    .filter((cat) =>
      [cat.category, cat.id, cat.products, cat.subCategory]
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  // Skeleton Loader
  const TableSkeleton = () => (
    <tbody>
      {Array.from({ length: itemsPerPage }).map((_, idx) => (
        <tr
          key={idx}
          className="animate-pulse border-b-4 border-gray-200 bg-white shadow-sm rounded-sm"
        >
          {Array.from({ length: 7 }).map((__, j) => (
            <td key={j} className="p-3 text-center">
              <div
                className={`bg-gray-300 rounded ${
                  j === 1
                    ? "h-8 w-8 rounded-full mx-auto"
                    : "h-4 w-[80%] mx-auto"
                }`}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  // Empty State
  const EmptyState = () => (
    <tbody>
      <tr>
        <td
          colSpan="7"
          className="text-center py-10 text-gray-500 text-sm bg-white rounded-sm"
        >
          No categories found.
        </td>
      </tr>
    </tbody>
  );

  return (
    <DashboardLayout>
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center pl-4 md:justify-between gap-3 max-w-[99%] mx-auto mt-0 mb-2">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 w-full">
          {/* Tabs */}
          <div className="flex gap-4 items-center overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            {["all", "active", "inactive"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`w-24 sm:w-28 px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-400 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center border ml-8 border-black rounded overflow-hidden h-[36px] w-full max-w-[450px]">
            <input
              type="text"
              placeholder="Search Category by Name, ID..."
              className="flex-1 px-4 text-sm text-gray-800 focus:outline-none h-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 sm:px-6 h-full">
              Search
            </button>
          </div>
        </div>

        {/* Add Button */}
        <div className="w-full md:w-auto flex justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white w-52 sm:w-60 px-4 sm:px-5 py-2 rounded-sm shadow hover:bg-orange-600 text-xs sm:text-sm flex items-center justify-center whitespace-nowrap"
          >
            + Add Category
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-sm shadow-sm overflow-x-auto pl-4 max-w-[99%] mx-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-orange-500 text-black">
              <th className="p-3 text-center">S.N</th>
              <th className="p-3 text-center">Image</th>
              <th className="p-3 text-center">Category</th>
              <th className="p-3 text-center">Products</th>
              <th className="p-3 text-center">Sub Categories</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 pr-6 text-right">Action</th>
            </tr>
          </thead>

          {loading ? (
            <TableSkeleton />
          ) : filteredCategories.length === 0 ? (
            <EmptyState />
          ) : (
            <tbody>
              {currentCategories.map((cat, idx) => (
                <tr
                  key={cat.id}
                  className="bg-white shadow-sm rounded-sm hover:bg-gray-50 transition border-b-4 border-gray-200"
                >
                  <td className="p-3 text-center">{indexOfFirst + idx + 1}</td>
                  <td className="p-3 text-center">
                    <img
                      src={cat.image}
                      alt={cat.category}
                      className="h-8 w-8 rounded-full object-cover mx-auto"
                    />
                  </td>
                  <td className="p-3 text-center">{cat.category}</td>
                  <td className="p-3 text-center">{cat.products}</td>
                  <td className="p-3 text-center">{cat.subCategory}</td>
                  <td className={`p-3 text-center ${statusColors[cat.status]}`}>
                    {cat.status}
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="text-orange-600 hover:text-blue-700"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="text-orange-600 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => navigate(`/category/${cat.id}`)}
                        className="text-orange-600 hover:text-green-700"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {/* Pagination */}
      {!loading && filteredCategories.length > 0 && (
        <div className="flex justify-end pl-8 items-center gap-6 mt-8 max-w-[95%] mx-auto">
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
                      currentPage === page
                        ? "text-orange-600 font-semibold"
                        : ""
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
      )}

      {/* Modals */}
      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <AddCategoryModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        isEdit={true}
      />
    </DashboardLayout>
  );
};

export default CreateCategory;
