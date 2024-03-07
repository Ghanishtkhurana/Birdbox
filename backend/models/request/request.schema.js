const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    recevier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chat",
      required: true,
    },
  },
  { timestamps: true }
);

const requestModel = mongoose.model("request", requestSchema);

module.exports = requestModel;
