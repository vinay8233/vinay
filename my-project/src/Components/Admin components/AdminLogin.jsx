// // src/pages/AdminLogin.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function AdminLogin() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // ✅ If already logged in, redirect to admin dashboard
//  useEffect(() => {
//   const token = localStorage.getItem("adminToken");
//   if (token) {
//     navigate("/admin/login"); // Redirect to admin dashboard
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []); // ✅ empty dependency array → runs once


//   const handleLogin = (e) => {
//     e.preventDefault();

//     // ✅ Replace with API call later
//     if (email === "vinaypratap9660@gmail.com" && password === "123456") {
//       localStorage.setItem("adminToken", "static-token");
//       navigate("/admin/");
//     } else {
//       setError("❌ Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-white to-blue-300">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="backdrop-blur-lg bg-white/70 p-10 rounded-2xl shadow-2xl w-full max-w-md text-center"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="text-3xl font-extrabold text-blue-900 mb-8 tracking-wide"
//         >
//           Admin Login
//         </motion.h2>

//         {error && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-500 mb-4 font-medium"
//           >
//             {error}
//           </motion.p>
//         )}

//         <form onSubmit={handleLogin} className="space-y-6">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-left"
//           >
//             <label className="block text-gray-700 mb-2 font-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
//               required
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-left"
//           >
//             <label className="block text-gray-700 mb-2 font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
//               required
//             />
//           </motion.div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
//           >
//             Login
//           </motion.button>
//         </form>

//         <motion.a
//           whileHover={{ scale: 1.05 }}
//           href="#"
//           className="text-blue-900 text-sm mt-4 inline-block hover:underline"
//         >
//           Forgot Password?
//         </motion.a>
//       </motion.div>
//     </div>
//   );
// }


// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Replace with API call later
    if (email === "vinaypratap9660@gmail.com" && password === "123456") {
      localStorage.setItem("adminToken", "static-token");
      navigate("/admin/"); // ✅ redirect after submit
    } else {
      setError("❌ Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-white to-blue-300">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/70 p-10 rounded-2xl shadow-2xl w-full max-w-md text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-extrabold text-blue-900 mb-8 tracking-wide"
        >
          Admin Login
        </motion.h2>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 mb-4 font-medium"
          >
            {error}
          </motion.p>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-left"
          >
            <label className="block text-gray-700 mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-left"
          >
            <label className="block text-gray-700 mb-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Login
          </motion.button>
        </form>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#"
          className="text-blue-900 text-sm mt-4 inline-block hover:underline"
        >
          Forgot Password?
        </motion.a>
      </motion.div>
    </div>
  );
}
