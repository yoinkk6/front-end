const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '10d' });
}

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
}

const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
}

const isValidPassword = (password) =>  {
  const capitalLettersPattern = /[A-Z]/
  const smallLettersPattern = /[A-Z]/
  const specialCharacterpattern = /[@#$%^&-+=*]/
  if (password.length < 8) {
    return { result: false, error: 'Password should atleast be 8 characters long' }
  }
  if (!capitalLettersPattern.test(password)) {
    return { result: false, error: 'Password must contain a capital letter' }
  } 
  if (!smallLettersPattern.test(password)) {
    return { result: false, error: 'Password must contain a small letter' }
  } 
  if (!specialCharacterpattern.test(password)) {
    return { result: false, error: 'Password must contain a special character' }
  } 
  return { result: true, error: 'none' };
}

module.exports = { createToken, hashPassword, isValidPassword, verifyPassword }