import { ArrowUp, Bell, User } from "lucide-react";

export default function Adminnavbar() {
  return (
    <nav className="fixed top-0 left-64 right-0 h-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 flex items-center justify-between px-6 text-white shadow-lg z-50">
      
      {/* Left: Admin Logo/Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-lg shadow-md">
          A
        </div>
        <span className="font-semibold text-lg tracking-wide">Admin Panel</span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded hover:bg-blue-700 transition">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
        </button>

        {/* Back to Top */}
        <button className="flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-500 transition shadow-md">
          <ArrowUp size={18} /> Back to Top
        </button>

        {/* User Profile */}
        <div className="relative group">
          <button className="flex items-center gap-2 bg-blue-700 px-3 py-2 rounded hover:bg-blue-600 transition shadow-sm">
            <User size={18} /> Admin
          </button>
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-40 bg-blue-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all invisible group-hover:visible">
            <ul className="flex flex-col text-white">
              <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
