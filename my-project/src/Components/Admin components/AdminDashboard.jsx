import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import {
  UsersIcon,
  ClipboardDocumentIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [plans, setPlans] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((res) => setUsers(res.data));
    axios.get("http://localhost:5000/api/getapplications").then((res) => setApplications(res.data));
    axios.get("http://localhost:5000/api/plans").then((res) => setPlans(res.data.data));
    axios.get("http://localhost:5000/api/blogs").then((res) => setBlogs(res.data.blogs));
  }, []);

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Applications",
        data: [12, 5, 60, 7, 25, 18],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Blog Views",
        data: [10, 8, 45, 12, 22, 15],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      

      <main className="p-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="p-6 rounded-xl shadow bg-gradient-to-r from-green-400 to-green-600 text-white hover:scale-105 transform transition">
            <div className="flex items-center space-x-4">
              <UsersIcon className="w-10 h-10" />
              <div>
                <p className="text-sm opacity-80">Total Users</p>
                <p className="text-2xl font-bold">{users?.length || 0}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:scale-105 transform transition">
            <div className="flex items-center space-x-4">
              <ClipboardDocumentIcon className="w-10 h-10" />
              <div>
                <p className="text-sm opacity-80">Applications</p>
                <p className="text-2xl font-bold">{applications?.length || 0}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:scale-105 transform transition">
            <div className="flex items-center space-x-4">
              <ChartBarIcon className="w-10 h-10" />
              <div>
                <p className="text-sm opacity-80">Plans</p>
                <p className="text-2xl font-bold">{plans?.length || 0}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow bg-gradient-to-r from-pink-400 to-pink-600 text-white hover:scale-105 transform transition">
            <div className="flex items-center space-x-4">
              <DocumentTextIcon className="w-10 h-10" />
              <div>
                <p className="text-sm opacity-80">Blogs</p>
                <p className="text-2xl font-bold">{blogs?.length || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="font-bold mb-4 text-lg">📊 Applications & Blog Views</h2>
          <Bar data={salesData} />
        </div>

        {/* Applications Table */}
        <div className="bg-white p-6 rounded-xl shadow mb-6 overflow-x-auto">
          <h2 className="font-bold mb-4 text-lg">📝 Recent Applications</h2>
          <table className="w-full border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Plan</th>
              </tr>
            </thead>
            <tbody>
              {(applications || []).slice(0, 5).map((app, idx) => (
                <tr
                  key={app._id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50`}
                >
                  <td className="p-3 border">{app.fullName}</td>
                  <td className="p-3 border">{app.email}</td>
                  <td className="p-3 border">{app.phone}</td>
                  <td className="p-3 border">{app.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Blogs Table */}
        <div className="bg-white p-6 rounded-xl shadow mb-6 overflow-x-auto">
          <h2 className="font-bold mb-4 text-lg">📰 Recent Blogs</h2>
          <table className="w-full border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Views</th>
              </tr>
            </thead>
            <tbody>
              {(blogs || []).slice(0, 5).map((blog, idx) => (
                <tr
                  key={blog._id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50`}
                >
                  <td className="p-3 border">{blog.title}</td>
                  <td className="p-3 border">{blog.category}</td>
                  <td className="p-3 border">{blog.views || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
