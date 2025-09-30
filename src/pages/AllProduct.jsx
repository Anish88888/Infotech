import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Download, Eye, Truck, ChevronDown } from "lucide-react";

const AllProduct = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const itemsPerPage = 10;

  // Dummy Orders
  const [orders] = useState(
    Array(12).fill({
      id: "RUSH09402",
      date: "27 September 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 124,
      payment: "COD",
      status: "New Order",
    })
  );

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(orders.length / itemsPerPage);

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

              {/* Dropdown Vendors */}
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

        {/* Search + Today */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="flex items-center border border-black rounded overflow-hidden w-full sm:w-[400px] h-[36px]">
            <input
              type="text"
              placeholder="Search Order by Order Id, Products, User name, Tag"
              className="flex-1 px-3 text-sm focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 h-full">
              Search
            </button>
          </div>

          {/* Today Btn */}
          <button className="bg-black text-white px-6 py-2 rounded">
            Today
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded shadow-md overflow-x-auto max-w-[98%] mx-auto">
        <table className="w-full text-xs sm:text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-orange-500 text-black">
              <th className="p-2 text-left">S.N</th>
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Vendor</th>
              <th className="p-2 text-left">User Name</th>
              <th className="p-2 text-left">Cart Value</th>
              <th className="p-2 text-left">Payment Status</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-2">{indexOfFirst + idx + 1}</td>
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">{order.vendor}</td>
                <td className="p-2">{order.user}</td>
                <td className="p-2">₹{order.cartValue}</td>
                <td className="p-2">{order.payment}</td>
                <td className="p-2">{order.status}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button className="text-orange-600">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="text-orange-600">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-orange-600">
                      <Truck className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between sm:justify-end items-center gap-4 mt-6 max-w-[98%] mx-auto">
        {/* Page Numbers */}
        <div className="flex gap-2 text-sm flex-wrap justify-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 ${
                currentPage === page ? "text-orange-600 font-bold" : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Back & Next */}
        <div className="flex gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="bg-orange-500 text-white px-6 py-2 rounded"
          >
            Back
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllProduct;
