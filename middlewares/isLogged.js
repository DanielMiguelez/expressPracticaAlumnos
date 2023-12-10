import jwt from 'jsonwebtoken';

function unauthorized(res) {
  res.status(401);
  res.json({ msg: 'no autorizao' });
}

function isLogged(req, res, next) {
  const publicRoutes = ['/auth/login', '/auth/register', '/clients/byFilter'];
  const isPublicRoute = publicRoutes.some((publicRoute) =>
    req.url.startsWith(publicRoute)
  );
  console.log(isPublicRoute);

  if (isPublicRoute) {
    next();
    return;
  }

  const token = req.headers.authorization;

  if (!token) {
    unauthorized(res);
    return;
  }

  const secretWord = 'isASecret';

  jwt.verify(token, secretWord, (error, payload) => {
    if (error) {
      console.error('jwt error');
      unauthorized(res);
      return;
    }

    console.log(payload);
  });

  next();
}

export default isLogged;
