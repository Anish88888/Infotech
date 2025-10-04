// src/components/AssignDeliveryBoyModal.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const AssignDeliveryBoyModal = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState([]);

  const deliveryPartners = [
    {
      id: 1,
      name: "Ramesh Kumar",
      ratings: "3.5 Star",
      delivered: 19,
      status: "Online",
    },
    {
      id: 2,
      name: "Ramesh Kumar",
      ratings: "3.5 Star",
      delivered: 19,
      status: "Offline",
    },
    {
      id: 3,
      name: "Ramesh Kumar",
      ratings: "3.5 Star",
      delivered: 19,
      status: "On The Way",
    },
    {
      id: 4,
      name: "Ramesh Kumar",
      ratings: "3.5 Star",
      delivered: 19,
      status: "Offline",
    },
    {
      id: 5,
      name: "Ramesh Kumar",
      ratings: "3.5 Star",
      delivered: 19,
      status: "Online",
    },
  ];

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="bg-white w-[65%] max-h-[90vh] rounded shadow-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b font-bold text-lg">
          Assign Delivery Partner
          <button onClick={onClose}>
            <X className="text-orange-500" />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-y-auto flex-1">
          <table className="w-full text-sm">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="p-2">S.N</th>
                <th className="p-2">Delivery Partner</th>
                <th className="p-2">Ratings</th>
                <th className="p-2">Today's Delivered</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {deliveryPartners.map((partner, index) => (
                <tr
                  key={partner.id}
                  className={`cursor-pointer ${
                    selected.includes(partner.id) ? "bg-blue-100" : ""
                  }`}
                  onClick={() => toggleSelect(partner.id)}
                >
                  <td className="p-2 text-center">
                    <input
                      type="checkbox"
                      checked={selected.includes(partner.id)}
                      onChange={() => toggleSelect(partner.id)}
                    />
                  </td>
                  <td className="p-2">{partner.name}</td>
                  <td className="p-2">{partner.ratings}</td>
                  <td className="p-2 text-center">{partner.delivered}</td>
                  <td className="p-2">{partner.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-3 flex justify-end border-t">
          <button className="bg-green-600 text-white px-6 py-2 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignDeliveryBoyModal;
