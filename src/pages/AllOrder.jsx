import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { Download, Eye, Truck } from "lucide-react";

const AllOrder = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

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

  return (
    <DashboardLayout>
      {/* TopBar */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3 w-full max-w-[98%] mx-auto mt-4 mb-4">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          {[
            { key: "all", label: "All" },
            { key: "new", label: "New Order" },
            { key: "assigned", label: "Assigned" },
            { key: "delivered", label: "Delivered" },
            { key: "cancel", label: "Cancel" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 border rounded-lg text-sm whitespace-nowrap transition-colors ${
                activeTab === tab.key
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search + Today */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden w-full sm:w-[400px] h-[40px]">
            <input
              type="text"
              placeholder="Search Order by Order Id, Products, User name, Tag"
              className="flex-1 px-3 text-sm focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 h-full text-sm">
              Search
            </button>
          </div>

          {/* Today Btn */}
          <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm">
            Today
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto w-full max-w-[98%] mx-auto">
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
                    <button className="text-orange-600 hover:text-orange-800">
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate(`/order/${order.id}`)}
                      className="text-orange-600 hover:text-orange-800"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-orange-600 hover:text-orange-800">
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
      <div className="flex flex-col sm:flex-row justify-between sm:justify-end items-center gap-4 mt-6 w-full max-w-[98%] mx-auto">
        <div className="flex gap-2 text-sm flex-wrap justify-center sm:justify-start">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-orange-500 text-white font-bold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm"
          >
            Back
          </button>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllOrder;
