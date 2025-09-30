import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Eye, Edit, Trash2 } from "lucide-react";
import AddVendorModal from "../components/AddVendorModal";
import { useNavigate } from "react-router-dom";

const AllVendor = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 8; // Vendors per page

  // Move vendors to state so we can delete them
  const [vendors, setVendors] = useState([
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
      name: "Anita Verma",
      city: "Gurgaon",
      pincode: "122001",
      contact: "9123456780",
      status: "Suspended",
    },
    {
      id: "NO104",
      name: "Suresh Yadav",
      city: "Noida",
      pincode: "201301",
      contact: "9988776655",
      status: "Approved",
    },
    {
      id: "NO105",
      name: "Pooja Singh",
      city: "Delhi",
      pincode: "110002",
      contact: "9012345678",
      status: "Pending",
    },
    {
      id: "NO106",
      name: "Amit Kumar",
      city: "Ghaziabad",
      pincode: "201002",
      contact: "9234567890",
      status: "Approved",
    },
    {
      id: "NO107",
      name: "Neha Sharma",
      city: "Noida",
      pincode: "201301",
      contact: "9876123450",
      status: "Rejected",
    },
    {
      id: "NO108",
      name: "Rakesh Gupta",
      city: "Delhi",
      pincode: "110003",
      contact: "9123456701",
      status: "Approved",
    },
    {
      id: "NO109",
      name: "Seema Jain",
      city: "Gurgaon",
      pincode: "122002",
      contact: "9988123456",
      status: "Pending",
    },
    {
      id: "NO110",
      name: "Vikram Singh",
      city: "Noida",
      pincode: "201304",
      contact: "9876543211",
      status: "Approved",
    },
    {
      id: "NO111",
      name: "Ankita Verma",
      city: "Delhi",
      pincode: "110004",
      contact: "9123456702",
      status: "Suspended",
    },
    {
      id: "NO112",
      name: "Sanjay Kumar",
      city: "Ghaziabad",
      pincode: "201003",
      contact: "9234567891",
      status: "Approved",
    },
    {
      id: "NO113",
      name: "Priya Sharma",
      city: "Noida",
      pincode: "201305",
      contact: "9876123451",
      status: "Pending",
    },
  ]);

  const statusColors = {
    Approved: "text-green-600 font-semibold",
    Pending: "text-yellow-600 font-semibold",
    Rejected: "text-red-600 font-semibold",
    Suspended: "text-gray-600 font-semibold",
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vendor?"
    );
    if (!confirmDelete) return;

    setVendors((prev) => prev.filter((vendor) => vendor.id !== id));
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
        {/* Left Section: Tabs + Search */}
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
              All Vendor
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
              Suspended
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

        {/* Add Vendor Button */}
        <div className="w-full md:w-auto flex justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-4 sm:px-5 py-2 rounded-sm shadow hover:bg-orange-600 text-xs sm:text-sm flex items-center justify-center whitespace-nowrap"
          >
            + Add Vendor
          </button>
        </div>
      </div>

      {/* Vendor Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto max-w-[95%] mx-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-orange-500 text-black">
              <th className="p-3 text-left">S.N</th>
              <th className="p-3 text-left">Vendor ID</th>
              <th className="p-3 text-left">Authorized Name</th>
              <th className="p-3 text-left">City</th>
              <th className="p-3 text-left">Pin Code</th>
              <th className="p-3 text-left">Contact Number</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentVendors.map((vendor, idx) => (
              <tr
                key={vendor.id}
                className="bg-white shadow-sm rounded-md hover:bg-gray-50 transition border-b-4 border-gray-200"
              >
                <td className="p-3 rounded-l-md">
                  {indexOfFirstVendor + idx + 1}
                </td>
                <td className="p-3">{vendor.id}</td>
                <td className="p-3">{vendor.name}</td>
                <td className="p-3">{vendor.city}</td>
                <td className="p-3">{vendor.pincode}</td>
                <td className="p-3">{vendor.contact}</td>
                <td className={`p-3 ${statusColors[vendor.status]}`}>
                  {vendor.status}
                </td>
                <td className="p-3 rounded-r-md">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditModalOpen(true)}
                      className="text-orange-600 hover:text-blue-700"
                    >
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

      {/* Add Vendor Popup */}
      <AddVendorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Edit Vendor Popup */}
      <AddVendorModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        isEdit={true}
      />
    </DashboardLayout>
  );
};

export default AllVendor;
