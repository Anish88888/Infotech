import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import { FaEdit, FaUserPlus, FaListAlt } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mt-4 bg-white rounded-md shadow p-4 flex items-center justify-between">
        {/* Left side - Profile + Text */}
        <div className="flex items-center">
          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/50" // Replace with actual profile image
            alt="Profile"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Welcome Back, <span className="text-gray-700">NK Yadav</span>
              <FaEdit className="text-gray-500 cursor-pointer" />
            </h2>
            <p className="text-sm text-gray-600">
              You have <span className="text-red-500 font-semibold">21</span>{" "}
              New Order & <span className="text-red-500 font-semibold">14</span>{" "}
              Pending Order
            </p>
          </div>
        </div>

        {/* Right side - Buttons */}
        <div className="flex gap-2">
          <button className="bg-[#3B7080] text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FaUserPlus /> Add Vendor
          </button>
          <button className="bg-[#F26522] text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FaListAlt /> Add Category
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
