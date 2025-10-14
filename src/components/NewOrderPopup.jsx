import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function NewOrderPopup({ visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const audio = new Audio("/notification.mp3");
      audio.play();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="relative bg-white border border-gray-300 shadow-xl w-full max-w-[490px] sm:rounded-sm rounded-md overflow-hidden transform transition-all duration-300 animate-popupIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#ff6600] hover:text-[#cc5200] transition-all"
          aria-label="Close"
        >
          <X size={20} strokeWidth={2} />
        </button>

        {/* Header */}
        <div className="px-4 py-3 text-[14px]  sm:text-[15px] font-semibold text-left relative inline-block ml-2">
          <span className="relative after:content-[''] after:absolute  after:left-0 after:-bottom-[2px] after:w-full after:h-[2px] after:bg-[#FF7B1D]">
            Congratulation ! You Got a New Order
          </span>
        </div>

        {/* Orange Order Info Bar */}
        <div className="bg-[#FF7B1D] text-black  text-[12px] sm:text-[13px] font-medium flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 px-3 py-2 w-[95%] max-w-[1200px] mx-auto">
          <span>
            Order ID : <strong>#RUSH8038403</strong>
          </span>
          <span>Order Date & Time : 23 Aug 2025 | 11:00AM</span>
        </div>

        {/* Order Details Section with Alignment Fix */}
        <div className="p-3 text-[12px] ml-2 sm:text-[13px] text-black leading-snug">
          <div className="grid grid-cols-2 gap-y-2">
            <div>
              <span className="font-semibold">Buyer Name :</span> NK Yadav
            </div>
            <div>
              <span className="font-semibold">Buyer Type :</span> First Time
              Buyer
            </div>

            <div>
              <span className="font-semibold">Amount :</span> 5 items | INR.
              5222
            </div>
            <div>
              <span className="font-semibold">Payment Mode :</span> Cash On
              Delivery
            </div>

            <div>
              <span className="font-semibold">Vendor :</span> Abnish Kumar
            </div>
            <div>
              <span className="font-semibold">Store ID :</span> RUSST8954895
            </div>

            <div>
              <span className="font-semibold">Store ID :</span> RUSST8954895
            </div>
            <div className="flex gap-6">
              <span>
                <span className="font-semibold">Distance :</span> 15KM
              </span>
              <span>
                <span className="font-semibold">Time :</span> 24Min
              </span>
            </div>
          </div>
        </div>

        {/* Today's Performance Section */}
        <div className="bg-[#78FF7D] p-3 text-[12px] sm:text-[13px] leading-relaxed text-black w-[95%] max-w-[1200px] mx-auto">
          <h3 className="text-center text-lg sm:text-xl font-bold mb-2">
            Today's Performance
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between font-semibold">
            <span>Total Orders Today : 20</span>
            <span>This Order Number : #21th</span>
          </div>
          <div>Total Transaction Today (Before This Order): INR.20095</div>
          <div>Total Transaction After This Order: INR.200577</div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center py-3 bg-white">
          <button
            onClick={onClose}
            className="bg-[#247606] text-white px-6 sm:px-8 py-2 rounded-sm text-[13px] sm:text-[14px] font-medium hover:bg-[#256b45] transform hover:scale-105 transition-all duration-200"
          >
            View Order
          </button>
        </div>
      </div>
    </div>
  );
}
