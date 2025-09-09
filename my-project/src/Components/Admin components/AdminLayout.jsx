import React from "react";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex-shrink-0 h-screen sticky top-0 shadow-lg">
        <div className="flex flex-col h-full">
          <div className="px-6 py-4 text-2xl font-bold border-b border-blue-800">
            Admin Panel
          </div>
          <Sidebar />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md sticky top-0 z-30">
          <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
            <AdminNavbar />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1   bg-gray-50">
          <div className="bg-white rounded-lg shadow-sm  border border-gray-200">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
