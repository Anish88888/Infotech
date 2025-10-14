import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { FaPenToSquare, FaUserPlus, FaEye } from "react-icons/fa6";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Skeleton Loader
  const SkeletonLoader = () => (
    <div className="animate-pulse flex flex-col gap-4 w-full">
      <div className="flex flex-col md:flex-row justify-between gap-4 bg-gray-200 rounded p-4">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="flex flex-col gap-2 w-full">
            <div className="h-5 w-[150px] bg-gray-300 rounded"></div>
            <div className="h-4 w-[250px] bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="h-8 w-32 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 pl-6 min-h-screen">
      <DashboardLayout>
        <div className="max-w-[100%] mx-auto mt-4">
          {loading ? (
            <SkeletonLoader />
          ) : (
            <div className="mt-4 bg-white rounded-sm shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
              {/* Left side - Profile + Text */}
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/50"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold flex flex-wrap items-center gap-2">
                    Welcome Back,{" "}
                    <span className="text-gray-700">NK Yadav</span>
                    <FaPenToSquare className="text-gray-500 cursor-pointer" />
                  </h2>
                  <p className="text-sm text-gray-600">
                    You have{" "}
                    <span className="text-red-500 font-semibold">21</span> New
                    Orders &{" "}
                    <span className="text-red-500 font-semibold">14</span>{" "}
                    Pending Orders
                  </p>
                </div>
              </div>

              {/* Right side - Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-2 w-full md:w-auto">
                <button className="bg-[#3B7080] text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto">
                  <FaUserPlus /> Add Vendor
                </button>
                <button className="bg-[#F26422] text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto">
                  <FaEye /> View
                </button>
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </div>
  );
};

export default AdminDashboard;
