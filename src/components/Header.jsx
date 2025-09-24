import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center px-4 sm:px-6 shadow-md z-50 bg-[#374151]">
      {/* Title */}
      <h1 className="text-white text-sm sm:text-base md:text-lg font-semibold truncate"></h1>
    </header>
  );
};

export default Header;
