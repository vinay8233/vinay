// import mongoose from "mongoose";

// const planSchema = new mongoose.Schema({
//   category: { type: String, required: true },   // e.g. "passport"
//   citizenship: { type: String, required: true }, // e.g. "Indian"

//   subCategories: [
//     {
//       name: {
//         type: String,
//         enum: ["fresh", "renewal", "changes", "lost-damaged"],
//         required: true
//       },
//       validity: { type: String, required: true }, // e.g. "5 Years", "10 Years"
//       govtFees: { type: Number, required: true }, // Government fees
//       ourFees: { type: Number, required: true },  // Service provider fees
//       totalFees: { type: Number }                 // Auto: govtFees + ourFees
//     }
//   ],

//   plans: [
//     {
//       name: String,       // Basic / Standard / Premium
//       price: Number,
//       features: [String]  // Features list
//     }
//   ]
// });

// // Auto-calc totalFees for each subcategory
// planSchema.pre("save", function (next) {
//   this.subCategories = this.subCategories.map(sub => ({
//     ...sub.toObject?.() || sub,
//     totalFees: sub.govtFees + sub.ourFees
//   }));
//   next();
// });

// export default mongoose.model("Plan", planSchema);


// const mongoose = require("mongoose");

// const planSchema = new mongoose.Schema(
//   {
//     category: { type: String, required: true },   
//     citizenship: { type: String, required: true }, 

//     subCategories: [
//       {
//         name: {
//           type: String,
//           enum: ["fresh", "renewal", "changes", "lost-damaged"],
//           required: true,
//         },
//         validity: { type: String, required: true },
//         govtFees: { type: Number, required: true },
//         ourFees: { type: Number, required: true },
//         totalFees: { type: Number },
//       },
//     ],

//     plans: [
//       {
//         name: String,   // e.g. Basic / Standard / Premium
//         price: Number,
//         features: [String],
//       },
//     ],
//   },
//   { timestamps: true } // ✅ createdAt & updatedAt
// );

// // Auto-calc totalFees before saving
// planSchema.pre("save", function (next) {
//   this.subCategories = this.subCategories.map((sub) => ({
//     ...sub,
//     totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
//   }));
//   next();
// });

// module.exports = mongoose.model("Plan", planSchema);



// models/Plan.js
const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    citizenship: { type: String, required: true },
    visaCountry: { type: String }, // optional field for visa category

    subCategories: [
      {
        name: {
          type: String,
          enum: ["fresh", "renewal", "changes", "lost-damaged"],
          required: true,
        },
        validity: { type: String, required: true },
        govtFees: { type: Number, required: true },
        ourFees: { type: Number, required: true },
        totalFees: { type: Number },
      },
    ],

    plans: [
      {
        name: String,
        price: Number,
        features: [String],
      },
    ],
  },
  { timestamps: true }
);

// Auto-calc totalFees
planSchema.pre("save", function (next) {
  this.subCategories = this.subCategories.map((sub) => ({
    ...sub.toObject?.() || sub,
    totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
  }));
  next();
});

module.exports = mongoose.model("Plan", planSchema);
