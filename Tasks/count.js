// Refactor following solution
// Sum all number values in dict

'use strict';
const count = (obj) => {
  return Object.values(obj)
    .filter((value) => typeof value === 'number')
    .reduce((sum, value) => sum + value, 0);
};

module.exports = count;
