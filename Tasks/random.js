// Refactor following solution
// Generate random integer value in given range

'use strict';

const Random = (min, max) => {
  Math.floor(Math.random() * (max - min + 1)) + Math.min(min, max);
};

module.exports = Random;
