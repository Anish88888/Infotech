import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import AssignDeliveryBoyModal from "../components/AssignDeliveryBoyModal";

const SingleOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Skeleton Loader
  const SkeletonLoader = () => (
    <div className="w-full space-y-4 p-2 animate-pulse">
      {/* Top Buttons */}
      <div className="flex justify-end gap-3 mt-4">
        <div className="h-10 w-32 bg-gray-200 rounded"></div>
        <div className="h-10 w-48 bg-gray-200 rounded"></div>
      </div>

      {/* Buyer, Vendor, Product Info */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Buyer */}
        <div className="border border-gray-300 bg-white shadow p-3 rounded h-[350px] space-y-2">
          <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-3 w-full bg-gray-200 rounded"></div>
          ))}
          <div className="h-8 w-20 bg-gray-200 rounded mt-2 ml-auto"></div>
        </div>

        {/* Vendor */}
        <div className="border border-gray-300 bg-white shadow p-3 rounded h-[350px] space-y-2">
          <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-3 w-full bg-gray-200 rounded"></div>
          ))}
          <div className="h-8 w-20 bg-gray-200 rounded mt-2 ml-auto"></div>
        </div>

        {/* Product */}
        <div className="lg:col-span-2 border border-gray-300 bg-white shadow p-3 rounded h-[350px] space-y-3 overflow-y-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center border rounded bg-gray-100 p-2 space-x-3"
            >
              <div className="w-[100px] h-[90px] bg-gray-300 rounded"></div>
              <div className="flex-1 space-y-1">
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
                <div className="flex gap-1 flex-wrap mt-1">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-6 w-16 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-3 flex-wrap gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-6 w-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Order & Rider Details */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-6/12 border border-gray-300 bg-white shadow p-3 rounded space-y-2">
          <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-3 w-full bg-gray-200 rounded"></div>
          ))}
        </div>

        <div className="lg:w-1/2 border border-gray-300 bg-red-200 shadow p-3 rounded space-y-2">
          <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-3 w-full bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>

      {/* Pricing & Invoice */}
      <div className="border border-gray-300 bg-green-200 shadow p-4 rounded space-y-2">
        <div className="h-5 w-1/3 bg-gray-200 rounded"></div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-3 w-full bg-gray-200 rounded"></div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 w-full">
        <div className="h-10 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-10 w-1/2 bg-gray-200 rounded"></div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-52 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="w-full space-y-4 p-2">
          {/* Top Buttons */}
          <div className="flex justify-end mt-4 gap-3">
            <button className="bg-red-600 text-white px-6 py-2 font-semibold shadow rounded">
              Cancel Order
            </button>
            <button
              className="bg-gray-700 text-white px-6 py-2 font-semibold shadow rounded"
              onClick={() => setIsModalOpen(true)}
            >
              Assign Delivery Partner
            </button>

            <AssignDeliveryBoyModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>

          {/* Buyer, Vendor, Product Info */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Buyer Info */}
            <div className="border border-gray-300 bg-white shadow p-3 rounded flex flex-col h-[350px] overflow-y-auto">
              <h2 className="font-bold mb-2 border-b pb-1 text-sm">
                Buyer Information
              </h2>
              <div className="space-y-1 text-xs flex-1">
                <p>User ID: 78468817ID</p>
                <p>Name: Rahul Sharma</p>
                <p>User Type: First Time Buyer</p>
                <p>Mobile Number: 6208089024</p>
                <p>Alt. Mobile Number: 7845984080</p>
                <p>Email: simi@gmail.com</p>
                <p>Registration Date: 30/09/2025</p>
                <p>Total Orders: 5</p>
                <p>Leader Board Position: 88994</p>
                <p>Turnover With Company: 84919 INR</p>
              </div>
              <div className="flex justify-end mt-2">
                <button className="bg-black text-white px-4 py-1 text-xs rounded">
                  See Details
                </button>
              </div>
            </div>

            {/* Vendor Info */}
            <div className="border border-gray-300 bg-white shadow p-3 rounded flex flex-col h-[350px] overflow-y-auto">
              <h2 className="font-bold mb-2 border-b pb-1 text-sm">
                Vendor Information
              </h2>
              <div className="space-y-1 text-xs flex-1">
                <p>Vendor ID: 78468817VD</p>
                <p>Authorized Person: Rahul Sharma</p>
                <p>Contact Number: 6208089024</p>
                <p>Alt. Mobile Number: 7845984080</p>
                <p>WhatsApp Number: 7845984080</p>
                <p>Email: simi@gmail.com</p>
                <p>Registration Date: 30/09/2025</p>
                <p>Total Orders: 5</p>
                <p>Leader Board Position: 88994</p>
                <p>Turnover With Company: 84919 INR</p>
              </div>
              <div className="flex justify-end mt-2">
                <button className="bg-black text-white px-4 py-1 text-xs rounded">
                  See Details
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-2 border border-gray-300 bg-white shadow p-3 rounded flex flex-col h-[350px] overflow-y-auto">
              <h2 className="font-bold mb-2 border-b pb-1 text-sm">
                Product Information
              </h2>
              <div className="space-y-3 flex-1 overflow-y-auto">
                {Array(4)
                  .fill(0)
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className="flex items-center border rounded bg-gray-100 p-2"
                    >
                      <div className="w-[100px] h-[90px] bg-gray-300 rounded"></div>
                      <div className="flex-1 ml-3">
                        <p className="text-sm font-medium">
                          Face Wash Lorem 30 words display here and get full
                          details link
                        </p>
                        <p className="text-xs mt-1">Quantity : 12</p>
                        <p className="text-xs">Amount : 12323</p>
                        <p className="text-xs mb-2">SKU/HSSN : SDJJG747</p>
                        <div className="flex gap-1 mt-1 flex-wrap">
                          <button className="bg-yellow-400 text-black px-3 py-1 text-xs font-semibold rounded">
                            See Product
                          </button>
                          <button className="bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded">
                            36 In Stock
                          </button>
                          <button className="bg-black text-white px-3 py-1 text-xs font-semibold rounded">
                            4.4 Star
                          </button>
                          <button className="bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-between mt-3 text-xs font-semibold flex-wrap gap-2">
                <div className="bg-yellow-400 text-black px-2 py-1 rounded">
                  Cart Value : 376487 INR
                </div>
                <div className="bg-gray-900 text-white px-2 py-1 rounded">
                  Total Item : 4
                </div>
                <div className="bg-red-600 text-white px-2 py-1 rounded">
                  Payment Mode : COD
                </div>
              </div>
            </div>
          </div>

          {/* Order and Rider Details */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-6/12 border border-gray-300 bg-white shadow p-3 rounded">
              <h2 className="font-bold mb-2 border-b pb-1 text-sm">
                Order Details
              </h2>
              <div className="grid grid-cols-2 gap-y-1 text-sm">
                <p>Order ID: RUSH78689</p>
                <p>Contact Person Name: Rahul Sharma</p>
                <p>Mobile Number: 6208089024</p>
                <p>Coupon Code: Null</p>
                <p>Alt. Mobile Number: 7845984080</p>
                <p>Address 1: Road Number 3, Patna Nehru Nagar </p>
                <p>Address 2: Road Number 3, Patna Nehru Nagar </p>
                <p>City: Patna</p>
                <p>Pin Code: 803498</p>
                <p>Distance: 15 KM</p>
                <p>Expected Time: 10 min</p>
              </div>
            </div>

            <div className="lg:w-1/2 border border-gray-300 bg-red-200 shadow p-3 rounded">
              <h2 className="font-bold mb-2 border-b pb-1 text-sm">
                Rider Details
              </h2>
              <p>Rider ID: RUS78689</p>
              <p>Rider Name: Rahul Sharma</p>
              <p>Verified: YES</p>
              <p>Mobile Number: 6208089024</p>
              <p>Alt. Mobile Number: 7845984080</p>
              <p>WhatsApp: Road Number 3, Patna Nehru Nagar</p>
              <p>Email: Road Number 3, Patna Nehru Nagar</p>
              <p>Ratings: 4.5 Star</p>
              <p>Rider Assign Date & Time: 8015898</p>
            </div>
          </div>

          {/* Pricing & Invoice */}
          <div className="border border-gray-300 bg-green-200 shadow p-4 rounded w-full">
            <h2 className="font-bold mb-2 border-b pb-1 text-sm">
              Pricing & Invoice
            </h2>
            <div className="space-y-1 text-sm">
              <p>Product Value: 5894</p>
              <p>Handling Cost: 56974</p>
              <p>Tax: 90945</p>
              <p>Delivery Cost: 984949</p>
              <p>Any Additional: NULL</p>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex gap-3 w-full">
            <button className="bg-black text-white px-6 py-2 shadow rounded w-1/2">
              Download Order Details
            </button>
            <button className="bg-green-600 text-white px-6 py-2 shadow rounded w-1/2">
              Download Invoice
            </button>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-gray-300 bg-gray-300 h-52 flex items-center justify-center text-sm font-medium rounded">
              Pickup Time Image By Delivery
            </div>
            <div className="border border-gray-300 bg-gray-300 h-52 flex items-center justify-center text-sm font-medium rounded">
              Delivery Time Image By Delivery
            </div>
            <div className="border border-gray-300 bg-pink-300 h-52 flex items-center justify-center text-sm font-medium rounded">
              Extra Section
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default SingleOrder;
