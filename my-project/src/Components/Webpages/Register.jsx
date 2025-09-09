// pages/Register.jsx
import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });
  const [step, setStep] = useState(1); // 1=register, 2=OTP
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Step 1: Register user and request OTP
  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("http://localhost:5000/api/register", form);
      if (res.data.success === false) {
        setMessage(res.data.message || "Registration failed");
      } else {
        setMessage("OTP sent to your email/mobile.");
        setStep(2); // move to OTP step
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("http://localhost:5000/api/verify-otp", {
        email: form.email,
        otp
      });
      setMessage("Account verified! You can now login.");
      setStep(3);
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="flex justify-center mt-14 items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Register</h2>
            <form onSubmit={handleRegister} className="space-y-3">
              <input
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                name="mobile"
                placeholder="Mobile (optional)"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded">
                Register
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Verify OTP</h2>
            <form onSubmit={handleVerifyOtp} className="space-y-3">
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full border p-2 rounded"
                required
              />
              <button className="w-full bg-green-600 text-white py-2 rounded">
                Verify OTP
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Registration Complete!
            </h2>
            <p>You can now login using your credentials.</p>
          </div>
        )}

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
}

export default Register;
