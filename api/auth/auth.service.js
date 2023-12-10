import * as usersRepository from '../users/users.repository.js';

async function register({ username, password }) {
  await usersRepository.create({ username, password });
  const token = 'patata';
  return token;
}

async function login({ username, password }) {
  const user = await usersRepository.getByUsername({ username });
  let token;

  if (user && user.password === password) {
    token = 'patata';
  }
  return token;
}

export { register, login };
