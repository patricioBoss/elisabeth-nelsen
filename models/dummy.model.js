import mongoose from "mongoose";

const DummySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "first name is required",
    },
    lastName: {
      type: String,
      trim: true,
      required: "last name is required",
    },
    amount: {
      type: Number,
    },
    coin: {
      type: String,
    },
    approvedAt: {
      type: Date,
    },
    type: {
      type: String,
      enum: ["investment", "withdrawal"],
    },
  },
  {
    timestamps: true,
  }
);

const Dummy = mongoose.models.Dummy || mongoose.model("Dummy", DummySchema);

export default Dummy;
