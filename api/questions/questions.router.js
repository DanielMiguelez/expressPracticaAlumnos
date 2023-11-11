import Router from "express";
import db from "./questions.js";
import {getRandom} from './questions.controller.js';
//import * as questionsController from './questions.controller.js';
const router = Router();

router.get("/random", getRandom);

router.get("/byIndex/:index", (req, res) => {
  const { index } = req.params;
  const indexAsInt = parseInt(index);
  const question = db[indexAsInt];

  if (indexAsInt >= db.length - 1) {
    res.json({ error: "indice no permitido" });
  }
  res.json(question);
});

router.get("/byFilter", (req, res) => {
  const { query } = req;
  console.log("query", query);
  let dbCopy = [...db];

  const keys = Object.keys(query); // [category , level]
  console.log("keys", keys);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = query[key];
    dbCopy = dbCopy.filter((question) => question[key] === value);
  }
  res.json(dbCopy);
});

router.post("/create", (req, res) => {
  const { body } = req;
  db.push(body);
  console.log(body);
  res.json(body);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id);
  const deleted = db.splice(index, 1);
  res.json(deleted);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id);

  if (index === -1) {
    res.json({ msg: "el indice no existe" });
  }
  const { body } = req;
  const { _id } = db[index];
  db[index] = { ...body, _id };
  res.json(db[index]);
});

router.patch("/:id" , (req,res) => {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id);
  if (index === -1) {
    res.json({ message: "el indice no existe" });
  }
  const { body } = req;
  db[index] = { ...db[index], ...body, _id: db[index]._id };
  res.json(db[index]);
});
export default router;
