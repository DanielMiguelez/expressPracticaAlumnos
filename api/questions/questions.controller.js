import * as questionService from './questions.service.js';

function getRandom(req, res) {
  const randomQuestion = questionService.getRandom();
  res.json(randomQuestion);
}
export { getRandom };
