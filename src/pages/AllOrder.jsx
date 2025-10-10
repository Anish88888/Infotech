import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { Download, Eye, Truck } from "lucide-react";

const AllOrder = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Limit 8 per page
  const navigate = useNavigate();

  // Dummy Orders
  const [orders] = useState([
    {
      id: "RUSH09401",
      date: "27 Sep 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 124,
      payment: "COD",
      status: "New Order",
    },
    {
      id: "RUSH09402",
      date: "28 Sep 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 230,
      payment: "COD",
      status: "Assigned",
    },
    {
      id: "RUSH09403",
      date: "29 Sep 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 450,
      payment: "COD",
      status: "Delivered",
    },
    {
      id: "RUSH09404",
      date: "30 Sep 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 350,
      payment: "COD",
      status: "Cancel",
    },
    {
      id: "RUSH09405",
      date: "01 Oct 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 400,
      payment: "COD",
      status: "New Order",
    },
    {
      id: "RUSH09406",
      date: "02 Oct 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 280,
      payment: "COD",
      status: "Assigned",
    },
    {
      id: "RUSH09407",
      date: "03 Oct 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 500,
      payment: "COD",
      status: "Delivered",
    },
    {
      id: "RUSH09408",
      date: "04 Oct 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 320,
      payment: "COD",
      status: "Cancel",
    },
    {
      id: "RUSH09409",
      date: "05 Oct 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 150,
      payment: "COD",
      status: "New Order",
    },
    {
      id: "RUSH09410",
      date: "06 Oct 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 270,
      payment: "COD",
      status: "Assigned",
    },
    {
      id: "RUSH09411",
      date: "07 Oct 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 480,
      payment: "COD",
      status: "Delivered",
    },
    {
      id: "RUSH09412",
      date: "08 Oct 2025",
      vendor: "Mathura",
      user: "Anish Kumar",
      cartValue: 360,
      payment: "COD",
      status: "Cancel",
    },
  ]);

  const statusColors = {
    "New Order": "text-blue-600 font-semibold",
    Assigned: "text-yellow-600 font-semibold",
    Delivered: "text-green-600 font-semibold",
    Cancel: "text-red-600 font-semibold",
  };

  // Filter orders based on active tab
  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter(
          (order) =>
            order.status.toLowerCase() ===
            (activeTab === "cancel" ? "cancel" : activeTab)
        );

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <DashboardLayout>
      {/* TopBar: Tabs + Search + Today */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3 w-full max-w-[98%] mx-auto mt-6 mb-4">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
          {[
            { key: "all", label: "All" },
            { key: "new", label: "New Order" },
            { key: "assigned", label: "Assigned" },
            { key: "delivered", label: "Delivered" },
            { key: "cancel", label: "Cancel" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setCurrentPage(1); // Reset to first page on tab change
              }}
              className={`px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap transition-colors ${
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
          <div className="flex items-center border border-black rounded overflow-hidden h-[36px] w-full sm:w-[400px]">
            <input
              type="text"
              placeholder="Search Order by Order Id, Products, User name, Tag"
              className="flex-1 px-4 text-sm focus:outline-none h-full"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 h-full text-sm">
              Search
            </button>
          </div>

          <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-sm text-sm whitespace-nowrap">
            Today
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-sm shadow-sm overflow-x-auto max-w-[98%] mx-auto">
        <table className="w-full text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-orange-500 text-black">
              <th className="p-3 text-left">S.N</th>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Vendor</th>
              <th className="p-3 text-left">User Name</th>
              <th className="p-3 text-left">Cart Value</th>
              <th className="p-3 text-left">Payment Status</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {currentOrders.map((order, idx) => (
              <tr
                key={idx}
                className="bg-white shadow-sm rounded-sm hover:bg-gray-50 transition border-b-4 border-gray-200"
              >
                <td className="p-3 rounded-l-md">{indexOfFirst + idx + 1}</td>
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">{order.vendor}</td>
                <td className="p-3">{order.user}</td>
                <td className="p-3">₹{order.cartValue}</td>
                <td className="p-3">{order.payment}</td>
                <td className={`p-3 ${statusColors[order.status]}`}>
                  {order.status}
                </td>
                <td className="p-3 rounded-r-sm">
                  <div className="flex gap-2">
                    <button className="text-orange-600 hover:text-blue-700">
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate(`/order/${order.id}`)}
                      className="text-orange-600 hover:text-blue-700"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-orange-600 hover:text-blue-700">
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
      <div className="flex justify-end items-center gap-4 mt-6 max-w-[98%] mx-auto">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 text-sm font-medium rounded-sm"
        >
          Back
        </button>

        <div className="flex gap-2 text-sm text-black font-medium flex-wrap items-center">
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

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 text-sm font-medium rounded-sm"
        >
          Next
        </button>
      </div>
    </DashboardLayout>
  );
};

export default AllOrder;
