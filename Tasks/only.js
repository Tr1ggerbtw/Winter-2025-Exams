// Refactor following solution
// Copy only listed values from dict

'use strict';

const listedValues = (dict, ...valuesToCopy) => {
  const result = {}; // Create an empty object to store the result
  for (const value of valuesToCopy) {
    if (value in dict) {
      result[value] = dict[value];
    }
  }
  return result;
};

module.exports = listedValues;
