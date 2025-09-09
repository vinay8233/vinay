// import { useState } from "react";
// import { Clock, ShieldCheck, Phone, FileCheck } from "lucide-react";

// export default function VisaApply() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     country: "",
//     consularCategory: "",
//     subCategory: "",
//     document: null,
//   });

//   const subCategoriesMap = {
//     passport: ["New Passport", "Passport Renewal", "Lost Passport", "Damaged Passport"],
//     oci: ["New OCI", "OCI Renewal", "OCI Miscellaneous"],
//     renunciation: ["Renunciation Certificate", "Surrender of Indian Passport"],
//     visa: [
//       "Standard e-Visa – Single Entry",
//       "Standard e-Visa – Multiple Entry",
//       "Visa on Arrival – Single Entry",
//       "Visa on Arrival – Multiple Entry",
//       "Emergency e-Visa (2–4 hours)",
//       "Super Rush e-Visa (1–2 hours)",
//     ],
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//       ...(name === "consularCategory" && { subCategory: "" }),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted ✅", formData);
//     alert("Visa application submitted successfully!");
//   };

//   return (
//     <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 via-white to-orange-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-[#0C3C66] to-[#092847] text-white py-16 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Apply for Your Visa with Ease
//         </h1>
//         <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
//           Fast, reliable, and hassle-free visa services. Submit your details online and get professional support at every step.
//         </p>
//       </div>

//       {/* Highlights */}
//       <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
//         {[
//           { icon: <Clock className="w-10 h-10 text-[#F47C20]" />, title: "Fast Processing", desc: "Quick approval process with express options." },
//           { icon: <ShieldCheck className="w-10 h-10 text-[#F47C20]" />, title: "Secure Service", desc: "Your documents and data are 100% safe with us." },
//           { icon: <FileCheck className="w-10 h-10 text-[#F47C20]" />, title: "Trusted Experts", desc: "Handled by visa and passport professionals." },
//           { icon: <Phone className="w-10 h-10 text-[#F47C20]" />, title: "24/7 Support", desc: "Always here to assist you anytime." },
//         ].map((item, i) => (
//           <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
//             <div className="flex justify-center mb-4">{item.icon}</div>
//             <h3 className="text-lg font-semibold text-[#0C3C66] mb-2">{item.title}</h3>
//             <p className="text-gray-600 text-sm">{item.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Application Form */}
//       <div className="max-w-3xl mx-auto px-6 py-12">
//         <div className="bg-white shadow-2xl rounded-3xl p-10">
//           <h2 className="text-3xl font-extrabold text-center text-[#0C3C66] mb-8">
//             Visa Application Form
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
//                   type={
//                     field === "email" ? "email" : field === "phone" ? "tel" : "text"
//                   }
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
//                 Country for Visa <span className="text-red-500">*</span>
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

//             {/* Consular Category */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Consular Category Applied For:
//               </label>
//               <select
//                 name="consularCategory"
//                 value={formData.consularCategory}
//                 onChange={handleChange}
//                 className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
//               >
//                 <option value="">-- Select Category --</option>
//                 <option value="passport">Passport</option>
//                 <option value="oci">OCI</option>
//                 <option value="renunciation">Renunciation</option>
//                 <option value="visa">Visa Service</option>
//               </select>
//             </div>

//             {/* Sub Category */}
//             {formData.consularCategory && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Sub Categories Applied For:
//                 </label>
//                 <select
//                   name="subCategory"
//                   value={formData.subCategory}
//                   onChange={handleChange}
//                   className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
//                 >
//                   <option value="">-- Select Sub-Category --</option>
//                   {subCategoriesMap[formData.consularCategory].map((sub) => (
//                     <option
//                       key={sub}
//                       value={sub.toLowerCase().replace(/ /g, "-")}
//                     >
//                       {sub}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* Document Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Upload Your Document: <span className="text-red-500">*</span>
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
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Steps Section */}
//       <div className="bg-gray-50 py-16 px-6">
//         <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0C3C66] mb-10">
//           How It Works
//         </h2>
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//           {[
//             { step: "1", title: "Fill Out Application", desc: "Complete our simple online visa application form." },
//             { step: "2", title: "Upload Documents", desc: "Upload the required documents safely and securely." },
//             { step: "3", title: "Get Your Visa", desc: "Receive your approved visa by email quickly." },
//           ].map((s, i) => (
//             <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <div className="text-4xl font-bold text-[#F47C20] mb-4">{s.step}</div>
//               <h3 className="text-lg font-semibold text-[#0C3C66] mb-2">{s.title}</h3>
//               <p className="text-gray-600">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Contact Support */}
//       <div className="bg-gradient-to-r from-[#0C3C66] to-[#092847] text-white text-center py-12 px-6">
//         <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
//         <p className="mb-4">Our support team is available 24/7 to guide you.</p>
//         <a
//           href="tel:+911234567890"
//           className="inline-block bg-[#F47C20] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#d8660f] transition-all duration-300"
//         >
//           Call Now
//         </a>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Clock, ShieldCheck, Phone, FileCheck } from "lucide-react";
import axios from "axios";

function VisaApply() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    consularCategory: "",
    subCategory: "",
    documents: [], // multiple files
  });

  const subCategoriesMap = {
    passport: ["New Passport", "Passport Renewal", "Lost Passport", "Damaged Passport"],
    oci: ["New OCI", "OCI Renewal", "OCI Miscellaneous"],
    renunciation: ["Renunciation Certificate", "Surrender of Indian Passport"],
    visa: [
      "Standard e-Visa – Single Entry",
      "Standard e-Visa – Multiple Entry",
      "Visa on Arrival – Single Entry",
      "Visa on Arrival – Multiple Entry",
      "Emergency e-Visa (2–4 hours)",
      "Super Rush e-Visa (1–2 hours)",
    ],
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        documents: Array.from(files), // store all files
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === "consularCategory" && { subCategory: "" }),
      }));
    }
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("country", formData.country);
      data.append("consularCategory", formData.consularCategory);
      data.append("subCategory", formData.subCategory);

      // Append multiple documents
      formData.documents.forEach((file) => {
        data.append("documents", file);
      });

      const res = await axios.post("http://localhost:5000/api/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message || "Visa application submitted successfully ✅");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        consularCategory: "",
        subCategory: "",
        documents: [],
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting application");
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0C3C66] to-[#092847] text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Apply for Your Visa with Ease
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Fast, reliable, and hassle-free visa services. Submit your details
          online and get professional support at every step.
        </p>
      </div>

      {/* Highlights */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {[
          {
            icon: <Clock className="w-10 h-10 text-[#F47C20]" />,
            title: "Fast Processing",
            desc: "Quick approval process with express options.",
          },
          {
            icon: <ShieldCheck className="w-10 h-10 text-[#F47C20]" />,
            title: "Secure Service",
            desc: "Your documents and data are 100% safe with us.",
          },
          {
            icon: <FileCheck className="w-10 h-10 text-[#F47C20]" />,
            title: "Trusted Experts",
            desc: "Handled by visa and passport professionals.",
          },
          {
            icon: <Phone className="w-10 h-10 text-[#F47C20]" />,
            title: "24/7 Support",
            desc: "Always here to assist you anytime.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[#0C3C66] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Application Form */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h2 className="text-3xl font-extrabold text-center text-[#0C3C66] mb-8">
            Visa Application Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inputs */}
            {["firstName", "lastName", "phone", "email"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700">
                  {field === "firstName"
                    ? "First Name"
                    : field === "lastName"
                    ? "Last Name"
                    : field === "phone"
                    ? "Phone Number"
                    : "Email Address"}
                  {["firstName", "phone", "email"].includes(field) && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  required={["firstName", "phone", "email"].includes(field)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
                />
              </div>
            ))}

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country for Visa <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
              >
                <option value="">-- Select Country --</option>
                <option value="india">India</option>
                <option value="uk">UK</option>
              </select>
            </div>

            {/* Consular Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Consular Category Applied For:
              </label>
              <select
                name="consularCategory"
                value={formData.consularCategory}
                onChange={handleChange}
                className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
              >
                <option value="">-- Select Category --</option>
                <option value="passport">Passport</option>
                <option value="oci">OCI</option>
                <option value="renunciation">Renunciation</option>
                <option value="visa">Visa Service</option>
              </select>
            </div>

            {/* Sub Category */}
            {formData.consularCategory && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sub Categories Applied For:
                </label>
                <select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                  className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
                >
                  <option value="">-- Select Sub-Category --</option>
                  {subCategoriesMap[formData.consularCategory].map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Document Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Your Documents: <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="documents"
                multiple
                required
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                className="mt-1 w-full border hover:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20] rounded-lg px-4 py-2"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F47C20] to-[#d8660f] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-[#d8660f] hover:to-[#b55a0b] transition-all duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VisaApply;
