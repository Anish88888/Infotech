import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaTachometerAlt,
  FaBox,
  FaClipboardList,
  FaChartBar,
  FaBell,
  FaBullhorn,
  FaTicketAlt,
  FaTruck,
  FaLifeRing,
  FaCog,
  FaChevronDown,
  FaChevronUp,
  FaWarehouse,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const toggleDropdown = (name) => {
    setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    {
      name: "Product Management",
      icon: <FaBox />,
      subItems: [
        { name: "Add Product", path: "/products/add" },
        { name: "All Product", path: "/products/all" },
        { name: "Trending Product", path: "/products/trending" },
      ],
    },
    {
      name: "Inventory",
      icon: <FaWarehouse />,
      subItems: [
        { name: "All Product", path: "/inventory/all" },
        { name: "Out of Stock", path: "/inventory/out-of-stock" },
        { name: "Limited Product", path: "/inventory/limited" },
      ],
    },
    {
      name: "Order Management",
      icon: <FaClipboardList />,
      subItems: [
        { name: "All Order", path: "/orders/all" },
        { name: "Pending Order", path: "/orders/pending" },
        { name: "Delivered", path: "/orders/delivered" },
        { name: "Cancel", path: "/orders/cancel" },
      ],
    },
    {
      name: "Category Management",
      icon: <FaBullhorn />,
      subItems: [
        { name: "All Category", path: "/category/all" },
        { name: "Create Category", path: "/category/create" },
        { name: "Create Sub Category", path: "/category/create-sub" },
      ],
    },
    {
      name: "Coupons & Offer",
      icon: <FaTicketAlt />,
      subItems: [
        { name: "All Coupons", path: "/coupons/all" },
        { name: "Create Coupons", path: "/coupons/create" },
        { name: "Prepaid Offer (%)", path: "/coupons/prepaid" },
      ],
    },
    {
      name: "Notification",
      icon: <FaBell />,
      subItems: [
        { name: "Notification", path: "/notification" },
        { name: "Shoot Notification", path: "/notification/shoot" },
        { name: "Manage Event Notification", path: "/notification/manage" },
      ],
    },
    {
      name: "Analytics",
      icon: <FaChartBar />,
      subItems: [
        { name: "Sales Report", path: "/analytics/sales" },
        { name: "Vendor Report", path: "/analytics/vendor" },
        { name: "Analytics Dashboard", path: "/analytics/dashboard" },
      ],
    },
    {
      name: "Vendor Management",
      icon: <FaTruck />,
      subItems: [
        { name: "All Vendor", path: "/vendor/all" },
        { name: "Add Vendor", path: "/vendor/add" },
        { name: "Vendor Dashboard", path: "/vendor/dashboard" },
      ],
    },
    {
      name: "Vendor Support",
      icon: <FaLifeRing />,
      subItems: [
        { name: "New Ticket", path: "/vendor-support/new" },
        { name: "Open Ticket", path: "/vendor-support/open" },
        { name: "Closed Ticket", path: "/vendor-support/closed" },
      ],
    },
    {
      name: "User Support",
      icon: <FaLifeRing />,
      subItems: [
        { name: "New Ticket", path: "/user-support/new" },
        { name: "Open Ticket", path: "/user-support/open" },
        { name: "Closed Ticket", path: "/user-support/closed" },
      ],
    },
    {
      name: "Settings",
      icon: <FaCog />,
      subItems: [
        { name: "Profile", path: "/settings/profile" },
        { name: "Change Password", path: "/settings/password" },
        { name: "Manage Role", path: "/settings/role" },
        { name: "Logout", path: "/logout" },
      ],
    },
  ];

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button
        className="fixed top-4 left-3 z-50 md:hidden text-2xl text-[#111827] transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white text-[#6B7280] shadow-lg p-2 transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:w-60`}
      >
        <div className="flex items-center justify-center py-3 border-b border-gray-200">
          <h2 className="text-base font-semibold text-[#111827]">
            Admin Panel
          </h2>
        </div>

        <ul className="mt-3 text-sm flex flex-col space-y-[2px]">
          {menuItems.map((item) => {
            const isActive =
              activeItem === item.path ||
              (item.subItems &&
                item.subItems.some((sub) => sub.path === activeItem));

            return (
              <li key={item.name} className="flex flex-col">
                {!item.subItems ? (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors duration-200 
                      ${
                        isActive
                          ? "bg-[#F26422] text-white shadow-sm"
                          : "hover:bg-gray-100 text-[#111827]"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <>
                    {/* Parent with dropdown */}
                    <div
                      className={`flex items-center justify-between gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors duration-200 
                        ${
                          isActive
                            ? "bg-[#F26422] text-white shadow-sm"
                            : "hover:bg-gray-100 text-[#111827]"
                        }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      {openDropdowns[item.name] ? (
                        <FaChevronUp className="text-xs" />
                      ) : (
                        <FaChevronDown className="text-xs" />
                      )}
                    </div>

                    {/* Dropdown sub-items */}
                    {openDropdowns[item.name] && (
                      <ul className="ml-5 mt-1 flex flex-col space-y-1">
                        {item.subItems.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              to={sub.path}
                              className={`block px-2 py-1 rounded-md transition-colors duration-200 
                                ${
                                  activeItem === sub.path
                                    ? "bg-[#F26422] text-white"
                                    : "hover:bg-gray-100 text-[#6B7280]"
                                }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
