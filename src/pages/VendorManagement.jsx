import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Eye } from "lucide-react";
import AddVendorModal from "../components/AddVendorModal"; // import modal

const VendorManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const vendors = [
    {
      id: "NO101",
      name: "Manish Kumar",
      city: "Noida",
      pincode: "201301",
      contact: "6203689042",
      status: "Approved",
    },
    {
      id: "NO102",
      name: "Ravi Sharma",
      city: "Delhi",
      pincode: "110001",
      contact: "9876543210",
      status: "Pending",
    },
  ];

  const statusColors = {
    Approved: "text-green-600 font-semibold",
    Pending: "text-yellow-600 font-semibold",
    Rejected: "text-red-600 font-semibold",
    Suspended: "text-gray-600 font-semibold",
  };

  return (
    <DashboardLayout>
      {/* TopBar */}
      <div className="flex flex-wrap justify-between items-center mt-6 mb-6 gap-3">
        {/* Tabs */}
        <div className="flex gap-2 items-center overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-1 border rounded-full text-xs sm:text-sm whitespace-nowrap ${
              activeTab === "all"
                ? "bg-orange-500 text-white border-orange-500"
                : "border-orange-500 text-orange-500 hover:bg-orange-100"
            }`}
          >
            All Vendor
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`px-4 py-1 border rounded-full text-xs sm:text-sm whitespace-nowrap ${
              activeTab === "pending"
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-400 text-gray-600 hover:bg-gray-100"
            }`}
          >
            Pending Approval
          </button>
          <button
            onClick={() => setActiveTab("approved")}
            className={`px-4 py-1 border rounded-full text-xs sm:text-sm whitespace-nowrap ${
              activeTab === "approved"
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-400 text-gray-600 hover:bg-gray-100"
            }`}
          >
            Approved
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab("rejected")}
              className={`px-4 py-1 border rounded-full text-xs sm:text-sm whitespace-nowrap ${
                activeTab === "rejected"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-400 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Rejected
            </button>
            <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500 text-white text-xs sm:text-sm font-semibold shadow">
              32
            </span>
          </div>
        </div>

        {/* Open Modal Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-white px-4 sm:px-5 py-2 rounded-lg shadow hover:bg-orange-600 text-xs sm:text-sm flex items-center w-full md:w-auto justify-center"
        >
          <span className="mr-1 text-lg">+</span> Add Vendor
        </button>
      </div>

      {/* Vendor Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">S.N</th>
              <th className="border p-2 text-left">Vendor ID</th>
              <th className="border p-2 text-left">Authorized Name</th>
              <th className="border p-2 text-left">City</th>
              <th className="border p-2 text-left">Pin Code</th>
              <th className="border p-2 text-left">Contact Number</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border p-2">{idx + 1}</td>
                <td className="border p-2">{vendor.id}</td>
                <td className="border p-2">{vendor.name}</td>
                <td className="border p-2">{vendor.city}</td>
                <td className="border p-2">{vendor.pincode}</td>
                <td className="border p-2">{vendor.contact}</td>
                <td className={`border p-2 ${statusColors[vendor.status]}`}>
                  {vendor.status}
                </td>
                <td className="border p-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <Eye className="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Vendor Popup */}
      <AddVendorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </DashboardLayout>
  );
};

export default VendorManagement;
