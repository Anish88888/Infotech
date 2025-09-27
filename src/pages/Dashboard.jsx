import React from "react";
import DashboardLayout from "../components/DashboardLayout";
// ✅ Correct import for your version of react-icons
import { FaEdit, FaUserPlus, FaListAlt } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mt-4 bg-white rounded-md shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
        {/* Left side - Profile + Text */}
        <div className="flex items-center gap-3">
          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/50" // Replace with actual profile image if needed
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold flex flex-wrap items-center gap-2">
              Welcome Back, <span className="text-gray-700">NK Yadav</span>
              <FaEdit className="text-gray-500 cursor-pointer" />
            </h2>
            <p className="text-sm text-gray-600">
              You have <span className="text-red-500 font-semibold">21</span>{" "}
              New Orders &{" "}
              <span className="text-red-500 font-semibold">14</span> Pending
              Orders
            </p>
          </div>
        </div>

        {/* Right side - Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-2 w-full md:w-auto">
          <button className="bg-[#3B7080] text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto">
            <FaUserPlus /> Add Vendor
          </button>
          <button className="bg-[#F26522] text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto">
            <FaListAlt /> Add Category
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
