import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Boxes,
  ShoppingCart,
  Tags,
  TicketPercent,
  Bell,
  BarChart3,
  Store,
  Headphones,
  Users,
  Settings,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  User,
  KeyRound,
  UserCog,
  LogOut,
} from "lucide-react";

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
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={16} />,
      path: "/dashboard",
    },
    {
      name: "Product Management",
      icon: <Package size={16} />,
      subItems: [
        { name: "Product", path: "/products/", hasDot: true },
        { name: "All Product", path: "/products/all" },
        { name: "Trending Product", path: "/products/trending" },
      ],
    },
    {
      name: "Inventory",
      icon: <Boxes size={16} />,
      subItems: [
        { name: "All Product", path: "/inventory/all" },
        { name: "Out of Stock", path: "/inventory/out-of-stock" },
        { name: "Limited Product", path: "/inventory/limited" },
      ],
    },
    {
      name: "Order Management",
      icon: <ShoppingCart size={16} />,
      subItems: [
        { name: "All Order", path: "/orders/all" },
        { name: "Pending Order", path: "/orders/pending" },
        { name: "Delivered", path: "/orders/delivered" },
        { name: "Cancel", path: "/orders/cancel" },
      ],
    },
    {
      name: "Category Management",
      icon: <Tags size={16} />,
      subItems: [
        { name: "All Category", path: "/category/all" },
        { name: "Create Category", path: "/category/create" },
        { name: "Create Sub Category", path: "/category/create-sub" },
      ],
    },
    {
      name: "Coupons & Offer",
      icon: <TicketPercent size={16} />,
      subItems: [
        { name: "All Coupons", path: "/coupons/all" },
        { name: "Create Coupons", path: "/coupons/create" },
        { name: "Prepaid Offer (%)", path: "/coupons/prepaid" },
      ],
    },
    {
      name: "Notification",
      icon: <Bell size={16} />,
      subItems: [
        { name: "Notification", path: "/notification" },
        { name: "Shoot Notification", path: "/notification/shoot" },
        { name: "Manage Event Notification", path: "/notification/manage" },
      ],
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={16} />,
      subItems: [
        { name: "Sales Report", path: "/analytics/sales" },
        { name: "Vendor Report", path: "/analytics/vendor" },
        { name: "Analytics Dashboard", path: "/analytics/dashboard" },
      ],
    },
    {
      name: "Vendor Management",
      icon: <Store size={16} />,
      subItems: [
        { name: "All Vendor", path: "/vendor/all" },
        { name: "Add Vendor", path: "/vendor/add" },
        { name: "Vendor Dashboard", path: "/vendor/dashboard" },
      ],
    },
    {
      name: "Vendor Support",
      icon: <Headphones size={16} />,
      subItems: [
        { name: "New Ticket", path: "/vendor-support/new" },
        { name: "Open Ticket", path: "/vendor-support/open" },
        { name: "Closed Ticket", path: "/vendor-support/closed" },
      ],
    },
    {
      name: "User Support",
      icon: <Users size={16} />,
      subItems: [
        { name: "New Ticket", path: "/user-support/new" },
        { name: "Open Ticket", path: "/user-support/open" },
        { name: "Closed Ticket", path: "/user-support/closed" },
      ],
    },
    {
      name: "Settings",
      icon: <Settings size={16} />,
      subItems: [
        {
          name: "Profile",
          path: "/settings/profile",
          icon: <User size={14} />,
        },
        {
          name: "Change Password",
          path: "/settings/password",
          icon: <KeyRound size={14} />,
        },
        {
          name: "Manage Role",
          path: "/settings/role",
          icon: <UserCog size={14} />,
        },
        { name: "Logout", path: "/logout", icon: <LogOut size={14} /> },
      ],
    },
  ];

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button
        className="fixed top-4 left-3 z-50 md:hidden text-2xl text-black transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white text-black shadow-lg p-2 transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:w-60`}
      >
        {/* Header */}
        <div className="flex items-center justify-center py-3 border-b border-gray-200">
          <h2 className="text-sm font-bold text-black uppercase tracking-wide">
            Admin Panel
          </h2>
        </div>

        {/* Menu Title */}
        <p className="mt-3 mb-2 text-[11px] font-semibold tracking-wide text-gray-500 px-2">
          MAIN MENU
        </p>

        {/* Sidebar Menu */}
        <ul className="text-[13px] flex flex-col space-y-[2px] h-[calc(100vh-100px)] overflow-y-auto pr-2 custom-scrollbar">
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
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md font-semibold transition-colors duration-200 
                    ${
                      isActive
                        ? "bg-[#F26422] text-white shadow-sm"
                        : "hover:bg-gray-100 text-black"
                    }`}
                    onClick={() => {
                      if (window.innerWidth < 768) setIsOpen(false);
                    }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <>
                    {/* Main Dropdown Item */}
                    <div
                      className={`flex items-center justify-between gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors duration-200 font-bold
                      ${
                        isActive ? "text-black" : "hover:bg-gray-100 text-black"
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      {openDropdowns[item.name] ? (
                        <ChevronUp size={12} />
                      ) : (
                        <ChevronDown size={12} />
                      )}
                    </div>

                    {/* Submenu Items */}
                    {openDropdowns[item.name] && (
                      <ul className="ml-5 mt-1 flex flex-col border-l pl-2">
                        {item.subItems.map((sub) => {
                          const subActive = activeItem === sub.path;
                          return (
                            <li key={sub.name} className="relative">
                              <Link
                                to={sub.path}
                                className={`block px-2 py-1 rounded-md transition-colors duration-200 ${
                                  subActive
                                    ? "text-[#F26422] font-medium before:content-[''] before:absolute before:left-[-8px] before:top-0 before:h-full before:w-[2px] before:bg-[#F26422]"
                                    : "text-black hover:text-[#F26422] font-normal"
                                }`}
                                onClick={() => {
                                  if (window.innerWidth < 768) setIsOpen(false);
                                }}
                              >
                                <div className="flex items-center gap-1">
                                  {sub.icon && sub.icon}
                                  <span>{sub.name}</span>
                                  {sub.hasDot && (
                                    <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                  )}
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Mobile Overlay */}
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
