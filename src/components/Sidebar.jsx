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
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
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

  useEffect(() => {
    const openItem = menuItems.find(
      (item) =>
        item.subItems &&
        item.subItems.some((sub) => sub.path === location.pathname)
    );
    if (openItem) setOpenDropdown(openItem.name);
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="fixed top-4 left-3 z-50 md:hidden text-2xl text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white text-black shadow-lg flex flex-col p-2 transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex-1 overflow-y-auto mt-3 pr-2 custom-scrollbar">
          <ul className="text-[13px] flex flex-col space-y-[2px]">
            {menuItems.map((item, index) => {
              const isActive =
                activeItem === item.path ||
                (item.subItems &&
                  item.subItems.some((sub) => sub.path === activeItem));
              const isDropdownOpen = openDropdown === item.name;

              return (
                <React.Fragment key={item.name}>
                  {/* Dashboard on top */}
                  {index === 0 && (
                    <>
                      <li className="flex flex-col mt-12 md:mt-3">
                        <Link
                          to={item.path}
                          className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-all duration-200 bg-gray-200 text-black"
                          onClick={() =>
                            window.innerWidth < 768 && setIsOpen(false)
                          }
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      </li>

                      {/* MAIN MENU label */}
                      <p className="mt-4 mb-2 text-[11px] font-semibold tracking-wide text-gray-500 px-2">
                        MAIN MENU
                      </p>
                    </>
                  )}

                  {/* Remaining menu items */}
                  {index !== 0 && (
                    <li className="flex flex-col">
                      {!item.subItems ? (
                        <Link
                          to={item.path}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-md font-semibold transition-all duration-200 
                            ${
                              isActive
                                ? "bg-[#F26422] text-white shadow-sm"
                                : "hover:bg-gray-100 text-black"
                            }`}
                          onClick={() =>
                            window.innerWidth < 768 && setIsOpen(false)
                          }
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <>
                          {/* Dropdown Header */}
                          <div
                            className={`flex items-center justify-between gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors duration-200 font-semibold
                              ${
                                isActive
                                  ? "text-[#F26422]"
                                  : "text-black hover:bg-gray-100"
                              }`}
                            onClick={() => toggleDropdown(item.name)}
                          >
                            <div className="flex items-center gap-2">
                              {item.icon}
                              <span>{item.name}</span>
                            </div>
                            {isDropdownOpen ? (
                              <ChevronUp size={12} />
                            ) : (
                              <ChevronDown size={12} />
                            )}
                          </div>

                          {/* Submenu */}
                          <ul
                            className={`ml-4 border-l pl-3 mt-1 overflow-hidden transition-all duration-300 ease-in-out
                              ${
                                isDropdownOpen
                                  ? "max-h-64 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                          >
                            {item.subItems.map((sub) => {
                              const subActive = activeItem === sub.path;
                              return (
                                <li key={sub.name} className="relative">
                                  <Link
                                    to={sub.path}
                                    className={`block px-2 py-1 rounded-md transition-colors duration-200
                                      ${
                                        subActive
                                          ? "text-[#F26422] font-semibold before:content-[''] before:absolute before:left-[-8px] before:top-0 before:h-full before:w-[2px] before:bg-[#F26422]"
                                          : "text-black hover:text-[#F26422]"
                                      }`}
                                    onClick={() =>
                                      window.innerWidth < 768 &&
                                      setIsOpen(false)
                                    }
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
                        </>
                      )}
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
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
