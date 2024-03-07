const mongoose = require("mongoose");

const chatschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, , "Name is required"],
    },
    groupChat: {
      type: Boolean,
      required: [false, "Username is required"],
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    members: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const chatModel = mongoose.model("chat", chatschema);

module.exports = chatModel;
