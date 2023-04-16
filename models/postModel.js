const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    msg: {
      type: String,
      required: true,
    },
    uid: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User",
    }

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
