const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    applicationId: { type: mongoose.Schema.Types.ObjectId, ref: "Application", required: true },

    userName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },

    amount: { type: Number, required: true }, // total amount paid

    method: {
      type: String,
      enum: ["upi", "card", "netbanking"],
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },

    paymentId: { type: String, required: true }, // from payment gateway
    transactionDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
