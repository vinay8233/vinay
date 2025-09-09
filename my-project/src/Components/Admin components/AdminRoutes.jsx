import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AdminDashboard from "./AdminDashboard";
import ManageServices from "./ManageServices";
import ManageQueries from "./ManageQueries";
import AdminLogin from "./AdminLogin";

export default function AdminRoutes() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/services" element={<ManageServices />} />
        <Route path="/admin/queries" element={<ManageQueries />} />
      </Routes>
    </>
  );
}
