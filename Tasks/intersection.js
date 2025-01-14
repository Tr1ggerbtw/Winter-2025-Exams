// Refactor following solution
// Find an intersection of two dictionaries

'use strict';

function intersection(firstDict, secondDict) {
  const result = {};
  for (const key of Object.keys(firstDict)) {
    if (firstDict[key] === secondDict[key]) {
      result[key] = firstDict[key];
    }
  }
  return result;
}

module.exports = intersection;
