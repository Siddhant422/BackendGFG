import express from "express"
import dotenv from "dotenv"
const app = express();
import userRoutes from "./routes/user.js";
import mongoose from "./db/mongoose.js";
import morgan from "morgan";
app.use(express.json());
dotenv.config({ path: "./config.env" });
app.use(morgan("dev"))

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
