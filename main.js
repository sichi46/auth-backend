import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRouter from "./auth/route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json);
// app.use(cors());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
