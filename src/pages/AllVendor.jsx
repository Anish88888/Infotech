import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Eye, Edit, Trash2 } from "lucide-react";
import AddVendorModal from "../components/AddVendorModal";
import { useNavigate } from "react-router-dom";

const AllVendor = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // ✅ loading state
  const navigate = useNavigate();
  const itemsPerPage = 8;

  // Vendors list
  const [vendors, setVendors] = useState([]);

  // Simulate loading (you can replace with API call)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVendors([
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
          name: "Anita Verma",
          city: "Gurgaon",
          pincode: "122001",
          contact: "9123456780",
          status: "Suspended",
        },
        {
          id: "NO103",
          name: "Suresh Yadav",
          city: "Noida",
          pincode: "201301",
          contact: "9988776655",
          status: "Approved",
        },
        {
          id: "NO104",
          name: "Amit Kumar",
          city: "Ghaziabad",
          pincode: "201002",
          contact: "9234567890",
          status: "Approved",
        },
        {
          id: "NO105",
          name: "Neha Sharma",
          city: "Noida",
          pincode: "201301",
          contact: "9876123450",
          status: "Suspended",
        },
        {
          id: "NO106",
          name: "Rakesh Gupta",
          city: "Delhi",
          pincode: "110003",
          contact: "9123456701",
          status: "Approved",
        },
        {
          id: "NO107",
          name: "Vikram Singh",
          city: "Noida",
          pincode: "201304",
          contact: "9876543211",
          status: "Approved",
        },
        {
          id: "NO108",
          name: "Ankita Verma",
          city: "Delhi",
          pincode: "110004",
          contact: "9123456702",
          status: "Suspended",
        },
        {
          id: "NO109",
          name: "Sanjay Kumar",
          city: "Ghaziabad",
          pincode: "201003",
          contact: "9234567891",
          status: "Approved",
        },
        {
          id: "NO110",
          name: "Rahul Jain",
          city: "Noida",
          pincode: "201305",
          contact: "9876543212",
          status: "Approved",
        },
        {
          id: "NO111",
          name: "Priya Sharma",
          city: "Delhi",
          pincode: "110005",
          contact: "9123456703",
          status: "Suspended",
        },
        {
          id: "NO112",
          name: "Aakash Verma",
          city: "Gurgaon",
          pincode: "122002",
          contact: "9234567892",
          status: "Approved",
        },
        {
          id: "NO113",
          name: "Deepak Singh",
          city: "Noida",
          pincode: "201306",
          contact: "9876543213",
          status: "Approved",
        },
        {
          id: "NO114",
          name: "Ritu Sharma",
          city: "Delhi",
          pincode: "110006",
          contact: "9123456704",
          status: "Suspended",
        },
        {
          id: "NO115",
          name: "Vineet Kumar",
          city: "Ghaziabad",
          pincode: "201004",
          contact: "9234567893",
          status: "Approved",
        },
        {
          id: "NO116",
          name: "Komal Verma",
          city: "Noida",
          pincode: "201307",
          contact: "9876543214",
          status: "Approved",
        },
        {
          id: "NO117",
          name: "Ajay Singh",
          city: "Delhi",
          pincode: "110007",
          contact: "9123456705",
          status: "Suspended",
        },
        {
          id: "NO118",
          name: "Meena Sharma",
          city: "Gurgaon",
          pincode: "122003",
          contact: "9234567894",
          status: "Approved",
        },
        {
          id: "NO119",
          name: "Siddharth Jain",
          city: "Noida",
          pincode: "201308",
          contact: "9876543215",
          status: "Approved",
        },
        {
          id: "NO120",
          name: "Neetu Verma",
          city: "Delhi",
          pincode: "110008",
          contact: "9123456706",
          status: "Suspended",
        },
        {
          id: "NO121",
          name: "Karan Singh",
          city: "Ghaziabad",
          pincode: "201005",
          contact: "9234567895",
          status: "Approved",
        },
        {
          id: "NO122",
          name: "Reena Sharma",
          city: "Noida",
          pincode: "201309",
          contact: "9876543216",
          status: "Approved",
        },
        {
          id: "NO123",
          name: "Anil Kumar",
          city: "Delhi",
          pincode: "110009",
          contact: "9123456707",
          status: "Suspended",
        },
        {
          id: "NO124",
          name: "Pooja Verma",
          city: "Gurgaon",
          pincode: "122004",
          contact: "9234567896",
          status: "Approved",
        },
      ]);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const statusColors = {
    Approved: "text-green-600 font-semibold",
    Suspended: "text-gray-600 font-semibold",
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      setVendors((prev) => prev.filter((vendor) => vendor.id !== id));
    }
  };

  const filteredVendors = vendors
    .filter((vendor) => {
      if (activeTab === "active") return vendor.status === "Approved";
      if (activeTab === "suspended") return vendor.status === "Suspended";
      return true;
    })
    .filter((vendor) =>
      [vendor.name, vendor.id, vendor.city, vendor.pincode, vendor.contact]
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

  const indexOfLastVendor = currentPage * itemsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - itemsPerPage;
  const currentVendors = filteredVendors.slice(
    indexOfFirstVendor,
    indexOfLastVendor
  );
  const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);

  // ✅ Skeleton Loader Component
  const TableSkeleton = () => (
    <tbody>
      {Array.from({ length: itemsPerPage }).map((_, i) => (
        <tr
          key={i}
          className="border-b border-gray-200 animate-pulse bg-white rounded-sm"
        >
          {Array.from({ length: 8 }).map((__, j) => (
            <td key={j} className="p-3">
              <div className="h-4 bg-gray-200 rounded w-[80%]" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  // ✅ Empty state
  const EmptyState = () => (
    <tbody>
      <tr>
        <td
          colSpan="8"
          className="text-center py-10 text-gray-500 text-sm bg-white rounded-sm"
        >
          No vendors found.
        </td>
      </tr>
    </tbody>
  );

  return (
    <DashboardLayout>
      {/* TopBar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pl-4 max-w-[99%] mx-auto mt-0 mb-2">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 w-full">
          {/* Tabs */}
          <div className="flex gap-4 items-center overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            {["all", "active", "suspended"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`px-4 py-1 border rounded text-xs sm:text-sm whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-400 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab === "all"
                  ? "All Vendor"
                  : tab === "active"
                  ? "Active"
                  : "Suspended"}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-black rounded ml-16 overflow-hidden h-[36px] w-full max-w-[100%] lg:max-w-[400px]">
            <input
              type="text"
              placeholder="Search Vendor by Name, Vendor ID, City, Pincode..."
              className="flex-1 px-4 text-sm text-gray-800 focus:outline-none h-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            className="bg-black text-white w-52 sm:w-60 px-4 sm:px-5 py-2 rounded-sm shadow hover:bg-orange-600 text-xs sm:text-sm flex items-center justify-center whitespace-nowrap"
          >
            + Add Vendor
          </button>
        </div>
      </div>

      {/* Vendor Table */}
      <div className="bg-white rounded-sm shadow-sm overflow-x-auto pl-4 max-w-[99%] mx-auto">
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
              <th className="p-3 pr-6 text-right">Action</th>
            </tr>
          </thead>

          {/* Show Skeleton, Empty, or Vendors */}
          {loading ? (
            <TableSkeleton />
          ) : filteredVendors.length === 0 ? (
            <EmptyState />
          ) : (
            <tbody>
              {currentVendors.map((vendor, idx) => (
                <tr
                  key={vendor.id}
                  className="bg-white shadow-sm hover:bg-gray-50 transition border-b-4 border-gray-200"
                >
                  <td className="p-3">{indexOfFirstVendor + idx + 1}</td>
                  <td className="p-3">{vendor.id}</td>
                  <td className="p-3">{vendor.name}</td>
                  <td className="p-3">{vendor.city}</td>
                  <td className="p-3">{vendor.pincode}</td>
                  <td className="p-3">{vendor.contact}</td>
                  <td className={`p-3 ${statusColors[vendor.status]}`}>
                    {vendor.status === "Approved" ? "Active" : "Suspended"}
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-3 text-orange-600">
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
          )}
        </table>
      </div>

      {/* Pagination */}
      {!loading && filteredVendors.length > 0 && (
        <div className="flex justify-end items-center  gap-6 mt-8 max-w-[95%] mx-auto">
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

      {/* Add & Edit Modals */}
      <AddVendorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <AddVendorModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        isEdit={true}
      />
    </DashboardLayout>
  );
};

export default AllVendor;
