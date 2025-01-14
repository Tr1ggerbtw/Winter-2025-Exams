// Refactor following solution
// Sum all number values in dict

'use strict';
const count = (obj) => {
  const keys = Object.keys(obj);
  return keys.reduce((sum, key) => {
    const value = obj[key];
    return typeof value === 'number' ? sum + value : sum;
  }, 0);
};

module.exports = count;
