import Router from 'express';
import db from './questions.js';

const router = Router();

router.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * db.length);
  const randomQuestion = db[randomIndex];
  res.json(randomQuestion);
});

router.get('/byIndex/:index', (req, res) => {
  const { index } = req.params;
  const indexAsInt = parseInt(index);
  const question = db[indexAsInt];

  if (indexAsInt >= db.length - 1) {
    res.json({ error: 'indice no permitido' });
  }
  res.json(question);
});

router.get('/byFilter', (req, res) => {
  const { query } = req;
  console.log('query', query);
  let dbCopy = [...db];

  const keys = Object.keys(query); // [category , level]
  console.log('keys', keys);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = query[key];
    dbCopy = dbCopy.filter((question) => question[key] === value);
  }
  res.json(dbCopy);
});

router.post('/create', (req, res) => {
  const { body } = req;
  db.push(body);
  console.log(body);
  res.json(body);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
 const index = db.findIndex((question)=> question._id === id);
 const deleted = db.splice(index, 1);
 res.json(deleted);
 });

export default router;
