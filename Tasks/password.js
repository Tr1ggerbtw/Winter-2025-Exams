// Refactor following solution
// Generate random password

'use strict';
const generatePassword = (char, length) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += char[Math.floor(Math.random() * char.length)];
  }
  return password;
};

module.exports = generatePassword;
