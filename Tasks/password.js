// Refactor following solution
// Generate random password

'use strict';
const generatePassword = (char, length) => {
  const MAX = char.length;
  key = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * MAX);
    key = key + char[Index];
  }
  return key;
};

module.exports = generatePassword;
