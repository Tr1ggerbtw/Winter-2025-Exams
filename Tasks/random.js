// Refactor following solution
// Generate random integer value in given range

'use strict';

const randomValue = (min, max = min) => {
  Math.floor(Math.random() * (max - min + 1)) + Math.min(min, max);
};

module.exports = randomValue;
