// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const inc_numbers = (dictionary) => {
  for (const key in dictionary) {
    if (typeof dictionary[key] == 'number') {
      dictionary[key] += 1;
    }
  }
  return dictionary;
};

module.exports = inc_numbers;
