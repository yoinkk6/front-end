const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { createToken, hashPassword, isValidPassword, verifyPassword } = require('../functions/auth')

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (verifyPassword(password, user.password)) {
      const token = createToken(user._id);
      res.status(200).json({ message: 'Success', token })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const { result, error } = isValidPassword(password)
    if (result) {
      const hashedPassword = await hashPassword(password);
      const user = await User.create({ username, password: hashedPassword });
      const token = createToken(user._id);
      res.status(200).json({ message: 'Success', token });
    } else {
      res.status(401).json({ message: error });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;