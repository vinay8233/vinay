// import { useParams, useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ApplicationForm() {
//   const { planId } = useParams(); // from /apply/:planId
//   const [searchParams] = useSearchParams(); // get ?sub=fresh
//   const subName = searchParams.get("sub");

//   const [plan, setPlan] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     passportNo: "",
//   });
//   const [documents, setDocuments] = useState([]);

//   // ✅ selected sub-category based on query param
//   const selectedSub = plan?.subCategories?.find((s) => s.name === subName);

//   const fetchPlan = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/plans/${planId}`);
//       setPlan(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching plan:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch plan details
//   useEffect(() => {
//     fetchPlan();
//   }, [planId]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setDocuments(Array.from(e.target.files));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!plan || !plan.subCategories) {
//       return alert("Plan data not loaded yet!");
//     }
//     if (!selectedSub) {
//       return alert("Invalid sub-category selected!");
//     }

//     try {
//       const payload = new FormData();
//       payload.append("planId", planId);
//       payload.append("subCategory", subName);
//       payload.append("fullName", formData.fullName);
//       payload.append("email", formData.email);
//       payload.append("phone", formData.phone);
//       payload.append("passportNo", formData.passportNo || "");
//       payload.append("category", plan.category);
//       payload.append("citizenship", plan.citizenship);
//       if (plan.category === "visa")
//         payload.append("visaCountry", plan.visaCountry || "");
//       payload.append("paymentAmount", selectedSub.totalFees);

//       documents.forEach((doc) => payload.append("documents", doc));

//       await axios.post("http://localhost:5000/api/apply", payload, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("✅ Application submitted successfully!");
//       setFormData({ fullName: "", email: "", phone: "", passportNo: "" });
//       setDocuments([]);
//     } catch (err) {
//       console.error("❌ Error submitting application:", err.response || err);
//       alert("❌ Failed to submit application");
//     }
//   };

//   return (
//     <div className="p-6 pt-16 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold text-blue-900 mb-4">
//         Application Form
//       </h2>

//       {loading ? (
//         <p>Loading plan details...</p>
//       ) : plan ? (
//         <div className="mb-6 bg-white p-4 shadow rounded-lg">
//           <h3 className="text-lg font-semibold">
//             Selected Plan: {plan.category} – {subName}
//           </h3>
//           <p>Citizenship: {plan.citizenship}</p>
//           {plan.category === "visa" && <p>Visa Country: {plan.visaCountry}</p>}

//           {selectedSub ? (
//             <p>
//               Payment Amount:{" "}
//               <span className="font-bold text-blue-700">
//                 ₹{selectedSub.totalFees}
//               </span>
//             </p>
//           ) : (
//             <p className="text-red-600">Invalid sub-category selected!</p>
//           )}
//         </div>
//       ) : (
//         <p className="text-red-600">❌ Plan not found</p>
//       )}

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4 bg-white p-6 shadow rounded-lg"
//       >
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="passportNo"
//           placeholder="Passport Number"
//           value={formData.passportNo}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <label className="block">
//           Upload Documents (optional):
//           <input
//             type="file"
//             multiple
//             onChange={handleFileChange}
//             className="mt-1"
//           />
//         </label>

//         <button
//           type="submit"
//           disabled={!plan}
//           className={`bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 ${
//             !plan ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// }




import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FileText, DollarSign, User, Phone, Mail, FileUp } from "lucide-react";

export default function ApplicationForm() {
  const { planId } = useParams();
  const [searchParams] = useSearchParams();
  const subName = searchParams.get("sub");
  const navigate = useNavigate();

  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passportNo: "",
  });
  const [documents, setDocuments] = useState([]);

  const selectedSub = plan?.subCategories?.find((s) => s.name === subName);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/plans/${planId}`);
        setPlan(res.data);
      } catch (err) {
        console.error("❌ Error fetching plan:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlan();
  }, [planId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setDocuments(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!plan || !selectedSub) {
      return alert("Plan data not loaded or invalid!");
    }

    try {
      const payload = new FormData();
      payload.append("planId", planId);
      payload.append("subCategory", subName);
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("passportNo", formData.passportNo || "");
      payload.append("category", plan.category);
      payload.append("citizenship", plan.citizenship);
      if (plan.category === "visa") payload.append("visaCountry", plan.visaCountry || "");
      payload.append("paymentAmount", selectedSub.totalFees);
      documents.forEach((doc) => payload.append("documents", doc));

      await axios.post("http://localhost:5000/api/apply", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Application submitted successfully!");
      setFormData({ fullName: "", email: "", phone: "", passportNo: "" });
      setDocuments([]);
      navigate("/");
    } catch (err) {
      console.error("❌ Error submitting application:", err.response || err);
      alert("❌ Failed to submit application");
    }
  };

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
        Application Form
      </h2>

      {/* Plan Details */}
      {loading ? (
        <p className="text-center">Loading plan details...</p>
      ) : plan ? (
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl shadow-lg p-6 mb-10">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <FileText className="w-6 h-6" /> {plan.category} – {subName}
          </h3>
          <p className="mt-2">Citizenship: {plan.citizenship}</p>
          {plan.category === "visa" && (
            <p>Visa Country: {plan.visaCountry}</p>
          )}
          {selectedSub ? (
            <p className="mt-3 flex items-center gap-2 text-lg font-semibold">
              <DollarSign className="w-5 h-5 text-green-400" />
              Payment Amount: ₹{selectedSub.totalFees}
            </p>
          ) : (
            <p className="text-red-300">Invalid sub-category selected!</p>
          )}
        </div>
      ) : (
        <p className="text-red-600 text-center">❌ Plan not found</p>
      )}

      {/* Application Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Full Name
          </label>
          <div className="flex items-center border rounded-lg px-3">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 outline-none"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Email
          </label>
          <div className="flex items-center border rounded-lg px-3">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 outline-none"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Phone Number
          </label>
          <div className="flex items-center border rounded-lg px-3">
            <Phone className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 outline-none"
              required
            />
          </div>
        </div>

        {/* Passport Number */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Passport Number (if applicable)
          </label>
          <input
            type="text"
            name="passportNo"
            value={formData.passportNo}
            onChange={handleChange}
            placeholder="Enter passport number"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Upload Documents (optional)
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FileUp className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!plan}
          className={`w-full py-3 rounded-full font-semibold shadow-md transition ${
            !plan
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-900 hover:bg-blue-700 text-white"
          }`}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
