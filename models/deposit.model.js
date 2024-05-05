import mongoose from "mongoose";

const DepositSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
      required: "amount is required",
    },
    approvedDate: {
      type: Date,
    },
    reason: {
      type: String,
      required: "Procedure is needed",
    },
    status: {
      type: String,
      enum: ["pending", "approved"],
      default: "pending",
    },
    coin: {
      type: String,
      required: "coin symbol is needed",
    },
    transactionId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Deposit =
  mongoose.models.Deposit || mongoose.model("Deposit", DepositSchema);

export default Deposit;
