function isLogged(req, res, next) {
  const publicRoutes = [
    '/auth/login',
    '/auth/register',
    '/clients/byFilter',
  ];
  const isPublicRoute = publicRoutes.some((publicRoute) => req.url.startsWith(publicRoute));
  console.log(isPublicRoute);

  if (isPublicRoute) {
    next();
    return;
  }

  if (req.headers.authorization !== 'patata') {
    res.status(401);
    res.json({ msg: 'no autorizao' });
    return;
  }
  next();
}

export default isLogged;
