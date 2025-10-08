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
// import UserManagement from "./pages/UserManagement.jsx";
import Login from "./pages/Login";

function App() {
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

        {/* <Route path="/users" element={<UserManagement />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
