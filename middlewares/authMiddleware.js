const jwt = require('jsonwebtoken');

const JWT_SECRET = '4c0d608098b78d61cf5654965dab8b53632bf831dc6b43f29289411376ac107b';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

module.exports = authMiddleware;
