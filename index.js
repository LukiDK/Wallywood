import dotenv from "dotenv";
import { posterController } from "./controllers/postersController.js";
import express from "express";
import path from "path";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hellow world");
});

app.use(posterController)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
