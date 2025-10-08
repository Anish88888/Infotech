import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { ChevronDown, Edit, Eye, Trash2 } from "lucide-react";
// import your modal component
import AddProductModal from "../components/AddProduct";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  // Dummy Products
  const [products] = useState(
    Array(12).fill({
      id: "RUSH09402",
      date: "27 September 2025",
      vendor: "Mathura",
      category: "Anish Kumar",
      subCategory: "124",
      price: "344",
      status: "In Review",
    })
  );

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const tabs = [
    { key: "all", label: "All" },
    { key: "in_review", label: "In Review" },
    { key: "approved", label: "Approved" },
    { key: "rejected", label: "Rejected" },
    { key: "select_vendor", label: "Select Vendor" },
  ];

  const vendors = ["Vendor A", "Vendor B", "Vendor C"];

  return (
    <DashboardLayout>
      {/* TopBar */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3 max-w-[98%] mx-auto mt-4 mb-4">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 relative">
          {tabs.map((tab) => (
            <div key={tab.key} className="relative">
              <button
                onClick={() => {
                  if (tab.key === "select_vendor") {
                    setShowDropdown((prev) => !prev);
                  } else {
                    setActiveTab(tab.key);
                    setShowDropdown(false);
                  }
                }}
                className={`flex items-center gap-1 px-4 py-2 border rounded text-sm whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                {tab.label}
                {tab.key === "select_vendor" && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      showDropdown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </button>

              {/* Vendor Dropdown */}
              {tab.key === "select_vendor" && showDropdown && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
                  {vendors.map((vendor) => (
                    <button
                      key={vendor}
                      onClick={() => {
                        setActiveTab(vendor.toLowerCase().replace(" ", "_"));
                        setShowDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-orange-100"
                    >
                      {vendor}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search + Add Product */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="flex items-center border border-black rounded overflow-hidden w-full sm:w-[400px] h-[36px]">
            <input
              type="text"
              placeholder="Product Search by Product Name, Vendor name, Category name"
              className="flex-1 px-3 text-sm focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 h-full">
              Search
            </button>
          </div>

          {/* Add Product Btn */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-black text-white px-6 py-2 rounded"
          >
            + Add New Product
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded shadow-md overflow-x-auto max-w-[98%] mx-auto">
        <table className="w-full text-xs sm:text-sm border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left">S.N</th>
              <th className="p-2 text-left">Product ID</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Vendor</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Sub Category</th>
              <th className="p-2 text-left">Sell Price</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-2">{indexOfFirst + idx + 1}</td>
                <td className="p-2">{product.id}</td>
                <td className="p-2">{product.date}</td>
                <td className="p-2">{product.vendor}</td>
                <td className="p-2">{product.category}</td>
                <td className="p-2">{product.subCategory}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">{product.status}</td>
                <td className="p-2">
                  <div className="flex gap-3 text-orange-600">
                    <button>
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => navigate(`/products/${product.id}`)}>
                      <Eye className="w-4 h-4" />
                    </button>

                    <button>
                      <Trash2 className="w-4 h-4" />
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
              if (visiblePages.has(i)) {
                pages.push(i);
              } else if (pages[pages.length - 1] !== "...") {
                pages.push("...");
              }
            }

            return pages.map((page, idx) =>
              page === "..." ? (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-1 text-black select-none"
                >
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

      {/* External Add Product Modal */}
      {isAddModalOpen && (
        <AddProductModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}
    </DashboardLayout>
  );
};

export default AllProduct;
