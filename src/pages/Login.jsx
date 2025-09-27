import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image 1.png";

import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaExclamationCircle,
} from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      navigate("/dashboard"); // go to dashboard
    } else {
      alert("Please enter credentials");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (resetEmail) {
      alert(`Password reset link sent to ${resetEmail}`);
      setForgotPassword(false);
      setResetEmail("");
    } else {
      alert("Please enter your registered email");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword) {
      alert("Password reset successfully! Please login.");
      setNewPassword("");
      setForgotPassword(false);
    } else {
      alert("Please enter a new password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <img src={logo} alt="RushBaskets Logo" className="h-24 mb-8" />

        {!forgotPassword ? (
          <form onSubmit={handleLogin} className="w-full bg-white text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Admin Login
            </h2>
            <div className="h-[2px] bg-orange-500 w-28 mb-4"></div>

            <div className="flex items-start gap-2 text-xs text-gray-600 mb-6 font-bold">
              <FaExclamationCircle className="text-orange-500 mt-0.5 shrink-0" />
              <p>
                This panel is strictly for authorized administrators.
                Unauthorized access is prohibited.
              </p>
            </div>

            <div className="flex items-center border border-orange-400 rounded px-3 py-2 mb-4">
              <FaUser className="text-black mr-2" />
              <input
                type="text"
                name="username"
                placeholder="Enter User Name"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <div className="flex items-center border border-orange-400 rounded px-3 py-2 mb-2">
              <FaLock className="text-black mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-black focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="text-right mb-6">
              <button
                type="button"
                className="text-orange-500 text-sm hover:underline"
                onClick={() => setForgotPassword(true)}
              >
                Forgot Password?
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded transition"
              >
                Access Dashboard →
              </button>
            </div>
          </form>
        ) : (
          // Forgot / Reset Password Form
          <div className="w-full bg-white text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Reset Password
            </h2>
            <div className="h-[2px] bg-orange-500 w-28 mb-4"></div>

            {!newPassword ? (
              <form onSubmit={handleForgotPassword}>
                <p className="text-sm text-gray-600 mb-4">
                  Enter your registered email to receive a password reset link.
                </p>
                <div className="flex items-center border border-orange-400 rounded px-3 py-2 mb-4">
                  <FaUser className="text-black mr-2" />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    className="text-gray-500 text-sm hover:underline"
                    onClick={() => setForgotPassword(false)}
                  >
                    Back to Login
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded transition"
                  >
                    Send link
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleResetPassword}>
                <p className="text-sm text-gray-600 mb-4">
                  Enter your new password below.
                </p>
                <div className="flex items-center border border-orange-400 rounded px-3 py-2 mb-4">
                  <FaLock className="text-black mr-2" />
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="text-black focus:outline-none"
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    className="text-gray-500 text-sm hover:underline"
                    onClick={() => setForgotPassword(false)}
                  >
                    Back to Login
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded transition"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
