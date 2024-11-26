import express from "express";
import { UserProfilesModel } from "../models/user_profilesModel.js";

export const userProfileController = express.Router();

userProfileController.get("/user", async (req, res) => {
  let userProfiles = await UserProfilesModel.getAllRecords();

  res.send(console.log(userProfiles));
});

userProfileController.post("/user", async (req, res) => {
  const data = await UserProfilesModel.createRecord(req.body);
  res.send(data);
});

userProfileController.get("/user/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await UserProfilesModel.getRecordById(req.params.id);
  res.send(single);
});

userProfileController.put("/user", async (req, res) => {
  const data = await UserProfilesModel.updateRecord(req.body);
  res.send(data);
});

userProfileController.delete("/user", async (req, res) => {
  const data = await UserProfilesModel.deleteRecord(req.body);
  res.send(data);
});
