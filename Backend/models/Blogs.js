// const mongoose = require("mongoose");

// const blogSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true, trim: true },
//     slug: { type: String, unique: true, lowercase: true, trim: true },
//     description: { type: String, required: true },
//     content: { type: String, required: true },
//     author: { type: String, default: "Admin" },
//     category: { type: String, required: true },
//     tags: [{ type: String }],
//     image: { type: String },
//     gallery: [{ type: String }],
//     likes: { type: Number, default: 0 },
//     views: { type: Number, default: 0 },
//     comments: [
//       {
//         user: { type: String, required: true },
//         message: { type: String, required: true },
//         date: { type: Date, default: Date.now },
//       },
//     ],
//     seo: {
//       metaTitle: { type: String },
//       metaDescription: { type: String },
//       keywords: [{ type: String }],
//     },
//     status: { type: String, enum: ["draft", "published"], default: "draft" },
//     date: { type: Date, default: Date.now },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Blog", blogSchema);





const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, lowercase: true, trim: true },
    description: { type: String, required: true, trim: true },
    content: { type: String, required: true },

    author: { type: String, default: "Admin" },
    category: { type: String, required: true },
    tags: [{ type: String }],

    image: { type: String }, // main thumbnail
    gallery: [{ type: String }], // multiple images

    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },

    comments: [
      {
        user: { type: String, required: true },
        message: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],

    seo: {
      metaTitle: { type: String, trim: true },
      metaDescription: { type: String, trim: true },
      keywords: [{ type: String }],
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
