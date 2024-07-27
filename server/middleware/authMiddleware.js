const jwt = require('jsonwebtoken');
const ENV = require('../config.js');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    req.user = decoded; // Attach user information to the request object for further handling
    next(); // Call next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
