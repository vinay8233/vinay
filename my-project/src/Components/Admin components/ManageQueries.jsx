// // ManageQueries.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Loader2, Mail, Trash2, Reply, Send } from "lucide-react";

// export default function ManageQueries() {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [replyingTo, setReplyingTo] = useState(null); // contact _id being replied
//   const [replyMessage, setReplyMessage] = useState("");

//   // Fetch all contacts safely
//   const fetchContacts = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:5000/api/getAllContacts");
//       setContacts(Array.isArray(res.data) ? res.data : []);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to fetch contacts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   // Delete contact
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this contact?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/${id}/deleteContact`);
//       setContacts(contacts.filter((c) => c._id !== id));
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to delete contact");
//     }
//   };

//   // Send reply
//   const handleSendReply = async (contact) => {
//     if (!replyMessage.trim()) return alert("Reply cannot be empty");

//     try {
//       await axios.post("http://localhost:5000/api/replyContact", {
//         contactId: contact._id,
//         replyMessage,
//       });

//       alert("Reply sent successfully!");
//       setReplyingTo(null);
//       setReplyMessage("");
//       fetchContacts(); // refresh contacts
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to send reply");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Page Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//           <Mail className="text-blue-600" size={22} /> Manage Queries
//         </h1>
//         <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//           {contacts.length} total
//         </span>
//       </div>

//       {error && (
//         <p className="bg-red-100 text-red-600 px-4 py-2 rounded mb-4">{error}</p>
//       )}

//       {loading ? (
//         <div className="flex items-center justify-center py-20 text-gray-600">
//           <Loader2 className="animate-spin mr-2" size={20} />
//           Loading queries...
//         </div>
//       ) : contacts.length === 0 ? (
//         <p className="text-gray-600 bg-white p-6 rounded-lg shadow text-center">
//           No queries found.
//         </p>
//       ) : (
//         <div className="overflow-x-auto bg-white rounded-lg shadow">
//           <table className="min-w-full text-sm text-left">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
//                 <th className="px-4 py-3">Name</th>
//                 <th className="px-4 py-3">Email</th>
//                 <th className="px-4 py-3">Message</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contacts.map((contact) => (
//                 <tr key={contact._id} className="border-t hover:bg-gray-50 transition">
//                   <td className="px-4 py-3 font-medium text-gray-800">{contact.name}</td>
//                   <td className="px-4 py-3 text-blue-600">{contact.email}</td>
//                   <td className="px-4 py-3">{contact.message}</td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1 text-xs rounded-full ${
//                         contact.status === "resolved"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-yellow-100 text-yellow-700"
//                       }`}
//                     >
//                       {contact.status || "Pending"}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3 text-right space-x-2">
//                     {/* Reply Button */}
//                     {replyingTo === contact._id ? (
//                       <div className="flex gap-2 items-center">
//                         <input
//                           type="text"
//                           value={replyMessage}
//                           onChange={(e) => setReplyMessage(e.target.value)}
//                           placeholder="Type your reply..."
//                           className="border rounded px-2 py-1 text-sm w-60"
//                         />
//                         <button
//                           onClick={() => handleSendReply(contact)}
//                           className="bg-green-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-green-700"
//                         >
//                           <Send size={14} /> Send
//                         </button>
//                         <button
//                           onClick={() => setReplyingTo(null)}
//                           className="bg-gray-400 text-white px-2 py-1 rounded text-sm hover:bg-gray-500"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     ) : (
//                       <button
//                         onClick={() => setReplyingTo(contact._id)}
//                         className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
//                       >
//                         <Reply size={14} /> Reply
//                       </button>
//                     )}

//                     <button
//                       onClick={() => handleDelete(contact._id)}
//                       className="inline-flex items-center gap-1 text-red-600 hover:text-red-800 text-sm font-medium"
//                     >
//                       <Trash2 size={14} /> Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader2, Mail, Trash2, Reply } from "lucide-react";

export default function ManageQueries() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [replyBox, setReplyBox] = useState(null); // contactId for which reply box is open
  const [replyMessage, setReplyMessage] = useState("");

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/getAllContacts");
      setContacts(res.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/${id}/deleteContact`);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete contact");
    }
  };

  // Send reply
  const handleSendReply = async (contactId) => {
    if (!replyMessage.trim()) return alert("Reply message cannot be empty");

    try {
      await axios.post("http://localhost:5000/api/replyContact", {
        contactId,
        replyMessage
      });
      alert("Reply sent successfully");
      setReplyBox(null);
      setReplyMessage("");
      fetchContacts();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to send reply");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Mail className="text-blue-600" size={22} /> Manage Queries
        </h1>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          {contacts.length} total
        </span>
      </div>

      {error && (
        <p className="bg-red-100 text-red-600 px-4 py-2 rounded mb-4">{error}</p>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-20 text-gray-600">
          <Loader2 className="animate-spin mr-2" size={20} />
          Loading queries...
        </div>
      ) : contacts.length === 0 ? (
        <p className="text-gray-600 bg-white p-6 rounded-lg shadow text-center">
          No queries found.
        </p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-medium text-gray-800">{contact.name}</td>
                  <td className="px-4 py-3 text-blue-600">{contact.email}</td>
                  <td className="px-4 py-3">{contact.message}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        contact.status === "resolved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {contact.status || "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-y-1">
                    {/* Reply Button */}
                    {replyBox === contact._id ? (
                      <div className="flex flex-col space-y-2">
                        <textarea
                          className="border p-2 rounded w-full"
                          rows={2}
                          placeholder="Type your reply..."
                          value={replyMessage}
                          onChange={(e) => setReplyMessage(e.target.value)}
                        />
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => handleSendReply(contact._id)}
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Send
                          </button>
                          <button
                            onClick={() => {
                              setReplyBox(null);
                              setReplyMessage("");
                            }}
                            className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setReplyBox(contact._id)}
                          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                        >
                          <Reply size={14} /> Reply
                        </button>
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className="inline-flex items-center gap-1 text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
