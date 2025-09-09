// import { useState } from "react";
// import { Clock, ShieldCheck, Phone, FileCheck } from "lucide-react";

// export default function PassportApply() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     country: "",
//     passportType: "",
//     serviceType: "",
//     document: null,
//   });

//   const serviceTypes = {
//     new: ["Fresh Passport", "Tatkal Passport", "Normal Passport"],
//     renewal: ["Reissue for Expired Passport", "Tatkal Renewal", "Change in Passport Details"],
//     lost: ["Lost Passport Replacement", "Stolen Passport"],
//     damaged: ["Damaged Passport Replacement"],
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//       ...(name === "passportType" && { serviceType: "" }),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Passport Form Submitted ✅", formData);
//     alert("Passport application submitted successfully!");
//   };

//   return (
//     <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
//       {/* Hero */}
//       <div className="bg-gradient-to-r from-[#0C3C66] to-[#092847] text-white py-16 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for Your Passport</h1>
//         <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
//           Hassle-free passport services including new, renewal, lost, and damaged passport applications.
//         </p>
//       </div>

//       {/* Highlights */}
//       <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
//         {[
//           { icon: <Clock className="w-10 h-10 text-[#F47C20]" />, title: "Quick Process", desc: "Fast approval with Tatkal options." },
//           { icon: <ShieldCheck className="w-10 h-10 text-[#F47C20]" />, title: "Safe & Secure", desc: "Your data and documents are fully protected." },
//           { icon: <FileCheck className="w-10 h-10 text-[#F47C20]" />, title: "Expert Handling", desc: "Handled by passport professionals." },
//           { icon: <Phone className="w-10 h-10 text-[#F47C20]" />, title: "Support 24/7", desc: "Get help anytime with our dedicated team." },
//         ].map((item, i) => (
//           <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
//             <div className="flex justify-center mb-4">{item.icon}</div>
//             <h3 className="text-lg font-semibold text-[#0C3C66] mb-2">{item.title}</h3>
//             <p className="text-gray-600 text-sm">{item.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Passport Form */}
//       <div className="max-w-3xl mx-auto px-6 py-12">
//         <div className="bg-white shadow-2xl rounded-3xl p-10">
//           <h2 className="text-3xl font-extrabold text-center text-[#0C3C66] mb-8">
//             Passport Application Form
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Inputs */}
//             {["firstName", "lastName", "phone", "email"].map((field) => (
//               <div key={field}>
//                 <label className="block text-sm font-medium text-gray-700">
//                   {field === "firstName"
//                     ? "First Name"
//                     : field === "lastName"
//                     ? "Last Name"
//                     : field === "phone"
//                     ? "Phone Number"
//                     : "Email Address"}
//                   {["firstName", "phone", "email"].includes(field) && (
//                     <span className="text-red-500">*</span>
//                   )}
//                 </label>
//                 <input
//                   type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
//                   name={field}
//                   required={["firstName", "phone", "email"].includes(field)}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
//                 />
//               </div>
//             ))}

//             {/* Country */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Country <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="country"
//                 required
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
//               >
//                 <option value="">-- Select Country --</option>
//                 <option value="india">India</option>
//                 <option value="uk">UK</option>
//               </select>
//             </div>

//             {/* Passport Type */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Passport Service Type:
//               </label>
//               <select
//                 name="passportType"
//                 value={formData.passportType}
//                 onChange={handleChange}
//                 className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
//               >
//                 <option value="">-- Select Passport Type --</option>
//                 <option value="new">New Passport</option>
//                 <option value="renewal">Passport Renewal</option>
//                 <option value="lost">Lost Passport</option>
//                 <option value="damaged">Damaged Passport</option>
//               </select>
//             </div>

//             {/* Service Type */}
//             {formData.passportType && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Specific Service:
//                 </label>
//                 <select
//                   name="serviceType"
//                   value={formData.serviceType}
//                   onChange={handleChange}
//                   className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
//                 >
//                   <option value="">-- Select Service --</option>
//                   {serviceTypes[formData.passportType].map((srv) => (
//                     <option key={srv} value={srv.toLowerCase().replace(/ /g, "-")}>
//                       {srv}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* Document Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Upload Supporting Document: <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="file"
//                 name="document"
//                 required
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 onChange={handleChange}
//                 className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
//               />
//             </div>

//             {/* Submit */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-[#F47C20] to-[#d8660f] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-[#d8660f] hover:to-[#b55a0b] transition-all duration-300"
//               >
//                 Submit Passport Application
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }





// export default function PassportApply() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50">
//       <h1 className="text-4xl md:text-5xl font-bold text-[#0C3C66]">
//         Apply for Your Passport
//       </h1>
//     </div>
//   );
// }





import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  FileText,
  CreditCard,
  IdCard, // ✅ Passport icon
  ChevronDown,
  Shield,
} from "lucide-react";

export default function PassportApply() {
  const [formData, setFormData] = useState({
    category: "oci",
    citizenship: "",
    visaCountry: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/plans?category=${formData.category}&citizenship=${formData.citizenship}&visaCountry=${formData.visaCountry}`
    );
  };

  return (
    <div className="bg-[#f5f9ff] max-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug mb-4 text-center md:text-left">
            Experience Seamless Travel <br />
            and Consulate Services with{" "}
            <span className="text-blue-800">Docudost</span>
          </h1>

          {/* Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 mb-6 flex-wrap justify-center md:justify-start border-b pb-2">
            {[
              { key: "oci", label: "OCI", icon: Globe },
              { key: "visa", label: "Visa", icon: FileText },
              { key: "passport", label: "Passport", icon: IdCard },
              
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFormData({ ...formData, category: cat.key })}
                className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium border-b-2 transition ${
                  formData.category === cat.key
                    ? "text-blue-900 border-blue-900"
                    : "text-gray-600 border-transparent hover:text-blue-700"
                }`}
              >
                <cat.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Applying For */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Applying For
                </label>
                <select
                  name="visaCountry"
                  value={formData.visaCountry}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-blue-500 bg-white text-sm sm:text-base"
                  required
                >
                  <option value="">Select</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="uae">UAE</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Citizenship */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Citizenship
                </label>
                <select
                  name="citizenship"
                  value={formData.citizenship}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-blue-500 bg-white text-sm sm:text-base"
                  required
                >
                  <option value="">Select</option>
                  <option value="indian">Indian</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto mt-4 bg-blue-900 text-white py-3 px-8 rounded-full font-semibold shadow hover:bg-blue-800 transition"
            >
              Apply Now
            </button>
          </form>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative flex justify-center mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/young-woman-holding-passport_23-2149419570.jpg"
              alt="Travel"
              className="w-48 sm:w-64 lg:w-72 object-cover"
            />
          </div>

          {/* Floating Badges */}
          <div className="absolute top-6 -left-4 sm:top-10 sm:-left-6 bg-white shadow-lg rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
            <Globe className="w-4 h-4 text-green-600" /> Best Accuracy
          </div>
          <div className="absolute bottom-6 -right-4 sm:bottom-10 sm:-right-6 bg-white shadow-lg rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
            <CreditCard className="w-4 h-4 text-green-600" /> Delivered On-Time
          </div>
        </div>
      </div>
    </div>
  );
}
