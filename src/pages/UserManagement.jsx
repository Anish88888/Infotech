import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Eye } from "lucide-react";
import AddVendorModal from "../components/AddVendorModal"; // import modal

const UserManagement = () => {
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
    {
      id: "NO103",
      name: "Manish Kumar",
      city: "Noida",
      pincode: "201301",
      contact: "6203689042",
      status: "Approved",
    },
    {
      id: "NO104",
      name: "Ravi Sharma",
      city: "Delhi",
      pincode: "110001",
      contact: "9876543210",
      status: "Pending",
    },
    {
      id: "NO105",
      name: "Manish Kumar",
      city: "Noida",
      pincode: "201301",
      contact: "6203689042",
      status: "Approved",
    },
    {
      id: "NO106",
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
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 mb-6 gap-3">
        {/* Tabs / Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1 rounded-full text-xs sm:text-sm md:text-sm whitespace-nowrap border transition ${
              activeTab === "all"
                ? "bg-orange-500 text-white border-orange-500"
                : "border-orange-500 text-orange-500 hover:bg-orange-100"
            }`}
          >
            All Users
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`px-3 py-1 rounded-full text-xs sm:text-sm md:text-sm whitespace-nowrap border transition ${
              activeTab === "pending"
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-400 text-gray-600 hover:bg-gray-100"
            }`}
          >
            Buyer
          </button>
          <button
            onClick={() => setActiveTab("approved")}
            className={`px-3 py-1 rounded-full text-xs sm:text-sm md:text-sm whitespace-nowrap border transition ${
              activeTab === "approved"
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-400 text-gray-600 hover:bg-gray-100"
            }`}
          >
            Not Buyer
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("rejected")}
              className={`px-3 py-1 rounded-full text-xs sm:text-sm md:text-sm whitespace-nowrap border transition ${
                activeTab === "rejected"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-400 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Buyer Leader Board
            </button>
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-orange-500 text-white text-[10px] sm:text-xs md:text-sm font-semibold shadow">
              32
            </span>
          </div>
        </div>

        {/* Add Vendor Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md shadow hover:bg-orange-600 text-xs sm:text-sm md:text-sm flex items-center justify-center mt-2 md:mt-0"
        >
          <span className="mr-1 text-lg">+</span> Add Vendor
        </button>
      </div>

      {/* Vendor Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border border-gray-300 text-xs sm:text-sm md:text-base min-w-[700px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">S.N</th>
              <th className="border p-2 text-left">Vendor ID</th>
              <th className="border p-2 text-left">Authorized Name</th>
              <th className="border p-2 text-left hidden sm:table-cell">
                City
              </th>
              <th className="border p-2 text-left hidden md:table-cell">
                Pin Code
              </th>
              <th className="border p-2 text-left hidden md:table-cell">
                Contact
              </th>
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
                <td className="border p-2 hidden sm:table-cell">
                  {vendor.city}
                </td>
                <td className="border p-2 hidden md:table-cell">
                  {vendor.pincode}
                </td>
                <td className="border p-2 hidden md:table-cell">
                  {vendor.contact}
                </td>
                <td className={`border p-2 ${statusColors[vendor.status]}`}>
                  {vendor.status}
                </td>
                <td className="border p-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Vendor Modal */}
      <AddVendorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </DashboardLayout>
  );
};

export default UserManagement;
