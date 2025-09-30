import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const SingleOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="w-full space-y-4">
        {/* Top Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button className="bg-red-600 text-white px-5 py-2 font-medium shadow rounded">
            Cancel Order
          </button>
          <button className="bg-green-600 text-white px-5 py-2 font-medium shadow rounded">
            Assign Delivery Boy
          </button>
        </div>

        {/* Buyer, Vendor, Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Buyer Info */}
          <div className="border bg-white shadow p-3 h-60 overflow-y-auto rounded">
            <h2 className="font-bold mb-2 border-b pb-1 text-sm">
              Buyer Information
            </h2>
            <p>Buyer ID: 78468817ID</p>
            <p>Name: Rahul Sharma</p>
            <p>User Type: First Time Buyer</p>
            <p>Mobile Number: 9208489024</p>
            <p>Alt. Mobile Number: 7845984030</p>
            <p>Email: test@gmail.com</p>
            <p>Special Status: Category A</p>
            <p>Lead Days Past Orders: 28092</p>
            <p>Turnover With Company: 34958INR</p>
            <button className="mt-2 bg-black text-white px-4 py-1 text-sm rounded">
              See Details
            </button>
          </div>

          {/* Vendor Info */}
          <div className="border bg-white shadow p-3 h-52 overflow-y-auto rounded">
            <h2 className="font-bold mb-2 border-b pb-1 text-sm">
              Vendor Information
            </h2>
            <p>Vendor ID: 78468817ID</p>
            <p>Authorized Person Name: Rahul Sharma</p>
            <p>Contact Number: 7845984030</p>
            <p>Email: test@gmail.com</p>
            <p>Lead Days Past Orders: 88934</p>
            <p>Turnover With Company: 84919INR</p>
            <button className="mt-2 bg-black text-white px-4 py-1 text-sm rounded">
              See Details
            </button>
          </div>

          {/* Product Info */}
          <div className="border bg-white shadow p-3 rounded flex flex-col">
            <h2 className="font-bold mb-2 border-b pb-1 text-sm">
              Product Information
            </h2>
            <div className="space-y-2 flex-1 overflow-y-auto">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start border p-2 rounded"
                  >
                    <div className="flex-1 pr-2">
                      <p className="text-sm font-medium">
                        Face Wash Lorem 20 words display here and get full
                        details link
                      </p>
                      <p className="text-xs">Quantity: 122</p>
                      <p className="text-xs">Amount: 1232</p>
                      <p className="text-xs">SKU/SSIN: 51DG987</p>
                    </div>
                    <div className="flex flex-col gap-1 min-w-[80px]">
                      <button className="bg-yellow-400 px-2 py-1 text-xs rounded">
                        See Product
                      </button>
                      <button className="bg-green-600 text-white px-2 py-1 text-xs rounded">
                        36 In Stock
                      </button>
                      <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded">
                        4.4 Star
                      </button>
                      <button className="bg-red-600 text-white px-2 py-1 text-xs rounded">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Cart & Payment */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-3 text-sm gap-2">
              <span className="bg-yellow-300 px-2 py-1 font-semibold rounded">
                Cart Val: 376487 INR
              </span>
              <span>Total Item: 4</span>
              <span className="bg-red-600 text-white px-2 py-1 rounded">
                Payment Mode: COD
              </span>
            </div>
          </div>
        </div>

        {/* Order & Rider Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Order Details */}
          <div className="border bg-white shadow p-3 lg:col-span-2 rounded">
            <h2 className="font-bold mb-2 border-b pb-1 text-sm">
              Order Details
            </h2>
            <p>Order ID: RUSH4893</p>
            <p>Contact Person Name: Rahul Sharma</p>
            <p>Mobile Number: 9208489024</p>
            <p>Alt. Mobile Number: 7845984030</p>
            <p>Address: 2 Road Number 3, Patna Nutan Nagar, Bihar</p>
            <p>City: Patna</p>
            <p>PinCode: 800018</p>
            <p>Distance: 12km</p>
            <p>Expected Time: 30 min</p>
          </div>

          {/* Rider Details */}
          <div className="border bg-red-200 shadow p-3 rounded">
            <h2 className="font-bold mb-2 border-b pb-1 text-sm">
              Rider Details
            </h2>
            <p>Rider ID: FUS84939</p>
            <p>Rider Name: Rahul Sharma</p>
            <p>Verified: YES</p>
            <p>Mobile Number: 9208489024</p>
            <p>Alt. Mobile Number: 7845984030</p>
            <p>WhatsApp: 2 Road Number 3, Patna Nutan Nagar</p>
            <p>Email: test@gmail.com</p>
            <p>Ratings: 4.5 Star</p>
            <p>Rider Assign Date & Time: 10:03AM</p>
          </div>
        </div>

        {/* Pricing & Invoice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="border bg-green-200 shadow p-3 rounded">
            <h2 className="font-bold mb-2 border-b pb-1 text-sm">
              Pricing & Invoice
            </h2>
            <p>Product Value: 3894</p>
            <p>Handling Cost: 5994</p>
            <p>Tax: 9945</p>
            <p>Delivery Cost: 84939</p>
            <p>Any Additional: NULL</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
            <button className="bg-black text-white px-6 py-2 w-full sm:w-auto shadow rounded">
              Download Order Details
            </button>
            <button className="bg-green-600 text-white px-6 py-2 w-full sm:w-auto shadow rounded">
              Download Invoice
            </button>
          </div>
        </div>

        {/* Image Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-gray-300 h-32 flex items-center justify-center text-sm font-medium rounded">
            Pickup Time Image By Delivery
          </div>
          <div className="bg-gray-300 h-32 flex items-center justify-center text-sm font-medium rounded">
            Delivery Time Image By Delivery
          </div>
          <div className="bg-pink-300 h-32 flex items-center justify-center text-sm font-medium rounded">
            Extra Section
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SingleOrder;
