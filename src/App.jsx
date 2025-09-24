import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddVendor from "./pages/AddVendor";
import VendorDetails from "./pages/VendorDetails";
import UserManagement from "./pages/UserManagement.jsx";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendor/add" element={<AddVendor />} />
        <Route path="/vendor/:id" element={<VendorDetails />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
