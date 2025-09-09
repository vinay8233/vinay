// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function ManageApplications() {
//   const [applications, setApplications] = useState([]);

//   // Fetch all applications
//   const fetchApplications = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/getapplications");
//       setApplications(res.data); // your controller returns {data: [...]}? adjust if needed
//     } catch (err) {
//       console.error("Error fetching applications", err);
//     }
//   };

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   // Delete application
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this application?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/deleteapplications/${id}`);
//       setApplications(applications.filter((app) => app._id !== id));
//     } catch (err) {
//       console.error("Error deleting application", err);
//     }
//   };

//   return (
//     <div className="ml-0 pt-10 p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Manage Applications</h1>

//       <table className="w-full border border-gray-300 text-left">
//         <thead className="bg-blue-700 text-white">
//           <tr>
//             <th className="p-3">First Name</th>
//             <th className="p-3">Last Name</th>
//             <th className="p-3">Email</th>
//             <th className="p-3">Phone</th>
//             <th className="p-3">Category</th>
//             <th className="p-3">Sub Category</th>
//             <th className="p-3">Documents</th>
//             <th className="p-3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.length > 0 ? (
//             applications.map((app) => (
//               <tr key={app._id} className="border-t border-gray-300">
//                 <td className="p-3">{app.firstName}</td>
//                 <td className="p-3">{app.lastName}</td>
//                 <td className="p-3">{app.email}</td>
//                 <td className="p-3">{app.phone}</td>
//                 <td className="p-3">{app.consularCategory}</td>
//                 <td className="p-3">{app.subCategory}</td>
//                 <td className="p-3">
//                   {app.documents?.map((doc, i) => (
//                     <a
//                       key={i}
//                       href={`http://localhost:5000/${doc}`}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-blue-600 underline block"
//                     >
//                       Document {i + 1}
//                     </a>
//                   ))}
//                 </td>
//                 <td className="p-3 space-x-2">
//                   <button className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500 transition">
//                     View
//                   </button>
//                   <button
//                     onClick={() => handleDelete(app._id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" className="text-center p-4 text-gray-500">
//                 No applications found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ correct import

export default function ManageApplications() {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getapplications");
      setApplications(res.data);
    } catch (err) {
      console.error("Error fetching applications", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/deleteapplications/${id}`);
      setApplications(applications.filter((app) => app._id !== id));
    } catch (err) {
      console.error("Error deleting application", err);
    }
  };

  const isImage = (file) => /\.(jpg|jpeg|png)$/i.test(file);

  // ✅ Single application PDF
  const handleDownloadPDF = (app) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Application Details", 14, 15);

    const tableData = [
      ["Full Name", app.fullName],
      ["Email", app.email],
      ["Phone", app.phone],
      ["Passport No", app.passportNo || "N/A"],
      ["Category", app.category],
      ["Citizenship", app.citizenship],
      ["Visa Country", app.visaCountry || "N/A"],
      ["Sub Category", app.subCategory],
      ["Payment Amount", `₹${app.paymentAmount}`],
      ["Applied On", new Date(app.createdAt).toLocaleString()],
    ];

    autoTable(doc, {
      startY: 25,
      head: [["Field", "Value"]],
      body: tableData,
      theme: "grid",
      headStyles: { fillColor: [25, 55, 109] },
    });

    if (app.documents?.length > 0) {
      let startY = doc.lastAutoTable.finalY + 10;
      doc.text("Documents:", 14, startY);
      app.documents.forEach((docFile, index) => {
        doc.text(`${index + 1}. ${docFile}`, 20, startY + 10 + index * 8);
      });
    }

    doc.save(`${app.fullName}_Application.pdf`);
  };

  // ✅ All applications PDF
  const handleDownloadAllPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("All Applications Report", 14, 15);

    const tableData = applications.map((app) => [
      app.fullName,
      app.email,
      app.phone,
      app.category,
      app.subCategory,
      `₹${app.paymentAmount}`,
      new Date(app.createdAt).toLocaleDateString(),
    ]);

    autoTable(doc, {
      startY: 25,
      head: [["Full Name", "Email", "Phone", "Category", "Sub Category", "Payment", "Applied On"]],
      body: tableData,
      theme: "grid",
      headStyles: { fillColor: [25, 55, 109] },
      styles: { fontSize: 10 },
    });

    doc.save("All_Applications.pdf");
  };

  return (
    <div className="ml-0 pt-10 p-0 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">Manage Applications</h1>
        {applications.length > 0 && (
          <button
            onClick={handleDownloadAllPDF}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Download All as PDF
          </button>
        )}
      </div>

      {applications.length > 0 ? (
        <div className="overflow-x-auto bg-white shadow-2xl rounded-lg">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-3 border">Full Name</th>
                <th className="px-4 py-3 border">Email</th>
                <th className="px-4 py-3 border">Phone</th>
                <th className="px-4 py-3 border">Category</th>
                <th className="px-4 py-3 border">Sub Category</th>
                <th className="px-4 py-3 border">Payment</th>
                <th className="px-4 py-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, idx) => (
                <tr key={app._id} className={`hover:bg-blue-50 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="px-4 py-2 border font-medium text-gray-800">{app.fullName}</td>
                  <td className="px-4 py-2 border">{app.email}</td>
                  <td className="px-4 py-2 border">{app.phone}</td>
                  <td className="px-4 py-2 border">{app.category}</td>
                  <td className="px-4 py-2 border">{app.subCategory}</td>
                  <td className="px-4 py-2 border font-semibold text-green-700">₹{app.paymentAmount}</td>
                  <td className="px-4 py-2 border flex space-x-2">
                    <button
                      onClick={() => setSelectedApp(app)}
                      className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500 transition"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(app._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleDownloadPDF(app)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">No applications found</p>
      )}

      {/* Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl w-full relative">
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Application Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><strong>Full Name:</strong> {selectedApp.fullName}</p>
              <p><strong>Email:</strong> {selectedApp.email}</p>
              <p><strong>Phone:</strong> {selectedApp.phone}</p>
              <p><strong>Passport No:</strong> {selectedApp.passportNo}</p>
              <p><strong>Category:</strong> {selectedApp.category}</p>
              <p><strong>Citizenship:</strong> {selectedApp.citizenship}</p>
              {selectedApp.visaCountry && <p><strong>Visa Country:</strong> {selectedApp.visaCountry}</p>}
              <p><strong>Sub Category:</strong> {selectedApp.subCategory}</p>
              <p><strong>Payment Amount:</strong> ₹{selectedApp.paymentAmount}</p>
              <p><strong>Applied On:</strong> {new Date(selectedApp.createdAt).toLocaleString()}</p>
            </div>

            {/* Documents */}
            <h3 className="mt-6 font-semibold text-gray-700">Documents:</h3>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {selectedApp.documents?.map((doc, i) => (
                <div key={i} className="border rounded-lg p-2 bg-gray-50 flex flex-col items-center">
                  {isImage(doc) ? (
                    <img src={`http://localhost:5000/${doc}`} alt={`Document ${i + 1}`} className="w-24 h-24 object-cover rounded mb-2" />
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-200 text-sm rounded mb-2">PDF</div>
                  )}
                  <div className="flex space-x-2">
                    <a href={`http://localhost:5000/${doc}`} target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition">View</a>
                    <a href={`http://localhost:5000/${doc}`} download className="px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition">Download</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-right">
              <button onClick={() => handleDownloadPDF(selectedApp)} className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">Download as PDF</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
