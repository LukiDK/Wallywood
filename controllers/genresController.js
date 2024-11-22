import express from "express";
import { GenreModel } from "../models/genresModel.js";

export const genreController = express.Router();

genreController.get("/genres", async (req, res) => {
  let poster = await GenreModel.getAllRecords();

  res.send(console.log(poster));
});

genreController.post("/genres", async (req, res) => {
  const data = await GenreModel.createRecord(req.body);
  res.send(data);
});

genreController.get("/genres/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await GenreModel.getRecordById(req.params.id);
  res.send(single);
});

genreController.put("/genres", async (req, res) => {
  const data = await GenreModel.updateRecord(req.body);
  res.send(data);
});

genreController.delete("/genres", async (req, res) => {
  const data = await GenreModel.deleteRecord(req.body);
  res.send(data);
});
