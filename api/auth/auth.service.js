import * as usersRepository from '../users/users.repository.js';
import { hashSync, compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

function getToken(userId) {
  const payload = {
    userId,
  };
  const secretWord = 'isASecret';
  const options = {
    expiresIn: 60 * 60, // '1h'
  };
  const token = jwt.sign(payload, secretWord, options);
  return token;
}

async function register({ username, password }) {
  const hashedPassword = hashSync(password, 10);
  console.log(hashedPassword);

  const user = await usersRepository.create({
    username,
    password: hashedPassword,
  });
  const token = getToken(user._id);
  return token;
}

async function login({ username, password }) {
  const user = await usersRepository.getByUsername({ username });
  let token;

  if (user && compareSync(password, user.password)) {
    token = getToken(user._id);
  }
  return token;
}

export { register, login };
