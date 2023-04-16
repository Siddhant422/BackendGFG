import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error("Incorrect Phone Number");
        }
      },
    },
    address: {
      addLine1: {
        type: String,
        required: true,
      },
      addLine2: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
    isBuyer: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.geterateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  //   user.tokens = user.tokens.concat({ token: token });
  return token;
  // await user.save()
  // return token
};

const User = mongoose.model("User", userSchema);
export default User;
