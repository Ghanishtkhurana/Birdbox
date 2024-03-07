const mongoose = require("mongoose");
const { stringify } = require("uuid");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, , "Name is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
        unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
