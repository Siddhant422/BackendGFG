import express from "express";
import User from "../models/userModel.js";

const app = express();
const router = new express.Router();

// @desc    User Signup
// @route   POST /signup
// @access  User

const signUp = async (req, res) => {
  console.log(1)
  const user = new User(req.body);
  await user
    .save()
    .then(async () => {
      const token = await user.geterateAuthToken();
      res.send({ user, token }).status(200);
    })
    .catch((e) => {
      console.log(e);
      res.send(e.message).status(401);
    });
};

// @desc    User LogIn
// @route   POST /login
// @access  User

const logIn = async (req, res) => {
  try {
    const user = await User.findOne({ phoneNo: req.body.phoneNo });
    const token = await user.geterateAuthToken();
    res.send({ user, token }).status(200);
  } catch (e) {
    res.status(404).send("User Not Found");
  }
};

// @desc    User Logout
// @route   POST /logout
// @access  User

const logOut = async (req, res, next) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send("Successfully Logged Out");
  } catch (e) {
    res.status(500).send(e);
  }
};

export { signUp, logIn, logOut };
