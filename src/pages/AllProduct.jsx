import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Eye, Edit, Trash2 } from "lucide-react";
import AddProductModal from "../components/AddProduct";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 8;

  // Dummy Product Data
  const [products, setProducts] = useState([
    {
      id: "PR101",
      name: "Wireless Headphones",
      vendor: "Manish Electronics",
      category: "Electronics",
      subCategory: "Audio",
      price: "₹2,499",
      status: "Approved",
    },
    {
      id: "PR102",
      name: "Bluetooth Speaker",
      vendor: "Anish Gadgets",
      category: "Electronics",
      subCategory: "Audio",
      price: "₹1,999",
      status: "In Review",
    },
    {
      id: "PR103",
      name: "Running Shoes",
      vendor: "Ravi Sports",
      category: "Footwear",
      subCategory: "Sports Shoes",
      price: "₹3,299",
      status: "Rejected",
    },
    {
      id: "PR104",
      name: "Office Chair",
      vendor: "WorkSpace Ltd",
      category: "Furniture",
      subCategory: "Chairs",
      price: "₹4,999",
      status: "Approved",
    },
    {
      id: "PR105",
      name: "Smart Watch",
      vendor: "Tech World",
      category: "Electronics",
      subCategory: "Wearables",
      price: "₹5,999",
      status: "In Review",
    },
    {
      id: "PR106",
      name: "Denim Jacket",
      vendor: "StyleHub",
      category: "Clothing",
      subCategory: "Men",
      price: "₹2,199",
      status: "Approved",
    },
    {
      id: "PR107",
      name: "Gaming Mouse",
      vendor: "Techify",
      category: "Accessories",
      subCategory: "Computer",
      price: "₹1,299",
      status: "Approved",
    },
    {
      id: "PR108",
      name: "Formal Shoes",
      vendor: "Ravi Sports",
      category: "Footwear",
      subCategory: "Men",
      price: "₹3,499",
      status: "Rejected",
    },
    {
      id: "PR109",
      name: "LED Monitor",
      vendor: "Manish Electronics",
      category: "Electronics",
      subCategory: "Displays",
      price: "₹8,999",
      status: "Approved",
    },
    {
      id: "PR110",
      name: "Yoga Mat",
      vendor: "Fitness Zone",
      category: "Sports",
      subCategory: "Accessories",
      price: "₹999",
      status: "In Review",
    },
  ]);

  const statusColors = {
    Approved: "text-green-600 font-semibold",
    "In Review": "text-yellow-600 font-semibold",
    Rejected: "text-red-600 font-semibold",
  };

  // Delete Product
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // Filter by tab
  const filteredProducts = products.filter((product) => {
    if (activeTab === "approved") return product.status === "Approved";
    if (activeTab === "in_review") return product.status === "In Review";
    if (activeTab === "rejected") return product.status === "Rejected";
    return true;
  });

  // Search filter
  const searchedProducts = filteredProducts.filter((product) =>
    [product.name, product.vendor, product.category]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = searchedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(searchedProducts.length / itemsPerPage);

  return (
    <DashboardLayout>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 max-w-[95%] mx-auto mt-6 mb-6">
        {/* Tabs & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 w-full">
          {/* Tabs */}
          <div className="flex gap-2 items-center overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            {[
              { key: "all", label: "All Product" },
              { key: "in_review", label: "In Review" },
              { key: "approved", label: "Approved" },
              { key: "rejected", label: "Rejected" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setCurrentPage(1);
                }}
                className={`px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-400 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-black rounded overflow-hidden h-[36px] w-full max-w-[100%] lg:max-w-[600px]">
            <input
              type="text"
              placeholder="Search Product by Name, Vendor, or Category..."
              className="flex-1 px-4 text-sm text-gray-800 focus:outline-none h-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 sm:px-6 h-full">
              Search
            </button>
          </div>
        </div>

        {/* Add Product Button */}
        <div className="w-full md:w-auto flex justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-4 sm:px-5 py-2 rounded-sm shadow hover:bg-orange-600 text-xs sm:text-sm flex items-center justify-center whitespace-nowrap"
          >
            + Add Product
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-sm shadow-sm overflow-x-auto max-w-[95%] mx-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-orange-500 text-black">
              <th className="p-3 text-left">S.N</th>
              <th className="p-3 text-left">Product ID</th>
              <th className="p-3 text-left">Product Name</th>
              <th className="p-3 text-left">Vendor</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Sub Category</th>
              <th className="p-3 text-left">Sell Price</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, idx) => (
              <tr
                key={product.id}
                className="bg-white shadow-sm rounded-sm hover:bg-gray-50 transition border-b-4 border-gray-200"
              >
                <td className="p-3 rounded-l-md">{indexOfFirst + idx + 1}</td>
                <td className="p-3">{product.id}</td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.vendor}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">{product.subCategory}</td>
                <td className="p-3">{product.price}</td>
                <td className={`p-3 ${statusColors[product.status]}`}>
                  {product.status}
                </td>
                <td className="p-3 rounded-r-sm">
                  <div className="flex gap-2 text-orange-600">
                    <button className="hover:text-blue-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="hover:text-blue-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="hover:text-blue-700"
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

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </DashboardLayout>
  );
};

export default AllProduct;
