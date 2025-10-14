import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 sm:left-64 right-0 h-[50px] flex items-center px-4 sm:px-6 lg:px-8 shadow-md z-50 bg-[#343d46]">
      {/* Title (or other header content like the search/vendor buttons) */}
      <h1 className="text-white text-sm sm:text-base md:text-lg font-semibold truncate">
        {/* Placeholder for header content */}
      </h1>
    </header>
  );
};

export default Header;
