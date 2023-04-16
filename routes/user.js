import express from "express";
import { logIn, logOut, signUp } from "../controllers/user.js"
const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(logIn);
router.route("/logout").post(logOut);

export default router;
