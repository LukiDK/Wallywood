import express from "express";
import { CartlineModel } from "../models/cartlineModel.js";

export const cartlineController = express.Router();

cartlineController.get("/cartlines", async (req, res) => {
  let poster = await CartlineModel.getAllRecords();

  res.send(console.log(poster));
});

cartlineController.post("/cartlines", async (req, res) => {
  const data = await CartlineModel.createRecord(req.body);
  res.send(data);
});

cartlineController.get("/cartlines/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await CartlineModel.getRecordById(req.params.id);
  res.send(single);
});

cartlineController.put("/cartlines", async (req, res) => {
  const data = await CartlineModel.updateRecord(req.body);
  res.send(data);
});

cartlineController.delete("/cartlines", async (req, res) => {
  const data = await CartlineModel.deleteRecord(req.body);
  res.send(data);
});
