import dotenv from "dotenv";
import express from "express";
import { posterController } from "./controllers/postersController.js";
import { genreController } from "./controllers/genresController.js";
import { cartlineController } from "./controllers/cartlineController.js";
import { userProfileController } from "./controllers/user_profilesController.js";
import { userRatingController } from "./controllers/user_ratingController.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hellow world");
});

app.use(posterController);
app.use(genreController);
app.use(cartlineController);
app.use(userProfileController);
app.use(userRatingController);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
