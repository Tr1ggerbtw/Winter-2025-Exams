// Refactor following solution
// Generate random password

'use strict';
const generatePassword = (char, length) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * char.length);
    password = password + char[Index];
  }
  return password;
};

module.exports = generatePassword;
