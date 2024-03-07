const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    attachment: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chat",
      required: true,
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("message", messageSchema);

module.exports = messageModel;
