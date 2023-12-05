import Router from 'express';
import db from './questions.js';

const router = Router();

router.get('/random', (re, res) => {
  const randomIndex = Math.floor(Math.random() * db.length);
  const randomQuestion = db[randomIndex];
  res.json(randomQuestion);
});

router.get('/byIndex/:index', (req, res) => {
  const { index } = req.params;
  const indexAsInt = parseInt(index, 10);
  const question = db[indexAsInt];
  if (indexAsInt >= db.length - 1) {
    res.json({ error: 'indice no permitido' });
  }
  res.json(question);
});

router.get('/byFilter', (req, res) => {
  const { query } = req;
  let dbCopy = [...db]; // query == {category:html, level:easy}

  const keys = Object.keys(query); //[category , level]

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = query[key];
    dbCopy = dbCopy.filter((question) => question[key] === value);
  }
  res.json(dbCopy);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id);
  const deleted = db.splice(index, 1);
  res.json({ deleted });
});
export default router;
