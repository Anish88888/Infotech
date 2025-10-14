import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AllProduct from "./pages/AllProduct";
import SingleProduct from "./pages/SingleProduct";
import AddProduct from "./components/AddProduct";
import AllVendor from "./pages/AllVendor";
import VendorDetails from "./pages/VendorDetails";
import CreateCategory from "./pages/CreateCategory";
import CreateSubCategory from "./pages/CreateSubCategory";
import AllOrder from "./pages/AllOrder";
import SingleOrder from "./pages/SingleOrder";
import Login from "./pages/Login";
import NewOrderPopup from "./components/NewOrderPopup";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/all" element={<AllProduct />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/vendor/all" element={<AllVendor />} />
        <Route path="/vendor/:id" element={<VendorDetails />} />
        <Route path="/category/create" element={<CreateCategory />} />
        <Route path="/category/create-sub" element={<CreateSubCategory />} />
        <Route path="/orders/all" element={<AllOrder />} />
        <Route path="/order/:id" element={<SingleOrder />} />
      </Routes>
      <NewOrderPopup visible={showPopup} onClose={() => setShowPopup(false)} />
    </Router>
  );
}

export default App;
