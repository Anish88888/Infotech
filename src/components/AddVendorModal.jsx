import React, { useState } from "react";
import {
  UserIcon,
  XMarkIcon,
  ArrowRightIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

// A component for the vendor login credentials form
const VendorLoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-2">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4 relative overflow-y-auto max-h-[70vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {/* Heading */}
        <h2 className="text-lg font-bold mb-2 text-gray-800">
          Create Vendor Login Credentials
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          These credentials will be used by the vendor to log in and access
          their store dashboard.
        </p>

        <form className="space-y-3">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium text-sm mb-1"
            >
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <UserIcon className="h-4 w-4 text-gray-400" />
              </span>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full pl-8 pr-2 py-1.5 text-sm border border-orange-400 rounded-md focus:ring-1 focus:ring-orange-400 focus:border-transparent outline-none"
              />
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Use lowercase letters and numbers only
            </p>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium text-sm mb-1"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <LockClosedIcon className="h-4 w-4 text-gray-400" />
              </span>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full pl-8 pr-2 py-1.5 text-sm border border-orange-400 rounded-md focus:ring-1 focus:ring-orange-400 focus:border-transparent outline-none"
              />
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              8-16 characters, include uppercase, number & special char
            </p>
          </div>

          {/* Re-Enter Password */}
          <div>
            <label
              htmlFor="reEnterPassword"
              className="block text-gray-700 font-medium text-sm mb-1"
            >
              Re-Enter Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <LockClosedIcon className="h-4 w-4 text-gray-400" />
              </span>
              <input
                id="reEnterPassword"
                type="password"
                placeholder="Re-Enter Password"
                className="w-full pl-8 pr-2 py-1.5 text-sm border border-orange-400 rounded-md focus:ring-1 focus:ring-orange-400 focus:border-transparent outline-none"
              />
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Must match the password above
            </p>
          </div>

          {/* Secret Key */}
          <div>
            <label className="block text-gray-700 font-medium text-sm mb-1">
              Secret KEY
            </label>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-8 h-8 text-center text-sm border-2 border-orange-400 rounded-md focus:ring-1 focus:ring-orange-400 focus:border-transparent outline-none"
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Enter 5-digit numeric key
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-4 py-1.5 rounded-md bg-green-500 text-white font-semibold text-sm flex items-center gap-1 hover:bg-green-600 transition duration-200"
            >
              Submit <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AddVendorModal = ({ isOpen, onClose }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  if (!isOpen) return null;

  const handleNextClick = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    onClose(); // Also close the main modal
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative overflow-y-auto max-h-[80vh]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Heading */}
          <h2 className="text-xl font-bold mb-6 text-gray-800 border-b-2 border-orange-500 pb-2 flex items-center">
            Add Vendor
          </h2>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleNextClick}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Authorized Person Name */}
              <div>
                <label
                  htmlFor="authorizedPersonName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Authorized Person Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="authorizedPersonName"
                    type="text"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Contact Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="contactNumber"
                    type="text"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Alt. Contact Number */}
              <div>
                <label
                  htmlFor="altContactNumber"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Alt. Contact Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="altContactNumber"
                    type="text"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Email ID */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email ID
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Gender
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="gender"
                    type="text"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Date of Birth
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="dob"
                    type="date"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Store ID */}
              <div>
                <label
                  htmlFor="storeId"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Store ID
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="storeId"
                    type="text"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Store Name */}
              <div>
                <label
                  htmlFor="storeName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Store Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="storeName"
                    type="text"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Store Image (TEXT INPUT) */}
              <div>
                <label
                  htmlFor="storeImage"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Store Image
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="storeImage"
                    type="text" // Changed to TEXT
                    placeholder="Enter Store Image Name" // Changed placeholder
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Store Address Line 1 (Full Width) */}
            <div>
              <label
                htmlFor="storeAddress1"
                className="block text-gray-700 font-medium mb-1"
              >
                Store Address Line 1
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  id="storeAddress1"
                  type="text"
                  placeholder="Enter Authorized Person Name of Store"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Store Address Line 2 (Full Width) */}
            <div>
              <label
                htmlFor="storeAddress2"
                className="block text-gray-700 font-medium mb-1"
              >
                Store Address Line 2
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  id="storeAddress2"
                  type="text"
                  placeholder="Enter Authorized Person Name of Store"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-medium mb-1"
                >
                  City
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Pin Code */}
              <div>
                <label
                  htmlFor="pinCode"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Pin Code
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="pinCode"
                    type="text"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* State */}
              <div>
                <label
                  htmlFor="state"
                  className="block text-gray-700 font-medium mb-1"
                >
                  State
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="state"
                    type="text"
                    placeholder="Enter Authorized Person Name of Store"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-orange-500 text-white font-semibold text-lg flex items-center gap-2 hover:bg-orange-600 transition duration-200"
              >
                Next <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {showLoginModal && <VendorLoginModal onClose={handleCloseLoginModal} />}
    </>
  );
};

export default AddVendorModal;
