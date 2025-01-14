// Refactor following solution
// Copy only listed values from dict

'use strict';

const listedValues = (dict, ...valuesToCopy) => {
  const W = {};
  valuesToCopy.forEach((value) => {
    if (value in dict) {
      W[value] = dict[value];
    }
  });
  return W;
};

module.exports = listedValues;
