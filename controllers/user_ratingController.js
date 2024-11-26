import express from "express";
import { UserRatingModel } from "../models/user_ratingModel.js";

export const userRatingController = express.Router();

userRatingController.get("/rating", async (req, res) => {
  let userProfiles = await UserRatingModel.getAllRecords();

  res.send(console.log(userProfiles));
});

userRatingController.post("/rating", async (req, res) => {
  const data = await UserRatingModel.createRecord(req.body);
  res.send(data);
});

userRatingController.get("/rating/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await UserRatingModel.getRecordById(req.params.id);
  res.send(single);
});

userRatingController.put("/rating", async (req, res) => {
  const data = await UserRatingModel.updateRecord(req.body);
  res.send(data);
});

userRatingController.delete("/rating", async (req, res) => {
  const data = await UserRatingModel.deleteRecord(req.body);
  res.send(data);
});
