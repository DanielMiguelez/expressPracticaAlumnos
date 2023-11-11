import * as questionRepository from './questions.repository.js';

function getRandom() {
  const index = Math.floor(Math.random() * questionRepository.getLength());
  const question = questionRepository.getByIndex({ index });
  return question;
}

export { getRandom };
