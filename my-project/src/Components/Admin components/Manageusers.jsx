import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("❌ Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter((u) => u._id !== id));
      alert("✅ User deleted successfully");
    } catch (err) {
      console.error("❌ Error deleting user:", err);
      alert("❌ Failed to delete user");
    }
  };

  return (
    <div className="p-6 pt-16 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Manage Users</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : users.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Full Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Verified</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{idx + 1}</td>
                  <td className="p-3 font-medium">{user.fullName}</td>
                  <td className="p-3">{user.email || "—"}</td>
                  <td className="p-3">{user.mobile || "—"}</td>
                  <td className="p-3">
                    {user.isVerified ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-red-600 font-semibold">No</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-800 p-2 rounded"
                      title="Delete User"
                    >
                      <Trash2 className="w-5 h-5 inline-block" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No users found.</p>
      )}
    </div>
  );
}
