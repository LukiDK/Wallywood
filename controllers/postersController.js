import express from "express";
import { PostersModel } from "../models/postersModel.js";

export const posterController = express.Router();

posterController.get("/poster", async (req, res) => {
  try {
    const data = await PostersModel.getAllRecords();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

posterController.post("/poster", async (req, res) => {
  const data = await PostersModel.createRecord(req.body);
  res.send(data);
});

posterController.get("/poster/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await PostersModel.getRecordById(req.params.id);
  res.send(single);
});

posterController.put("/poster", async (req, res) => {
  const data = await PostersModel.updateRecord(req.body);
  res.send(data);
});

posterController.delete("/poster", async (req, res) => {
  const data = await PostersModel.deleteRecord(req.body);
  res.send(data);
});
