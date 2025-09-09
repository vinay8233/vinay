// import mongoose from "mongoose";

// const ApplicationSchema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: true },
//     lastName: { type: String },
//     phone: { type: String, required: true },
//     email: { type: String, required: true },
//     country: { type: String, required: true },
//     consularCategory: { type: String },
//     subCategory: { type: String },
//     documents: [{ type: String }], // store file paths / URLs
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Application", ApplicationSchema);


// const mongoose = require("mongoose");

// const applicationSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String },
//   phone: { type: String, required: true },
//   email: { type: String, required: true },
//   country: { type: String },
//   consularCategory: { type: String },
//   subCategory: { type: String },
//   documents: [String], // store file paths
// }, { timestamps: true });

// module.exports = mongoose.model("Application", applicationSchema);




// models/Application.js
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", required: true },

    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    passportNo: { type: String },

    // Auto-filled from Plan
    category: { type: String, required: true },
    citizenship: { type: String, required: true },
    visaCountry: { type: String },
    subCategory: { type: String, required: true },

    paymentAmount: { type: Number, required: true }, // ✅ store payment fees

    documents: [String], // uploaded files if needed
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
