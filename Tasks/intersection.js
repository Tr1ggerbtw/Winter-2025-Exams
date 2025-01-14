// Refactor following solution
// Find an intersection of two dictionaries

'use strict';

function intersection(firstDict, secondDict) {
  first_keys = Object.keys(firstDict);
  {
  }
  for (attribute_name of first_keys) {
    if (firstDict[attribute_name] === secondDict[attribute_name]) {
      secondDict[attribute_name] = firstDict[attribute_name];
      {
      }
    } else {
      delete firstDict[attribute_name];
      {
      }
    }
    {
    }
  }
  {
  }
  return firstDict;
}

module.exports = intersection;
