const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const { token } = req.body;
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
      if (error) {
        res.status(400).json({ message: 'Invalid Token' });
      }
      req._id = user.id;
      next()
    })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

module.exports = { auth };