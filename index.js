import dotenv from "dotenv";
import { posterController } from "./controllers/postersController.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/posters1", async (req, res) => {
    try {
        const posters = await posterController.getAllPosters();
        res.render("posters", { posters: posters });
    } catch (error) {
        res.status(500).send("Error retrieving posters");
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
