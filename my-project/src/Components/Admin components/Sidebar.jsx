import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  Users,
  MessageCircle,
  Settings,
  LogOut,
  ClipboardList,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { section: "Main", items: [
      { name: "Dashboard", path: "/admin/", icon: <Home size={18} /> },
    ]},
    { section: "Management", items: [
      { name: "Manage Services", path: "/admin/services", icon: <FileText size={18} /> },
      { name: "Manage Queries", path: "/admin/queries", icon: <MessageCircle size={18} /> },
      { name: "Manage Users", path: "/admin/manage-users", icon: <Users size={18} /> },
      { name: "Manage Plans", path: "/admin/manage-plans", icon: <ClipboardList size={18} /> },
      { name: "Manage Blogs", path: "/admin/manage-blogs", icon: <FileText size={18} /> },
    ]},
    { section: "Settings", items: [
      { name: "Settings", path: "/admin/settings", icon: <Settings size={18} /> },
    ]}
  ];

  return (
    <aside className="w-64 bg-gray-900 text-gray-200 min-h-screen flex flex-col border-r border-gray-800 fixed">
      
      {/* Profile Section */}
      <div className="px-6 py-6 flex items-center gap-3 border-b border-gray-800">
        <img
          src="https://via.placeholder.com/40"
          alt="Admin"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-white">Admin User</p>
          <p className="text-xs text-gray-400">Administrator</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {links.map((group) => (
          <div key={group.section} className="mb-6">
            <h4 className="uppercase text-xs text-gray-400 font-semibold mb-3 px-2">
              {group.section}
            </h4>
            <ul className="space-y-1">
              {group.items.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-gray-800 text-white"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      {link.icon}
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-4 py-4 border-t border-gray-800">
        <Link
          to="/admin/login"
          className="flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-600 hover:text-white rounded-md transition-colors"
        >
          <LogOut size={18} /> Logout
        </Link>
      </div>
    </aside>
  );
}
